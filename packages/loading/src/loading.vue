<template>
  <transition name="loading">
    <div
      v-show="visible"
      class="xg-loading-mask"
    >
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
    name: "XgLoading",
    data() {
        return {
            text: '',
            visible: false
        }
    },
  methods: {
      setText(text) {
        this.text = text
      }
  }
}
</script>

<style lang="scss">
  @import "index.scss";
</style>
