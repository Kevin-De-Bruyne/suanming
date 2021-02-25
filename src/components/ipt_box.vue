<template>
    <div>
        <div class="pd-box">

      <template v-if="type==1">
          <div class="wrap-box">
          <span class="m-r-5">姓:</span>
          <input type="text" v-model="user.xin" class="name-ipt m-r-10" />
          <span>名:</span>
          <input type="text" v-model="user.min" class="name-ipt m-l-5 m-r-5" placeholder="" />
          <div class="radio-box m-l-10">
          <div class="radio-title">
          性别
        </div>
        <van-radio-group v-model="user.sex" direction="horizontal"
        checked-color="#f6eab4"
        >
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
        </div>
        <div class="m-r-10">
            <span class="">出生日期: </span>
          </div>
           <div class="radio-box">
          <div class="radio-title m-r-10">
          
        </div>
        <van-radio-group v-model="user.rili" direction="horizontal"
        checked-color="#f6eab4"
        >
          <van-radio name="阴历">阴历</van-radio>
          <van-radio name="阳历">阳历</van-radio>
        </van-radio-group>
        </div>
        <!-- <select v-model="user.shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select> -->
          <input type="text" v-model="user.shenri_nian" class="ipt"  name="" id="">
          <span class="m-l-5 m-r-5">年</span>

          <div class="m-r-10">
            <!-- <select   id=""
            @change="initDay(qimin.shenri_yue,'ri_arr6')"
            >
              <option :value="item" v-for="(item,index) in riqi_arr.yue_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_yue" class="ipts" >
            <span class="m-l-5">月</span>
          </div>

          <div class="m-r-10">
            <!-- <select v-model="user.shenri_ri"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.ri_arr6" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_ri" class="ipts" >
            <span class="m-l-5">日</span>
          </div>

          <div class="m-r-5">
            <!-- <select v-model="user.shenri_shi"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.shi_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_shi" class="ipts" >
            <span class="m-l-5">时</span>
          </div>
          <div class="m-r-10">
            <!-- <select v-model="user.shenri_fen"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.fen_arr" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_fen" class="ipts" >
            <span class="m-l-5">分</span>
          </div>
        </div>

        <div class="wrap-box">
          
        </div>

        <div class="wrap-box">
          
        </div>
      </template>

      <template v-if="type==2">

      
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
        checked-color="#f6eab4"
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
        checked-color="#f6eab4"
        >
          <van-radio name="阴历">阴历</van-radio>
          <van-radio name="阳历">阳历</van-radio>
        </van-radio-group>
        </div>
        </div>

        <div class="wrap-box">
          <!-- <select v-model="user.shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select> -->
          <input type="text" v-model="user.shenri_nian" class="ipt"  name="" id="">
          <span class="m-l-5 m-r-5">年</span>

          <div class="m-r-10">
            <!-- <select   id=""
            @change="initDay(qimin.shenri_yue,'ri_arr6')"
            >
              <option :value="item" v-for="(item,index) in riqi_arr.yue_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_yue" class="ipts" >
            <span class="m-l-5">月</span>
          </div>

          <div class="m-r-10">
            <!-- <select v-model="user.shenri_ri"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.ri_arr6" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_ri" class="ipts" >
            <span class="m-l-5">日</span>
          </div>

          <div class="m-r-5">
            <!-- <select v-model="user.shenri_shi"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.shi_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_shi" class="ipts" >
            <span class="m-l-5">时</span>
          </div>
          <div class="m-r-10">
            <!-- <select v-model="user.shenri_fen"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.fen_arr" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_fen" class="ipts" >
            <span class="m-l-5">分</span>
          </div>
        </div>

        <div class="wrap-box">
          <div class="m-r-10">
            <span class="">求测日期: </span>
          </div>
        </div>

         <div class="wrap-box">
          <!-- <select v-model="user.ceshi_shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select> -->
          <input type="text" class="ipt" v-model="user.ceshi_shenri_nian" >
          <span class="m-l-5">年</span>

          <div class="m-r-10">
            <!-- <select v-model="user.ceshi_shenri_yue"  id=""
            @change="initDay(user.ceshi_shenri_yue,'ri_arr6')"
            >
              <option :value="item" v-for="(item,index) in riqi_arr.yue_arr" :key="index">{{item}}</option>
            </select> -->
             <input type="text" class="ipts" v-model="user.ceshi_shenri_yue" >
            <span class="m-l-5">月</span>
          </div>

          <div class="m-r-10">
            <!-- <select v-model="user.ceshi_shenri_ri"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.ri_arr6" :key="index">{{item}}</option>
            </select> -->
             <input type="text" class="ipts" v-model="user.ceshi_shenri_ri" >
            <span class="m-l-5">日</span>
          </div>
        </div>
      </template>
      

      <template v-if="type==3">

      
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
        checked-color="#f6eab4"
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
        checked-color="#f6eab4"
        >
          <van-radio name="阴历">阴历</van-radio>
          <van-radio name="阳历">阳历</van-radio>
        </van-radio-group>
        </div>
        </div>

        <div class="wrap-box">
          <!-- <select v-model="user.shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select> -->
          <input type="text" v-model="user.shenri_nian" class="ipt"  name="" id="">
          <span class="m-l-5 m-r-5">年</span>

          <div class="m-r-10">
            <!-- <select   id=""
            @change="initDay(qimin.shenri_yue,'ri_arr6')"
            >
              <option :value="item" v-for="(item,index) in riqi_arr.yue_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_yue" class="ipts" >
            <span class="m-l-5">月</span>
          </div>

          <div class="m-r-10">
            <!-- <select v-model="user.shenri_ri"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.ri_arr6" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_ri" class="ipts" >
            <span class="m-l-5">日</span>
          </div>

          <div class="m-r-5">
            <!-- <select v-model="user.shenri_shi"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.shi_arr" :key="index">{{item}}</option>
            </select> -->
            <input type="text" v-model="user.shenri_shi" class="ipts" >
            <span class="m-l-5">时</span>
          </div>
          <div class="m-r-10">
            <!-- <select v-model="user.shenri_fen"  id="">
              <option :value="item" v-for="(item,index) in riqi_arr.fen_arr" :key="index">{{item}}</option>
            </select> -->
             <input type="text" v-model="user.shenri_fen" class="ipts" >
            <span class="m-l-5">分</span>
          </div>
        </div>

        <div class="wrap-box">
          <div class="m-r-10">
            <span class="">求测日期: </span>
          </div>
        </div>

         <div class="wrap-box">
          <!-- <select v-model="user.ceshi_shenri_nian" class=""  id="">
            <option :value="item" v-for="(item,index) in riqi_arr.nian_arr" :key="index">{{item}}</option>
          </select> -->
          <input type="text" class="ipt" v-model="user.ceshi_shenri_nian" >
          <span class="m-l-5">年</span>
        </div>
      </template>

      <template v-if="type==4">
          <div class="wrap-box">
          <div class="m-r-10">
            <span class="">出生日期: </span>
          </div>
        </div>

        <div class="wrap-box">
          <div class="m-r-10">
            <input type="text" class="ipt" v-model="user.shenri_nian">
            <span class="m-l-5">年</span>
          </div>
          <div class="m-r-10">
            
            <input type="text" class="ipts" v-model="user.shenri_yue">
            <span class="m-l-5">月</span>
          </div>
          <div class="m-r-10">
            <input type="text" class="ipts" v-model="user.shenri_ri">
            <span class="m-l-5">日</span>
          </div>
        </div>
      </template>
      </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters} from 'vuex'
    export default{
        props:['type'],
        data() {
            return {
                
            }
        },
        created() {
            console.log(this.user);
        },
        computed:{
            ...mapGetters(['user'])
        },
        methods: {
            ...mapMutations(['changeuser'])
        },
    }
</script>

<style lang="scss" scoped>
    
</style>