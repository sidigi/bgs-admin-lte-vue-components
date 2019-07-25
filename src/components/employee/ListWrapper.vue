<template>
  <div class="employees-list">
    <template v-for="item in items">
      <bgs-employee-list :key="item.id" :item="item" @item-click="clicked"></bgs-employee-list>
    </template>
  </div>
</template>

<script>
import BgsEmployeeList from "./List";

export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    clicked(value) {
      this.$emit("employee-click", value);
    }
  },

  components: {
    BgsEmployeeList
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