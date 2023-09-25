<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="logo-col">
        <img src="../../../../public/img/icons/arxiv-logo-one-color-white.svg" class="logo"/>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" class="function-bar">
        <div class="function-item" :class="{active: (pageCode === 1 ? true: false) }" @click="changePage(1)">
                <div>
                    <el-icon size="30"><HomeFilled /></el-icon>
                    <h3>首页</h3> 
                </div>
        </div>
        <div class="function-item" :class="{active: (pageCode === 2 ? true: false) }" @click="changePage(2)">
                <div>
                    <el-icon size="30"><Tickets /></el-icon>
                    <h3>未发表</h3>
                </div>
        </div>            
        <div class="function-item" :class="{active: (pageCode === 3 ? true: false) }" @click="changePage(3)">
                <div>
                    <el-icon size="30"><Document /></el-icon>
                    <h3>已发表</h3>
                </div>
        </div>           
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="7" :xl="11">
                                
    </el-col>
    <el-col class="image-header" :xs="8" :sm="6" :md="4" :lg="5" :xl="1">
        <div>
            <h3>用户名：{{ getUserName }}</h3>
        </div>
        <!-- <div>
            <img class="img-style" src="../../../../public/img/icons/apple-touch-icon-120x120.png" />
        </div> -->


        <div>

            <el-popover
                :width="100"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
                >
                <template #reference>
                    <!-- <el-avatar src="../../../../public/img/icons/apple-touch-icon-120x120.png" /> -->
                    <img @mouseover="setUserForm()" class="img-style" src="../../../../public/img/icons/apple-touch-icon-120x120.png" />
                </template>
                <template #default>
                    <div class="setting-sty">
                        <!-- <el-button type="primary" plain>修改信息</el-button>
                        <el-button type="primary" style="margin-left: -0.1rem;" plain>修改密码</el-button>
                        <el-button type="primary" style="margin-left: -0.1rem;"  plain>推出登录</el-button> -->
                        <div class="setting-item" @click="drawer = true">
                            <el-link>修改信息</el-link> 
                        </div>
                        <el-divider />
                        <div class="setting-item" @click="passwordDialogVisible = true">
                            <el-link>修改密码</el-link>
                        </div>
                        <el-divider />
                        <div class="setting-item" @click="emailDialogVisible = true">
                            <el-link>修改邮箱</el-link>
                        </div>
                        <el-divider />
                        <div class="setting-item" @click="logoutDialogVisible = true">   
                            <el-link>退出登录</el-link>
                        </div>
                    </div>
                </template>
            </el-popover>

        </div>

        <div>
            <!-- 修改信息弹出框 -->
            <el-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
                <div>
                        <el-form
                            ref="ruleFormRef"
                            :model="ruleForm"
                            :rules="rules"
                            label-width="120px"
                            class="demo-ruleForm"
                            :size="formSize"
                            status-icon
                        >
                    
                            <el-form-item label="Full-name" prop="fullName">
                                <div class="full-name">
                                    <el-input size="large" v-model="ruleForm.fullName.first" placeholder="First or Given name"/>
                                    <el-input size="large" v-model="ruleForm.fullName.last" placeholder="Last or family name" />
                                    <el-input size="large" v-model="ruleForm.fullName.suffix" placeholder="Suffix"/>
                                </div>
      
                            </el-form-item>
                            <el-form-item label="Organization" prop="organization">
                                <el-select 
                                    v-model="ruleForm.organization" 
                                    filterable
                                    allow-create
                                    default-first-option
                                    :reserve-keyword="false"
                                    placeholder="Please input your organization"
                                    size="large"
                                >
                                    <el-option label="Unaffiliated" value="Unaffiliated" />
                                    <el-option label="Independent Researcher" value="Independent Researcher" />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Country" prop="country">
                                <el-select-v2
                                    v-model="ruleForm.country"
                                    :options="countryList"
                                    size="large"
                                />
                            </el-form-item>
                            <el-form-item label="Status" prop="status">
                                <el-select-v2
                                    v-model="ruleForm.status"
                                    :options="careerStatusList"
                                    size="large"
                                />
                            </el-form-item>
                            <el-form-item label="Group" prop="group">
                                <el-radio-group v-model="ruleForm.group">
                                    <el-radio v-for="(item,i) in subjectList" v-bind:key="i" :label="item.value" name="type" @change="getSecondaryCategory()">
                                    {{  item.label }}
                                    </el-radio>
        <!-- <el-radio label="Promotion activities" name="type" />
        <el-radio label="Offline activities" name="type" />
        <el-radio label="Simple brand exposure" name="type" /> -->
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="DefaultCategory" prop="defaultCategory">
                                <el-select-v2
                                    class="select-v2"
                                    v-model="ruleForm.defaultCategory"
                                    :options="categorySecondaryList"
                                    size="large"
                                />
                                </el-form-item>
                            <el-form-item label="homePage" prop="homePage">
                                <el-input v-model="ruleForm.homePage" size="large" class="step1-sty"  placeholder="Please input your homePage URL"/>
                            </el-form-item>
                            <el-button style="margin-top: 12px" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                        </el-form>
                    </div>
                </el-drawer>

            <!-- 修改密码弹出框 -->
            <el-dialog v-model="passwordDialogVisible" title="修改用户密码" width="30%" center>
                <el-form
                    ref="passwordRuleFormRef"
                    :model="passwordForm"
                    :rules="passwordRules"
                    label-width="120px"
                    :size="formSize"
                    status-icon
                    class="dialog-box"
                >
                <el-form-item class="dialog-box-item" label="原密码" prop="oldPassword">
                    <el-input
                        v-model="passwordForm.oldPassword"
                        type="password"
                        placeholder="Please input old password"
                        show-password
                    />
                </el-form-item>
                    
                    <el-form-item class="dialog-box-item" label="新密码" prop="newPassword">
                        <el-input
                        class="input-bar"
                        v-model="passwordForm.newPassword"
                        type="password"
                        placeholder="Please input new password"
                        show-password
                    />
                    </el-form-item>
                    
                    <el-form-item class="dialog-box-item" label="新密码*" prop="newPasswordAgain">
                        <el-input
                        class="input-bar"
                        v-model="passwordForm.newPasswordAgain"
                        type="password"
                        placeholder="Please input new password again"
                        show-password
                    />
                    </el-form-item>
                    
                </el-form>
                
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="passwordDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="passwordSubmitForm(passwordRuleFormRef)">
                            Submit
                        </el-button>
                    </span>
                </template>
            </el-dialog>

             <!-- 修改邮箱弹出框 -->
             <el-dialog v-model="emailDialogVisible" title="修改邮箱号" width="30%" center>
                <el-form
                    ref="emailRuleFormRef"
                    :model="emailForm"
                    :rules="emailRules"
                    label-width="120px"
                    :size="formSize"
                    status-icon
                    class="dialog-box"
                >
                    <el-form-item class="dialog-box-item" label="原邮箱号" prop="oldEmail">
                        <el-input
                            class="input-bar"
                            v-model="user.userEmail"
                            placeholder="Please input new email"
                            disabled
                        />
                    </el-form-item>
                    <el-form-item class="dialog-box-item" label="新邮箱号" prop="newEmail">
                        <el-input
                            class="input-bar"
                            v-model="emailForm.newEmail"
                            placeholder="Please input new email"
                        />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="emailDialogVisible = false">Cancel</el-button>
                        <el-button type="primary" @click="emailSubmitForm(emailRuleFormRef)">
                            Submit
                        </el-button>
                    </span>
                </template>
            </el-dialog>

            <!-- 退出登录弹出框 -->
            <el-dialog v-model="logoutDialogVisible" width="20%" center>
                <span>您确认退出登录吗？</span>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="logoutDialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="logout()">
                            确认
                        </el-button>
                    </span>
                </template>
            </el-dialog>


        </div>

    </el-col>
    </template>
