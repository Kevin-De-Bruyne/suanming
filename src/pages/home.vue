<template>
  <div class="content">
    <header>
      <div class="left">
        <img class="logo-img" src="../assets/logo_login.png" alt="">
      </div>
      <div class="right">
        <van-popover
  v-model="feiyong_show"
  trigger="click"
  :actions="actions"
  @select="onSelect"
>
  <template #reference>
    <span class="text1" @click.stop="feiyong_show=true">
          费用
        </span>
  </template>
</van-popover>
        
        <span class="iconfont icon-web-icon-" @click="$router.push('/user')"> </span>
      </div>
    </header>
    <div class="cate-box">
      <div class="item" v-for="(item, index) in data_list" :key="index">
        <el-button size="mini" :class="{ 'choise_style': index == choise_index1 }"
        @click="cate_click(item,index)"
        >
          {{item.name}}
        </el-button>
      </div>
      <div class="item" >
        <el-button size="mini" :class="{ 'choise_style':  choise_index1=='xingzuo' }"
        @click="xingge_test()"
        >
          性格测试
        </el-button>
      </div>
    </div>

    

    <div class="nav-box" v-if="child_arr&&child_arr.length">
      <div class="item" v-for="(item, index) in child_arr" :key="index"
      @click="gorouter(item)"
      >
        <span 
        
        >
          {{ item.name }}
        </span>
      </div>
    </div>
    <iptbox type="1" />
    


      <div class="tabble-box" v-if="is_submit">
        <div class="info-box">
        姓名 
        <span class="m-l-5 m-r-5">:</span>
        <span class="m-r-5">{{user.xin}}{{user.min}}</span>
        性别
        <span class="m-l-5 m-r-5">:</span>
        <span class="m-r-5">{{user.sex}}</span>

        出生日期
        <span class="m-r-5 m-l-5">:</span>

        <span class="m-r-5">{{shenri}}</span>

        {{user.shenri_shi}}:{{user.shenri_fen}}
      </div>

      <div class="wrap-box-tabble">
        <div class="key-td">
            
        </div>
        <div class="value-td" v-for="(item,index) in title_arr" :key="index">
          {{item}}
        </div>
      </div>


      <div class="wrap-box-tabble">
        <div class="key-td">
            主星
        </div>
        <div class="value-td" v-for="(item,index) in data.zhuxing_arr" :key="index">
          {{item}}
        </div>
      </div>

      <div class="wrap-box-tabble">
        <div class="key-td">
            天干
        </div>
        <div class="value-td" v-for="(item,index) in data.tiangan_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            地支
        </div>
        <div class="value-td" v-for="(item,index) in data.dizhi_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            藏干
        </div>
        <div class="value-td" v-for="(item,index) in data.zanggan_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            副星
        </div>
        <div class="value-td" v-for="(item,index) in data.fuxing_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            星运
        </div>
        <div class="value-td" v-for="(item,index) in data.xingyun_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            神煞
        </div>
        <div class="value-td shensha-td" v-for="(item,index) in data.shensha_arr" :key="index">
          {{item}}
        </div>
      </div>
      <div class="">
        <div class=" rizhu-box">
          <span>日主：{{data_old.WuXing}}</span>
          <span>强弱：{{data_old.QiangRuo}}</span>
            <span class="">格局：{{data_old.GeJu||'不成格'}}</span>
        </div>  
        <div class=" rizhu-box">
          <span>用神：{{data_old.YongShen}}</span>
          <span>喜神：{{data_old.XiShen}}</span>
            <span class="m-l-10">忌神：{{data_old.JiShen}}</span>
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td wuxing_td">
            五行
            <br />
            十神
        </div>
        <div class="value-td wuxin_td">
          <span v-for="(item,index) in data.wuxing_arr" :key="index">{{item}}</span>
        </div>
      </div>
      <div class="wrap-box-tabble">
        <div class="key-td">
            交运时间
        </div>
        <div class="value-td">
          {{data_old.JiaoYunShiJian}}
        </div>
      </div>

      <div class="wrap-box-tabble">
        <div class="title">
            大运
        </div>
      </div>

      <div class="wrap-box-tabble liunian_tabble">
        <div class="value-td" v-for="(item,index) in dayun_arr" :key="index"
        :class="{'red':dayun_index==index}" @click="dayun_index=index"
        >
          {{item}}
        </div>
      </div>

      <div class="wrap-box-tabble liunian_tabble">
        <div class="value-td" v-for="(item,index) in data.dayun_arr" :key="index"
        :class="{'red':dayun_index==index}" @click="dayun_index=index"
        >
          {{item}}
        </div>
      </div>

      <div class="wrap-box-tabble">
        <div class="title">
            流年
        </div>
      </div>

      <div class="wrap-box-tabble liunian_tabble">
        <div class="value-td" v-for="(item,index) in liunian_obj.liunian_arr" :key="index"
        :class="{'red':liunian_index==index}"
        >
          {{item}}
        </div>
      </div>
      <div class="wrap-box-tabble liunian_tabble">
        <div class="value-td" v-for="(item,index) in liunian_obj.liunian_text_arr" :key="index"
        :class="{'red':liunian_index==index}"
        >
          {{item}}
        </div>
      </div>
      
      <div class="wrap-box-tabble liunian_tabble">
        <div class="value-td" v-for="(item,index) in liunian_obj.sui_arr"
         :key="index"
         :class="{'red':liunian_index==index}"
         >
          {{item}}
        </div>
      </div>
      </div>
      <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始算命</el-button>
      </div>

    

      

      <!-- <div class="butn-box">
        <el-button class="submit-butn" size="medium"
        @click="submit()"
        >开始算命</el-button>
      </div> -->

  </div>
