<template>
  <el-dialog :title="title" :visible.sync="dlgVisible">
    <el-form ref="form" :model="data" :rules="formRules">
      <el-form-item label="选手编号" :label-width="formLabelWidth" prop="userid">
        <el-input v-model="data.userid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="ID" :label-width="formLabelWidth" prop="nickname">
        <el-input v-model="data.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="战队" :label-width="formLabelWidth" prop="Battle_Group">
        <el-input v-model="data.Battle_Group" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
        <el-input v-model="data.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="位置" :label-width="formLabelWidth" prop="position">
        <el-input v-model="data.position" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="状态" :label-width="formLabelWidth" prop="status">
        <el-input v-model="data.status" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dlgVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSave()">保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { addpayler, updatapayler } from "@/api/payler";
const rules = {
  unitname: [
    {
      required: true,
      message: "请输入选手ID",
      trigger: "blur",
    },
  ],
  fzr: [
    {
      required: true,
      message: "请输入选手战队",
      trigger: "blur",
    },
  ]
};

export default {
  props: {
    title: {
      type: String,
      default: "新增",
    },

    data: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      dlgVisible: false,
      formLabelWidth: "120px",
      formRules: rules,
    };
  },
  computed: {},

  methods: {
    //显示模态框
    showDlg: function () {
      this.dlgVisible = true;
    },
    
    //点击保存
    handleSave: function () {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.submit();
        }
      });
    },

    // 提交
    submit: function () {
      if (this.data.id) {
        updatapayler(this.data)
          .then((res) => {
            this.$message.success(res.message);

            this.dlgVisible = false;
          })
          .catch((res) => {

          });
      } else {
        addpayler(this.data)
          .then((res) => {
            this.$message.success(res.message);
            this.$emit("add");
            this.dlgVisible = false;
          })
          .catch((res) => {
      
          });
      }
    },
  },
};
</script>

<style>
</style>