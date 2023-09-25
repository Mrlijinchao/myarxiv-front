<template>
    <div class="main-area">

        <div class="top-area">
            <div class="userInfo">
                <div>
                    <h2>用户信息</h2>
                </div>
                <div class="userInfo-area">
                <div>
                <div class="userInfo-sty">
                    <h4>E-mail:</h4> <P>{{ userInfo.userEmail }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>Affiliation:</h4> <P>{{ userInfo.userOrganization }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>Name:</h4> <P>{{ userInfo.userName }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>URL:</h4> <P>{{ userInfo.userHomePage }}</P>
                </div>
            </div>

            <div style="margin-left: 2rem;">
                <div class="userInfo-sty">
                    <h4>Default Category:</h4> <P>{{ userInfo.defaultCategory }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>Country:</h4> <P>{{ userInfo.userCountry }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>Groups:</h4> <P>{{ userInfo.subject }}</P>
                </div>
                <div class="userInfo-sty">
                    <h4>Career Status:</h4> <P>{{ userInfo.careerStatus }}</P>
                </div>
            </div>
                </div>
        

        
        </div>
            <div class="top-right-area">
                <div class="tip-title"><h4>Preflight Checklist for New Submissions</h4></div>
                <p>
                    If your submission is written in TeX you must upload your source. PDFs produced from TeX will be declined. Learn more about why TeX source is required
                    Experienced authors recommend putting all the files you will upload into one folder before starting. Read how one author prepares a clean upload
                    Common errors that slow down announcement include mission files or bibliography. Double check for missing content before uploading. Learn more about common mistakes
                    All announced content is archival and cannot be removed. Make sure that data you don't want archived is not part of your upload, for example TeX comments in your source. Read more tips from an arXiv author
                </p>
            </div>
        </div>    
        <div class="bottom-area">
            <div>
                <p>Are there articles you are an author of on arXiv that are not listed here?</p>
                <p>If you have the paper password use <el-link type="primary">the Claim Ownership with a password form</el-link></p>
                <p>If you do not have the paper password or are claiming multiple papers <el-link type="primary">use the Claim Authorship form.</el-link> </p>
                <p>For more information please see our help page on <el-link type="primary">authority records.</el-link> </p>
            </div>
            <div>
                <p>You are encouraged to associate your ORCID ORCID logo with your arXiv account. ORCID iDs are standard, persistent identifiers for research authors. ORCID iDs will gradually supersede the role of the arXiv author identifier. To associate your ORCID iD with your arXiv account, please <el-link type="primary"> confirm your ORCID iD.</el-link></p>
            </div>
        </div>
    </div>
</template>
<script setup>
// import EventBus from "../../utils/EventBus";
import { onMounted,ref,computed,watch} from "vue";
import { useStore } from "vuex";
import { getUserHomeInfo } from "../../api/user"
let store = useStore();


// onMounted(() => {
//     EventBus.emit("changeHeaderStyle", {userHome: 'userHome',pageCode: 1});
// })
onMounted(() => {
    userId.value = route.query.userId
    console.log(userId.value)
    console.log("你好")
    getUserInfo()
    store.dispatch('pageController/setPageHeaderCode',3)
    console.log(store.getters['pageController/getPageHeaderCode'])
    store.dispatch('pageController/setPageCode',1)
})

import {useRoute} from "vue-router";
let route = useRoute();
let userId = ref(0);
let userInfo = ref({
            userId: 0,
            userName: '',
            userEmail: '',
            userAccount: '',
            userPassword: '',
            userCountry: '',
            userOrganization: '',
            careerStatus: '',
            userCreateTime: '',
            subject: '',
            defaultCategory: '',
            userHomePage: '',
            userStatus: 0
})
// 获取用户信息
function getUserInfo() {
    console.log("sss:"+userId.value)
    let tempUser = store.getters['user/getUserInfo']
    console.log(tempUser);
    if(tempUser.userId != 0){
        userId.value = tempUser.userId;
    }
    getUserHomeInfo({userId: userId.value}).then((data) => {
        console.log(data)
        if(data.meta.status === 200){
           userInfo.value = data.message.userInfo;
        store.dispatch('user/setUserInfo',data.message.userInfo)
        store.dispatch('submission/setSubmissionList',data.message.submissionList)
        store.dispatch('paper/setPaperList',data.message.paperList)
        console.log(userInfo) 
        }
        
    });
}


const getRefreshCode = computed(()=>{
	//返回的是ref对象
	return store.state.user.refreshFlag;
})

watch(getRefreshCode , (newVal, oldVal) => {
	console.log('newVal2, oldVal2', newVal, oldVal)
    if(newVal != undefined){
        getUserInfo()
    }
}, 
{
    immediate:true,
    deep:true}
);


</script>
<style scoped>
.userInfo-sty{
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    background-color: gainsboro;
}
.userInfo-sty1{
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    background-color: white;
}
.userInfo-area{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: gainsboro;
}
.top-area{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
}
.main-area{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 3rem;
}
.top-right-area{
    text-align: center;
    width: 50%;
    background-color: cornflowerblue;
    border-radius: 4px;
    border: 2px solid gainsboro;
}

.tip-title{
    height: 2rem;
    width: 40%;
    background-color: black;
    margin-top: -2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}
.userInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bottom-area{
    text-align: left;
    background-color: white;
    padding: 2rem;
}
</style>