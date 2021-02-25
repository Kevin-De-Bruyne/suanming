<template>
    <div class="edit">
        <headers title="修改密码" />
        <div class="login-box">
            <div class="title">
                <img src="../assets/logo2.png" alt="">
                舍缘盘系统
            </div>
            <div class="item-box">
                <div class="ipt-box">
                        <span class="iconfont icon-yonghutouxiang"></span>
                        <input type="password" v-model="oldpwd" placeholder="请输入原始密码" />
                        
                    </div>  
                <div class="ipt-box">
                    <span class="iconfont icon-mima"></span>
                    <input type="password" v-model="newpwd" placeholder="请输入新密码" />
                        
                    </div>
                     <div class="ipt-box">
                    <span class="iconfont icon-mima"></span>
                    <input type="password" v-model="confirmpwd" placeholder="请确认新密码" />
                        
                    </div>
            </div>
            
            
            <div class="bottom-text">
                <div class="left">
                    <!-- <div class="right" @click="$router.push('/reg')">
                        注册
                    </div> -->
                </div>
                <!-- <div class="left">
                    <div class="right" @click="submit($event)">
                        登录
                    </div>
                </div> -->
                <!-- <div class="right">
                    忘记密码
                </div> -->
                
            </div>
            <div class="butn" @click="submit($event)">
                修改
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                user:{},
                oldpwd:'',
                newpwd:'',
                confirmpwd:''
            }
        },
        created() {
           
        },
        methods: {
            submit(e){
                var token=localStorage.getItem('token')
                console.log(e)
                let {user}=this
                this.ajax({
                    url:'index/user/update_pwd',
                    data:{
                        token:token,
                        o_password:this.oldpwd,
                        password:this.newpwd,
                        a_password:this.confirmpwd
                    }
                }).then(res=>{
                    this.showtitle('修改成功').then(res=>{
                        this.$router.go(-1)
                        // location.reload()
                    })
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
$login_color:rgb(246,234,180);
$ipt_bg:rgba(246,234,180,0.2);
.edit{
    background-color: black;
    // width: 100%;
    // height: 100%;
    width: 100%;
    min-height: 100vh;
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
        color: $login_color;
    }
}
.pd-box-ipt{
    display: flex;
}
.login-box{
            top:60px;
            left: 0;
            position: absolute;
            z-index: 2;
            // box-shadow: -15px 15px 15px$login_color;
            box-sizing: border-box;
            padding: 0 20px 20px;
            width: 100%;
            
            // border: 1px solid $login_color;
            border-radius: 10px;
            // background: linear-gradient(230deg,rgba(53,57,74,0) 0%,rgb(0,0,0) 100%);
            input{
                outline: none;
            }
            .title{
                text-align: left;
                font-size: 24px;
                height: 50px;
                color: $login_color;
                margin: 0 0 0 0;
                img{
                    height: 40px;
                    vertical-align: middle;
                }
            }
            .item-box{
                box-sizing: border-box;
                .pd-box-ipt{
                    padding: 0 0 10px 0;
                }
                .right{
                        color: $login_color;
                font-size: 14px;
                display: flex;
                align-items: center;
                width: 60px;
                margin: 0 0 0 10px;
                justify-content: center;
                    }
                .ipt-box{
                    flex: 1;
                    display: flex;
                    height: 40px;
                    line-height: 40px;
                    box-sizing: border-box;
                    padding: 0 0 0 20px;
                    background: rgba(246,234,180,0.2);
                    margin: 0 0 10px 0;
                    border-radius: 100px;
                    
                    .iconfont{
                        margin: 0 8px 0 0;
                        font-size: 18px;
                        color: $login_color;
                    }
                    input{
                        width: 100%;
                        flex: 1;
                        height: 100%;
                        font-size: 12px;
                        color:  $login_color;
                    }
                    input::-webkit-input-placeholder{
                        color: $login_color;
                    }
                }
            }
            .butn{
                margin: 40px auto 0 auto;
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
                font-size: 14px;
                text-align: center;
                
                display: flex;
                justify-content: space-between;
                div{
                    cursor: pointer;
                    user-select: none;
                }
            }
        }
</style>