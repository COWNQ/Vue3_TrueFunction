<!--  将树形关系数组，改为树型结构
  { id: '01', pid: '', label: '交付物' },
  { id: '02', pid: '', label: '专家审核' },
  { id: '03', pid: '', label: '其他' },
  { id: '04', pid: '01', label: '总体设计方案' },
  { id: '05', pid: '01', label: '软硬件设备清单' },
  { id: '06', pid: '02', label: '方案初稿' },
  { id: '07', pid: '03', label: '其他材料' },
  { id: '1', pid: '04', label: '测试一' },
  { id: '2', pid: '04', label: '测试二' },

  目标————————>>>>>>
  [
    {
        id: 'ashdkashd',
        label: 'Level one 1',
        children: [
            {
                id: 'asdasd',
                label: 'Level two 1-1',
                children: [
                    {
                        id: 'asdasd',
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    }
]
-->
<script lang="ts" setup>
import { onMounted, ref } from "vue";

function convertToTree(data) {
    const map = {};
    const result = [];

    data.forEach(item => {
        const { id, pid, label } = item;
        map[id] = { id, label, children: [] };

        if (pid === '') {
            result.push(map[id]);
        } else {
            map[pid].children.push(map[id]);
        }
    });

    return result;
}

const data = [
    { id: '01', pid: '', label: '交付物' },
    { id: '02', pid: '', label: '专家审核' },
    { id: '03', pid: '', label: '其他' },
    { id: '04', pid: '01', label: '总体设计方案' },
    { id: '05', pid: '01', label: '软硬件设备清单' },
    { id: '06', pid: '02', label: '方案初稿' },
    { id: '07', pid: '03', label: '其他材料' },
    { id: '1', pid: '04', label: '测试一' },
    { id: '2', pid: '04', label: '测试二' },
];

const treeData = convertToTree(data);
console.log(treeData);
</script>

<template></template>

<style>
.tableclass {
    background-color: antiquewhite;
}
</style>
