<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="notify-area">
        <div class="box-card" style="color: white;">
            <div class="title1">
                这是第一个通知
            </div>
            <div class="content1">
                通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！
            </div>
        </div>
        <div class="box-card" style="color: white;">
            <div class="title2">
                这是第二个通知
            </div>
            <div class="content2">
                通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！通知！！！
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.notify-area{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}
.box-card{
    position: relative;
    width: 45%;
    margin-left: 1rem;
}

/* 通知1 */
.title1{
    position: absolute;
    background-color: gray;
    width: 50%;
    margin-top: -10px;
}
.content1{
    background-color: black;
    color: white;
    border-radius: 6px;
    border: 3px solid black;
    padding: 20px;
}

/* 通知2 */
.title2{
    position: absolute;
    background-color: red;
    width: 50%;
    margin-top: -10px;
}
.content2{
    background-color: rgb(245, 236, 236);
    color: black;
    border-radius: 6px;
    border: 3px solid red;
    padding: 20px;
}



</style>