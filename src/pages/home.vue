<template>
  <div class="home">
  </div>
</template>

<script>
export default {
  mounted () {
    this.getData(res => {
      console.log(res)
    })
  }
}
</script>

<style lang='stylus' scoped>
  .home
    background pink
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    background url(../assets/images/1.jpg)
    background-size cover
    background-repeat no-repeat
    background-position center
</style>
