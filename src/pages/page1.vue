<template>
  <div class="page1">
    <div class="desc1">
      <p class="delay1 animated fadeIn">您跨越了山河大海，</p>
      <p class="delay2 animated fadeIn">也穿过了人山人海。</p>
    </div>
    <div class="desc2">
      <p class="delay3 animated fadeIn">2018易来客运城际专车，</p>
      <p class="delay4 animated fadeIn">伴您出行5次；</p>
      <p class="delay5 animated fadeIn">与您共度40小时；</p>
      <p class="delay6 animated fadeIn">陪您走过520公里的路。</p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='stylus' scoped>
  .page1
    width 100vw
    height 100vh
    background url(../assets/images/2.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    text-align left
    .desc1
      position relative
      top 30%
      left 8%
      transform translateY(-50%)
      line-height 160%
      .delay1
        animation-delay 1100ms
      .delay2
        animation-delay 1200ms
    .desc2
      position relative
      top 40%
      left 8%
      transform translateY(-50%)
      line-height 160%
      .delay3
        animation-delay 1300ms
      .delay4
        animation-delay 1400ms
      .delay5
        animation-delay 1500ms
      .delay6
        animation-delay 1600ms
</style>
