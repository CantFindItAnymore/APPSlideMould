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
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { list } from '@/unit/util.js'
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
      this.endY = e.changedTouches[0].clientY
      if (this.endY - this.startY >= 40) {
        // 下滑去上一頁
        list[this.$route.meta.index - 1] && this.$router.push(list[this.$route.meta.index - 1])
      } else if (this.endY - this.startY <= -40 || this.endY - this.startY === 0) {
        // 上滑去下一頁
        list[this.$route.meta.index + 1] && this.$router.push(list[this.$route.meta.index + 1])
      }
    }
  }
}
</script>

<style>
@import './unit/font/font.css';
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#app {
  font-family: HYDianYaTiJ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
