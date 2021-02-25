<template>
    <div class="content">
      <myheader title="每周运势" />
        <iptbox type="2" />
        <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始执行</el-button>
      </div>

      <div id="myChart" ref="mychart" :style="{width: '300px', height: '300px'}"></div>

      <div class="item">
            公历日期: {{data.WeekDay}}
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
        created() {
          
       
        },
        computed:{
          ...mapGetters(['user'])
        },
        mounted() {
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
  let echar_data=  [
        {
            name: '财运',
            type: 'line',
            data: this.data.CaiYun
        },
        {
            name: '事业运',
            type: 'line',
            data: this.data.ShiYeYun
        },
        {
            name: '姻缘运',
            type: 'line',
            data: this.data.YinYuanYun
        },
    ]
    this.drawLine(echar_data)
 let user=JSON.parse(data.user)
 let user2={}
 for(let key in user){
   user2[key_obj[key]]=user[key]
 }
 this.user=user2
 
      
     
    }
    },
          drawLine(datas){
            let option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['财运', '事业运', '姻缘运'],
        textStyle:{
          color:'#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    
    xAxis: {
      axisLabel : {
textStyle : {
color : '#fff'
}
},
      show:true,
        type: 'category',
        name:'分',
        nameLocation:'middle',
        boundaryGap: false,
        data: ['周日','周一', '周二', '周三', '周四', '周五', '周六']
    },
    yAxis: {
        type: 'value',
        axisLabel : {
show : true,
textStyle : {
color : '#fff'
}
},
    },
    series: datas
};
            let mychart=this.$echarts.init(this.$refs.mychart)
            console.log('123123123')
            mychart.setOption(option)
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
                    url:'index/fortune/getWeekYun',
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
                  let echar_data=  [
        {
            name: '财运',
            type: 'line',
           
            data: this.data.CaiYun
        },
        {
            name: '事业运',
            type: 'line',
           
            data: this.data.ShiYeYun
        },
        {
            name: '姻缘运',
            type: 'line',
           
            data: this.data.YinYuanYun
        },
    ]
    this.drawLine(echar_data)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
.item{
    border-bottom:1px solid #eee;
    padding: 15px 10px;
    color: #fbd5b7;
    font-size: 14px;
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