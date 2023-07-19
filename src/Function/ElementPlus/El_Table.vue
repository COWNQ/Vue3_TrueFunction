<!-- Table表格快速开发：
-->
<script setup>
</script>

<template>
    <div>
        <!-- 
      data： 表格数据
      stripe： 是否显示斑马纹
      size:  Table 的尺寸
      show-header： 是否显示表头
      show-overflow-tooltip: 是否隐藏额外内容并在单元格悬停时使用 Tooltip 显示它们
      cell-class-name:  单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
     -->
        <el-table :data="tableData" :stripe="true" size="small" :show-overflow-tooltip="true" :show-header="false"
            :cell-class-name="tableclass" style="width: 100%">
            <!-- 
      prop： 表格数据
      label：显示标题名称
      align: 对齐方式
      show-overflow-tooltip: 当内容过长被隐藏时显示 tooltip
     -->
            <el-table-column align="center" prop="date" label="Date" width="180" :show-overflow-tooltip="true" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<style></style>
