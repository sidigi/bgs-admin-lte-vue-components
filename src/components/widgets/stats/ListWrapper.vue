<template>
  <div class="employees-list" v-if="items && items.length">
    <template v-for="item in items">
      <bgs-widget-stats-employee-list
        :key="item.id"
        :item="item"
        @item-click="itemClick"
        @item-collapse="itemCollapse"
      ></bgs-widget-stats-employee-list>
    </template>
  </div>
</template>

<script>
import BgsWidgetStatsEmployeeList from "./List";

export default {
  props: {
    items: {
      type: [Array],
      default: () => {
        return [];
      }
    }
  },
  methods: {
    itemClick(item) {
      if (!(Object.entries(item).length === 0 && item.constructor === Object)) {
        this.$emit("item-click", item);
      }
    },
    itemCollapse(value, item) {
      this.$emit("item-collapse", value, item);
    }
  },
  components: {
    BgsWidgetStatsEmployeeList
  }
};
</script>

<style>
.employees-list {
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-left: 20px;
}
</style>