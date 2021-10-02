<template>
  <div>
    <div id="eChars" class="e-chars"></div>

    <div class="button-box">
      <myBtn @click="showYearForm" class="btn">年统计</myBtn>
      <myBtn @click="showMonthForm" class="btn">月统计</myBtn>
    </div>
  </div>
</template>

<script>
import myBtn from 'components/common/myButton/myButton'

import { getStatisticsInfo } from 'network/statistics'

export default {
  name: "formStatistics",
  components: {
    myBtn
  },
  data() {
    return {
      title: '月份',
      dataYear: {
        name: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        xName: '月'
      },
      dataMonth: {
        name: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        xName: '日'
      },
      lineChartDom: Object,
    };
  },
  created() {
  },
  methods: {
    init() {
      this.initValue();
    },
    initValue() {
      this.lineChartDom = this.$root.$echarts.init(document.getElementById('eChars'));
      this.lineChartDom.showLoading();
      // this.dataYear && this.dataMonth
      // 数据请求和初始化数据
      getStatisticsInfo()
        .then(res => {
          this.initChartsData(res.data.data1, res.data.data2);
          this.lineChartDom.hideLoading();
          this.showYearForm();
        }, error => {
          console.log(error)
          this.lineChartDom.hideLoading();
        });
    },
    initChartsData(data1, data2) {
      let data1Flag = false,
        data2Flag = false;

      if (data1) {
        data1Flag = data1.type ? true : false;
        data2Flag = !data1Flag;
      } else if (data2) {
        data2Flag = data2.type ? true : false;
        data1Flag = !data2Flag;
      } else {
        return ;
      }

      const money1 = JSON.parse(data1.money);
      const money2 = JSON.parse(data2.money);

      let input = data1Flag ? money1 : money2,
        output = data1Flag ? money2 : money1;

      this.dataYear.input = input.month;
      this.dataYear.output = output.month;

      this.dataMonth.input = input.day;
      this.dataMonth.output = output.day;
    },
    showCharts(chartDom, data) {
      chartDom.setOption({
        title: {
          text: this.title
        },
        legend: {
          show: true
        },
        xAxis: {
          data: data.name,
          name: data.xName,
          axisLabel: {
            formatter: '{value}',
              align: 'center'
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '收入/100元'
          },
          {
            type: 'value',
            name: '支出/10元'
          }
        ],
        series: [
          {
            name: '收入',
            type: 'line',
            data: data.input,
            yAxisIndex: 0,
            areaStyle: {
              color: '#c7557d',
              opacity: 0.5
            }
          },
          {
            name: '支出',
            type: 'line',
            data: data.output,
            yAxisIndex: 1,
            areaStyle: {
              color: '#ff0',
              opacity: 0.5
            }
          }
        ]
      });
    },
    showYearForm() {
      this.showCharts(this.lineChartDom, this.dataYear);
    },
    showMonthForm() {
      this.showCharts(this.lineChartDom, this.dataMonth);
    },

    },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>
.e-chars {
  width: 100%;
  height: 60vh;
}

.button-box {
  display: flex;
  justify-content: center;
}
.btn {
  margin: 0 10px;
}
</style>
