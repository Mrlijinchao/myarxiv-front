<template>
    <div>
        <div>
            <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
                <el-step title="Step 1" />
                <el-step title="Step 2" />
                <el-step title="Step 3" />
            </el-steps>
        </div>
        <div>
            <div>
                <!-- 表单 -->
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
  <div v-if="active === 0">
    <el-form-item label="Email" prop="email">
      <div class="text-annotation">
        <p>(请确保邮箱能够接收到验证码)</p>
        <el-input v-model="ruleForm.email" size="large" class="step1-sty" placeholder="Please input email" />
      </div>
      
    </el-form-item>
    <el-form-item label="Username" prop="username">
      <el-input v-model="ruleForm.username" size="large" class="step1-sty" placeholder="Please input username" />
    </el-form-item>
    <el-form-item label="Password" prop="password" >
      <div class="text-annotation">
        <p>(密码至少包含大写字母，小写字母，数字，特殊字符其中三种，且长度为8到12位！)</p>
        <el-input type="password" v-model="ruleForm.password" size="large" class="step1-sty" placeholder="Please input password" />
      </div>
    </el-form-item>
    <el-form-item label="RePassword" prop="rePassword" >
      <el-input type="password"  v-model="ruleForm.rePassword" size="large" class="step1-sty" placeholder="Please input password again" />
    </el-form-item>
    <el-form-item label="Verification" prop="validate">
      <div class="verify-code">
        <el-input
            v-model="ruleForm.validate"
            placeholder="Verification code"
            size="large" 
            class="step1-sty"
          ></el-input>
          <div class="code" @click="refreshCode">
            <VerifyCode :identifyCode="identifyCode"></VerifyCode>
          </div>
      </div> 
        </el-form-item>
  </div>
  <div v-if="active === 1">
    <el-form-item label="Full-name" prop="fullName">
      <div class="full-name">
        <el-input size="large" v-model="ruleForm.fullName.first" placeholder="First or Given name" />
        <el-input size="large" v-model="ruleForm.fullName.last" placeholder="Last or family name" />
        <el-input size="large" v-model="ruleForm.fullName.suffix" placeholder="Suffix" />
      </div>
      
    </el-form-item>
    <el-form-item label="Organization" prop="organization">
      <div class="organization">
        <p>(Users who do not have a current affiliation can select "Unaffiliated" or "Independent Researcher")</p>
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
      </div>
    </el-form-item>
    <el-form-item label="Country" prop="country">
      <el-select-v2
        v-model="ruleForm.country"
        :options="countryList"
        placeholder="Country"
        size="large"
      />

      <!-- <el-select v-model="ruleForm.country" clearable placeholder="Country" size="large">
        <el-option
          v-for="item in countryList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select> -->

    </el-form-item>
    <el-form-item label="Status" prop="status">
      <el-select-v2
        v-model="ruleForm.status"
        :options="careerStatusList"
        placeholder="Status"
        size="large"
      />
    </el-form-item>
    <el-form-item label="Group" prop="group">
      <el-radio-group v-model="ruleForm.group">
        <el-radio v-for="(item,i) in subjectList" v-bind:key="i" :label="item.value" name="type" @change="getSecondaryCategory()">
        {{ item.label }}
        </el-radio>
        <!-- <el-radio label="Online activities" name="type" />
        <el-radio label="Promotion activities" name="type" />
        <el-radio label="Offline activities" name="type" />
        <el-radio label="Simple brand exposure" name="type" /> -->
      </el-radio-group>
    </el-form-item>
    <el-form-item label="DefaultCategory" prop="defaultCategory">
      <div class="text-annotation">
        <p>(请先选择一个Group)</p>
        <el-select-v2
        class="select-v2"
        v-model="ruleForm.defaultCategory"
        :options="categorySecondaryList"
        placeholder="Default category"
        size="large"
        @change="print"
      />
      </div>
      
    </el-form-item>
    <el-form-item label="homePage" prop="homePage">
      <el-input v-model="ruleForm.homePage" size="large" class="step1-sty" placeholder="Please input your homePage URL" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </div>

  <div v-if="active === 2">
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email" size="large" class="step1-sty" placeholder="Please input email" disabled />
    </el-form-item>
    <el-form-item label="Username" prop="username">
      <el-input v-model="ruleForm.username" size="large" class="step1-sty" placeholder="Please input username" disabled />
    </el-form-item>
    <el-form-item label="Password" prop="password" >
      <el-input type="password" v-model="ruleForm.password" size="large" class="step1-sty" placeholder="Please input password" disabled />
    </el-form-item>
    <el-form-item label="RePassword" prop="rePassword" >
      <el-input type="password" v-model="ruleForm.rePassword" size="large" class="step1-sty" placeholder="Please input password again" disabled />
    </el-form-item>
        <el-form-item label="Full-name" prop="fullName">
      <div class="full-name">
        <el-input size="large" v-model="ruleForm.fullName.first" placeholder="First or Given name" disabled />
        <el-input size="large" v-model="ruleForm.fullName.last" placeholder="Last or family name" disabled />
        <el-input size="large" v-model="ruleForm.fullName.suffix" placeholder="Suffix" disabled />
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
        disabled
      >
        <el-option label="Unaffiliated" value="Unaffiliated" />
        <el-option label="Independent Researcher" value="Independent Researcher" />
      </el-select>
    </el-form-item>
    <el-form-item label="Country" prop="country">
      <el-select-v2
        v-model="ruleForm.country"
        :options="countryList"
        placeholder="Country"
        size="large"
        disabled
      />
    </el-form-item>
    <el-form-item label="Status" prop="status">
      <el-select-v2
        v-model="ruleForm.status"
        :options="careerStatusList"
        placeholder="Status"
        size="large"
        disabled
      />
    </el-form-item>
    <el-form-item label="Group" prop="group">
      <el-radio-group v-model="ruleForm.group" disabled>
        <el-radio v-for="(item,i) in subjectList" v-bind:key="i" :label="item.value" name="type">
        {{ item.label }}
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
        placeholder="Default category"
        size="large"
        disabled
      />
    </el-form-item>
    <el-form-item label="homePage" prop="homePage">
      <el-input v-model="ruleForm.homePage" size="large" class="step1-sty" disabled  placeholder="Please input your homePage URL"/>
    </el-form-item>
    <el-form-item label="emailVerifyCode" prop="emailVerifyCode">
      <el-input placeholder="Please input emailVerifyCode" v-model="ruleForm.emailVerifyCode" size="large" class="step1-sty"/>
      <el-button size="large" type="primary" @click="sendEmail()" plain>发送邮箱验证码</el-button>
    </el-form-item>
  </div>
  <template v-if="active === 1 || active === 2 ">
            <el-button style="margin-top: 12px" @click="last">Last step</el-button>
          </template>
          <template v-if="active === 0 || active === 1 ">
            <el-button style="margin-top: 12px" @click="next">Next step</el-button>
          </template>
          <template v-if="active === 2">
            <el-button style="margin-top: 12px" type="primary" @click="submitForm(ruleFormRef)">Register</el-button>
          </template>
  </el-form>  
        </div>
        <!-- 点击注册之后的弹出框 -->
        <el-dialog v-model="centerDialogVisible" title="提示" width="30%" center>
          <span>
            恭喜您注册成功！
          </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="gotoLogin()">
              去登录
             </el-button>
          </span>
        </template>
        </el-dialog>

        </div>
    </div>