<script setup>
import { HomeFilled, Tickets, Document} from '@element-plus/icons-vue'
import { ref, onMounted,watch,computed,reactive } from 'vue';
import {useRouter} from "vue-router";
import { ElMessage } from 'element-plus'
let router = useRouter();

const drawer = ref(false)
const passwordDialogVisible = ref(false)
const emailDialogVisible = ref(false)
const logoutDialogVisible = ref(false)

function changePage(num) {
    if(num === 1){
        pageCode.value = 1
        router.push({
        path:"/userHome",
        })
    }
    if(num === 2){
        pageCode.value = 2
        router.push({
        path:"/unpublishedPaper",
        })
    }
    if(num === 3){
        pageCode.value = 3
        router.push({
        path:"/publishedPaper",
        })
    }
}

import { useStore } from "vuex";
let store = useStore();

onMounted(() => {

})

let user = ref();
function setUserForm() {
    user.value = getUser.value;
    console.log(user.value)
    ruleForm.homePage = user.value.userHomePage;
    ruleForm.organization = user.value.userOrganization;
    console.log(user.value.userOrganization)
    let fullNameList = user.value.userName.split(" ");
    if(fullNameList.length === 2){
        ruleForm.fullName.first = fullNameList[0];
        ruleForm.fullName.last = fullNameList[1];
        ruleForm.fullName.suffix = '';
    }else if(fullNameList.length === 3){
        ruleForm.fullName.first = fullNameList[0];
        ruleForm.fullName.last = fullNameList[1];
        ruleForm.fullName.suffix = fullNameList[2];
    }else if(fullNameList.length === 1){
        ruleForm.fullName.first = fullNameList[0];
    }
    getRegisterNeededInfo()
}


