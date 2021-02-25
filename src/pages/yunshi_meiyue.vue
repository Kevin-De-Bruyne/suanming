<template>
    <div class="content">
      <myheader title="每月运势" />
        <iptbox type="2" />
        <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始执行</el-button>
      </div>

      <div class="yue-box">
        <div class="weak-box">
          <div class="weak-item" v-for="(item,index) in weak_arr" :key="index">
            {{item}}
          </div>
        </div>
        <div class="yue-min-box">
          <div class="yue-item">
            
          </div>
          <div class="yue-item" v-for="(item,index) in yue_arr" :key="index"
          :class="toclass(item)"
          >
            {{item.yue}}
          </div>
        </div>
      </div>

      <div class="yanse-box">
        颜色吉凶说明：
        <span class="daji">大吉</span>
        <span class="zhongji">中吉</span>
        <span class="xiaoji">小吉</span>
        <span class="ping">平</span>
        <span class="xiaoxiong">小凶</span>
        <span class="zhongxiong">中凶</span>
        <span class="daxiong">大凶</span>
      </div>

      <div class="item">
            公历日期: {{data.Date}}
      </div>
      <div class="title">
          本月综合运气分数: {{data.TotalScore}}
      </div>
      <div class="item">
            财运：
            <van-rate
            v-model="data.TotalCaiYun"
            :size="14"
            :count="10"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            />
      </div>
      <div class="item">
            事业运：
            <van-rate
            v-model="data.TotalShiYeYun"
            :size="14"
            :count="10"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            />
      </div>
      <div class="item">
            姻缘运：
            <van-rate
            v-model="data.TotalYinYuanYun"
            :readonly="true"
            :count="10"
            :size="14"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
            />
      </div>
      <div class="title">
          当天易发生之事象
      </div>
      <div class="item">
            {{data.ShiXiang}}
      </div>
      <div class="title">
          当天心态取向
      </div>
      <div class="item">
            {{data.XinXingShiXiang}}
      </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default{
        data() {
            return {
                riqi_arr:[],
                yue_arr:[],
                data:{},
                weak_arr:['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
            }
        },
        created() {
           this.locadata()
            if(this.down){
      this.down((res)=>{
      this.riqi_arr=res
      this.user.shenri_nian=res.nian_arr[0]
      this.user.shenri_yue=res.shi_arr[0]
      this.user.shenri_ri=res.ri_arr[0]
      this.user.shenri_shi=res.shi_arr[0]
      this.user.shenri_fen=res.fen_arr[0]
      
      console.log(res,this.user)
    })
    }
        },
        computed:{
          ...mapGetters(['user'])
        },
        mounted() {
           
        },
        methods: {
          locadata(){
       let url=this.$router.history.current.path
    let data=localStorage.getItem(url)
    let key_obj={
      birthday:'shenri_nian',
      xing:'xin',
      ming:'min',
      hour:'shenri_shi',
      sex:'sex',
      minute:'shenri_fen'
    }

    console.log(data);
    if(data){
 console.log(JSON.parse(data))
 data=JSON.parse(data)
 console.log(JSON.parse(data.data))
 this.data=JSON.parse(data.data)
 this.sreach_data()
 let user=JSON.parse(data.user)
 let user2={}
 for(let key in user){
   user2[key_obj[key]]=user[key]
 }
 this.user=user2
 
      
     
    }
    },
          toclass(item){
            let str=''
            switch (item.yun) {
              case '大吉':
                str='daji'
                break;
              case '中吉':
                str='zhongji'
              break
              case '小吉':
                str='xiaoji'
              break
              case '平':
                str='ping'
              break
              case '小凶':
                str='xiaoxiong'
              break
              case '中凶':
                str='zhongxiong'
              break
              case '大凶':
                str='daxiong'
              break
            }
            return str
          },
        
            initDay(s,da){
      console.log('触发率额')
      console.log(s)
      let nowday=this.getMonthDay(s)
      console.log(nowday,this.user.shenri_yue)  
      let arr=[]
      for(let i=1;i<=nowday;i++){
        arr.push(i)
      }
      this.riqi_arr[da]=arr
      console.log(this.riqi_arr[da])

    },
    getMonthDay(month){
      let nowtime=new Date()
      nowtime.setMonth(month)
    nowtime.setDate(0)
    return nowtime.getDate()
    },
            submit(){
                let {user}=this 
                let shenri=user.shenri_nian+'-'+user.shenri_yue+'-'+user.shenri_ri
                let ceshi=user.ceshi_shenri_nian+'-'+user.ceshi_shenri_yue+'-'+user.ceshi_shenri_ri
                this.ajax({
                    url:'index/fortune/getMonthYun',
                    data:{
                        birthday:shenri,
                        date:ceshi,
                        xing:user.xin,
                        ming:user.min,
                        sex:user.sex,
                        hour:user.shenri_shi,
                        minute:user.shenri_fen,
                        pay:1
                    }   
                }).then(res=>{
                    this.data=res.data
                    this.sreach_data()
                })
            },
            sreach_data(){
              let objs={}
                    function toyun(num){
                      let str=''
                      switch(num){
                        case 0:
                        case 1:
                          str='大凶'
                        break
                        case 2:
                        case 3:
                          str='中凶'
                        break
                        case 4:
                          str='小凶'
                        break
                        case 5:
                          str='平'
                        break
                        case 6:
                          str='小吉'
                        break
                         case 7:
                        case 8:
                          str='中吉'
                        break
                        case 9:
                        case 10:
                          str='大吉'
                        break
                      }
                      return str
                    }
                    this.yue_arr=[]
                    this.data.Yun.forEach((item,index)=>{
                        objs={
                          yue:index+1,
                          yun:toyun(item)
                        }
                        this.yue_arr.push(objs)
                    })
                 
            }
        },
    }
</script>

<style lang="scss" scoped>
.yanse-box{
  background: white;
  border-bottom: 1px solid #eee;
  text-align: center;
  span{
    display: inline-block;
    padding: 0 2px;
    line-height: 25px;
  }
}
.yue-box{
  background: white;
  .weak-box{
    display: flex;
    border-bottom: 1px solid #eee;
    .weak-item{
      flex: 1;
      text-align: center;

    }
  }
  .yue-min-box{
    display: flex;
    flex-wrap: wrap;
    background: white;
    border-bottom: 1px solid #eee;
    .yue-item{
      width: 14.2%;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
}
.item{
    border-bottom:1px solid #eee;
    padding: 15px 10px;
    color: #fbd5b7;
    font-size: 14px;
}
.daxiong{
  background: rgb(116,116,116) !important;
}
.zhongxiong{
  background: rgb(158,158,158) !important;
}
.xiaoxiong{
  background: rgb(214,214,214) !important;
}
.ping{
  background: rgb(76,175,80) !important;
}
.xiaoji{
  background: rgb(255,235,59) !important;
}
.zhongji{
  background: rgb(255,152,0) !important;
}
.daji{
  background: rgb(244,67,54) !important;
}
.title{
    font-size: 16px;
    background: linear-gradient(to bottom,#fefdfb 0%,#E9A246 100%) !important;
    line-height: 30px;
    color: #000;
    flex: 1;
    height: 30px;
    padding: 0 0 0 20px;
}

    .pd-box{
}
.content{
  background: rgb(90,90,92);
  
}
 
</style>