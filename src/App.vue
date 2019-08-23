<template>
  <div id="app">
    <div>
      <bgs-widget-payment-by-contract-expire
        :employees="employees"
        :loader="widgetLoader"
        :card="card"
        @bgs-widget-stats-item-click="itemClick"
        @bgs-widget-stats-employee-card-click="cardClick"
        @bgs-widget-stats-refresh="refresh"
      ></bgs-widget-payment-by-contract-expire>
    </div>

    <bgs-ui-modal
      :clsBtn="true"
      v-show="employeeModalShow"
      @modal-close="employeeModalShow = !employeeModalShow"
    >
      <template v-slot:header>
        <div class="flexbox flex-center flexgap-3">
          <div
            class="flex-align-flexstart img-circle icon shadow-light display-block avatar"
            :style="`background: url(${table.manager.avatar}) no-repeat center/cover`"
          ></div>
          <div class="flex-1 font-large text-grey">{{table.manager.name}}</div>
        </div>
      </template>
      <bgs-ui-data-table :header="table.header" :headers="table.headers" :items="table.items">
        <template slot="items" slot-scope="{item}">
          <td>{{item.id}}</td>
          <td>
            <a
              href="#"
              @click.prevent="employeeModalPaymentsShow = true"
            >{{item.sale.participant.name}}</a>
          </td>
          <td>{{item.sale.event.name}}</td>
          <td>{{item.have_to_pay_calc | moneyFormat}}</td>
          <td>{{item.date_of_payment_by_contract | dateFormat}}</td>
          <td>{{delayedDays(item.date_of_payment_by_contract)}}</td>
        </template>
      </bgs-ui-data-table>
    </bgs-ui-modal>

    <!-- Если нужна вторая модалка -->
    <bgs-ui-modal
      :clsBtn="true"
      v-show="employeeModalPaymentsShow"
      @modal-close="employeeModalPaymentsShow = !employeeModalPaymentsShow"
    >Modal 2</bgs-ui-modal>

    <bgs-ui-loader v-if="globalLoader"></bgs-ui-loader>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    //from what date calc
    const date = this.addDays(new Date(), 0)
      .toISOString()
      .split("T")[0];

    //axios
    const token = "";

    const apiAxios = axios.create();
    apiAxios.defaults.headers.common = { Authorization: `Bearer ${token}` };

    const userId = 1;
    return {
      axios: apiAxios,
      date: date,

      widgetUrl: `http://bgs-auth.local/api/widget/payment-by-contract-expire/${userId}`,
      widgetParams: {
        "filter[paid]": false,
        "filter[date_of_payment_by_contract_before]": date
      },
      employeeDetailUrl: "http://bgs-auth.local/api/sale-payments",
      employeeDetailParams: {
        "filter[paid]": false,
        "filter[date_of_payment_by_contract_before]": date,
        include: "sale.event,sale.participant,sale.company"
      },

      globalLoader: false,
      widgetLoader: false,
      employeeModalShow: false,
      employeeModalPaymentsShow: false,

      employee: {},

      table: {
        headers: [
          {
            text: "Sale Id"
          },
          {
            text: "Participant"
          },
          {
            text: "Event"
          },
          {
            text: "Value"
          },
          {
            text: "Date of payment by contract"
          },
          {
            text: "Delayed days"
          }
        ],
        items: [],
        manager: {}
      },

      card: {
        header: null,
        subheader: "Total overdue sum",
        type: "danger"
      },

      employees: {
        items: []
      }
    };
  },

  async mounted() {
    await this.load();
  },

  methods: {
    async itemClick(item) {
      this.table.manager = item;
      await this.loadDetailEmployeeData(item);
      this.employeeModalShow = true;
    },

    async cardClick(item) {
      this.table.manager = this.employee;
      await this.loadDetailEmployeeData(this.employee);
      this.employeeModalShow = true;
    },

    error(message) {
      this.card = {
        header: `Error: ${message}`,
        type: "error"
      };
    },

    refresh() {
      this.load();
    },

    async loadDetailEmployeeData({ id }) {
      this.globalLoader = true;

      try {
        const response = await this.axios.get(this.employeeDetailUrl, {
          params: Object.assign(this.employeeDetailParams, {
            "filter[manager_id]": id
          })
        });

        if (response.status === 200) {
          this.table.items = response.data.data;
        }
      } catch (error) {
        console.error(error);
      }

      this.globalLoader = false;
    },

    async load() {
      this.widgetLoader = true;

      try {
        let response = await this.axios.get(this.widgetUrl, {
          params: this.widgetParams
        });

        if (response.status === 200) {
          let { card, items, employee } = response.data.data;

          this.employee = employee;
          this.employees.items = items;
          this.card.header = card.value;
        }
      } catch (error) {
        console.error(error);
        if (error.response.statusText) {
          this.error(error.response.statusText);
        }
      }

      this.widgetLoader = false;
    },

    addDays(date, days) {
      const copy = new Date(Number(date));
      copy.setDate(date.getDate() + days);
      return copy;
    },

    delayedDays(value) {
      var res = Math.abs(new Date(value) - new Date(this.date)) / 1000;
      return Math.floor(res / 86400);
    }
  },
  filters: {
    dateFormat(value) {
      return new Date(value).toJSON().slice(0, 10);
    },
    moneyFormat(value) {
      var formatter = new Intl.NumberFormat("en-US");
      return formatter.format(value) + " £";
    }
  }
};
</script>

<style>
.text-grey {
  color: #bbb;
}
.font-large {
  font-size: large;
  line-height: 1;
}
.avatar {
  width: 55px;
  height: 55px;
}
</style>