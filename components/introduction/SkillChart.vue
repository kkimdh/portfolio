<template>
  <div class="introduction_skill_wrap">
    <base-chart
      :chart-id="props.chartId"
      :chart-data="props.chartData"
      :chart-config="chartConfig"
      :chart-figure="props.chartFigure"
    ></base-chart>
    <p class="skill-chart-title text-center">{{ props.chartTitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@nuxtjs/composition-api";
import { ChartConfiguration, ChartData, ChartDataset } from "chart.js";

import BaseChart from "@/components/chart/BaseChart.vue";

const props = defineProps<{
  chartId: string;
  chartData: ChartData | null;
  chartFigure: number[];
  chartTitle: string;
}>();

const GRADIENT_COLORS = ["#DDD6F3", "#FAACA8"];

const drawGradient = (
  _ctx: any,
  gradientColors: string[],
  _top: number = 0
) => {
  const _chart = _ctx.chart;
  const { ctx, chartArea } = _chart;

  if (!chartArea) {
    return undefined;
  }

  let width: number | null = null;
  let height: number | null = null;
  let gradient: CanvasGradient | null = null;

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient !== null || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

    gradientColors.forEach((v, index) => {
      gradient!!.addColorStop(index, v);
    });
  }
  if (gradient === null) {
    return undefined;
  }
  return gradient;
};

const chartDataSets = computed<ChartDataset[]>(() => [
  {
    data: props.chartData as number[],
    cutout: "70%",
    borderWidth: 0,
    backgroundColor: (_ctx: any): any => {
      const dataColor = drawGradient(_ctx, GRADIENT_COLORS);
      return [dataColor, "#ffffff"];
    },
  },
]);

const data = computed<ChartData>(() => ({
  labels: [""],
  datasets: chartDataSets.value,
}));

const chartConfig = computed<ChartConfiguration>(() => ({
  type: "doughnut",
  data: data.value,
  options: {
    // interaction: { mode: null as any },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  },
}));
</script>

<style scoped lang="scss">
.introduction_skill_wrap {
  width: 65%;
  max-width: 200px;
  min-width: 125px;
  padding: 20px 0;
  font-family: "Nunito Sans";
  margin: 0 auto;

  .skill-chart-title {
    font-size: 15px;
    font-weight: bold;
    margin-top: 15px !important;
  }
}

@media (max-width: 600px) {
  .introduction_skill_wrap {
    width: 60%;
    padding: 30px 0;

    .skill-chart-title {
      font-size: 14px;
    }
  }
}
</style>