</template>

<script>

import repalce_arr from '@/repalce_str'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      nav_arr: ["命盘", "命盘分析", "流年运程", "一声运势"],
      feiyong_show:false,
      actions: [{ text: '充值' }, { text: '充值记录' }],
      choise_index1:0,
      choise_index2:0,
      dayun_index:0,
      data_list:[],
        title_arr:['年柱','月柱','日柱','时柱'],
        data_old:{},
        is_submit:false,
        nian_text:'',
        zouyun_nian:[],
        liunian_arr:[],
        dayun_arr:[],
        sui_arr:[],
        liunian_index:null,
        data:{
          zhuxing_arr:[],
          tiangan_arr:[],
          dizhi_arr:[],
          zanggan_arr:[],
          fuxing_arr:[],
          xingyun_arr:[],
          wuxing_arr:[],
          kongwang_arr:[],
          shensha_arr:[],
          liunian_text_arr:[],
          shensha_arr:[],
        },
        shenri:'',
        shenri_shi:'',
        riqi_arr:[],
      table_arr:[],
      riqi_arr:[]
    };
  },
  created() {

    this.locadata()
   

    this.getdata()
  },
  mounted() {

    
  },
  watch:{
    choise_index1(news){
      console.log(news)
      this.table_arr=[]
    },
    choise_index2(){
      this.table_arr=[]
    }
  },
  computed:{
    ...mapGetters(['user']),
    liunian_obj(){
      let {user}=this
       let liunian=Number(this.dayun_arr[this.dayun_index])
            let sui=liunian-Number(user.shenri_nian)
            console.log(sui,user.shenri_nian)
            function cyclical(num)
              {
                  //天干
                  var gan = "甲乙丙丁戊己庚辛壬癸";
                //地支
                    var zhi = "子丑寅卯辰巳午未申酉戌亥";
                  return gan[num % 10]+zhi[num % 12];
              }

            function getNianGanZhi(year)
            {
                var ret = "";
                    ret = cyclical(year - 1800 + 116);
                return ret;
            }

            let liunian_arr=[]
            let sui_arr=[]
            let liunian_text_arr=[]
            for(let i=0;i<=9;i++){
              liunian_arr.push(liunian+i)
              if(liunian+i==new Date().getFullYear()){
                this.liunian_index=i
              }
              sui_arr.push(sui+i)
            }
            
            

            liunian_text_arr=liunian_arr.map(item=>{
             return item=getNianGanZhi(item)
            })
            
          return   {
              liunian_arr,
              sui_arr,
              liunian_text_arr
            }
    },
    child_arr(){
      console.log(this.data[this.choise_index1])
      let res
      if(this.choise_index1=='xingzuo'){
         res=[]
      }else{
        res=this.data_list[0]&&this.data_list[this.choise_index1].child
      }
      console.log(res,1)
    return res
    },
    nowparent(){
      console.log(this.data_list[0]&&this.data_list[this.choise_index1],2)
      return this.data_list[0]&&this.data_list[this.choise_index1]
    },
     nowitem(){
       let arr=[]
       if(this.data[0]&&this.child_arr&&this.child_arr[this.choise_index2]){
         arr=this.data[0]&&this.child_arr[this.choise_index2]
       }else{
         arr=[]
       }
       console.log(arr,3)
      return arr||[]
    }
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
 this.data_old=JSON.parse(data.data)
 let user=JSON.parse(data.user)
 let user2={}
 for(let key in user){
   user2[key_obj[key]]=user[key]
 }
 this.user=user2
 
      
      this.sreach_data({data:this.data_old})
    }
    },
    submit(){
        let {user}=this
        let shenri=user.shenri_nian+'-'+user.shenri_yue+'-'+user.shenri_ri
        this.shenri=shenri
        this.ajax({
          url:'index/eight_characters/getMingpan',
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
          this.data_old=res.data
          this.sreach_data(res)
          
        })
      },
      sreach_data(res){
        let data=res.data
        console.log(data)
        let {user}=this
        console.log(this.data)
        this.data.wuxing_arr=[]
        for(let key in data){
          var item=data[key]
          if(key=='Jin'||key=='Mu'||key=='Shui'||key=='Huo'||key=='Tu'){
            this.data.wuxing_arr.push(item)
          }
        }
        var nian = parseInt(data.JiaoYunShiJian.substr(0, 4));
        console.log(nian)
          var nians = [];
          for (var i = 0; i < 9; i++) {
            nians[i] = nian + i;
          }
          console.log(nians)
          this.zouyun_nian=nians
        this.is_submit=true
            this.data.zhuxing_arr=data.ZhuXing.split(',')
            this.data.tiangan_arr=data.TianGan.split(',')
            this.data.dizhi_arr=data.DiZhi.split(',')
            this.data.zanggan_arr=data.CangGan.split(',')
            this.data.fuxing_arr=data.FuXing.split(';')
            this.data.xingyun_arr=data.XingYun.split(',')
            this.data.kongwang_arr=data.KongWan.split(',')
            this.data.shensha_arr=data.ShenSha.split(',')
            this.data.dayun_arr=data.DaYun.split(',')
            this.data.shensha_arr=data.ShenSha.split(';')
            this.nian_text=nian
           

            let dayun_arr=[]
            for(let i=0;i<=8;i++){
              dayun_arr.push(nian+i*10)
            }
            this.dayun_arr=dayun_arr
      
            

            console.log(this.liunian_arr,this.sui_arr)
      },
    cate_click(item,index){
      this.choise_index1=index
    },
    xingge_test(){
      this.$router.push('/xingming')
    },
    gorouter(item){
      let url=''
      console.log(item.name);
       if(item.name.indexOf('命盘分析')!=-1){
        url='/minjvfenxi'
      }else if(item.name.indexOf('运程')!=-1){
        url='/liunian'
      }else if(item.name.indexOf('本日运势')!=-1){
        url='/yunshi_meiri'
      }else if(item.name.indexOf('本周运势')!=-1){
        url='/yunshi_meizhou'
      }else if(item.name.indexOf('一生运势')!=-1){
        url='/yunshi_yishen'
      }else if(item.name.indexOf('本月运势')!=-1){
        url='/yunshi_meiyue'
      }else if(item.name.indexOf('本年运势')!=-1){
        url='/yunshi_meinian'
      }

      
      console.log(url)
      if(url){
        this.$router.push(url)
      }else{
        this.showtitle('无url')
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
    keyTostr(obj){
      console.log(obj)
      // obj['五行十神']=[]
      let wuxin_arr=[]
      for(let i in obj){
           let s=false
          var item=obj[i]
          
          
          console.log(item)
          repalce_arr.yunshi_arr.forEach(text=>{

              if(i==text.test){
                console.log(i,text)
                if(i=='XingYun'){
                  obj['五行十神']=wuxin_arr
                }
                if(i=='Jin'||i=='Mu'||i=='Shui'||i=='Huo'||i=='Tu'){
                  console.log('进来了啊啊啊啊啊')
                  console.log(obj['五行十神'])
                   wuxin_arr.push(item)
                }
                if(text.toarr){
                  item=item.split(text.toarr)
                }
                if(Array.isArray(item)&&item.length==7&&text.weak_arr){
                  let obj={}
                  text.weak_arr.forEach((arr_key,index)=>{
                      obj[arr_key]=item[index]
                  })
                  item=obj
                }else if(Object.prototype.toString.call(item)=='[object Object]'){
                  for(let obj_key in item){
                    var obj_item=item[obj_key]
                    if(obj_key==text.test){
                      item[text.str]=item[obj_key]
                      delete item[obj_key]
                    }
                  }
                }
                s=true
                obj[text.str]=item
                    delete obj[i]
              }
          })
          if(!obj[i]){
            delete obj[i]
          }
          if(Array.isArray(obj[i])&&obj[i].length==0){
            console.log(obj[i])
            delete obj[i]
          }
          if(!s&&i!='五行十神'){
            delete obj[i]
          }
        }
    },
    getdata(){
      this.ajax({
        url:'index/classify/getClassifyList'
      }).then(res=>{
        this.data_list=res.data.list
        this.data_list.forEach(item=>{
          if(item.name=='八字'){
            item.child.forEach((x,y)=>{
              if(x.name=='八字合婚_命局分析'){
                item.child.splice(y,1)
              }
            })
          }
        })
      })
    },
    onSelect(e){
      console.log(e)
      switch (e.text) {
        case '充值':
          this.$router.push('/taocan')
          break
        case '充值记录':
          this.$router.push('/chongzhi_list')
          break
      }
    }
  },
};
</script>

