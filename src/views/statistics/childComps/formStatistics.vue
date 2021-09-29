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

export default {
  name: "formStatistics",
  components: {
    myBtn
  },
  data() {
    return {
      title: '月份',
      dataYear: {
        name: ['1月', '2月', '3月', '2月', '2月', '2月'],
        input: [],
        output: []
      },
      dataMonth: {
        name: ['1', '2', '3', '4', '5', ' '],
        input: [],
        output: []
      },
      chartDom: Object,
    };
  },
  created() {
  },
  methods: {
    init() {
      this.initValue();
    },
    initValue() {
      this.chartDom = this.$root.$echarts.init(document.getElementById('eChars'));

      // this.dataYear && this.dataMonth
      // 数据请求和初始化数据
      this.initChartsData();
      this.getCharts();

    },
    initChartsData() {
      this.dataYear.input = [5, 20, 36, 10, 10, 20];
      this.dataYear.output = [3, 12, 3, 0, 1, 1];

      this.dataMonth.input = [2, 13,  43, 123, 23, 23];
      this.dataMonth.output = [5, 23, 1, 3, 235, 12];
    },
    getCharts() {
      this.showCharts(this.chartDom, this.dataYear);
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
          // data: data.name,
          axisLabel: {
            formatter: '{value} 月',
              align: 'center'
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '收入/100'
          },
          {
            type: 'value',
            name: '支出/10'
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
      this.showCharts(this.chartDom, this.dataYear);
    },
    showMonthForm() {
      this.showCharts(this.chartDom, this.dataMonth);
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
