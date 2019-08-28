<template>
  <div
    class="employee"
    :class="employeeClass"
    :data-toggle="isParent ? 'collapse' : ''"
    @click.prevent.stop="(isParent) ? $emit('item-collapse', !collapsed) : null"
  >
    <div class="employee-photo employee-show-detailed-statistics">
      <span
        class="img-circle icon shadow-light display-block"
        :style="`background: url(${avatar}) no-repeat center/cover`"
        :data-original-title="name"
        data-toggle="tooltip"
        data-container="body"
        @click.prevent.stop="$emit('row-item-click')"
      ></span>
    </div>
    <div class="employee-info flexbox">
      <div class="flex-align-flexstart" @click.prevent.stop="$emit('row-item-click')">{{name}}</div>

      <template v-if="hasExpandedData">
        <div class="flex-1" style="text-align:right">
          <div class="font-large text-grey">{{ collapsed_data }}</div>
        </div>
      </template>
      <template v-else>
        <div class="flex-1" style="text-align:right">
          <div class="font-large text-grey">{{ data }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isParent: {
      type: [Boolean, Number],
      default: false
    },
    collapsed: {
      type: [Boolean, Number],
      default: false
    },
    active: {
      type: [Boolean, Number],
      default: true
    },
    name: {
      type: [String, Number],
      default: ""
    },
    data: {
      type: [String, Number],
      default: ""
    },
    collapsed_data: {
      type: [String, Number],
      default: undefined
    },
    avatar: {
      type: [String],
      default: ""
    }
  },

  computed: {
    hasExpandedData() {
      return (
        this.isParent &&
        this.collapsed === true &&
        this.collapsed_data !== undefined
      );
    },

    employeeClass() {
      return {
        "employee-inactive": !this.active,
        "employee-head": this.isParent,
        collapsed: this.isParent && !this.collapsed
      };
    }
  }
};
</script>

<style scoped>
.employee {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 5px;
  padding-left: 20px;
  margin-left: -20px;
  flex-wrap: nowrap;

  border-bottom: 1px solid #ccc;
  padding-bottom: 7px;
}
.employee.employee-inactive .employee-photo {
  filter: grayscale(1) opacity(0.6);
}
.employee {
  cursor: pointer;
}
.employee[data-toggle="collapse"]:before {
  content: "";
  position: absolute;
  right: 100%;
  margin-right: -15px;
  width: 12px;
  height: 2px;
  background: #ccc;
}
.employee[data-toggle="collapse"].collapsed:after {
  content: "";
  position: absolute;
  right: 100%;
  width: 2px;
  height: 12px;
  background: #ccc;
  margin-right: -10px;
}
.employee .employee-photo {
  margin-right: 15px;
}
.employee .employee-info {
  width: 100%;
  transition: margin-left 0.3s;
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
.text-grey {
  color: #bbb;
}
.font-large {
  font-size: large;
  line-height: 1;
}
</style> 