// 从vuex里面获取用户姓名
const getUserName = computed(()=>{
	//返回的是ref对象
	return store.state.user.user.userName;
})

const getUser = computed(()=>{
	//返回的是ref对象
	return store.state.user.user;
})

let pageCode = ref(0);
const getPageStatusCode = computed(()=>{
	//返回的是ref对象
	return store.state.pageController.pageStatusCode;
})

watch(getPageStatusCode , (newVal, oldVal) => {
	console.log('newVal, oldVal', newVal, oldVal)
    if(newVal != oldVal){
        pageCode.value = newVal;
    }
}, 
{
    immediate:true,
    deep:true}
);

// 全名校验
const validatorFullName = (rule, value, callback) => {
  if(value.first === '' || value.last === '' || value.suffix === ''){
    callback(new Error("Please input FullName"));
  }else{
      callback();
  }
}

const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  fullName: {
    first: '',
    last: '',
    suffix: ''
  },
  organization: '',
  country: null ,
  status: null ,
  group: null,
  defaultCategory: null ,
  homePage: '',
})

const rules = reactive({
  username: [
    {
      required: true,
      message: 'Please input unique username',
      trigger: 'blur',
    },
    // {
    //   validator: checkRepetition,
    //   trigger: 'blur',
    // }
  ],

  fullName: [
    {
      required: true,
      validator: validatorFullName,
      trigger: "blur",
    }
  ],
  organization: [
    {
      required: true,
      message: 'Please input',
      trigger: 'change',
    },
  ],
  country: [
    {
      required: true,
      message: 'Please select',
      trigger: 'change',
    },
  ],
  status: [
    { 
      required: true,
      message: 'Please select', 
      trigger: 'change' 
    },
  ],
  group: [
    { required: true,
      message: 'Please select', 
      trigger: 'change' 
    },
  ],
  defaultCategory: [
    {
        required: true,
      message: 'Please select', 
      trigger: 'change' 
    },
  ],
  homePage: [
    {
      message: 'Please input', 
      trigger: 'blur' 
    },
  ],

})

// 提交表单
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
    //   prepareDataAndRegister();
    changeUserInfo()
      console.log('submit!')
    } else {
      ElMessage({
      message: '请按规则填写完整信息，点击Last step退回修改',
      type: 'warning',
  })
    }
  })
}

let countryList = ref([]);
let careerStatusList = ref([]);
let subjectList = ref([]);
let categorySecondaryList = ref([]);


