<template>
  <div class="xg-loading-mask">
    {{ text }}
  </div>
</template>

<script>
export default {
    name: "XgLoading",
    data() {
        return {
            text: ''
        }
    }
}
</script>

<style lang="scss">
  @import "index.scss";
</style>
