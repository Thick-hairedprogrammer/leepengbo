<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我的信息</span>
        <el-button style="float: right; padding: 3px 6px" type="primary" @click="MsgChange">修改信息</el-button>
        <el-button style="float: right; padding: 3px 6px" type="success" @click="PsdChange">修改密码</el-button>
      </div>
      <div v-for="o in 3" :key="o" class="text item">
        {{ '用户名称 ' + o }}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    MsgChange() {
      this.$router.push('/msgchange')
    },
    PsdChange() {
      this.$router.push('/psdchange')
    }
  }
}
</script>
export default{ methods:{ } }
<style lang="less" scoped>
.box-card {
  transform: translateY(10%);
}
.text {
  font-size: 12px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