import {getRegisterInfo,getCategoryBySubjectId,modifyUserInfo} from '@/api/user';
// 获取注册所需信息
function getRegisterNeededInfo() {
  getRegisterInfo().then((data) => {
    transferData(data.message);
    console.log(data.message);
  })
}

// 转换数据
function transferData(message) {
  countryList.value = [];
  careerStatusList.value = [];
  subjectList.value = [];
  for(let i = 0;i<message.countryList.length;i++){
    let country = {
      value: message.countryList[i].countryId,
      label: message.countryList[i].countryName,
    }
    countryList.value.push(country);
    if(message.countryList[i].countryName === user.value.userCountry){
        ruleForm.country = message.countryList[i].countryId;
    }
  }

  for(let i = 0;i<message.careerStatusList.length;i++){
    let careerStatus = {
      value: message.careerStatusList[i].careerStatusId,
      label: message.careerStatusList[i].careerStatusName,
    }
    careerStatusList.value.push(careerStatus);
    if(message.careerStatusList[i].careerStatusName === user.value.careerStatus){
        ruleForm.status = message.careerStatusList[i].careerStatusId;
    }
  }

  for(let i = 0;i<message.subjectList.length;i++){
    let subject = {
      value: message.subjectList[i].subjectId,
      label: message.subjectList[i].subjectName,
    }
    subjectList.value.push(subject);
    if(subjectList.value[i].label === user.value.subject){
        ruleForm.group = message.subjectList[i].subjectId;
    }
  }
  getSecondaryCategory()
// // 匹配subject
//   matchSubject()
}

// 根据subjectId获取二级分类
function getSecondaryCategory() {
  getCategoryBySubjectId({subjectId: ruleForm.group}).then((data) => {
    transferCategory(data.message)
    console.log(data.message)
  })
  
}

function transferCategory(message) {
  categorySecondaryList.value = [];
  ruleForm.defaultCategory = null;
  for(let i = 0;i<message.length;i++){
    let category = {
      value: message[i].categorySecondaryId,
      label: message[i].categorySecondaryName
    }
    categorySecondaryList.value.push(category);
    if(message[i].categorySecondaryName === user.value.defaultCategory){
        ruleForm.defaultCategory = message[i].categorySecondaryId;
    }
  }
}

// 匹配之前已经选择的学科
// function matchSubject() {
//     for(let i = 0;i<subjectList.value.length;i++){
//         if(subjectList.value[i].label === user.value.subject){
//             ruleForm.group = subjectList.value[i].value;
//             // alert(ruleForm.group)
//             // alert(ruleForm.group)
//         }
//     }
//     getSecondaryCategory()
// }

// 修改用户信息
function changeUserInfo() {

    let userInfo = {
        userId: user.value.userId,
        userName: ruleForm.fullName.first + " " + ruleForm.fullName.last + " " + ruleForm.fullName.suffix,
        userOrganization: ruleForm.organization,
        userCountryId: ruleForm.country,
        careerStatusId: ruleForm.status,
        subjectId: ruleForm.group,
        defaultCategoryId: ruleForm.defaultCategory,
        userHomePage: ruleForm.homePage
    }

    console.log(userInfo)

    modifyUserInfo(userInfo).then((data) => {
        if(data.meta.status === 200){
            ElMessage({
                message: data.message,
                type: 'success',
            })
            
        }else{
            ElMessage({
                message: data.meta.msg,
                type: 'warning',
            })
        }
    })
}


// 修改密码表单

// 判断密码是否一致
const validatorRePassword = (rule, value, callback) => {
  if(value != passwordForm.newPassword){
    callback(new Error("密码不一致！"));
  }else{
    callback();
  }

}

const passwordRuleFormRef = ref()
const passwordForm = reactive({
    oldPassword: '',
    newPassword: '',
    newPasswordAgain: ''
})

