<template>
    <div class="navtop">
        <div class="textfont">{{text}}</div>
        <div class="r">
         <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:['text']
    }
</script>

<style lang="less" scoped>
.navtop{
    height: 12.889vw;
    background-color: white;
    display: flex;
   
    .textfont{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4vw; 
    }
   
}
.r{
    padding: 10px;
    line-height: 32px;
}
</style>