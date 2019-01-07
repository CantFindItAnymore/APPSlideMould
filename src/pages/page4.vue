<template>
  <div class="page4">
    <div class="desc">
      <p class="delay1 animated fadeIn">减排：15.6kg</p>
      <p class="delay2 animated fadeIn">这一年里</p>
      <p class="delay3 animated fadeIn">您为绿色做出了巨大贡献</p>
      <p class="delay4 animated fadeIn">合计减少碳排放量</p>
      <p class="delay5 animated fadeIn">超过了98%的用户</p>
      <p class="delay6 animated fadeIn">获得“减排高手”称号</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='stylus' scoped>
  .page4
    width 100vw
    height 100vh
    background url(../assets/images/5.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    text-align left
    .desc
      position relative
      top 25%
      left 8%
      transform translateY(-50%)
      line-height 160%
      .delay1
        animation-delay 1100ms
        padding-bottom 50px
      .delay2
        animation-delay 1200ms
      .delay3
        animation-delay 1300ms
      .delay4
        animation-delay 1400ms
      .delay5
        animation-delay 1500ms
      .delay6
        animation-delay 1600ms
</style>
