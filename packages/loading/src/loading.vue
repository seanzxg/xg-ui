<template>
  <transition name="loading">
    <div
      v-show="visible"
      class="xg-loading-mask"
    >
      <div class="xg-loading-spinner">
        <p class="xg-loading-text">
          {{ text }}
        </p>
      </div>
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
