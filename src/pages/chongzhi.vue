<template>
    <div class="content">
        <headers title="充值中心"/>

        <div class="yellow-title">
            恶意上传假的付款凭证，将做封号处理!!!
        </div>

        <div class="title-text">
            收款人信息
        </div>

        <div class="ipt-box">
            <div class="text1">
                 银行名称: {{kuan.bank_name}}
            </div>  
           <div class="text2">
               银行账号： {{kuan.bank_num}}
           </div>
           <div class="text3">
               持卡人手机号:{{kuan.bank_phone}}
           </div>
            
        </div>

        <div class="title-text">
            微信收款码
        </div>

        <div class="img-box">
            <img :src="kuan.wechat" alt="">
        </div>

        <div class="title-text">
            支付宝收款码
        </div>

        <div class="img-box">
            <img :src="kuan.zhifubao" alt="">
        </div>

        <div class="title-text">
            当前套餐
        </div>

        <div class="ipt-box">
            <div class="text1">
                 {{taocan_info.name}}
            </div>  
           <div class="text2">
               ￥{{taocan_info.money}}
           </div>
           <div class="text3">
               可用次数:{{taocan_info.number}}
           </div>
           <div class="text4">
               可用天数:{{taocan_info.exp_time}}
           </div>
            
        </div>

        <div class="white-box">
            <div class="title">
                选择您的打款方式
            </div>
            <div class="container">

            
            <van-radio-group v-model="radio" checked-color="rgb(246,234,180)">
  <van-cell-group>
      <van-cell title="银行卡打款" clickable @click="radio = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="微信打款" clickable @click="radio = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
      <van-cell title="支付宝打款" clickable @click="radio = '3'">
      <template #right-icon>
        <van-radio name="3" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>
</div>
        </div>
        <div class="white-box">
            <div class="title">
                上传付款凭证
            </div>
            <div class="upload-box">
                <div class="left">
                    付款凭证
                </div>
                <div class="right">
                     <van-uploader v-model="fileList" max-count="1"  />
                </div>
            </div>
        </div>
        <div class="butn" @click="submit()">
            提交
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fileList:[],
            radio:'1',
            id:this.$route.query.id,
            chongzhi_num:'',
            data:{},
            kuan:{},
            taocan_info:{}
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        getdata(){
            this.ajax({
                url:'index/for_tell_order/payPage',
                data:{
                    order_id:this.id
                }
            }).then(res=>{
                this.data=res.data.info
                this.taocan_info=JSON.parse(res.data.info.sm_info)
                console.log(this.taocan_info)
            })
             this.ajax({
                    url:'index/for_tell_order/platform_bank'
                }).then(res=>{
                    this.kuan=res.data.info
                })
        },
        submit(){
            if(!this.fileList.length){
                this.showtitle('请先上传支付凭证')
                return
            }
            console.log(this)
            this.ajax({
                url:'index/for_tell_order/pay',
                data:{
                    pay_type:this.radio,
                    order_id:this.id,
                    pay_img:this.fileList[0].content
                }
            }).then(res=>{
                this.showtitle('提交成功，请等待商家审核').then(res=>{
                    this.$router.go(-1)
                })
            })
        }
    },
}
</script>

<style lang="scss" scoped>
html{
    background: #5a5a5c;
}
.img-box{
    height: 150px;
    box-sizing: border-box;
    padding: 10px;
    background:  #5a5a5c;
    color:#fbd5b7;
}
.title-text{
    font-weight: bold;
    font-size: 16px;
    background:  #5a5a5c;
    padding: 0 10px;
    color: #fbd5b7;
}
.ipt-box{
    box-sizing: border-box;
    padding: 10px 20px;
    background:#5a5a5c;
    color: #fbd5b7;
    input{
        width: 100%;
        height: 100%;
        background: none;
    }
}
.upload-box{
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
   padding: 15px;
   .left{
       display: flex;
       align-items: center;
       color:#fbd5b7;
   }
}
 .butn{
    background: linear-gradient(to bottom,#fefdfb 0%,#E9A246 100%) !important;
    color: black;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 60px;
    font-size: 18px;
    // padding: 20px 10px;
        margin: 50px 50px 0px 50px; 
    }
    // /deep/ .van-icon-success{
    //     background-color: #fbd5b7;
    // }
    // /deep/ .van-icon{
    //     background-color: #fbd5b7;
    // }
    /deep/ .van-cell{
        line-height: 50px;
        background-color: #5a5a5c ;
        border:none;
         color: #fbd5b7;
        
    }
     /deep/ .van-cell:after{
     border:none;
        
    }
.content{
    background: #5a5a5c;
}
    .yellow-title{
        background: #5a5a5c;
        color: #fbd5b7;
        box-sizing: border-box;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
    }
    .white-box{
        margin: 10px 0 0 0;
        background: #5a5a5c;
        border-radius: 6px;
        .title{
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            padding: 0 10px;
            height: 40px;
            line-height: 40px;
             color: #fbd5b7;
        }
        .container{
            box-sizing: border-box;
            padding: 0 20px;
        }
    }

</style>