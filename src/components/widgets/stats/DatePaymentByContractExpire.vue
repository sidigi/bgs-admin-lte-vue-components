<template>
  <bgs-widget-stats-card
    :showTree="showTree"
    :header="employees.header"
    :subheader="employees.subheader"
    :loader="loader"
    class="col-xs-12 col-sm-4 col-md-3"
  >
    <template v-slot:employee-card v-if="card && !loader">
      <bgs-widget-stats-employee-card :header="card.header" :link="card.link" :class="cardClass">
        <template v-slot:subheader v-if="card.subheader">
          <p>{{ card.subheader }}</p>
        </template>
      </bgs-widget-stats-employee-card>
    </template>

    <template v-slot:buttons>
      <span
        role="button"
        title="Refresh"
        class="info-box-toolbar-button hover-translucent employee-statistics-refresh-button"
        @click.prevent="$emit('bgs-widget-stats-refresh')"
      >
        <i class="fa fa-refresh"></i>
      </span>
    </template>

    <template v-if="employees.items.length">
      <bgs-widget-stats-employees :items="employees.items"></bgs-widget-stats-employees>
    </template>
  </bgs-widget-stats-card>
</template>

<script>
export default {
  props: {
    employees: {
      type: [Object]
    },
    card: {
      type: [Object]
    },
    loader: {
      type: [Boolean],
      default: false
    }
  },

  computed: {
    showTree() {
      return Boolean(this.employees.items.length);
    },
    cardClass() {
      if (this.card.type === "error" || this.card.type === "danger") {
        return ["bg-maroon"];
      }

      return ["bg-green"];
    }
  },

  mounted() {
    this.$bgsComponentsEventBus.$on("_bgs-widget-stats-item-click", payLoad => {
      this.$emit("bgs-widget-stats-item-click", payLoad);
    });

    this.$bgsComponentsEventBus.$on("_bgs-widget-stats-collapse", payLoad => {
      this.$emit("bgs-widget-stats-collapse", payLoad);
    });

    this.$bgsComponentsEventBus.$on(
      "_bgs-widget-stats-employee-card-click",
      payLoad => {
        this.$emit("bgs-widget-stats-employee-card-click", payLoad);
      }
    );
  }
};
</script>