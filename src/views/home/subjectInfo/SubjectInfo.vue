<template>
    <div class="subject-list">
      <div class="subject-item" v-for="(subjectItem,i) in homeInfoList" v-bind:key="i">
        <h2>{{subjectItem.subjectName}}</h2>
        <div v-for="(primaryItem,i1) in subjectItem.categoryPrimary" v-bind:key="i1">
            <h3>{{ primaryItem.categoryPrimaryName }}</h3>
            <div v-for="(secondaryItem,i2) in primaryItem.categorySecondary" v-bind:key="i2">
                <el-link @click="getCategoryPaperList(secondaryItem.categorySecondaryId,secondaryItem.categorySecondaryName)" style="font-size: medium;" type="primary">{{ secondaryItem.categorySecondaryName }}</el-link>
            </div>
        </div>
    </div>  
    </div>
</template>
<script setup>
import {getHomeInfo} from "@/api/common";
import { onMounted,ref } from "vue";
import {useRouter} from "vue-router";
import { ElLoading } from 'element-plus'
let router = useRouter();
// 周期钩子函数
onMounted(() => {
    getInfo();
})

// 请求主页信息
let homeInfoList  = ref([])
async function getInfo() {
    // let data = await getHomeInfo()
    // console.log(data)
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    getHomeInfo().then((data) => {
        homeInfoList.value = data.message
        loading.close();
        console.log("返回结果")
        console.log(homeInfoList.value)
    });
}

// 获取分类id并跳转到分类论文列表页面

function getCategoryPaperList(secondaryId,secondaryName) {
    console.log(secondaryId);
    router.push({
    path:"/categoryPaperInfo",
    query:{ //query是个配置项
        categorySecondaryId: secondaryId,
        categorySecondaryName: secondaryName
    }
})
}

</script>
<style scoped>
.subject-list{
    border: 1px solid gainsboro;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align:left;
}
.subject-item{
    background-color: white;
    border-radius: 1px;
    border-bottom: 1px solid gainsboro;
}
</style>