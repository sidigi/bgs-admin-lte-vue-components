<template>
  <transition name="fade">
    <div class="vue-modal modal fade in" @click.prevent="$emit('modal-close')">
      <div class="modal-dialog" :style="{width: width}">
        <div class="modal-content" @click.stop>
          <div class="modal-header" v-if="!disableHeader">
            <div class="flexbox flex-align-flexstart">
              <div class="flex-1 flexbox">
                <slot name="header"></slot>
              </div>
              <button
                v-if="closeBtn"
                type="button"
                class="close"
                @click.prevent="$emit('modal-close')"
              >
                <span>&times;</span>
              </button>
            </div>
            <h4 class="modal-title" v-if="title">{{title}}</h4>
          </div>

          <div class="modal-body">
            <slot></slot>
          </div>

          <div class="modal-footer" v-if="!disableFooter">
            <slot name="buttons">
              <button
                v-if="closeBtn"
                type="button"
                class="btn btn-default pull-left"
                @click.prevent="$emit('modal-close')"
              >{{closeBtnName}}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    closeBtn: {
      type: Boolean,
      default: true
    },
    closeBtnName: {
      type: String,
      default: "Close"
    },
    width: {
      type: [Number, String],
      default: "900px"
    },
    disableFooter: {
      type: Boolean,
      default: false
    },
    disableHeader: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.close {
  outline: none;
  margin-top: -10px;
}
.close span {
  font-size: 50px;
  font-weight: normal;
}
.vue-modal.modal.fade {
  display: block;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>