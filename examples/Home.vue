<template>
  <div class="demo">
    <div class="block">
      <div
        v-loading.fullscreen="loading"
        :xg-loading-text="loadingText"
        class="page-home"
        @click="load"
      >
        <p>小光爱吃肉</p>
      </div>
      <div class="block">
        <button
          @click="dialogVisible = true"
        >
          1111111111111
        </button>
        <xg-dialog
          title="sdfksljfskldjdflsf"
          :visible.sync="dialogVisible"
          :close-on-click-modal="true"
        >
          小光爱吃肉
        </xg-dialog>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Home",
      data() {
        return {
          loading: false,
          loadingText: '呀呀呀',
          dialogVisible: false
        }
      },
      methods: {
        load() {
          this.loading = true
          this.loadingText = '小光'
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
