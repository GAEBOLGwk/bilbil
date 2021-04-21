<template>
  <div>
      <van-cell-group>
        <van-field 
            class="van"
            v-model="content"
            :placeholder="placeholder"
            :label="label"
            :type="type"
        />
       </van-cell-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            content:''
        }
    },
    props:['label','placeholder','type'],
    watch:{
        content() {
               this.$emit('contentWatch',this.content)
        }
    }
}
</script>

<style>
.van{
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    font-size: 14px;
    line-height: 24px;
    background-color: #fff;
    margin:4.167vw 0;

}
.van-field__control{
        display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: none;
    outline:none;
}
.van-field__label {
    -webkit-box-flex: 0;
    -webkit-flex: none;
    flex: none;
    box-sizing: border-box;
    width: 90px;
}
</style>