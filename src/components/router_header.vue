<template>
    <div class="headers norem">
        <span v-if="!noback"
        @click="goback()"
         class="iconfont icon-zuojiantou" />
        <span class="title">
            {{title}}
        </span>
    </div>
</template>

<script>
export default {
    props:['title','noback','choise_back'],
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss" scoped>
.norem{
    // margin: 20px 0 0 0;
}
    .headers{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        height: 50px;
         background: linear-gradient(to bottom,#fefdfb 0%,#E9A246 100%) !important;
        display: flex;
        align-items: center;
        text-align: center;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 14px;
        color: black;
        .title{
            flex: 1;
        }
        .iconfont{
            position: absolute;
            left: 10px;
            top: 50%;
            color:black;
            font-size: 16px;
            transform: translateY(-50%);
        }
    }
</style>