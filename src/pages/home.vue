<template>
  <div class="home">
    <ul ref="ul">
      <li class="animated fadeInUp delay1">2018</li>
      <li class="animated fadeInUp delay2">您在易来客运</li>
      <li class="animated fadeInUp delay3">度过的</li>
      <li class="animated fadeInUp delay4">日日夜夜</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='stylus' scoped>
  .home
    width 100vw
    height 100vh
    background url(../assets/images/5.jpg)
    background-size cover
    background-repeat no-repeat
    background-position center
    color #fff
    font-size 36px
    line-height 180%
    .delay1
      animation-delay 1000ms
    .delay2
      animation-delay 1100ms
    .delay3
      animation-delay 1200ms
    .delay4
      animation-delay 1300ms
</style>
