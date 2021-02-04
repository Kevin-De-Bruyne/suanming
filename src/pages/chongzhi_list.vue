<template>
    <div class="content">
        <headers title="充值记录" />

        <!-- <div class="yellow-title">
            点击查看充值详情
        </div> -->

        <!-- <div class="title-box">
            <span class="iconfont icon-xiangqing">

            </span>
            显示近30天的悦信分明细
        </div> -->

        <div class="item-box">
            <div class="item" v-for="(item,index) in data" :key="index">
                <div class="left">
                    <div class="text1">
                        {{item.pay_type==1?'银行卡':item.pay_type==2?'微信':item.pay_type==3?'支付宝':''}}
                    </div>
                    <div class="text2">
                        {{item.create_time}}
                    </div>
                </div>
                <div class="right">
                    ￥{{item.order_money}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:[],
                item_arr:[
                    {
                        text1:'签到',
                        time:'2020.11.13',
                        num:'+3'
                    },
                    {
                        text1:'成功分享商品',
                        time:'2020.11.13',
                        num:'+3'
                    },
                    {
                        text1:'实名认证',
                        time:'2020.11.13',
                        num:'+20'
                    }
                ]
            }
        },
        created() {
            this.getdata()
        },
        methods: {
            getdata(){
                this.ajax({
                    url:'index/for_tell_order/getOrderList'
                }).then(res=>{
                    this.data=res.data.list
                })
            }
        },
    }
</script>

<style scoped lang="scss">
.yellow-title{
        background: rgb(252,250,223);
        color: #886d50;
        box-sizing: border-box;
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
    }
   .content{
      
       .title-box{
           background: rgb(242,242,242);
           box-sizing: border-box;
           padding: 0 10px;
           line-height: 40px;
           height: 40px;
           color: #aaaaaa;
           font-size: 14px;
           .iconfont{
               color: rgb(223,37,25);
               font-size: 18px;
               margin: 0 5px 0 0;
           }

       }
       .item-box{
           background: white;
           .item{
               border-bottom: 1px solid #eee;
               box-sizing: border-box;
               padding: 10px;
               display: flex;
               justify-content: space-between;
               color: #000;
               font-size: 14px;
               .left{
                   .text1{
                       margin: 0 0 10px 0;
                   }
               }
           }
       }
   }
</style>