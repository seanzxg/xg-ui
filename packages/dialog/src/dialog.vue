<template>
  <div
    v-show="visible"
    class="xg-dialog__wrapper"
  >
    <div
      class="xg-dialog"
      :style="style"
    >
      <slot />
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'XgDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      width: String,
      top: {
        type: String,
        default: '15vh'
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
  };
</script>

<style lang="scss">
  @import "index.scss";
</style>
