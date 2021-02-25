import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import Vant from 'vant';
import 'vant/lib/index.css';

import { Toast } from 'vant'

Vue.use(Toast)
Vue.use(Vant);

import header from './components/header'
import myheader from './components/router_header'
import iptbox from './components/ipt_box'

Vue.component('headers', header)
Vue.component('myheader', myheader)
Vue.component('iptbox', iptbox)

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.prototype.showtitle = (msg) => {
    return new Promise((ok, err) => {
        // if(lurl){
        //   err('请勿重新请求了亲')
        //   return
        // }
        Toast({
            message: msg,
            duration: 1500
        })
        setTimeout(() => {
            ok()
        }, 1500);
    })
}

Vue.prototype.arr_obj = {
    nian_arr: [],
    yue_arr: [],
    ri_arr: [],
    ri_arr2: [],
    ri_arr3: [],
    ri_arr4: [],
    ri_arr5: [],
    ri_arr6: [],
    shi_arr: [],
    fen_arr: []
}

function getMonthDay(month) {
    let nowtime = new Date()
    nowtime.setMonth(month + 1)
    nowtime.setDate(0)
    return nowtime.getDate()
}

let nowTime = new Date()

Vue.prototype.initTime = function() {

    for (let i = 1900; i <= nowTime.getFullYear(); i++) {
        this.arr_obj.nian_arr.push(i)
    }
    for (let i = 1; i <= 12; i++) {
        this.arr_obj.yue_arr.push(i)
    }
    let nowMonth = nowTime.getMonth() // 获取选择的月份有多少天
    let month = getMonthDay(nowMonth)

    for (let i = 1; i <= month; i++) {
        this.arr_obj.ri_arr.push(i)
        this.arr_obj.ri_arr2.push(i)
        this.arr_obj.ri_arr3.push(i)
        this.arr_obj.ri_arr4.push(i)
        this.arr_obj.ri_arr5.push(i)
        this.arr_obj.ri_arr6.push(i)
    }
    for (let i = 1; i <= 24; i++) {
        this.arr_obj.shi_arr.push(i)
    }
    for (let i = 1; i <= 60; i++) {
        this.arr_obj.fen_arr.push(i)
    }
    Vue.prototype.down = (fn) => {
        fn(Vue.prototype.arr_obj)
    }
    console.log('我已经执行完毕了')
    console.log(this.arr_obj)
}
console.log('我执行了')
    // Vue.prototype.initTime()

function plusReady() {
    // 监听“返回”按钮事件
    plus.key.addEventListener("backbutton", function() {

        console.log(router.history.current.fullPath)
        if (
            router.history.current.fullPath == '/' || router.history.current.fullPath == '/login'
        ) {
            if (!first || new Date().getTime() - first > 1000) {
                first = new Date().getTime();
                Toast('再按一次退出')
            } else if (new Date().getTime() - first < 1000) {
                plus.runtime.quit();
            }
        } else {
            router.go(-1)
        }
        return
    }); // 在这里调用plus api
}
if (window.plus) {
    plusReady();
} else {
    document.addEventListener('plusready', plusReady, false);
}


import axios from 'axios'

Vue.prototype.baseUrl = 'http://sm.ejjssyp.com/'
    // Vue.prototype.baseUrl = 'http://for_tell.com/'

axios.defaults.baseURL = Vue.prototype.baseUrl
Vue.prototype.ajax = ({ url, data = {}, headers = {}, methods = 'post' }) => {
    data.token = localStorage.getItem('token')

    return new Promise((ok, err) => {
        // if(lurl){
        //   //避免重复请求
        //   err('请勿重新请求了')
        //   return
        // }
        Toast.loading({
            duration: 0,
            forbidClick: true
        })
        axios[methods](url,
            methods == 'post' ? data : { params: data }, { headers }).then(res => {

            console.log(res)
            Toast.clear()
            if (res.data.code == 444 || res.data.status == 444) {
                Vue.prototype.showtitle('请重新登录').then(res => {
                    router.push('/login')
                })
                return
            }
            if (res.data.status == 200 || res.data.code == 0 || res.data.code == 200 || res.data.status == 0) {
                ok(res.data)
            } else {
                console.log(res)
                if (router.history.current.path == '/shop_detail' && (res.data.message == '此场次已结束' || res.data.message == '该场次已结束' || res.data.message == '此场次还未开始')) {
                    err(res.data)
                    return
                }
                console.log(res)

                if (res.data.msg == '用户不存在') {
                    Vue.prototype.showtitle('请重新登录')
                    err(res)
                    router.push('/login')
                    return
                }
                console.log(res.data.message)
                Toast.fail(res.message || res.msg || res.data.message || res.data.msg)
                err(res)
            }
        }).catch(fill => {
            console.log(fill)
            Toast.clear()
            Toast.fail('请求失败')
        })
    })

}

Vue.prototype.ajaxs = ({ url, data = {}, headers = {}, methods = 'get' }) => {
    data.token = localStorage.getItem('token')

    return new Promise((ok, err) => {
        // if(lurl){
        //   //避免重复请求
        //   err('请勿重新请求了')
        //   return
        // }
        Toast.loading({
            duration: 0,
            forbidClick: true
        })
        axios[methods](url,
            methods == 'post' ? data : { params: data }, { headers }).then(res => {

            console.log(res)
            Toast.clear()
            if (res.data.code == 444 || res.data.status == 444) {
                Vue.prototype.showtitle('请重新登录').then(res => {
                    router.push('/login')
                })
                return
            }
            if (res.data.status == 200 || res.data.code == 0 || res.data.code == 200 || res.data.status == 0) {
                ok(res.data)
            } else {
                console.log(res)
                if (router.history.current.path == '/shop_detail' && (res.data.message == '此场次已结束' || res.data.message == '该场次已结束' || res.data.message == '此场次还未开始')) {
                    err(res.data)
                    return
                }
                console.log(res)

                if (res.data.msg == '用户不存在') {
                    Vue.prototype.showtitle('请重新登录')
                    err(res)
                    router.push('/login')
                    return
                }
                console.log(res.data.message)
                Toast.fail(res.message || res.msg || res.data.message || res.data.msg)
                err(res)
            }
        }).catch(fill => {
            console.log(fill)
            Toast.clear()
            Toast.fail('请求失败')
        })
    })

}
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')