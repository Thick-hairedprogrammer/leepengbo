<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>修改信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>我的信息</span>
      </div>
      <div v-for="o in 3" :key="o" class="text item">
        {{ '用户名称 ' + o }}
      </div>
      <div class="button"><el-button style=" padding: 3px 6px" type="success">确认</el-button> <el-button style=" padding: 3px 6px" type="primary" @click="cancel">取消</el-button></div>
    </el-card>
  </div>
</template>
<script>
export default {
  methods: {
    cancel() {
      this.$router.push('userspace')
    }
  }
}
</script>
<style lang="less" scoped>
.box-card {
  transform: translateY(10%);
  button {
    width: 30%;
    height: 40%;
    margin: 0 auto;
    transform: translateX(65%);
  }
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
