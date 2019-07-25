<template>
  <span
    class="employee employee-offline icon icon-circle employee-show-detailed-statistics"
    :title="name"
    :style="`background: url(${avatar}) no-repeat center/cover`"
    data-container="body"
    data-toggle="tooltip"
  ></span>
</template>

<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: ""
    },
    avatar: {
      type: [String],
      default: ""
    }
  }
};
</script>

<style scoped>
.employee-offline {
  margin: 3px;
  filter: opacity(0.6) grayscale(1);
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