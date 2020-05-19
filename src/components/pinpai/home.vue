<template>
  <div>
    <div class="seven_echarts" id="seven"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.get_echarts();
  },
  data() {
    return {
      //   折线图
      seven_option: {
        title: {
          text: "近七日收入"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          //boundaryGap: false,
          data: ["5/19", "5/20", "5/21", "5/22", "5/23", "5/24", "5/25"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "收入",
            type: "line",
            normal: {
              show: true, //是否在节点上显示当前值
              position: "top" //显示的当前值的位置,top表示在折线上方显示
            },
            smooth: true,
            data: [2, 10, 12, 21, 54, 260, 500],
            lineStyle: {
              color: "#60C0DD"
            }
          }
        ]
      }
    };
  },
  methods: {
    get_echarts() {
      this.seven_chart = this.echarts.init(document.getElementById("seven"));
      // 把配置和数据放这里
      this.seven_chart.setOption(this.seven_option);
    }
  }
};
</script>
<style scoped lang="less">
// 折线图
.seven_echarts {
  height: 4rem;
  width: 100%;
}
</style>
