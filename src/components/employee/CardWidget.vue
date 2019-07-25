<template>
  <div class="employee-statistic-block">
    <div class="info-box info-box-bgs info-box-no-icon">
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
  </div>
</template>

<script>
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
      type: String,
      default: "bg-aqua"
    }
  },

  mounted() {
    this.$bgsComponentsEventBus.$on("_bgs-widget-item-click", payLoad => {
      this.$emit("bgs-widget-item-click", payLoad);
    });

    this.$bgsComponentsEventBus.$on("_bgs-widget-collapse", payLoad => {
      this.$emit("bgs-widget-collapse", payLoad);
    });
  }
};
</script>

<style scoped>
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