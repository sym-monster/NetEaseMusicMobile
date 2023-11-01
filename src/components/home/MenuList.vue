<template>
  <div class="menuList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.menuList {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: rgb(250, 250, 250);
  padding-bottom: 10px;
  .iconItem {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.3rem;
    font-weight: 400;
    .icon {
      width: 0.84rem;
      height: 0.84rem;
    }
  }
}
</style>