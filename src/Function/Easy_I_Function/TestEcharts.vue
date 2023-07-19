<!-- 
    引入echarts，并在vue3中实现简单图形
 -->
<script lang="ts" setup>
import { getCurrentInstance, nextTick, onMounted } from 'vue';

const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts;

function as() {
    const myChart = echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
        tooltip: {},
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
            {
                name: "销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20, 20, 36, 10, 10, 20],
            },
        ],
    });
}

nextTick(() => {
    as()
})


</script>


<template>
    <div id="myChart" style="width: 200px; height:300px; ">
    </div>
</template>


<style>
body {
    color: #ff4400f9;
}
</style>