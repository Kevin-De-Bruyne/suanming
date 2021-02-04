<template>
    <div>
         <div class="logo-box">
            <!-- <img src="../assets/logo_login.png" class="logo" alt=""> -->
            <!-- <div class="text">
                尔吉精舍登录系统
            </div> -->
        </div>
        <router-view></router-view>
        <video class="bg_video"
     src="../assets/bg_video.mp4"
     ref="bg_video"
     loop autoplay
     >  
    </video>
    </div>
</template>

<script>
    
</script>

<style lang="scss" scoped>
$login_color:rgb(246,234,180);
$ipt_bg:rgba(246,234,180,0.2);
 .bg_video{
     position: fixed;
     bottom: 0;
     right: 0;
     left: 0;
     top: 0;
    //  min-height: 100vh;
    //  min-width: 100vw;
    //  max-height: 100vh;
    width: auto;
    height: auto;
     min-width: 100%;
     min-height: 100%;
     z-index: -1;
   }
    .logo-box{
    display: flex;
    align-items: center;
        width: 100%;
    justify-content: center;
    margin: 0 0 0 0;
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
            
            
            // box-shadow: -15px 15px 15px$login_color;
            box-sizing: border-box;
            padding: 20px 40px 40px;
            width: 100%;
            height: 360px;
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