<template>
    <div>
        <div class="main-area">
            <div class="unSubmitted-area">
                <div>
                    <h3>待提交论文</h3>
                </div>
                <el-table :data="paperItemList" style="width: 100%">
                <el-table-column fixed prop="identifier" label="Identifier" width="200" />
                <el-table-column prop="primaryCategory" label="PrimaryCategory" width="200" />
                <el-table-column prop="title" label="Title" width="300" />
                <el-table-column prop="author" label="Author" width="300" />
                <el-table-column fixed="right" label="Actions" width="300">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Replace</el-button>
                <el-button link type="primary" size="small">Withdraw</el-button>
                <el-button link type="primary" size="small">Link data</el-button>
             </template>
                 </el-table-column>
            </el-table>
            </div>
            <!-- <div class="unSubmitted-area">
                <div>
                    <h3>已提交未审核论文</h3>
                </div>
                <el-table :data="tableData" style="width: 100%">  
                <el-table-column fixed prop="identifier" label="Identifier" width="150" />
                <el-table-column prop="type" label="Type" width="120" />
                <el-table-column prop="title" label="Title" width="120" />
                <el-table-column prop="status" label="Status" width="120" />
                <el-table-column prop="expires" label="Expires" width="600" />
                <el-table-column fixed="right" label="Actions" width="300">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Update</el-button>
                <el-button link type="primary" size="small">Delete</el-button>
                <el-button link type="primary" size="small">UnSubmit</el-button>
             </template>
                 </el-table-column>
            </el-table>
            </div> -->
        </div>
        <div>

        </div>
    </div>
</template>
<script setup>
import {onMounted,ref} from 'vue'
import { useStore } from "vuex";
let store = useStore();

onMounted(() => {
  store.dispatch('pageController/setPageCode',3)
  store.dispatch('pageController/setPageHeaderCode',3)
  getPaperList()
})


const handleClick = () => {
  console.log('click')
}

let paperList = ref([]);
let paperItemList = ref([]);
// 从store里面获取论文提交信息
function getPaperList() {
  paperList.value = store.getters['paper/getPaperList']
  console.log(paperList.value)
  for(let i = 0; i < paperList.value.length; i++){
    let tempPaper = {
      identifier: '',
      primaryCategory: '',
      title: '',
      author: '',
    }
    tempPaper.identifier = paperList.value[i].paperIdentifier
    tempPaper.primaryCategory = paperList.value[i].priAndSecDetailList[0]?.categoryPrimary || "default"
    tempPaper.title = paperList.value[i].paperTitle
    tempPaper.author = paperList.value[i].paperAuthors
    paperItemList.value.push(tempPaper)
  }

  

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
</style>