</template>
<script setup>
import { reactive,ref,onMounted } from 'vue'
import VerifyCode from "./VerifyCode.vue";
import { ElMessage } from 'element-plus'
import {getRegisterInfo,getCategoryBySubjectId,checkUserAccount,sendVerifyEmail,userRegister} from '@/api/user';

const centerDialogVisible = ref(false)

let countryList = ref([]);
let careerStatusList = ref([]);
let subjectList = ref([]);
let categorySecondaryList = ref([]);

onMounted(() => {
  // 刷新验证码
  refreshCode();
  getRegisterNeededInfo();
})

// 获取注册所需信息
function getRegisterNeededInfo() {
  getRegisterInfo().then((data) => {
    transferData(data.message);
    console.log(data.message);
  })
}

// 转换数据
function transferData(message) {
  
  for(let i = 0;i<message.countryList.length;i++){
    let country = {
      value: message.countryList[i].countryId,
      label: message.countryList[i].countryName,
    }
    countryList.value.push(country);
  }

  for(let i = 0;i<message.careerStatusList.length;i++){
    let careerStatus = {
      value: message.careerStatusList[i].careerStatusId,
      label: message.careerStatusList[i].careerStatusName,
    }
    careerStatusList.value.push(careerStatus);
  }

  for(let i = 0;i<message.subjectList.length;i++){
    let subject = {
      value: message.subjectList[i].subjectId,
      label: message.subjectList[i].subjectName,
    }
    subjectList.value.push(subject);
  }


}

// 根据subjectId获取二级分类
function getSecondaryCategory() {
  ruleForm.defaultCategory = '';
  getCategoryBySubjectId({subjectId: ruleForm.group}).then((data) => {
    transferCategory(data.message)
    console.log(data.message)
  })
  
}

function transferCategory(message) {
  categorySecondaryList.value = [];
  for(let i = 0;i<message.length;i++){
    let category = {
      value: message[i].categorySecondaryId,
      label: message[i].categorySecondaryName
    }
    categorySecondaryList.value.push(category);
  }
}


// 步骤条
const active = ref(0)
const next = () => {
  if (active.value++ > 2) active.value = 0
}

const last = () => {
  if(active.value-- < 0) active.value = 0;
}



// 以下为自定义校验方法

