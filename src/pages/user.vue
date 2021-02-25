<template>
    <div class="content">
        <headers title="个人中心" />

        <div class="user-box">
            <img :src="img" alt="">
            <div class="whole">
            <div class="text">
                {{data.nick_name}}
            </div>
            <div class="account">
                账号：{{data.mobile}}
            </div>
            </div>
          
        </div>

        <div class="list-box">
            <div class="item">
                <li @click.stop="uploadHeadImg">
								<div class="shimin">修改头像</div>
								<!-- <van-icon name="arrow" color="#ddd" size="24" class="mine-list-right" /> -->
				</li>
                <input type="file" accept="image/*" @change="edittou" class="hiddenInput" style="display: none;"/>
                <van-cell title="查询记录" is-link to="chaxun" />
                <van-cell title="意见反馈" is-link to="fankui" />
                <van-cell title="修改密码" is-link to="editpwd" />
                <van-cell title="修改昵称" is-link to="editnick" />
                <van-cell title="退出登录" @click="login_out" />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:{},
                img:''
            }
        },
        created() {
            this.getdata()
        },
        methods: {
            login_out(){
                localStorage.setItem('token','')
                this.$router.push('/login')
            },
            getdata(){
                this.ajax({
                    url:'index/user/getUserInfo'
                }).then(res=>{
                    this.data=res.data.data
                    this.img=res.data.data.avatar
                })
            },
            uploadHeadImg () {
	    		this.$el.querySelector('.hiddenInput').click();
            },
            edittou(e){
                var that = this;
              	let $target = e.target || e.srcElement;
              	let file = $target.files[0];
              	var reader = new FileReader();
              	reader.onload = (data) => {
                let res = data.target || data.srcElement;
	                this.img = res.result;
	                this.upload();
	            }
                reader.readAsDataURL(file);
                console.log(file)
            },
            upload(){
                var token=localStorage.getItem('token')
                 this.ajax({
                    url:'index/user/update_avatar',
                    data:{
                        token:token,
                        avatar:this.img
                    }
                }).then(res=>{
                    this.data=res.data.data
                    location.reload();
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.van-cell{
    background-color: rgba(246,234,180,0.2);
    color:rgb(246,234,180);
    border-bottom: rgb(246,234,180);

}

.van-icon-arrow::before {
    color: rgb(246,234,180);
}
.van-cell::after{
     border-bottom:1px solid rgb(246,234,180);
}
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
         color:rgb(246,234,180);
          img{
            margin: 0 10px 0 0;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .whole{
            display: flex;
            flex-direction: column;
           
        .text{
            display: flex;
            align-items: center;
        }
        .account{
            margin-top: 23px;
        }
        }
       
    }
    .content{
        background: black;
    }
    .list-box{
        padding: 0 10px;
            width: 100%;
            li{
            width: 100%;
            list-style: none;
            display: flex;
             border-bottom:rgb(246,234,180);
            color:rgb(246,234,180);
            height: 48px;
            justify-content: space-between;
           
            flex-direction: row;
            background-color: rgba(246,234,180,0.2);
            .shimin{
                line-height: 48px;
                padding-left: 15px;
                font-size: 14px;
            }
        }
 
        
    }
</style>