const passwordRules = reactive({
    oldPassword: [
        {
            required: true,
            message: 'Please input',
            trigger: 'blur',
        },
    ],
    newPassword: [
        {
            required: true,
            message: 'Please input',
            trigger: 'blur',
        },
    ],
    newPasswordAgain: [
        {
            required: true,
            message: 'Please input',
            trigger: 'blur',
        },{
            trigger: 'change',
            validator: validatorRePassword
        }
    ],
})

import { modifyUserPassword ,modifyUserEmail,userLogout} from '@/api/user'
// 提交表单
const passwordSubmitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
    modifyUserPassword({
        userId: user.value.userId,
        oldPassword: passwordForm.oldPassword,
        newPassword: passwordForm.newPassword
    }).then((data) => {
        if(data.meta.status === 200){
            ElMessage({
                message: data.message,
                type: 'success',
            })
            passwordForm.oldPassword = '';
            passwordForm.newPassword = '';
            passwordForm.newPasswordAgain = '';
            store.dispatch('user/changeRefresh',1)
        }else{
            ElMessage({
                message: data.meta.msg,
                type: 'warning',
            })
        }
    })
    passwordDialogVisible.value = false
      console.log('submit!')
    } else {
      ElMessage({
      message: '请按规则填写完整信息',
      type: 'warning',
        })
    }
  })
}

// 修改邮箱表单

// 判断新旧邮箱号是否一致
const validatorEmail = (rule, value, callback) => {
  if(value === user.value.userEmail){
    callback(new Error("新邮箱号与旧邮箱号相同，没必要修改！"));
  }else{
    callback();
  }

}

const emailRuleFormRef = ref()
const emailForm = reactive({
    oldEmail: '',
    newEmail: '',
})

const emailRules = reactive({
    newEmail: [
        {
            required: true,
            message: 'Please input',
            trigger: 'blur',
        },
        {
            trigger: 'change',
            validator: validatorEmail
        }
    ],
})

// 提交表单
const emailSubmitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
        modifyUserEmail({
            userId: user.value.userId,
            userEmail: emailForm.newEmail
        }).then((data) => {
            if(data.meta.status === 200){
            ElMessage({
                message: data.message,
                type: 'success',
            })
            emailForm.newEmail = '';
            store.dispatch('user/changeRefresh',1)
            }else{
            ElMessage({
                message: data.meta.msg,
                type: 'warning',
            })
            }
        })
        console.log('submit!')
        emailDialogVisible.value = false
    } else {
      ElMessage({
      message: '请按规则填写完整信息',
      type: 'warning',
  })
    }
  })
}


// 退出登录
function logout(){
    userLogout({userId: user.value.userId}).then((data) => {
        if(data.meta.status === 200){
            ElMessage({
                message: data.message,
                type: 'success',
            })
            clearCache();
        }else{
            ElMessage({
                message: data.meta.msg,
                type: 'warning',
            })
        }
    })
}

// 清空路由和缓存回到首页
function clearCache(){
    store.dispatch('resetAllData')
    router.push({ path: '/' });
}

</script>
    <style scoped>
    /* 顶栏样式 */
    /* .hearerBar{
        display: flex;
        justify-content: space-around;
        align-items:center;
        height: 100%;
        width: 100%;
        background-color: blue;
    } */
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
    .function-bar{
        display: flex;
        justify-content: left;
        align-items: center;
    }
    .function-item{
        height: 100%;
        width: 7rem;
        margin-left: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .active{
        background-color: rgb(236, 117, 81);
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

    .setting-sty{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* gap: 1rem; */
    }

    .setting-item{
    }
 



/* 表单 */
    .demo-ruleForm{
    background-color: white;
    padding: 3rem;
}
.step1-sty{
    width: 30rem;
}
.verify-code{
  display: flex;
  justify-content: left;
  align-items: center;
}
.code{
  margin-bottom: -0.9rem;
  margin-left:1rem;
}
.full-name{
  display:flex;
  justify-content: left;
  align-items: center;
}
.organization{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
}
.text-annotation{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
}
.select-v2{
  width:20rem;
}


.input-bar{

}

.dialog-box{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dialog-box-item{
    background-color: white;
    width: 90%;
    padding-right: 20%;
}
 
</style>