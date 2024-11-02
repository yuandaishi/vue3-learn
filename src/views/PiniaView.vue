<template>
    <div class="box">
        <p>练习pinia</p>
        <p>{{ count }}</p>
        <p>{{ doubleCount }}</p>
        <p>{{ name }}</p>
        <el-button @click="counter.increment">点击增加</el-button>
        <el-button @click="changeCount">点击修改</el-button>
        <el-button @click="nameStore.add">修改名字+a</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useCounterStore, useNameStore } from "@/stores/counter";

let counter = useCounterStore();
let nameStore = useNameStore();
let { name } = storeToRefs(nameStore);
// storeToRefs： method和非响应式数据会被忽略，所以解构不出来method：increment
let { count, doubleCount } = storeToRefs(useCounterStore());
count.value++;
count.value++
onMounted(() => {
    counter.increment();
})

const changeCount = () => {
    count.value = 6;
    name.value += 'ds'
}
</script>

<style lang="scss" scoped></style>