<style lang="scss" scoped>

$border_color:rgba(246,234,180,0.2);

$border_color:rgba(246,234,180,0.2);
.logo-img{
  height: 40px;
}
.shensha-td{
  box-sizing: border-box;
  padding:  10px;
}
.wuxing_td{
  flex-wrap: wrap;
  box-sizing: border-box;
}
.liunian_tabble{
  font-size: 12px !important;
}
.wuxin_td{
  padding: 10px 20px;
  flex-wrap: wrap;
}
.rizhu-box{
  box-sizing: border-box;
  padding: 0 40px;
  width: 100%;
  display: flex;
  line-height: 30px;
  justify-content: space-between;
  border: 1px solid rgba(246, 234, 180, 0.2);
}
.info-box{
  color: white;
  font-size: 16px;
  border: 1px solid $border_color;
}
.tabble-box{
 padding: 10px;
 font-size: 12px;
 color: #fbd5b7;
}
.wrap-box-tabble{
  
  display: flex;
  .title{
    background: #f6eab4;
    line-height: 30px;
    color: #000;
    flex: 1;
    height: 30px;
    padding: 0 0 0 20px;
  }
  .key-td{
    min-width: 60px;
    border: 1px solid $border_color;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:30px;
  } 
  .value-td{
    min-height: 30px;
    border: 1px solid $border_color;
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
  }
}
.red{
  color: red !important;
}

