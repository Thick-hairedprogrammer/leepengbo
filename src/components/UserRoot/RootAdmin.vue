<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-table :data="userlist" border stripe>
        <!-- stripe: 斑马条纹
        border：边框-->
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="username" label="角色名称"></el-table-column>
        <el-table-column prop="message" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <!-- 添加对话框 -->
          <el-button type="warning" icon="el-icon-setting" size="mini" @click="showSetRightDialog">分配权限</el-button>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[2, 5, 10, 15]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totle"
      ></el-pagination>
    </el-card>
    <!-- 分配权限的对话框 -->
    <el-dialog title="分配权限" :visible.sync="setRightDialogVisible" width="50%">
      <!-- 复选框控件 -->
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="品牌商-我的信息"></el-checkbox>
        <el-checkbox label="品牌商-商品录入"></el-checkbox>
        <el-checkbox label="品牌商-商品主图"></el-checkbox>
        <el-checkbox label="品牌商-订单管理"></el-checkbox>
        <el-checkbox label="品牌商-我的钱包"></el-checkbox>
      </el-checkbox-group>
      <span slot="footer" class="dialog-footer">
        <el-button @click="setRightDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setRightDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog>
      <!-- 内容主体 -->
      <el-form>
        <el-form-item label="角色名称" prop="username">
          <el-input v-model="addUserForm.username"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="email">
          <el-input v-model="addUserForm.email"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    // 自定义邮箱规则
    return {
      checkList: ['选中且禁用', '复选框 A'],
      // 获取用户列表查询参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 每页显示多少数据
        pagesize: 5
      },
      userlist: ['1', '张三', '1312321@qq.com', '1231312312'],
      totle: 0,
      // 添加用户对话框
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 用户添加
      addUserForm: {
        username: '',
        email: '',
        mobile: ''
      },
      // 控制分配权限对话框的显示与隐藏
      setRightDialogVisible: false
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 展示分配权限的对话框
    showSetRightDialog() {
      // 获取所有权限的数据
      this.setRightDialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  transform: translateY(5%);
}
</style>
