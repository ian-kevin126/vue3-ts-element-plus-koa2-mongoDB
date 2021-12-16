<template lang="">
  <div class="basic-layout">
    <div class="header-wrapper"></div>
    <div class="content-wrapper">
      <div class="nav-side"></div>
      <div class="content-right">
        <div class="bread"></div>
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.basic-layout {
  position: relative;
  .header-wrapper {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 10px -6px #e4e2e2;
    padding: 0 20px;
    margin-bottom: 8px;
  }

  .content-wrapper {
    display: flex;
    .nav-side {
      width: 200px;
      height: calc(100vh - 58px);
      background-color: white;
      color: #001529;
      overflow-y: auto;
      box-shadow: 5px 0 10px -6px #f3f3f3;
      transition: width 0.5s;
    }
    .content-right {
      flex: 1;
      .wrapper {
        padding: 20px;
        height: calc(100vh - 58px);
      }
    }
  }
}
</style>
