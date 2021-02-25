<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('./assets/css/default.css');
@import url('./assets/css/global.scss');
@import url('./assets/css/medio.css');

.radio-box{
  display: flex;
  .radio-title{
    margin: 0 10px 0 0;
  }
}
.ipt{
  width: 55px;
  padding: 2px 3px;
  background: white;
  color: black;
  margin: 0 0 10px 0;
}
.ipts{
  width: 30px;
  padding: 2px 3px;
  background: white;
  color:black ;
  margin: 0 0 10px 0;
}
.ipt::placeholder{
  color: #fbd5b7 !important;
}
.middle{
  vertical-align: middle;
}
.radio-title{
  color: #fbd5b7;
  line-height: 25px;
}
.van-radio{
  /deep/.van-icon{
  border: 2PX solid #f6eab4 !important;
}
/deep/.van-radio__label{
  color: #fbd5b7!important;
}
}

.pd-box{
       box-sizing: border-box;
       padding: 10px 10px 0 10px;
   }
.content{
  background: black;
       min-height: 100vh;
       box-sizing: border-box;
       padding: 50px 10px 0 10px;
}
   .butn-box{
    text-align: center;
    margin: 0 0;
    .submit-butn{
        padding: 10px 40px !important;
        margin: 0 auto;
         background: linear-gradient(to bottom,#fefdfb 0%,#E9A246 100%) !important;
         color: #000;
    }
}
.wrap-box {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 0 0 10px 0;
    line-height: 2;
    flex-wrap: wrap;
    color: #fbd5b7;
    select {
      padding: 2px 3px;
      width: 55px;
    }
    .name-ipt {

      vertical-align: middle;
      color: #fbd5b7;
      height: 20px;
       width: 30px;
  background: none;
  border-bottom: 1px solid #f6eab4;
    }
  }
   
</style>
