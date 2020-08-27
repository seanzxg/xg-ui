<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      v-show="visible"
      class="xg-dialog__wrapper"
      @click.self="handleWrapperClick"
    >
      <div
        class="xg-dialog"
        :style="style"
      >
        <div class="xg-dialog__header">
          <slot name="title">
            <span class="xg-dialog__title">{{ title }}</span>
          </slot>
          <button
            v-if="showClose"
            type="button"
            class="xg-dialog__headerbtn"
            @click="handleClose"
          >
            <i class="xg-dialog__close xg-icon-close" />
          </button>
        </div>
        <div class="xg-dialog__body">
          <slot />
        </div>
        <div
          v-if="$slots.footer"
          class="xg-dialog__footer"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'XgDialog',
    props: {
      title: {
        type: String,
        default: ''
      },
      visible: {
        type: Boolean,
        default: false
      },
      width: String,
      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
      closeOnClickModal: {
        type: Boolean,
        default: false
      },
      showClose: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      style() {
        let style = {}
        style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
        return style
      }
    },
    mounted() {
      console.log(11111111111, this.visible)
    },
    methods: {
      afterEnter() {
        this.$emit('opened')
      },
      afterLeave() {
        this.$emit('closed')
      },
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      }
    },
  };
</script>
