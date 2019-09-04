<template>
  <div>
    <bgs-widget-stats-employee-info
      v-if="item.items"
      :isParent="!! item.items.length"
      :avatar="item.avatar"
      :name="item.name"
      :data="item.data"
      :collapsed_data="item.collapsed_data"
      :collapsed="item.collapsed"
      :active="item.active"
      @item-collapse="itemCollapse(item, $event)"
      @item-click="itemClick(item, false)"
    ></bgs-widget-stats-employee-info>

    <transition v-if="item.items" name="fadeHeight" mode="out-in">
      <div class="employees-list" v-show="item.collapsed">
        <bgs-widget-stats-employee-list
          v-for="item in item.items"
          :key="item.id"
          :item="item"
          @item-click="itemClick(item)"
          @item-collapse="itemCollapse(item, $event)"
        ></bgs-widget-stats-employee-list>
      </div>
    </transition>

    <bgs-widget-stats-employee-info
      v-else
      :avatar="item.avatar"
      :name="item.name"
      :data="item.data"
      :collapsed_data="item.collapsed_data"
      :active="item.active"
      @item-click="itemClick(item)"
    ></bgs-widget-stats-employee-info>

    <div class="employees-list-offline" v-if="item.disabledItems">
      <template v-for="disabledItem in item.disabledItems">
        <bgs-widget-stats-employee-disabled
          :key="disabledItem.id"
          :avatar="disabledItem.avatar"
          :name="disabledItem.name"
        ></bgs-widget-stats-employee-disabled>
      </template>
    </div>
  </div>
</template>

<script>
import BgsWidgetStatsEmployeeInfo from "./RowInfo";
import BgsWidgetStatsEmployeeDisabled from "./DisabledRow";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  components: {
    BgsWidgetStatsEmployeeInfo,
    BgsWidgetStatsEmployeeDisabled
  },

  methods: {
    itemCollapse(item, value) {
      item.collapsed = value;
      this.$emit("item-collapse", value, item);
    },
    itemClick(item, val = true) {
      let parent = this.getParent(this.$parent);

      parent.$emit("item-click", item);
    },
    getParent(parent) {
      if (!parent.item) {
        return parent;
      }

      return this.getParent(parent.$parent);
    }
  }
};
</script>

<style>
.employees-list-offline {
  display: flex;
  flex-wrap: wrap;
  padding-top: 6px;
  border-top: 1px solid #eee;
  padding-right: 5px;
  margin-right: -3px;
  margin-left: -3px;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to {
  opacity: 0;
  max-height: 0px;
}
</style>