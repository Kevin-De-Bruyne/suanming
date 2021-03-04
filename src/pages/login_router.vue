<template>
    <div>
        <div class="login-box">
            <div class="title">
                <img class="logo-img" src="../assets/suan.png" alt="">
            </div>
            <div class="item-box">
                <div class="ipt-box">
                <span class="iconfont icon-yonghutouxiang"></span>
                <input type="text" v-model="user.name" placeholder="用户名" />
            </div>  
            <div class="ipt-box">
                <span class="iconfont icon-mima"></span>
                <input type="password" v-model="user.password" placeholder="密码" />
            </div>
            </div>
            
            <div class="butn" @click="submit($event)">
                登录
            </div>
             <!-- <div class="bottom-texts">
                
                <div class="left">
                 <van-checkbox v-model="checked" shape="square" icon-size="20px" checked-color="rgb(246,234,180)"></van-checkbox>
                 <span>记住账号密码</span>
                </div>
            </div> -->
            <div class="bottom-text">
                <div class="forget">
               <van-checkbox v-model="checked" shape="square" icon-size="16px" checked-color="rgb(24,25,6)"></van-checkbox>
                 <span>记住密码</span>
                </div>
                <div class="left" @click="$router.push('/reg')">
                    注册
                </div>
                <div class="right"  @click="forget">
                    忘记密码
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user:{},
                checked:true
            }
        },
        created() {
        //   this.user=localStorage.getItem('user')
        
             this.user.name=localStorage.getItem('name')
               this.user.password=localStorage.getItem('password')  
              
        },
        methods: {
            forget(){
                this.$router.push('/forget_pwd')
            },
            submit(e){
                console.log(e)
                let {user}=this
                this.ajax({
                    url:'index/login/doLogin',
                    data:{
                        account:user.name,
                        password:user.password
                    }
                }).then(res=>{
                    localStorage.setItem('token',res.data.token)
                     if(this.checked==true){
                    localStorage.setItem('name',this.user.name)
                   localStorage.setItem('password',this.user.password)
                     }
                    this.showtitle('登录成功').then(res=>{
                        this.$router.push('/home')
                        location.reload();
                    })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
$login_color:rgb(246,234,180);
$ipt_bg:rgba(246,234,180,0.2);
    /deep/ .van-checkbox__icon i{
        border-color:  rgb(246,234,180)!important;
        // color: rgb(246,234,180);
    }
    /deep/ .van-checkbox__icon--checked .van-icon{
       color:#FBDF4F;
    }
 .bg_video{
     position: fixed;
     left: 0;
     top: 0;
    //  min-height: 100vh;
    //  min-width: 100vw;
    //  max-height: 100vh;
     width: 100%;
     height: 100%;
     object-fit: cover;
     z-index: -1;
   }
    .logo-box{
    display: flex;
    align-items: center;
        width: 100%;
    justify-content: center;
    margin: 0 0 50px 0;
    .logo{
        width: 100%;
        height: auto;
        margin: 0 10px 0 0;
    }
    .text{
        font-size: 20px;
        color:#FBDF4F;
    }
}
.login-box{
    margin: 10% 0 0 35px;
            width:240px;
             background: rgba(255,255,255,0.1);
            // box-shadow: -15px 15px 15px$login_color;
            box-sizing: border-box;
            padding: 10px 20px 20px;
            // border: 1px solid $login_color;
            border-radius: 10px;
            // background: linear-gradient(230deg,rgba(53,57,74,0) 0%,rgb(0,0,0) 100%);
            input{
                outline: none;
                color:#FBDF4F;
            }
               input::placeholder{
                // outline: none;
                // color: rgb(246,234,180)!important;
            }
            .title{
                text-align: center;
                font-size: 24px;
                height: 60px;
                color:#FBDF4F;
                margin: 0 0 15px 0;
                img{
                    vertical-align: middle;
                }
            }
            .item-box{
                box-sizing: border-box;
                .ipt-box{
                    display: flex;
                    height: 40px;
                    line-height: 40px;
                    box-sizing: border-box;
                    padding: 0 0 0 20px;
                    background: $ipt_bg;
                    margin: 0 0 10px 0;
                    border-radius: 100px;
                    .iconfont{
                        margin: 0 8px 0 0;
                        font-size: 18px;
                        color:#FBDF4F;
                    }
                    input{
                        flex: 1;
                        height: 100%;
                        font-size: 12px;
                        color: #FBDF4F;
                    }
                    input::-webkit-input-placeholder{
                        color:#FBDF4F;
                    }
                }
            }
            .butn{
                margin: 20px auto 15px auto;
                border-radius: 100px;
                border: 2px solid #FBDF4F;
                color:#FBDF4F;
                width: 150px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                cursor: pointer;
                user-select: none;
            }
            .bottom-text{
                color:#FBDF4F;
                text-align: center;
                // font-size: 14px;
                margin-top: 7px;
                margin-bottom: 15px;
                display: flex;
                justify-content: space-between;
                .forget{
                    display: flex;
                    flex-direction: row;
                    span{
                        margin-left: 5px;
                    }
                }
                div{
                    cursor: pointer;
                    user-select: none;
                }
            }
               .bottom-texts{
                color:#FBDF4F;
                text-align: center;
                font-size: 14px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .left{
                   display: flex;
                     flex-direction: row;
                     span{
                         margin-left: 15px;
                     }
                }
                div{
                    cursor: pointer;
                    user-select: none;
                }
            
            }
        }
</style>