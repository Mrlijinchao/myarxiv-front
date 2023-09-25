<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="common-layout">
            <el-container class="containerBox">
                <el-header class="headerBox" style="height:5rem;background-color: black;">
                    <HeaderTop></HeaderTop>
                </el-header>
                <el-header class="headerBox">
                    <Header></Header>
                </el-header>
                <el-main class="mainBox">
                    <Main></Main>
                </el-main>
                <el-footer class="footer">
                    <Footer></Footer>
                </el-footer>
            </el-container>
        </div>
    </div>
</template>
<script setup>
import Main from './components/Main/Main.vue'
import HeaderTop from "@/layout/components/Header/HeaderTop.vue"
import Header from "@/layout/components/Header/Header.vue"
import Footer from "@/layout/components/Footer/Footer.vue"
</script >

<style scoped>
/* 主体布局 */
.containerBox{
    width: 100%;
    height: 100%;
}
.headerBox{
    background-color: red;
    height: 7rem;
}
.mainBox{
    background-color: white;
    height: 50rem;
}
.footer{
    background-color: rgba(246, 249, 249, 0.963);
    height: 10rem;
}



/* 搜索框 */
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}

.search-col{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
    background-color: aqua;
    width: 50%;
}


</style>