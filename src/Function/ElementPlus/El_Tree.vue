<!-- Tree树型控件快速开发： 
    已实现功能： 自定义树内容、
-->
<script setup lang="ts">
import { onMounted } from 'vue';

interface Tree {
    id: string,
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
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

const defaultProps = {
    children: 'children',
    label: 'label',
    isLeaf: 'isLeaf',
    id: 'id'
}
//序列化
const updateclass = () => {
    const targetElement = document.querySelectorAll('.levelone');
    // targetElement.parentNode.querySelector('i').remove();
    // console.log(siblingElements);
    targetElement.forEach(element => {
        element.parentNode?.querySelector('i')?.remove();
    });
}



onMounted(() => {
    updateclass()
})
</script>


<template>
    <div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
            <template v-slot="{ node, data }">
                <div v-if="node.level === 1" class="levelone equalclass">
                    <div>
                        <img alt="" src="src/images/父级.svg" style="width: 20px;height: 20px;">
                    </div>
                    <div style="">
                        {{ node.label }}
                    </div>
                </div>
                <div v-if="node.level === 2" class="equalclass" style="display: flex">
                    <div><img alt="" src="src/images/页签.svg" style="width: 20px;height: 20px;"></div>
                    <div>{{ node.label }}</div>
                </div>
                <div v-if="node.level === 3" class="equalclass" style="display: flex">
                    <div><img alt="" src="src/images/父级.svg" style="width: 20px;height: 20px;"></div>
                    <div><span>{{ node.label }} </span></div>
                </div>
            </template>
        </el-tree>
    </div>
</template>


<style scoped>
.levelone {
    margin-left: 15px;
    font-size: 18px !important;
}

.equalclass {
    display: flex;
    align-items: center;
    font-size: 18px;
}

.el-tree {
    min-width: 100%;
    display: inline-block !important;
}

.el-tree-node>.el-tree-node__children {
    overflow: visible;
}
</style>