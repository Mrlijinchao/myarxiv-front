<template>
   <div class="mainArea">
    <!-- <router-link to="/about" target="myRout">About</router-link> -->
      <div class="top-area">
         <div class="top-area-left">
            <MainLeftArea></MainLeftArea>
         </div>
         <div class="top-area-right">
            <Notification></Notification>
         </div>
      </div>
      <div class="bottom-area">
         <div>
            <SubjectInfo></SubjectInfo>
         </div>
         <div class="about-sty">
            <h2>About arXiv</h2>
            <el-link @click="getCategoryPaperList()" style="font-size: medium;" type="primary">General information</el-link><br>
            <el-link @click="getCategoryPaperList()" style="font-size: medium;" type="primary">How to Submit to arXiv</el-link><br>
            <el-link @click="getCategoryPaperList()" style="font-size: medium;" type="primary">News</el-link><br>
            <el-link @click="getCategoryPaperList()" style="font-size: medium;" type="primary">Membership & Giving</el-link><br>
            <el-link @click="getCategoryPaperList()" style="font-size: medium;" type="primary">Who We Are</el-link>
         </div>
      </div>
   </div>
</template>

<script setup>
import Notification from "./notification/Notification.vue"
import MainLeftArea from "./mainLeftArea/MainLeftArea.vue"
import SubjectInfo from "./subjectInfo/SubjectInfo.vue"
import { onMounted } from "vue";
import { useStore } from "vuex";
let store = useStore();
onMounted(() => {
   store.dispatch('pageController/setPageHeaderCode',1)
   console.log(store.getters['user/getUserInfo'])
})

</script>
<style scoped> 
.mainArea{
   height: 100%;
   width: 100%;
   background-color: white;
   display: flex;
   flex-direction: column;
   justify-content: top;
   align-items: center;
}
.top-area{
   background-color: white;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.top-area-left{
   width: 45%;
}
.top-area-right{
   width: 45%;
}
.bottom-area{
   background-color: white;
   width: 100%;
}

.about-sty{
   background-color: white;
   text-align:left;
   border-radius: 1px;
    border: 1px solid gainsboro;
}

</style>
