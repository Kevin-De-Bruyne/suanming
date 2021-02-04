<template>
    <div>
        <div class="login-box">
            <div class="title">
                 <img src="../assets/logo.png" alt="">
                舍缘盘系统
            </div>
            <div class="item-box">
                <div class="ipt-box">
                <span class="iconfont icon-yonghutouxiang"></span>
                <input type="text" v-model="user.name" placeholder="请入昵称" />
            </div>  
            <div class="ipt-box">
                <span class="iconfont icon-shoujihao"></span>
                <input type="number" v-model="user.phone" placeholder="请输入手机号" />
            </div>
            <div class="ipt-box">
                <span class="iconfont icon-mima"></span>
                <input type="password" v-model="user.password" placeholder="请输入密码" />
            </div>
            <div class="ipt-box">
                <span class="iconfont icon-mima"></span>
                <input type="password" v-model="user.password2" placeholder="请再次输入密码" />
            </div>
            </div>
            
            <div class="butn" @click="submit">
                注册
            </div>
            <div class="bottom-text">
                <div class="left" @click="$router.push('/login')">
                    登录
                </div>
                <div class="right">
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
                user:{}
            }
        },
        methods: {
            submit(){
                let {user}=this
                this.ajax({
                    url:'index/login/doRegister',
                    data:{
                        nick_name:user.name,
                        mobile:user.phone,
                        password:user.password,
                        a_password:user.password2
                    }
                }).then(res=>{
                    localStorage.setItem('token',res.data.token)
                    this.showtitle('注册成功').then(res=>{
                        this.$router.push('/')
                    })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    $login_color:rgb(246,234,180);
    $ipt_bg:rgba(246,234,180,0.2);
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
        color: $login_color;
    }
}
.login-box{
             margin: 150px 0 0 70px;
            width: 275px;
             background: rgba(255,255,255,0.1);
            // box-shadow: -15px 15px 15px$login_color;
            box-sizing: border-box;
            padding: 10px 20px 20px;
            // border: 1px solid $login_color;
            border-radius: 10px;
            // background: linear-gradient(230deg,rgba(53,57,74,0) 0%,rgb(0,0,0) 100%);
            input{
                outline: none;
            }
            .title{
                text-align: center;
                font-size: 24px;
                height: 60px;
                color: $login_color;
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
                        color: $login_color;
                    }
                    input{
                        flex: 1;
                        height: 100%;
                        font-size: 12px;
                        color:  $login_color;
                    }
                    input::-webkit-input-placeholder{
                        color: white;
                    }
                }
            }
            .butn{
                margin: 40px auto 30px auto;
                border-radius: 100px;
                border: 2px solid $login_color;
                color: $login_color;
                width: 100px;
                height: 38px;
                line-height: 38px;
                text-align: center;
                cursor: pointer;
                user-select: none;
            }
            .bottom-text{
                color: $login_color;
                text-align: center;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                div{
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
</style>