<template>
  <div>
    <div class="head" style="background:#fff">
      <van-icon name="arrow-left" class="back" @click="goback"/> 设备列表
    </div>
    <van-search
      v-model="data.where"
      placeholder="请输入设备ID"
      show-action
      shape="round"
      style="height:7%"
    >
      <div
        slot="action"
        style="color:#8598d5;font-size:0.35rem"
      >
        搜索
      </div>
    </van-search>
    <div class="status">
      <div class="btn" style="margin:0">
        <div :class="[this.all == true ? 'yes' : 'one']">
          全部{{ allnum }}
        </div>
        <div :class="[this.out == true ? 'yes' : 'one']">
          已分配{{ outnum }}
        </div>
        <div :class="[this.on == true ? 'yes' : 'one']">
          未分配{{ onnum }}
        </div>
      </div>
    </div>
    <div
      class="fenpei"
      style="font-size:0.3rem;margin:0.2rem"
      @click="allset = !allset"
    >
      批量分配
    </div>
    <div class="botbtn1" v-show="allset" @click="show = true">选择品牌</div>
    <!-- 设备列表 -->
    <div class="list">
      <div
        :class="[selected == true ? 'yesdot' : 'nodot']"
        v-show="allset"
      ></div>
      <div class="item">
        <div>设备ID: 12</div>
        <div style="margin-right:1rem">设备类型: 游戏机</div>
      </div>
      <div class="item">设备UUID: 游戏机</div>
      <div class="item">
        <div>所属品牌: 游戏机</div>
        <div class="fenpei" @click="show = true">分配设备</div>
      </div>
    </div>
    <!-- 品牌列表弹出 -->
    <van-popup v-model="show" position="bottom">
        <div style="font-size:0.3rem;padding:0.2rem">选择品牌</div>
      <div class="list" style="height:8rem;overflow:auto">
        <div class="item">
          <div>望京</div>
          <div :class="[selected == true ? 'yesdot1' : 'nodot1']"></div>
        </div>
        <div class="item">
          <div>望京</div>
          <div :class="[selected == true ? 'yesdot1' : 'nodot1']"></div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      selected: false,
      allset: false,
      // 顶部状态快速搜索按钮
      all: true,
      on: false,
      out: false,
      // 数量统计
      allnum: 0,
      onnum: 0,
      outnum: 0,

      data: {
        token: window.sessionStorage.getItem("token"),
        where: ""
      }
    };
  },
  mounted() {
   
  },
  methods: {
    // 返回
    goback(){
        this.$router.go(-1)
    }
  }
};
</script>
<style>
.van-search__content {
  border-radius: 0.1rem !important;
  border: 1px solid #cccccc;
}
.select-option {
  z-index: 2100 !important;
}
</style>
<style lang="less" scoped>
.online {
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  background-color: #86f2b2;
  margin-right: 0.1rem;
}
.outline {
  display: inline-block;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 0.1rem;
}
.status {
  background-color: #fff;
  margin-top: 0.1rem;
  padding: 0 0.2rem;
  margin-bottom: 0.1rem;
  .title {
    padding: 0.2rem;
    text-align: center;
    border-bottom: 1px solid #f2f2f2;
    font-size: 0.36rem;
  }
  .btn {
    display: flex;
    padding: 0.2rem 0;
    justify-content: space-around;
    .one {
      width: 30%;
      color: #8399d3;
      border: 1px solid #ccc;
      text-align: center;
      font-size: 0.3rem;
      padding: 0.1rem 0;
      border-radius: 0.1rem;
    }
    .yes {
      width: 30%;
      color: #ffffff;
      text-align: center;
      font-size: 0.3rem;
      padding: 0.1rem 0;
      border-radius: 0.1rem;
      background-color: #8399d3;
    }
  }
}
// 分配设备按钮
.fenpei {
  width: 1.2rem;
  text-align: center;
  padding: 0.1rem;
  background-color: #8598d5;
  color: #fff;
  border-radius: 0.1rem;
}
// 多选
.yesdot {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #8698d5;
  border-radius: 25%;
  border: 1px solid #8698d5;
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
}
.nodot {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #f2f2f2;
  border-radius: 25%;
  border: 1px solid #8698d5;
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
}
.yesdot1 {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #8698d5;
  border-radius: 25%;
  border: 1px solid #8698d5;
}
.nodot1 {
  width: 0.3rem;
  height: 0.3rem;
  background-color: #f2f2f2;
  border-radius: 25%;
  border: 1px solid #8698d5;
}
// 确认分配
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
</style>
