<template>
  <div class="small-box">
    <div class="inner">
      <h3 v-if="isNumeric(header)">{{header | formatNumber}}</h3>
      <h3 v-else>{{ header }}</h3>
      <slot name="subheader"></slot>
    </div>

    <div class="icon" v-if="icon">
      <i class="ion" :class="iconClass"></i>
    </div>

    <a :href="link.href" class="small-box-footer" @click="click">
      {{ link.title || 'More info'}}
      <i class="fa fa-arrow-circle-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: [Number, String],
      default: ""
    },
    icon: {
      type: [String],
      default: null
    },
    link: {
      type: [Object],
      default() {
        return {
          title: "More info"
        };
      }
    }
  },

  computed: {
    iconClass() {
      if (this.icon) {
        return "ion-" + this.icon;
      }

      return "";
    }
  },

  methods: {
    isNumeric(obj) {
      return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
    },
    click(e) {
      this.$bgsComponentsEventBus.$emit(
        "_bgs-widget-stats-employee-card-click",
        e
      );
      this.$emit("bgs-widget-stats-employee-card-click", e);
    }
  },

  filters: {
    formatNumber(val) {
      const formatter = new Intl.NumberFormat("ru-RU");

      return formatter.format(val);
    }
  }
};
</script>

<style scoped>
.small-box {
  margin-bottom: 0;
}
.small-box-footer {
  cursor: pointer;
}
</style>