<template>
    <div class="mainBody">
        <div>
            <div class="left-area">
                eeeeeeeeeeeeeeeeeeeeeeeee
            </div>
            <div class="right-area">
rrrrrrrrrrrrrrrrrrrrrrr
            </div>
        </div>
        <div class="bottom-area">
tttttttttttttttttttttttt
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.left-area{
    background-color: antiquewhite;
    height: 20rem;
    width: 10rem;
}
.right-area{
    background-color: blue;
    height: 40%;
    width: 50%;
}
.bottom-area{
background-color: burlywood;
height: 50%;
}
.top-area{
    display: flex;
    justify-content: center;
    align-items: center;
}
.mainBody{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>