// 验证码校验
const validatorCode = (rule, value, callback) => {
      if (value !== identifyCode.value) {
        callback(new Error("验证码不正确"));
        // alert("验证码不正确")
      } else {
        callback();
      }
    };

// 全名校验
const validatorFullName = (rule, value, callback) => {
  if(value.first === '' || value.last === '' || value.suffix === ''){
    callback(new Error("Please input FullName"));
  }else{
      callback();
  }
}

// 邮箱校验
const validatorEmail = (rule, value, callback) => {
  
  let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

  if(!regEmail.test(value)){
    callback(new Error("邮箱格式错误！"));
  }else{
    callback();
  }
  
}
// 校验密码
const validatorPassword = (rule, value, callback) => {
  let regPassword = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]{8,30}$/
  if(!regPassword.test(value)){
    callback(new Error("密码强度太弱！"));
  }else{
    callback();
  }

}

// 判断密码是否一致
const validatorRePassword = (rule, value, callback) => {
  if(value != ruleForm.password){
    callback(new Error("密码不一致！"));
  }else{
    callback();
  }

}

// 检查用户名是否已存在
const checkRepetition = (rule, value, callback) => {
  checkUserAccount({userAccount: value}).then((data) => {
    console.log(data)
    if(data.meta.status === 400){
      callback(new Error(data.meta.msg));
    }else{
      callback();
    }
  })

}

// 发送邮箱验证码

function sendEmail() {
  sendVerifyEmail({email: ruleForm.email}).then((data) => {
      if(data.meta.status === 400){
        ElMessage({
        message: '验证码发送失败！请重试！',
        type: 'warning',
      })
    }else{
        ElMessage({
        message: data.message,
        type: 'success',
      })
      }
  })
}



const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  email: '',
  username: '',
  password: '',
  rePassword: '',
  validate: [],
  fullName: {
    first: '',
    last: '',
    suffix: ''
  },
  organization: '',
  country: null ,
  status: null ,
  group: '',
  defaultCategory: null ,
  homePage: '',
  emailVerifyCode:''
})

const rules = reactive({
  email: [
    { required: true, message: 'Please input email', trigger: 'blur'},
    { validator: validatorEmail ,trigger: 'blur'},
  ],
  username: [
    {
      required: true,
      message: 'Please input unique username',
      trigger: 'blur',
    },
    {
      validator: checkRepetition,
      trigger: 'blur',
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'blur',
    },
    {
      trigger: 'blur',
      validator: validatorPassword
    }
  ],
  rePassword: [
    {
      required: true,
      message: 'Please input password again',
      trigger: 'blur',
    },
    {
      trigger: 'blur',
      validator: validatorRePassword
    }
  ],
  validate: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
          {
            validator: validatorCode,
            trigger: "blur",
          },
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
    { required: true,
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
    { required: true,
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
  emailVerifyCode:[
    {
      required: true,
      message: 'Please input', 
      trigger: 'blur' 
    }
  ]

})

// 提交表单
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      prepareDataAndRegister();
      console.log('submit!')
    } else {
      ElMessage({
      message: '请按规则填写完整信息，点击Last step退回修改',
      type: 'warning',
  })
    }
  })
}

// 整理表单数据，并发送
function prepareDataAndRegister() {

  let registerInfo = {
    user: {
        userEmail: ruleForm.email,
        userAccount: ruleForm.username,
        userPassword: ruleForm.password,
        userName: ruleForm.fullName.first + " " + ruleForm.fullName.last + " " + ruleForm.fullName.suffix,
        userOrganization: ruleForm.organization,
        userCountryId: ruleForm.country,
        careerStatusId: ruleForm.status,
        subjectId: ruleForm.group,
        defaultCategoryId: ruleForm.defaultCategory,
        userHomePage: ruleForm.homePage
    },
    verificationCode: ruleForm.emailVerifyCode
}
console.log(registerInfo)
userRegister(registerInfo).then((data) => {
  if(data.meta.status === 200){
    centerDialogVisible.value = true;
  }else{
    ElMessage({
        message: '注册失败！请检查信息是否填写完整！稍后重试！',
        type: 'warning',
      })
  }
})


}

// 注册成功去登录
import {useRouter} from "vue-router";
let router = useRouter();
function gotoLogin(){
  router.push({
    path:"/login",
  })
}

// 重置表单
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

// const options = Array.from({ length: 10000 }).map((_, idx) => ({
//   value: `${idx + 1}`,
//   label: `${idx + 1}`,
// }))


// 验证码
let identifyCode = ref('');
let identifyCodes = ref('1234567890');
 // 点击刷新，更新验证码
function refreshCode() {
      identifyCode.value = "";
      makeCode(identifyCodes.value, 4);
    }
    // 制作验证
function makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        identifyCode.value +=
          identifyCodes.value[randomNum(0, identifyCodes.value.length)];
      }
    }
    // 生成随机数
function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

</script>
<style scoped>
.demo-ruleForm{
    background-color: antiquewhite;
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
</style>