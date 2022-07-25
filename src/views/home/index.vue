<template>
  <div>
    <div class="btn-row">
      <el-button class="el-button" type="primary" @click="handleAdd" style="height: 40px">添加选手</el-button>

      <!-- <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" label-width="68px" v-show="showSearch">
        <el-form-item label="登录地址" prop="ipaddr">
          <el-input v-model="queryParams.ipaddr" placeholder="请输入登录地址" clearable />
        </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="queryParams.userName" placeholder="请输入用户名称" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini">重置</el-button>
        </el-form-item>
      </el-form> -->

      <div class="toolbox">
        <right-toolbar :showSearch.sync="showSearch" @queryTable="getList" :columns="columns"></right-toolbar>
      </div>
    </div>

    <el-table :data="tableData.slice((pageNum - 1) * pageSize, pageNum * pageSize)" border stripe style="width: 100%"
      class="box">
      <el-table-column type="index" label="序号" width="80">
        <template slot-scope="scope">
          <span>{{ (pageNum - 1) * pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="userid" label="选手编号" width="150px" v-if="columns[2].visible"></el-table-column>
      <el-table-column prop="nickname" label="ID" width="160px" v-if="columns[2].visible"></el-table-column>
      <el-table-column prop="Battle_Group" label="战队" width="160px" v-if="columns[3].visible"></el-table-column>
      <el-table-column prop="name" label="姓名" width="160px" v-if="columns[4].visible"></el-table-column>
      <el-table-column prop="position" label="位置" width="160px" v-if="columns[5].visible"></el-table-column>
      <el-table-column label="状态" width="" v-if="columns[5].visible">
        <template v-slot:default="scope">{{
            scope.row.status == 0 ? "在役" : "退役"
        }}</template>
      </el-table-column>
      <el-table-column label="操作" v-if="columns[6].visible">
        <template v-slot:default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Modal ref="dlg" :title="dlgTitle" @add="handleSaved" :data="formData"></Modal>

    <!-- <el-pagination v-show="total > 0" :total="total" :page="pageNum" :limit="pageSize" :layout="layout"
      :current-page="currentpage" :page-sizes="pageSizes" @size-change="handleSizeChange"
      @current-change="handleCurrentChange"></el-pagination> -->
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import { index, deletepayler } from "@/api/payler";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showSearch: true,
      // 列信息
      columns: [
        { key: 0, label: `序号`, visible: true },
        { key: 1, label: `编号`, visible: true },
        { key: 2, label: `名称`, visible: true },
        { key: 3, label: `联系人`, visible: true },
        { key: 4, label: `联系电话`, visible: true },
        { key: 5, label: `状态`, visible: true },
        { key: 6, label: `操作`, visible: true },
      ],
      queryParams: {
        ipaddr: undefined,
        userName: undefined,
      },
      tableData: [],
      // 遮罩层
      loading: true,
      // 总条数
      total: 0,
      pageNum: 1,
      pageSize: 50,
      pageSizes: [10, 20, 30],
      layout: "total, sizes, prev, pager, next, jumper",
      units: [],
      formData: {},
      dlgVisible: false,
      dlgTitle: "",
      formData: {},
      currentpage: 1,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //获取选手信息
    getList() {
      index().then((res) => {
        this.tableData = res.data;
        console.log(this.tableData);
        this.total = res.data.length;
      });
    },

    //删除选中的选手
    


    // handleSizeChange(val) {
    //   this.pageSize = val;
    //   // this.fenye();
    // },
    // handleCurrentChange(val) {
    //   console.log(val);
    //   this.pageNum = val;
    //   this.fenye();
    // },
    // fenye() {
    //   let data = {
    //     pageNum: this.pageNum,
    //     limit: this.pageSize,
    //   };
      // index().then((res) => {
      //   this.tableData = res.data;
      //   console.log(this.tableData);
      //   this.total = res.data.length;
      // });
    // },

    handleAdd() {
      this.dlgTitle = "新增";
      this.formData = {};
      this.$refs.dlg.showDlg();
      // this.getList()
    },
    // 添加刷新
    handleSaved() {
      console.log(321);
      this.getList();
      // this.dlgVisible = false;
    },

    handleEdit(index, row) {
      this.formData = row;
      this.dlgTitle = "编辑";
      this.$refs.dlg.showDlg();
    },
    handleDelete(index, row) {
      this.$confirm(`否删除选手：${row.nickname}?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deletepayler({
            userid: row.userid,
          })
            .then((res) => {
              this.tableData.splice(index, 1);
              this.$message.success(res.message);

            })
            .catch((res) => { });
        })
        .catch(() => { });
    },
  },
};
</script>

<style>
.btn-row {
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin: 20px 10px 0 10px;
}

.table {
  margin-top: 30px;
}

.pagination {
  float: right;
}

.box {
  margin: 0 10px;
}
</style>