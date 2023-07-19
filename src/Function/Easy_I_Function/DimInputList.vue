<!--  
  输入框——模糊查询 
  以实现功能：
  1、当获取焦点时，全部数据，反之
  2、已实现模糊查询

-->
<script lang="ts" setup>
import { computed, nextTick, ref, watch, watchEffect } from 'vue';
const searchlist = ref([{
    id: 1,
    name: '哈哈啦啦啦'
}, {
    id: 2,
    name: '哈哈哈'
}, {
    id: 2,
    name: '哈哈哈'
}, {
    id: 2,
    name: '都都打大啦'
}])

let changeinputtext: any = ref(null)

let inputfocusvalue: any = ref(null);
nextTick(() => {
    // 获取dom元素
    const inputfocus = document.querySelector('.inputfocus')
    // 获取焦点时的操作
    inputfocus?.addEventListener('focus', function () {
        ifshowlist.value = true
    })
    // 监听输入时操作
    inputfocus?.addEventListener('input', function () {
        changeinputtext.value = inputfocus.value
    })

    // 失去焦点
    inputfocus?.addEventListener('blur', function () {
        ifshowlist.value = false  //失去焦点不显示模糊列表
        inputfocus.value = ''  // 失去焦点时，将输入框内容清空
        inputfocusvalue = inputfocus.value
        showlist.value = searchlist.value
    })
})

const ifshowlist = ref(false)


const showlist: any = ref([])
// 给提示内容列表 初始化
showlist.value = searchlist.value

// 通过监听输入框中内容，过滤出列表中的内容模糊内容
watch(() => changeinputtext.value,
    (newvalue) => {
        showlist.value = searchlist.value.filter(a => a.name.indexOf(newvalue) >= 0)
    })

</script>


<template>
    <div>
        <input type="text" class="inputfocus">
    </div>
    <div v-show="ifshowlist">
        <ul>
            <li v-for="(item, index) in showlist" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>


<style></style>