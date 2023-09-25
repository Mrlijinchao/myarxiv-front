<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="logo-col">
                            <img src="../../../../public/img/icons/arxiv-logo-one-color-white.svg" class="logo"/>
                        </el-col>
                        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
                        ><div class="grid-content ep-bg-purple-light"
                        /></el-col>
                        <el-col class="search-col" :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                            <div class="search-div">
                                <el-input
                                    v-model="input3"
                                    placeholder="Please input"
                                    class="input-with-select"
                                    clearable
                                >
                                    <template #prepend>
                                        <el-select v-model="select" placeholder="Select" style="width: 115px">
                                        <el-option label="Restaurant" value="1" />
                                        <el-option label="Order No." value="2" />
                                        <el-option label="Tel" value="3" />
                                        </el-select>
                                    </template>
                                    <template #append>
                                        <el-button :icon="Search" />
                                    </template>
                                </el-input>
                            </div>
                            
                        </el-col>
                        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                            <div class="rightArea">
                                <el-link href="http://43.139.8.186:8848/#/login" :icon="Avatar">Background</el-link>
                                <el-link href="/login"  :icon="UserFilled">
                                    Login
                                </el-link>
                                <!-- <router-link to="/login" target="myRout">About</router-link> -->
                            </div>
                        </el-col>
</template>
<script setup>
import { ref } from 'vue'
import { UserFilled,Avatar,Search} from '@element-plus/icons-vue'
const input3 = ref('')
const select = ref('')

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
  border-radius: 4px;
  background-color: red;
}

.el-col-text{
    display: flex; 
    justify-content: center;
    align-items:center;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
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

/* 搜索框 */
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

.search-col{
    display: flex;
    justify-content: right;
    align-items:center;
}
.search-div{
    display: flex;
    justify-content: right;
    align-items:center;
    height: 100%;
    background-color: red;
    width: 60%;
}

/* 登录，后台链接区域 */
.rightArea{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
}
.el-link {
  margin-right: 8px;
  color: white;
}
</style>