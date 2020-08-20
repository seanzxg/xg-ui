<template>
  <div
    v-loading.fullscreen="loading"
    class="page-home"
    @click="load"
  >
    <p>小光爱吃肉</p>
  </div>
</template>

<script>
    export default {
      name: "Home",
      data() {
        return {
          loading: false
        }
      },
      methods: {
        load() {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 3000)
        }
      }
    }
</script>

<style scoped>
  .page-home {
    height: 300px;
    background-color: red;
  }
</style>
