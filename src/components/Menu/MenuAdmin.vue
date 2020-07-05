<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜单管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 搜索 添加 -->
      <el-row :gutter="20">
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
        </el-col>
      </el-row>
      <el-table :data="userlist" border stripe>
        <!-- stripe: 斑马条纹
        border：边框-->
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="username" label="菜单信息"></el-table-column>
        <!-- <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" @change="userStateChanged(scope.row)"></el-switch>
          </template>
        </el-table-column> -->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit = true">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeUserById(scope.row.id)">删除</el-button>
          </template>
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
    <!-- 添加编辑的对话框 -->
    <el-dialog title="编辑菜单" :visible.sync="edit" width="50%" @close="editClosed">
      <!-- 内容主体 -->
      <el-form :model="MenuForm" ref="MenuForm" :rules="addMenuFormRules" label-width="100px">
        <el-form-item label="菜单名称" prop="username">
          <el-input v-model="addUserForm.username"></el-input>
        </el-form-item>
        <div class="select">
          <span>隶属方</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="edit = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加用户的对话框 -->
    <el-dialog title="添加菜单" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
      <!-- 内容主体 -->
      <el-form :model="addUserForm" ref="addUserFormRef" :rules="addUserFormRules" label-width="100px">
        <el-form-item label="菜单名称" prop="username">
          <el-input v-model="addUserForm.username"></el-input>
        </el-form-item>
        <div class="select">
          <span>隶属方</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    // 自定义邮箱规则
    return {
      options: [
        {
          value: '选项1',
          label: '品牌商'
        },
        {
          value: '选项2',
          label: '借卖方'
        },
        {
          value: '选项3',
          label: '管理员'
        }
      ],
      // 获取用户列表查询参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 每页显示多少数据
        pagesize: 5
      },
      edit: false,
      addDialogVisible: false,
      userlist: ['1', '张三', '1312321@qq.com', '1231312312'],
      totle: 0,
      // 用户添加
      addUserForm: {
        username: '',
        email: '',
        mobile: ''
      }
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 删除用户
    async removeUserById(id) {
      const confirmResult = await this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      // 点击确定 返回值为：confirm
      // 点击取消 返回值为： cancel
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      const { data: res } = await this.$http.delete('users/' + id)
      if (res.meta.status !== 200) return this.$message.error('删除用户失败！')
      this.$message.success('删除用户成功！')
      this.getUserList()
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  transform: translateY(5%);
}
.select {
  transform: translateX(5%);
  .el-select {
    transform: translateX(11%);
  }
}
</style>
