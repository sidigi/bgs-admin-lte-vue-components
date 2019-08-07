<template>
  <div class="employees-list" v-if="items && items.length">
    <template v-for="item in items">
      <bgs-widget-stats-employee-list :key="item.id" :item="item"></bgs-widget-stats-employee-list>
    </template>
  </div>
</template>

<script>
import BgsWidgetStatsEmployeeList from "./List";

export default {
  props: {
    items: {
      type: [Array],
      default: []
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
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
}
</style>