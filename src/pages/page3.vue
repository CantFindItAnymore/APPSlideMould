<template>
  <div class="page3">
    <div class="desc">
      <p class="delay1 animated fadeIn">一年的兜兜转转</p>
      <p class="delay2 animated fadeIn">您曾与5个城市发生过故事</p>
      <p class="delay3 animated fadeIn">其中成都、绵阳</p>
      <p class="delay4 animated fadeIn">是您常去的城市</p>
      <p class="delay5 animated fadeIn">那里一定有您牵挂的人</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='stylus' scoped>
  .page3
    width 100vw
    height 100vh
    background url(../assets/images/4.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    text-align right
    .desc
      position relative
      top 25%
      left -6%
      transform translateY(-50%)
      line-height 160%
      .delay1
        animation-delay 1100ms
      .delay2
        animation-delay 1200ms
      .delay3
        animation-delay 1300ms
      .delay4
        animation-delay 1400ms
      .delay5
        animation-delay 1500ms
</style>
