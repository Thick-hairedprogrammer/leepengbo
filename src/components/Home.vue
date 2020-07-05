<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" />
        <span>跨境借卖商城后台管理系统</span>
      </div>

      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 右侧主体 -->
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="togleCollapse">|||</div>
        <div></div>
        <el-menu unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath" background-color="#333744" text-color="#fff" active-text-color="#409FFF">
          <!-- :unique-opened="true"->只允许展开一个菜单 -->
          <!-- :collapse-transition="false" -> 关闭动画 -->
          <!-- router -> 导航开启路由模式 -->
          <el-menu-item index="userspace" @click="userspace">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>个人中心</span>
            </template>
          </el-menu-item>
          <el-menu-item index="useradmin">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-star-off"></i>
              <!-- 文本 -->
              <span>用户管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="userroot">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-star-on"></i>
              <!-- 文本 -->
              <span>角色管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="menu">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 文本 -->
              <span>菜单管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="datamenu">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-tickets"></i>
              <!-- 文本 -->
              <span>数据字典</span>
            </template>
          </el-menu-item>
          <el-menu-item index="config">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-setting"></i>
              <!-- 文本 -->
              <span>参数配置</span>
            </template>
          </el-menu-item>
          <el-menu-item index="audit">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-bell"></i>
              <!-- 文本 -->
              <span>财务审核</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 页面主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconObj: {},
      // 默认不折叠
      isCollapse: false,
      // 被激活导航地址
      activePath: ''
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    togleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    test() {
      this.$router.push('/dialogtest')
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #00bfff;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  img {
    margin-left: 10px;
    width: 50px;
    height: 50px;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: rgb(203, 224, 241);
}
.home-container {
  height: 100%;
}
.toggle-button {
  background-color: #6495ed;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  // 鼠标放上去变成小手
  cursor: pointer;
}
</style>
