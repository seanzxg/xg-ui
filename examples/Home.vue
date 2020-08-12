<template>
  <div
    v-loading="loading"
    xg-loading-text="拼命加载中"
    class="page-home"
  />
</template>

<script>
    export default {
      name: "Home",
      data() {
        return {
          loading: true
        }
      },
      mounted() {
        setTimeout(() => {
          this.loading = false
        }, 3000)
      }
    }
</script>

<style scoped>
  .page-home {
    height: 300px;
    background-color: red;
  }
</style>
