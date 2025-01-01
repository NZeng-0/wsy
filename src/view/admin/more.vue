<template>
  <div class="echartBox">
    <v-chart class="echart_box" :option="pieChartOptions" autoresize />
    <v-chart class="echart_box" :option="barChartOptions" autoresize/>
    <v-chart class="echart_box" :option="lineChartOptions" autoresize/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, BarChart, LineChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts';

// 手动注册需要的组件
use([CanvasRenderer, PieChart, BarChart, LineChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent]);

export default defineComponent({
  components: {
    VChart,
  },
  setup() {
    const pieChartOptions = ref({
      title: {
        text: '剧本杀分类统计',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '数量',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 48, name: '机制本' },
            { value: 735, name: '阵营本' },
            { value: 580, name: '情感本' },
            { value: 484, name: '恐怖本' },
            { value: 300, name: '还原本' },
            { value: 48, name: '硬核本' },
            { value: 735, name: '演绎本' },
            { value: 580, name: '变格本' },
            { value: 484, name: '本格本' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });

    const barChartOptions = ref({
      title: {
        text: '用户数据统计'
      },
      tooltip: {},
      legend: {
        data: ['数量']
      },
      xAxis: {
        data: ['男', '女']
      },
      yAxis: {},
      series: [
        {
          name: '数量',
          type: 'bar',
          data: [1500, 2000]
        }
      ]
    });

    const lineChartOptions = ref({
      title: {
        text: '自创/非自创商家拼团人数'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '自创',
          type: 'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '非自创',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    });

    return {
      pieChartOptions,
      barChartOptions,
      lineChartOptions,
    };
  },
});
</script>

<style>
.echartBox{
  width: 100%;
  height: 700px;
  /*background-color: #cccccc;*/
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
}
.echartBox .echart_box{
  width: 400px;
  /*background-color: brown;*/
  height: 350px;
}
/* 你可以在这里添加一些自定义样式 */
</style>