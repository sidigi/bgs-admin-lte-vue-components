<template>
  <div>
    <div class="employee-statistic-block">
      <slot name="employee-card"></slot>
      <div class="info-box info-box-bgs info-box-no-icon" v-if="showTree">
        <div class="info-box-toolbar">
          <slot name="buttons"></slot>
        </div>

        <span class="info-box-icon" :class="lineClass"></span>

        <div class="info-box-content">
          <span class="info-box-text" v-once v-if="header">{{ header }}</span>
          <span class="info-box-number" v-once v-if="subheader">{{ subheader }}</span>

          <div class="info-box-custom-content">
            <slot></slot>
          </div>
        </div>
      </div>
      <loader v-if="loader"></loader>
    </div>
  </div>
</template>

<script>
import Loader from "../../Loader";

export default {
  props: {
    header: {
      type: String,
      default: ""
    },
    subheader: {
      type: String,
      default: ""
    },
    lineClass: {
      type: [String, Array],
      default: "bg-green"
    },
    loader: {
      type: Boolean,
      default: false
    },
    showTree: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Loader
  }
};
</script>

<style scoped>
.employee-statistic-block {
  position: relative;
  min-height: 90px;
}
.info-box {
  position: relative;
}
.info-box.info-box-no-icon .info-box-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10px;
}
.info-box .info-box-toolbar {
  position: absolute;
  right: 0;
  top: 0;
  padding: 3px 5px;
}
.info-box.info-box-no-icon .info-box-content {
  margin-left: 10px;
}
.info-box-content {
  padding: 5px 10px;
  margin-left: 90px;
}
.info-box-text {
  text-transform: uppercase;
}
.info-box-number {
  display: block;
  font-weight: bold;
  font-size: 18px;
}
.info-box .info-box-toolbar .info-box-toolbar-button {
  padding: 4px;
  display: inline-block;
  line-height: 1;
}
.hover-translucent {
  opacity: 0.5;
  transition: opacity 0.2s;
}
[role="button"] {
  cursor: pointer;
}
</style>