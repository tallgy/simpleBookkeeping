<template>
  <div>
    <div id="eChars" class="e-chars"></div>
  </div>
</template>

<script>

export default {
  name: "formStatistics",
  data() {
    return {
      title: '',
      data: {
        name: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', ' '],
        input: [5, 20, 36, 10, 10, 20],
        output: [3, 12, 3, 0, 1, 1]
      }
    };
  },
  created() {
  },
  methods: {
    initForm() {
      const chart = this.$root.$echarts.init(document.getElementById('eChars'));
      chart.setOption({
        title: {
          text: this.title
        },
        tooltip: {},
        xAxis: {
          data: this.data.name
        },
        yAxis: [
          {
            type: 'value',
            name: '收入'
          },
          {
            type: 'value',
            name: '支出'
          }
        ],
        series: [
          {
            name: '收入',
            type: 'line',
            data: this.data.input,
            yAxisIndex: 0,
            areaStyle: {
              color: '#c7557d',
              opacity: 0.5
            }
          },
          {
            name: '支出',
            type: 'line',
            data: this.data.output,
            yAxisIndex: 1,
            areaStyle: {
              color: '#ff0',
              opacity: 0.5
            }
          }
        ]
      });
    }
  },
  mounted() {
    this.initForm();
  }
}
</script>

<style scoped>
.e-chars {
  width: 100%;
  height: 60vh;
}
</style>