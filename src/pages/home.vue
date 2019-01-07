<template>
  <div class="home">
    <img class="lookBtn" src="../assets/images/立即查看.png">
    <img class="selfBtn" src="../assets/images/查看报告.png">
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
    background url(../assets/images/1.png)
    background-size cover
    background-repeat no-repeat
    background-position center
    .lookBtn
      position relative
      top 50%
      transform translateY(-50%)
      width 352px
      height 78px
    .selfBtn
      position absolute
      bottom 0
      left 0
      right 0
      width 100%
</style>
