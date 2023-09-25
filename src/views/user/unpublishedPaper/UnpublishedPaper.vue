<template>
    <div>
        <div class="main-area">
            <div class="unSubmitted-area">
                <div>
                    <h3>待提交论文</h3>
                </div>
                <div class="submission-box">
                <div class="submission-btn"><el-button type="primary" @click="createSubmission()" plain>START NEW SUBMISSION</el-button> </div>
                <el-table :data="submissionItemList1" style="width: 100%">
                <el-table-column fixed prop="identifier" label="Identifier" width="200" />
                <el-table-column prop="type" label="Type" width="200" />
                <el-table-column prop="title" label="Title" width="200" />
                <el-table-column prop="status" label="Status" width="200" />
                <el-table-column prop="expires" label="Expires" width="300" />
                <el-table-column fixed="right" label="Actions" width="300">
                <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Update</el-button>
                <el-button link type="primary" size="small">Delete</el-button>
                </template>
                </el-table-column>
                </el-table>
                </div>
                
            </div>
            <div class="unSubmitted-area">
                <div>
                    <h3>已提交未审核通过论文</h3>
                </div>
                <el-table :data="submissionItemList2" style="width: 100%">  
                <el-table-column fixed prop="identifier" label="Identifier" width="200" />
                <el-table-column prop="type" label="Type" width="200" />
                <el-table-column prop="title" label="Title" width="200" />
                <el-table-column prop="status" label="Status" width="200" />
                <el-table-column prop="expires" label="Expires" width="300" />
                <el-table-column fixed="right" label="Actions" width="300">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Update</el-button>
                <el-button link type="primary" size="small">Delete</el-button>
                <el-button link type="primary" size="small">UnSubmit</el-button>
             </template>
                 </el-table-column>
            </el-table>
            </div>
        </div>
        <div>

        </div>
    </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import moment from 'moment'
import { useStore } from "vuex";
import {useRouter} from "vue-router";
let router = useRouter();
let store = useStore();

onMounted(() => {
  store.dispatch('pageController/setPageCode',2)
  store.dispatch('pageController/setPageHeaderCode',3)
  getSubmissionList()
})

const handleClick = () => {
  console.log('click')
}

let submissionList = ref([]);
let submissionItemList1 = ref([]);
let submissionItemList2 = ref([]);
// 从store里面获取论文提交信息
function getSubmissionList() {
  submissionList.value = store.getters['submission/getSubmissionList']
  console.log(submissionList.value)
  for(let i = 0; i < submissionList.value.length; i++){
    if(submissionList.value[i].submissionStatus === 0){
        let tempSubmission = {
        identifier: '',
        type: '',
        title: '',
        status: '',
        expires: '',
        }
        tempSubmission.identifier = submissionList.value[i].submissionIdentifier
        tempSubmission.type = submissionList.value[i].submissionType
        tempSubmission.title = submissionList.value[i].submissionTitle
        tempSubmission.expires = moment(submissionList.value[i].submissionExpires).format("YYYY-MM-DD");
        tempSubmission.status = 'incomplete'
        submissionItemList1.value.push(tempSubmission)
    }else{
        let tempSubmission = {
        identifier: '',
        type: '',
        title: '',
        status: '',
        expires: '',
        }
        tempSubmission.identifier = submissionList.value[i].submissionIdentifier
        tempSubmission.type = submissionList.value[i].submissionType
        tempSubmission.title = submissionList.value[i].submissionTitle
        tempSubmission.expires = moment(submissionList.value[i].submissionExpires).format("YYYY-MM-DD");
        if(submissionList.value[i].submissionStatus === 1){
            tempSubmission.status = 'submitted'
        }else{
            tempSubmission.status = 'on hold'
        }
        submissionItemList2.value.push(tempSubmission)
    }
    
  }


}

// 创建一个论文
function createSubmission(){
    router.push({
              path:"/submissionPaper"
          })
}

// const tableData = [
//   {
//     identifier: 'submit/123654',
//     type: 'New',
//     title: 'what is wrong with you',
//     status: 'Incomplete',
//     expires: 'CA 90036',
//   },
//   {
//     identifier: 'submit/8093475',
//     type: 'old',
//     title: 'submission-ID:809475',
//     status: 'Incomplete',
//     expires: 'CA 90036',
//   },
//   {
//     identifier: 'submit/123654',
//     type: 'New',
//     title: 'what is wrong with you',
//     status: 'Incomplete',
//     expires: 'CA 90036',
//   },
//   {
//     identifier: 'submit/123654',
//     type: 'New',
//     title: 'what is wrong with you',
//     status: 'Incomplete',
//     expires: 'CA 90036',
//   },
// ]

</script>
<style scoped>
.unSubmitted-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.main-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.submission-btn{
    width: 20%;
    text-align: center;
}
.submission-box{

}
</style>