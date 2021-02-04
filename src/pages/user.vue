<template>
    <div class="content">
        <headers title="个人中心" />

        <div class="user-box">
            <img :src="data.avatar" alt="">
            <div class="text">
                {{data.nick_name}}
            </div>
        </div>

        <div class="list-box">
            <div class="item">
                <van-cell title="查询记录" is-link to="chaxun" />
                <van-cell title="意见反馈" is-link to="fankui" />
                <van-cell title="退出登录" @click="login_out" />
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default{
        data(){
            return{
                data:{}
            }
        },
        created() {
            this.getdata()
        },
        methods: {
            ...mapMutations(['changeuser']),
            login_out(){
                this.changeuser({})
                localStorage.setItem('token','')
                
                this.$router.push('/login')
            },
            getdata(){
                this.ajax({
                    url:'index/user/getUserInfo'
                }).then(res=>{
                    this.data=res.data.data
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    header{
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        color: #000;
        font-size: 16px;
    }
    .user-box{
        display: flex;
        margin: 15px 0;
        padding: 0 10px;
        img{
            margin: 0 10px 0 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .text{
            display: flex;
            align-items: center;
        }
    }
    .content{
        background: rgb(244,246,248);
    }
    .list-box{
        padding: 0 10px;
    }
</style>