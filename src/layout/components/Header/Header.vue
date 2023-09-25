<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- <div class="hearerBar"> -->
    <el-row :gutter="10">
        <template v-if="pageHeaderCode === 1">
            <MainHeader></MainHeader>  
        </template>
        <template v-if="pageHeaderCode === 2">
            <LoginHeader></LoginHeader>
        </template>
        <template v-if="pageHeaderCode === 3">
            <UserHeader></UserHeader>
        </template>
        <template  v-if="pageHeaderCode === 4">
            <SubmissionHeader></SubmissionHeader>
        </template>
    </el-row>
    <!-- </div> -->
</template>
<script setup>
import MainHeader from "@/views/home/mainHeader/MainHeader.vue"
import LoginHeader from "@/views/login/loginHeader/LoginHeader.vue"
import UserHeader from '@/views/user/userHeader/UserHeader.vue'
import SubmissionHeader from '@/views/submission/submissionHeader/SubmissionHeader.vue'
import { ref,onMounted,onBeforeMount,watch,computed} from "vue";
import { useStore } from "vuex";
let store = useStore();

// import EventBus from "../../../utils/EventBus";

// import {useRouter} from "vue-router";
// let router = useRouter();

onMounted(() =>{
})

onBeforeMount(() =>{
    // EventBus.off('changeHeaderStyle');
})

let pageHeaderCode = ref(0);
const getPageHeaderStatusCode = computed(()=>{
	//返回的是ref对象
	return store.state.pageController.pageHeaderCode;
})

watch(getPageHeaderStatusCode , (newVal, oldVal) => {
	console.log('newVal, oldVal', newVal, oldVal)
    if(newVal != oldVal){
        pageHeaderCode.value = newVal;
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
</style>