.mingpan_router{
  padding: 50px 0 0 0;
  min-height: 100vh;
  background: rgb(90,90,92);
  
}
.title-tr{
  display: flex;
  .title-tr-r{
    flex: 1;
  }
  td{
  }
}
.mingpan-table{

}
.table-box{
 text-align: center;
 font-size: 12px;
 color: $myzhuti;
  table{
    width: 100%;
     border-color: $border_color;
     border-collapse: collapse;
  }
  tr{
    width: 100%;
    border-left:solid 1px $border_color;
    display: flex;
  }
  td{
    
    border:solid 1px $border_color;
    
  }
  .key_td{
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
  }
  .item_td{
    word-break: break-all;
    max-width: 70%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
  }
  .mingpan_item_td{
    flex: 1;
     word-break: break-all;
    max-width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    justify-content: center;
  }
}
.butn-box{
    text-align: center;
    margin: 15px 0;
    .submit-butn{
        padding: 10px 40px !important;
        margin: 0 auto;
         background: linear-gradient(to bottom,#fefdfb 0%,#E9A246 100%) !important;
         color: #000;
    }
}
.content{
     background: $zhuti;
    overflow: hidden;
    padding: 0 0 0 0 !important;
}
header {
  padding: 0 20px;
  display: flex;
  color: white;
  font-size: 16px;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  .left {
  }
  .right {
    .text1 {
      color: #f6eab4;
      vertical-align: middle;
    }
    .iconfont {
      vertical-align: middle;
      margin: 0 0 0 10px;
      color: white;
      font-size: 36px;
    }
  }
}
main {
  padding: 0 20px;
}
.time-box {
    padding: 15px 0 0 0;
  .wrap-box {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin: 0 0 10px 0;
    line-height: 2;
    flex-wrap: wrap;
    color: white;
    select {
      padding: 2px 3px;
    }
    .name-ipt {
      vertical-align: middle;
      width: 30px;
      background: white;
      color: #000;
      height: 20px;
    }
  }
}
.nav-box {
   background: linear-gradient(180deg,#fefdfb 0,#e9a246) !important;
  
  color: #000;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 150px;
  .item {
    height: 40px;
  line-height: 40px;    
    cursor: pointer;
    span {
      padding: 0 0 5px 0;
    }
  }
  .choise_style {
    border-bottom: 2px solid #000;
  }
}
.cate-box {
  padding: 10px ;
  display: flex;
  color: white;
  flex-wrap: wrap;
  .item {
    flex: 1;
    height: 30px;
    line-height: 30px;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 15px;
    .el-button{
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .el-button {
    font-size: 12px;
    background: none;
    border: 1px solid white;
    color: white;
    padding: 5px;
  }
  .choise_style {
    border: none;
    color: #000;
    background: linear-gradient(to bottom, #fefdfb 0%, #e9a246 100%) !important;
  }
}

</style>