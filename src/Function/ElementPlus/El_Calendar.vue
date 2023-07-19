<!-- Calendar 日历
实现功能： 自定义日历内容
-->
<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())
const aa = ref("你好")

defineExpose({
    value,
    aa
})
</script>


<template>
    <el-calendar v-model="value">
        <template #date-cell="{ data }">
            <!-- 写页面内容。。。 -->
        </template>
    </el-calendar>
</template>

<style lang="scss" scoped></style>