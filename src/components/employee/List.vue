<template>
  <div>
    <bgs-employee-info
      v-if="item.items"
      :isParent="!! item.items.length"
      :avatar="item.avatar"
      :name="item.name"
      :data="item.data"
      :collapsed="item.collapsed"
      :active="item.active"
      @item-collapse="collapse"
      @row-item-click="itemClick"
    ></bgs-employee-info>

    <transition v-if="item.items" name="fadeHeight" mode="out-in">
      <div class="employees-list" v-show="item.collapsed">
        <bgs-employee-list v-for="item in item.items" :key="item.id" :item="item"></bgs-employee-list>
      </div>
    </transition>

    <bgs-employee-info
      v-else
      :avatar="item.avatar"
      :name="item.name"
      :data="item.data"
      :active="item.active"
    ></bgs-employee-info>

    <div class="employees-list-offline" v-if="item.disabledItems">
      <template v-for="disabledItem in item.disabledItems">
        <bgs-employee-disabled
          :key="disabledItem.id"
          :avatar="disabledItem.avatar"
          :name="disabledItem.name"
        ></bgs-employee-disabled>
      </template>
    </div>
  </div>
</template>

<script>
import BgsEmployeeInfo from "./RowInfo";
import BgsEmployeeDisabled from "./DisabledRow";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  components: {
    BgsEmployeeInfo,
    BgsEmployeeDisabled
  },

  methods: {
    collapse(value) {
      this.item.collapsed = value;
      this.$bgsComponentsEventBus.$emit("_bgs-widget-collapse", this.item);
    },
    itemClick() {
      this.$bgsComponentsEventBus.$emit("_bgs-widget-item-click", this.item);
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