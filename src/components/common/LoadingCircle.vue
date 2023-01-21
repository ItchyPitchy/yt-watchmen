<template>
  <div class="wrapper">
    <div class="halfcircle"></div>
    <div class="mask1"></div>
    <div class="mask2"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.wrapper {
  width: 50px;
  height: 50px;
  position: relative;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .halfcircle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    background-color: $color-primary;
  }

  .mask1 {
    height: 80%;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-secondary;
    border-radius: 50%;
  }

  .mask2 {
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: $color-secondary;
  }
}
</style>
