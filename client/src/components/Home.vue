<template lang="">
  <div class="basic-layout">
    <div class="header-wrapper">
      <div class="header-left" :style="{width: collapsed ? '80px' : '200px',transition: 'width 0.5s'}">
        <img src="./../assets/logo.png" width="36" height="36" alt="" />
        <span v-if="!collapsed" style="margin-left: 12px">管理后台</span>
      </div>
      <div class="header-right">
        <div class="bread">
          <Fold @click="toggleMenuFold" class="collapsed-icon" v-if="!collapsed"/>
          <Expand @click="toggleMenuFold" class="collapsed-icon" v-if="collapsed"/>
          <span>面包屑</span>
        </div>
        <div>用户</div>
      </div>
    </div>
    <div class="content-wrapper">
        <el-menu
        default-active="1"
        class="nav-menu"
        router 
        :style="{width: collapsed ? '80px' : '200px',transition: 'all 0.5s'}"
        :collapse="collapsed"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <Coin width="18" height="18" style="margin-right: 8px"/>
            <span>用户管理</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
           <template #title>
            <Folder width="18" height="18" style="margin-right: 8px"/>
            <span>菜单管理</span>
          </template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item one</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <div class="content-right">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Fold , Expand , Coin, Folder} from '@element-plus/icons-vue'
export default {
  components: {Fold,Expand,Coin,Folder},
  data(){
    return {
      collapsed: false
    }
  },
  methods: {
    toggleMenuFold(){
      this.collapsed = !this.collapsed;
    }
  },
}
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
    .header-left {
      img {
        vertical-align: middle;
      }
    }
    .header-right {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .bread {
        display: flex;
        align-items: center;
        .collapsed-icon {
          height: 26px;
          width: 26px;
          cursor: pointer;
          margin-right: 12px;
        }
      }
    }
  }

  .content-wrapper {
    display: flex;
    .nav-menu {
      height: calc(100vh - 58px);
      background-color: white;
      color: #001529;
      overflow-y: auto;
      box-shadow: 5px 5px 10px -6px #f3f3f3;
      transition: width 0.5s;
      border-right: none;
    }
    .content-right {
      flex: 1;
      .wrapper {
        margin: 20px;
        height: calc(100vh - 98px);
        box-shadow: 0 0 10px 6px #f9f9f9;
      }
    }
  }
}
</style>
