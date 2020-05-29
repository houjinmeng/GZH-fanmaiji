<template>
  <div>
    <div>jdklsjkldjk</div>
    <div class="seven_echarts" id="seven" @click="charts"></div>
    <div>jskjk</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.seven_option.xAxis.data.push(this.a);
    this.seven_option.series[0].data.push(this.b);
    this.get_echarts();
  },
  data() {
    return {
      a: "5/26",
      b: "400",
      //   折线图
      seven_option: {
        title: {
          text: "近七日收入"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "20%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
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
            itemStyle: {
              normal: {
                color: "#8598d5",
                lineStyle: {
                  color: "#8598d5"
                }
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    // 图表初始化
    get_echarts() {
      this.seven_chart = this.echarts.init(document.getElementById("seven"));
      // 把配置和数据放这里
      this.seven_chart.setOption(this.seven_option);
    },
    // 点击图表
    charts() {
      console.log(1);
    }
  }
};
</script>
<style scoped lang="less">
// 折线图
.seven_echarts {
  height: 3.5rem;
  width: 100%;
  background-color: #fff;
}
</style>
