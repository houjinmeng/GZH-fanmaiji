<template>
  <div>
    <!-- 收益统计 -->
    <div class="shouyi">
      <div class="top" @click="machinelist">
        <div>设备总数 : 120</div>
        <div style="margin-top:0.2rem">未分配 : 60</div>
      </div>
      <div class="bottom">
        <div
          class="box"
          style="border-right:1px solid #918baa"
          @click="pinpai"
        >
          <div>平台管理员</div>
          <span>
            {{ yesterday }}
            <span style="font-size:0.22rem">个</span>
          </span>
        </div>
        <div class="box" @click="pinpai">
          <div>品牌总数</div>
          <span>
            {{ month }}
            <span style="font-size:0.22rem">个</span>
          </span>
        </div>
      </div>
    </div>
    <div style="padding:0 0.2rem">
      <!-- 功能模块 -->
      <div class="same_box">
        <div
          class="same"
          style="border-right:1px solid #eeeeee"
          @click="machinelist"
        >
          <img src="../../assets/img/shebei.png" alt />
          <div>
            <div class="top">设备管理</div>
            <div class="bot">在线{{ online }}/{{ count }}台 ></div>
          </div>
        </div>
        <div class="same" style="margin-left:0.2rem" @click="machinelist">
          <img src="../../assets/img/jingying.png" alt />
          <div>
            <div class="top">分配设备</div>
            <div class="bot">分配设备给品牌 ></div>
          </div>
        </div>
      </div>
      <div class="function">
        <div class="box" @click="pinpai">
          <img src="../../assets/img/order.png" alt />
          <div>品牌管理</div>
        </div>
        <div class="box" @click="pinpai">
          <img src="../../assets/img/mendian.png" alt />
          <div>添加品牌</div>
        </div>
        <div class="box" @click="pingtai">
          <img src="../../assets/img/cangku.png" alt />
          <div>员工管理</div>
        </div>
        <div class="box" @click="pingtai">
          <img src="../../assets/img/machine.png" alt />
          <div>添加员工</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    
  },
  data() {
    return {
      data: {
        token: window.sessionStorage.getItem("token")
      },
      month: "0",
      yesterday: "0",
      count: "0",
      online: "0"
    };
  },
  methods: {
    // 设备列表
    machinelist(){
      this.$router.push('/machine')
    },
    // 品牌列表
    pinpai(){
      this.$router.push('/pinpai')
    },
    // 平台列表
    pingtai(){
      this.$router.push('/pingtai')
    }
  }
};
</script>
<style lang="less" scoped>
body {
  background: #f0f2f5 !important;
}
// 收益统计
.shouyi {
  width: 100%;
  color: #ffffff;
  margin-bottom: 0.2rem;
  background: url("../../assets/img/home.png") top left no-repeat;
  background-size: cover;
  .top {
    height: 3.48rem;
    text-align: center;
    padding-top: 1.1rem;
    box-sizing: border-box;
    font-size: 0.4rem;
    span {
      display: inline-block;
      margin-top: 0.1rem;
      font-weight: 800;
    }
  }
  .bottom {
    height: 1.28rem;
    display: flex;
    font-size: 0.31rem;
    border-top: 1px solid #dedde6;
    background-color: rgba(245, 241, 241, 0.336);
    color: #656566;
    .box {
      width: 50%;
      text-align: center;
      padding-top: 0.2rem;
      span {
        font-weight: 800;
        font-size: 0.36rem;
      }
    }
  }
}
.same_box {
  padding: 0.22rem;
  background-color: #fff;
  border-radius: 0.2rem;
  margin-top: 0.22rem;
  display: flex;
  .same {
    width: 50%;
    display: flex;
    align-items: center;
    img {
      width: 0.7rem;
      height: 0.7rem;
      margin-right: 0.3rem;
    }
    .top {
      font-size: 0.35rem;
    }
    .bot {
      font-size: 0.28rem;
      color: #ffa27c;
    }
  }
}
// 功能模块
.function {
  padding: 0.2rem;
  background-color: #fff;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  .box {
    color: #000;
    width: 24%;
    text-align: center;
    display: inline-block;
    font-size: 0.3rem;
    img {
      height: 0.7rem;
      width: 0.7rem;
    }
  }
}
// 设备管理
.machine {
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.2rem;
  margin-top: 0.2rem;
  width: 100%;
  .title {
    font-size: 0.28rem;
    font-weight: 800;
    border-bottom: 1px solid #eeeeee;
    padding: 0.2rem;
    padding-bottom: 0.05rem;
  }
  .content {
    padding: 0.2rem;
    .box {
      width: 24%;
      text-align: center;
      color: #000;
      display: inline-block;
      font-size: 0.3rem;
      img {
        width: 0.7rem;
        height: 0.7rem;
      }
    }
  }
}
</style>
