<template>
    <div class="content">
      <myheader title="一生运势" />
        <div class="pd-box">

      
          <div class="wrap-box">
          <span class="m-r-5">姓:</span>
          <input type="text" v-model="user.xin" class="name-ipt m-r-10" />
          <span>名:</span>
          <input type="text" v-model="user.min" class="name-ipt m-l-5 m-r-5" placeholder="" />
        </div>

         <div class="radio-box">
          <div class="radio-title">
          性别
        </div>
        <van-radio-group v-model="user.sex" direction="horizontal"
        checked-color="#F6EAB4"
        >
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
        </div>

        

        <div class="wrap-box">
          <div class="m-r-10">
            <span class="">出生日期: </span>
          </div>
          <div class="radio-box">
          <div class="radio-title m-r-10">
          
        </div>
        <van-radio-group v-model="user.rili" direction="horizontal"
        checked-color="#F6EAB4"
        >
          <van-radio name="阴历">阴历</van-radio>
          <van-radio name="阳历">阳历</van-radio>
        </van-radio-group>
        </div>
        </div>

        <div class="wrap-box">
          <select v-model="user.shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select>
          <span class="m-l-5 m-r-5">年</span>

          <div class="m-r-10">
            <select v-model="user.shenri_yue"  id=""
            @change="initDay(user.shenri_yue,'ri_arr6')"
            >
              <option :value="item" v-for="(item,index) in riqi_arr.yue_arr" :key="index">{{item}}</option>
            </select>
            <span class="m-l-5">月</span>
          </div>

          <div class="m-r-10">
            <select v-model="user.shenri_ri"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.ri_arr6" :key="index">{{item}}</option>
            </select>
            <span class="m-l-5">日</span>
          </div>

          <div class="m-r-5">
            <select v-model="user.shenri_shi"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.shi_arr" :key="index">{{item}}</option>
            </select>
            <span class="m-l-5 ">时</span>
          </div>
          <div class="m-r-10">
            <select v-model="user.shenri_fen"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.fen_arr" :key="index">{{item}}</option>
            </select>
            <span class="m-l-5">分</span>
          </div>

        </div>
      </div>
        <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始执行</el-button>
      </div>

      <div id="myChart" ref="mychart" :style="{width: '300px', height: '300px'}"></div>

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
        mounted() {
          
        },
        methods: {
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
                this.ajax({
                    url:'index/fortune/getYunScoreList',
                    data:{
                        birthday:shenri,
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