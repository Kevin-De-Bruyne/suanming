<template>
    <div class="content">
        <headers title="请选择套餐" />
        <div class="item-box">
            <div class="pd-box"
            
             v-for="(item,index) in data" :key="index">
                <div class="item" 
                :class="{'choise_class':index==choise_index}"
            @click="choise_index=index"
                >
                <div class="text1">
                    {{item.name}}
                </div>
                <div class="text2">
                    ￥{{item.money}}
                </div>
                <div class="text3" v-if="item.exp_time">
                    可用:{{item.exp_time}}{{item.unit==1?'天':item.unit==2?'月':item.unit==3?'年':''}}
                </div>
                <div class="text4" v-if="item.number">
                    可用次数:{{item.number}}次
                </div>
            </div>
            </div>
            
        </div>
        <div class="butn-box">
            <van-button type="primary" block round color="rgb(246,234,180)"
            @click="submit()"
            >
                确定
        </van-button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                data:[],
                
                choise_index:0
            }
        },
        created() {
            this.getdata()
        },
        methods: {
            getdata(){
                this.ajax({
                    url:'index/set_meal/mealList'
                }).then(res=>{
                    console.log(res)
                    this.data=res.data.list
                })  
               
            },
            submit(){
                this.ajax({
                    url:'index/for_tell_order/placeOrder',
                    data:{
                        sm_id:this.data[this.choise_index].id
                    }
                }).then(res=>{
                    this.$router.push('/chongzhi?id='+res.data.order_id)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.butn-box{
    box-sizing: border-box;
    padding: 0 15px;
}

.choise_class{
    border: 1px solid red !important;
}
    .item-box{
        display: flex;
        flex-wrap: wrap;
        .pd-box{
            width: 50%;
            box-sizing: border-box;
            font-weight: bold;
            font-size: 14px;
        }   
        .item{
            padding: 10px 0;
            border: 1px solid #af9624;
            height: 100%;
            line-break: 25px;
            text-align: center;
            color: #af9624;
        }
    }
</style>