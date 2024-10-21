<template>
  <div :class="`${props.chartId}-container p-relative`">
    <canvas :id="`${props.chartId}`"></canvas>
    <div v-show="props.chartFigure" class="chart-figure p-absolute">
      <p>{{ props.chartFigure }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chart, ChartConfiguration, ChartData } from "chart.js";

import { onMounted, onUnmounted, watch } from "@nuxtjs/composition-api";

let chart: Chart | null = null;

const props = withDefaults(
  defineProps<{
    chartId: string;
    doughnutText?: boolean;
    chartData?: ChartData | null;
    chartConfig: ChartConfiguration;
    chartFigure?: number;
    width?: number | null;
    height?: number | null;
    position?: string | null;
    left?: number | null;
  }>(),
  {
    chartData: null,
    doughnutText: false,
    width: null,
    height: null,
    position: null,
    left: null,
  }
);

watch(
  () => props.chartConfig,
  (v) => {
    if (v === null) {
      return;
    }

    if (chart === null) {
      return;
    }

    chart.data = v.data;

    if (v.plugins) {
      // @ts-ignore
      chart.plugins = v.plugins;
    }

    chart.update();
  }
);

onMounted(() => {
  if (process.server) {
    return;
  }

  const ctx: HTMLCanvasElement = document.getElementById(
    props.chartId
  ) as HTMLCanvasElement;

  const config: ChartConfiguration = props.chartConfig;

  if (ctx) {
    chart = new Chart(ctx, config);
  }
});

onUnmounted(() => {
  if (chart) {
    chart.destroy();
  }
});
</script>

<style scoped lang="scss">
.chart-figure {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
