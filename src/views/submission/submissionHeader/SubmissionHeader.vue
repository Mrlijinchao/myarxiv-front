<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="logo-col">
        <!-- <img src="../../../../public/img/icons/arxiv-logo-one-color-white.svg" class="logo"/> -->
        <logo class="logo"></logo>
    </el-col>
    <el-col class="back-home" :xs="4" :sm="6" :md="2" :lg="2" :xl="11">
        <el-icon><ArrowLeftBold /></el-icon>
        <el-link type="primary" :underline="false"><h3 style="color: white;">返回主页</h3></el-link>
    </el-col>
    <el-col class="step-area" :xs="4" :sm="6" :md="14" :lg="17" :xl="11">
            <el-steps class="step-bar" :space="200" :active="active" simple>
            <el-step title="Start" :icon="Edit" />
            <el-step title="Add Files" :icon="UploadFilled" />
            <el-step title="Process" :icon="Picture" />
            <el-step title="Metadata" :icon="Picture" />
            <el-step title="Preview" :icon="Picture" />
            </el-steps>
    </el-col>

    <el-col class="image-header" :xs="8" :sm="6" :md="4" :lg="2" :xl="1">
        <div>
                    <!-- <el-avatar src="../../../../public/img/icons/apple-touch-icon-120x120.png" /> -->
                    <img class="img-style" src="../../../../public/img/icons/apple-touch-icon-120x120.png" />
        </div>
        


    </el-col>
    </template>
<script setup>
import { Edit, Picture, UploadFilled,ArrowLeftBold } from '@element-plus/icons-vue'
import {watch,computed,ref} from 'vue'
import { useStore } from "vuex";
import Logo from '../../../components/Logo-MyarXiv.vue'
let store = useStore();

let active = ref(0)
const getStepActive = computed(()=>{
	//返回的是ref对象
	return store.state.stepController.stepActive
})

watch(getStepActive , (newVal, oldVal) => {
    if(newVal != oldVal){
        active.value = newVal;
    }
}, 
{
    immediate:true,
    deep:true}
);

</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
  height: 100%;
  
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 1px;
  background-color: red;
}

.el-col-text{
    display: flex; 
    justify-content: center;
    align-items:center;
}


/* logo */
.logo{
    height: 5rem;
    width: 10rem;
}
.logo-col{
    display: flex;
    justify-content: left;
    align-items:center;
}


.image-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.img-style{
    border-radius: 50%;
    height: 4rem;
}

.step-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.step-bar{
    background-color: red;
    width: 100%;
    height: auto;
    color: white;
}
.back-home{
    display: flex;
    justify-content: center;
    align-items: center;
    
}
</style>