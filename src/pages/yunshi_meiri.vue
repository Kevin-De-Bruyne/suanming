<template>
    <div class="content">
      <myheader title="每日运势" />
        <iptbox type="2" />
        <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始算命</el-button>
      </div>

      <div class="item">
            公历日期: {{data.GongLi}}
      </div>
      <div class="item">
            农历日期: {{data.NongLi}}
      </div>
      <div class="item">
            干支: {{data.GanZhi}}
      </div>
      <div class="title">
          本月综合运气分数: {{data.TotalScore}}
      </div>
      <div class="item">
            财运：
            <van-rate
            v-model="data.CaiYun"
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
            v-model="data.ShiYeYun"
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
            v-model="data.YinYuanYun"
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
               
                data:{}
            }
        },
        computed:{
          ...mapGetters(['user'])
        },
        created() {
          this.locadata()
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
 let user=JSON.parse(data.user)
 let user2={}
 for(let key in user){
   user2[key_obj[key]]=user[key]
 }
 this.user=user2
 
      
     
    }
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
                console.log(user);
                let ceshi=user.ceshi_shenri_nian+'-'+user.ceshi_shenri_yue+'-'+user.ceshi_shenri_ri
                this.ajax({
                    url:'index/fortune/getDayYun',
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
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.item{
    border-bottom:1px solid #eee;
    padding: 15px 10px;
    color: white;
    font-size: 14px;
}
.title{
    font-size: 16px;
    background: #f6eab4;
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