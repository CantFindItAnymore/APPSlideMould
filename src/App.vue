<template>
  <div id="app">
    <div
      @touchstart.prevent="handleStart"
      @touchend="handleEnd"
      :class="{
        'container': true,
        'animated fadeInUp': slideDerection === 'next',
        'animated fadeInDown': slideDerection === 'previous'
      }"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['slideDerection'])
  },
  data () {
    return {
      startY: 0,
      endY: 0
    }
  },
  methods: {
    handleStart (e) {
      this.startY = e.touches[0].clientY
    },
    handleEnd (e) {
      const list = ['/', '/page2']
      this.endY = e.changedTouches[0].screenY - 176
      // console.log('sh', this.startY - this.endY - 176)
      if (this.endY - this.startY >= 20) {
        // 下滑去上一頁
        console.log('xh', this.endY - this.startY)
        list[this.$route.meta.index - 1] && this.$router.push(list[this.$route.meta.index - 1])
      } else if (this.startY - this.endY >= 40) {
        // 上滑去下一頁
        console.log('sh', this.startY - this.endY)
        list[this.$route.meta.index + 1] && this.$router.push(list[this.$route.meta.index + 1])
      }
    }
  }
}
</script>

<style>
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
