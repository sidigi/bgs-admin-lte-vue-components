<template>
  <span
    class="employee employee-offline icon icon-circle employee-show-detailed-statistics"
    :title="name"
    :style="`background: url(${avatar}) no-repeat center/cover`"
    data-container="body"
    data-toggle="tooltip"
    @click.prevent.stop="itemClick"
  ></span>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number],
      default: null
    },
    name: {
      type: [String, Number],
      default: ""
    },
    avatar: {
      type: [String],
      default: ""
    }
  },

  methods: {
    itemClick() {
      this.$bgsComponentsEventBus.$emit("_bgs-widget-stats-item-click", {
        id: this.id,
        name: this.name,
        avatar: this.avatar
      });
    }
  }
};
</script>

<style scoped>
.employee-offline {
  margin: 3px;
  filter: opacity(0.6) grayscale(1);
  cursor: pointer;
}
.icon {
  display: inline-block;
  outline: none;
  width: 32px;
  height: 32px;
  font-size: 0;
}
.img-circle {
  border-radius: 50%;
}
.shadow-light {
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
}
.display-block {
  display: block !important;
}
</style>