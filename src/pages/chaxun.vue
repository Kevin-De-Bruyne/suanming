<template>
    <div class="content">
        <headers title="查询记录" />

        <!-- <div class="title-box">
            <span class="iconfont icon-xiangqing">

            </span>
            显示近30天的悦信分明细
        </div> -->

        <div class="item-box">
            <div class="item" v-for="(item,index) in data" :key="index"
            @click="godetail(item)"
            >
                <div class="left">
                    <div class="text1">
                        {{tostr(item.type)}}
                    </div>
                    <!-- <div class="text2">
                        
                    </div> -->
                </div>
                <div class="right">
                    {{item.create_time}}
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
            godetail(item){
                let key_arr={
                    1:'/yunshi_meiri',
                    2:'/yunshi_meizhou',
                    3:'/yunshi_meiyue',
                    4:'/yunshi_meinian',
                    5:'/yunshi_yishen',
                    6:'/home',
                    12:'/liunian',
                    14:'/minjvfenxi',
                    15:'/xingming'
                }
                let url=key_arr[item.type]
                let obj={
                    data:item.content,
                    user:item.query
                }
                console.log(item.content)
                
                localStorage.setItem(url,JSON.stringify(obj))
                this.$router.push(url)
            },
            tostr(str){
                let str2=''
                switch (str) {
                    case 1:
                        str2='本日运势'
                        break;
                    case 2:
                        str2='本周运势'
                        break
                    case 3:
                        str2='本月运势'
                        break
                    case 4:
                        str2='本年运势'
                        break
                    case 5:
                        str2='一生运势'
                        break
                    case 6:
                        str2='八字命盘'
                        break
                    case 7:
                        str2='八字合婚_命盘分析'
                        break
                    case 8:
                        str2='八字合婚分析'
                        break
                    case 9:
                        str2='姓名测试'
                        break
                    case 10:
                        str2='周易起名'
                        break
                    case 11:
                        str2='风水择日'
                        break
                    case 12:
                        str2='流年运程'
                        break
                    case 13:
                        str2='日课评鉴'
                        break
                    case 14:
                        str2='命局分析'
                        break
                        case 15:
                        str2='性格测试'
                        break
                }
                return str2
            },
            getdata(){
                this.ajax({
                    url:'index/fortune/getQueryLog'
                }).then(res=>{
                    this.data=res.data.list
                })
            }
        },
    }
</script>

<style scoped lang="scss">
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
           background: rgba(246,234,180,0.2);
           .item{
               border-bottom: 1px solid rgb(246,234,180);
               box-sizing: border-box;
               padding: 10px;
               display: flex;
               justify-content: space-between;
               background-color: rgba(246,234,180,0.2);
               color:rgb(246,234,180);
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