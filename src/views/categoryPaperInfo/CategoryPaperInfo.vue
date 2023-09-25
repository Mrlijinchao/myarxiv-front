<template>
    <div>
        <div>
            <h1>{{ categorySecondaryName }}</h1>
            <h3>Authors and titles for recent submissions</h3>
        </div>
        <div class="paper-list-sty">
            <div class="top-area">
               <PaginationBar :total="pageTotal" @page="getPageInfo"></PaginationBar>
               <div>
                <DataPicker></DataPicker> 
               </div>
                
            </div>
            <div>
                <div class="paper-box" v-for="(paperInfo,i) in paperInfoList" v-bind:key="i">
                    [{{ i+1 }}]<el-link type="primary"> myArXiv:{{ paperInfo.paperIdentifier }}</el-link>
                    [
                    <template v-for="(file,i1) in paperInfo.FileList" v-bind:key="i1">
                        <el-link :href="file.link" type="primary">{{ file.type }}</el-link>,
                    </template>
                    ]
                    <h4>{{ paperInfo.paperTitle }}</h4>
                    <template v-for="(author,i2) in paperInfo.authorList" v-bind:key="i2">
                       <el-link type="primary">{{ author }},</el-link> 
                    </template>
                    
                    <p>Comments: {{ paperInfo.paperComments }}</p>
                    <p>
                        Subjects: 
                       <template v-for="(subject,i3) in paperInfo.subjectList" v-bind:key="i3">
                            <b v-if="i3 === 0">{{ subject }}</b>
                            <template v-if="i3 != 0">{{ subject }}</template>,
                        </template> 
                    </p>
                </div>
            </div>
            <PaginationBar :total="pageTotal" @page="getPageInfo"></PaginationBar>
        </div>
        
    </div>
</template>
<script setup>
import { onMounted,ref,reactive } from "vue";
import {useRoute} from "vue-router";
import PaginationBar from "@/components/PaginationBar.vue";
import DataPicker from "@/components/DataPicker.vue";
import { ElLoading } from 'element-plus'

let route = useRoute();

//分类id
let categorySecondaryId = ref(0);
let categorySecondaryName = ref('');

onMounted(() => {
    categorySecondaryId.value = route.query.categorySecondaryId;
    categorySecondaryName.value = route.query.categorySecondaryName;
    requestParam.categorySecondaryId = route.query.categorySecondaryId;
    getPaperInfo();
})

// 分页信息
let pageTotal = ref(0);
let requestParam = reactive({
    categorySecondaryId: 0,
    pageSize: 4,
    pageNum: 1
  });
function getPageInfo(page) {
    console.log(page)
    requestParam.pageSize = page.pageSize;
    requestParam.pageNum = page.pageNum;
    console.log("分页反馈")
    // getPaperInfo();
}

// 获取论文列表
let paperInfoList = reactive([])
import { getPaperInfoById } from "@/api/common";
function getPaperInfo() {
    console.log("发送请求")
    console.log(requestParam)
    const loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    getPaperInfoById(requestParam).then((data) => {
        if(data.meta.status === 200) {
            pageTotal.value =  Object.keys(data.message).length;
            let length = Object.keys(data.message).length;
            let paperList = data.message;

            for(let i = 0;i<length;i++) {
                let paperInfo = {
                    paperIdentifier: '',
                    FileList: [],
                    paperTitle:'',
                    authorList: [],
                    paperComments: '',
                    subjectList: []
                }
                paperInfo.paperIdentifier = paperList[i].paperRoughly.paperIdentifier;
                paperInfo.paperTitle = paperList[i].paperRoughly.paperTitle;
                paperInfo.paperComments = paperList[i].paperRoughly.paperComments;
                paperInfo.authorList = paperList[i].paperRoughly.paperAuthors.split(',');
                
                let subjectList = paperList[i].paperRoughly.priAndSecDetailList
                for(let j = 0;j<subjectList.length;j++){
                    paperInfo.subjectList.push(subjectList[j].categorySecondary)
                }

                paperList[i].fileList.forEach((element) => {
                    let file = {
                            type: element.fileType.replace(".", ""),
                            link: element.fileUrl
                        };
                    paperInfo.FileList.push(file);
                });
                paperInfoList.push(paperInfo);
            }

            console.log(Object.keys(data.message).length)
            console.log(data.message);
            console.log(paperInfoList);
        }
        loading.close();
    })
}


</script>
<style scoped>
.paper-box{
    border-bottom: 1px solid gainsboro;
    background-color: white;
    text-align: left;
    margin-top: 2rem;
}
.paper-list-sty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: white;
}
.top-area{
    display: flex;
    justify-content: left;
    align-items: center;
}
</style>