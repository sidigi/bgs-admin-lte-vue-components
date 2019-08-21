<template>
  <div id="app">
    <bgs-widget-payment-by-contract-expire
      :employees="employees"
      :loader="loader"
      :card="card"
      @bgs-widget-stats-item-click="itemClick"
      @bgs-widget-stats-collapse="collapse"
      @bgs-widget-stats-employee-card-click="cardClick"
      @bgs-widget-stats-refresh="refresh"
    ></bgs-widget-payment-by-contract-expire>
  </div>
</template>

<script>
import axios from "axios";

let token = "";

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default {
  name: "app",

  data() {
    return {
      card: null,
      employees: {
        items: []
      },
      loader: false,
      date: new Date().toISOString().split("T")[0],
      userId: 1
    };
  },

  async mounted() {
    await this.load();
  },

  methods: {
    itemClick() {},
    collapse() {},
    cardClick() {},
    error(message) {
      this.card = {
        header: `Error: ${message}`,
        type: "error"
      };
    },
    refresh() {
      this.load();
    },
    async load() {
      this.loader = true;

      try {
        let response = await axios.get(
          `http://bgs-auth.local/api/widget/payment-by-contract-expire/${this.userId}`,
          {
            params: {
              "filter[paid]": false,
              "filter[date_of_payment_by_contract_before]": this.date
            }
          }
        );

        if (response.status === 200) {
          let { card, items } = response.data.data;
          this.employees.items = items;

          if (card) {
            this.card = {
              header: card.value,
              subheader: "Total overdue sum",
              type: card.value ? "danger" : null
            };
          }
        }
      } catch (error) {
        this.error(error.response.statusText);
      }

      this.loader = false;
    }
  }
};
</script>