<template>
  <bgs-widget-stats-card
    :showTree="showTree"
    :lineClass="cardClass"
    :header="employees.header"
    :subheader="employees.subheader"
    :loader="loader"
  >
    <template v-slot:employee-card v-if="card && !loader">
      <bgs-widget-stats-employee-card
        :header="card.header"
        :link="card.link"
        :class="cardClass"
        @card-click="cardClick"
      >
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
      <bgs-widget-stats-employees
        :items="employees.items"
        @item-click="itemClick"
        @item-collapse="itemCollapse"
      ></bgs-widget-stats-employees>
    </template>
  </bgs-widget-stats-card>
</template>

<script>
export default {
  props: {
    employees: {
      type: [Object],
    },
    card: {
      type: [Object],
    },
    loader: {
      type: [Boolean],
      default: false,
    },
  },

  methods: {
    itemClick(item) {
      this.$emit("bgs-widget-stats-item-click", item);
    },
    itemCollapse(value, item) {
      this.$emit("bgs-widget-stats-item-collapse", value, item);
    },
    cardClick(e) {
      this.$emit("bgs-widget-stats-employee-card-click", e);
    },
  },

  computed: {
    showTree() {
      return Boolean(this.employees.items.length);
    },
    cardClass() {
      if (this.card.type === "red") {
        return ["bg-red"];
      }

      if (this.card.type === "error" || this.card.type === "danger") {
        return ["bg-maroon"];
      }

      if (this.card.type === "warning") {
        return ["bg-yellow"];
      }

      return ["bg-green"];
    },
  },
};
</script>
