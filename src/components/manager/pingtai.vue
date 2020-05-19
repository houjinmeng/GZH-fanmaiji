<template>
  <div>
    <div class="head" style="background:#fff">
      <van-icon name="arrow-left" class="back" @click="goback" /> 员工列表
    </div>
    <van-search
      v-model="data.where"
      placeholder="请输入员工姓名"
      show-action
      shape="round"
      style="height:7%"
    >
      <div slot="action" style="color:#8598d5;font-size:0.35rem">
        搜索
      </div>
    </van-search>
    <!-- 品牌列表 -->
    <div class="list">
      <div class="item">
        <div>ID : 1</div>
        <div>创建日期 : 2020/05/10</div>
      </div>
      <div class="item">
        <div>姓名 : 望京</div>
        <div>最后登录日期 : 2002/02/56</div>
      </div>
      <div class="item">
        <div class="fenpei" @click="show=true">详情</div>
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="change()"
        >
        </el-switch>
      </div>
    </div>
    <div class="botbtn1" @click="addshow = true">添加员工</div>
    <div style="height:1.2rem"></div>
    <!-- 添加品牌弹窗 -->
    <van-popup v-model="addshow" position="bottom">
      <div style="background:#f2f2f2;" id="edit">
        <div style="padding:0.2rem;font-size:0.3rem">添加员工</div>
        <div class="list" style="height:4rem;overflow:auto">
          <van-cell-group>
            <van-field
              v-model="data.name"
              placeholder="请输入"
              label="姓名"
              style="height:0.8rem"
            />
            <van-field
              v-model="data.name"
              placeholder="请输入"
              label="联系电话"
              style="height:0.8rem"
            />
            <van-field
              v-model="data.name"
              placeholder="请输入"
              label="联系地址"
              style="height:0.8rem"
            />
          </van-cell-group>
        </div>
        <div class="btn">确认添加</div>
      </div>
    </van-popup>
    <!-- 品牌详情弹出 -->
    <van-popup v-model="show" position="bottom">
      <div style="font-size:0.3rem;padding:0.2rem">品牌详情</div>
      <div class="list" style="height:8rem;overflow:auto">
        <div class="item">ID : 1</div>
        <div class="item">名称 : 望京</div>
        <div class="item">超级管理员 : 张三</div>
        <div class="item">员工人数 : 1</div>
        <div class="item">设备数量 : 1</div>
        <div class="item">建立日期 : 1</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:'',
      data: {
        where: "",
        name: ""
      },
      addshow: false,
      show: false
    };
  },
  methods: {
    // 返回
    goback() {
      this.$router.go(-1);
    },
    // 禁用
    change(){
        
    }
  }
};
</script>
<style scoped lang="less">
// 添加品牌
.botbtn1 {
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  background-color: #8698d5;
  margin: 0;
  font-size: 0.4rem;
  z-index: 2;
}
// 确认添加
.btn {
  width: 5rem;
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: #8598d5;
  border-radius: 0.1rem;
  font-size: 0.35rem;
  margin: 0.4rem auto;
  color: #fff;
  margin-top: 0.5rem;
}
// 详情
.fenpei {
  width: 1.2rem;
  text-align: center;
  padding: 0.1rem;
  background-color: #8598d5;
  color: #fff;
  border-radius: 0.1rem;
}
</style>
