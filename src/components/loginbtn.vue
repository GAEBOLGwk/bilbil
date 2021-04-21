<template>
    <div>
        <div class="btn">{{btntext}}</div>
    </div>
</template>

<script>
    export default {
        props:['btntext']
    }
</script>

<style lang="less" scoped>
.btn{
    height: 12.778vw;
    background-color: #ff9db5;
    border-radius: 6.389vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 5vw;
}
</style>