<template>
    <div>
        <div v-if="active === 0">
            <FirstStep></FirstStep>
        </div>
        <div v-if="active === 1">
            <SecondStep ></SecondStep>
        </div>
        <div v-if="active === 2">
            <ThirdStep></ThirdStep>
        </div>
        <div v-if="active === 3">
             <FourthStep></FourthStep>
        </div> 
        <div v-if="active === 4">
            <FifthStep></FifthStep> 
        </div>

        <el-button style="margin-top: 12px" @click="last">Last step</el-button>
        <el-button style="margin-top: 12px" @click="next">Next step</el-button>
           
    </div>
</template>
<script lang="js" setup>
// 引入组件
import FirstStep from './components/FirstStep.vue'
import SecondStep from './components/SecondStep.vue'
import ThirdStep from './components/ThirdStep.vue'
import FourthStep from './components/FourthStep.vue'
import FifthStep from './components/FifthStep.vue'

import {ref,onMounted} from 'vue'
import { useStore } from "vuex";
let store = useStore();

onMounted(() => {
    store.dispatch('pageController/setPageHeaderCode',4)
})

// 步骤条
const active = ref(0)
const next = () => {
    active.value++
    store.dispatch('stepController/setStepActive',active.value)
  if (active.value > 5){
    active.value = 0
    store.dispatch('stepController/setStepActive',active.value)
  }
}

const last = () => {
    active.value--
    store.dispatch('stepController/setStepActive',active.value)
  if(active.value < 0){
    active.value = 0;
    store.dispatch('stepController/setStepActive',active.value)
  }
    
}

</script>
<style scoped>
</style>