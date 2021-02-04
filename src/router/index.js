import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)
import home from '../pages/home'
import user from '../pages/user'
import fankui from '../pages/fankui'
import chaxun from '../pages/chaxun'
import chongzhi from '../pages/chongzhi'
import chongzhi_list from '../pages/chongzhi_list'
import login from '../pages/login'
import login_router from '../pages/login_router'
import login_reg from '../pages/login_reg'
import taocan from '../pages/taocan'
import xiazai from '../pages/xiazai'
import minpan from '../pages/minpan'
import minjvfenxi from '../pages/minjvfenxi'
import liunian from '../pages/liunian'
import yunshi_meiri from '../pages/yunshi_meiri'
import yunshi_meizhou from '../pages/yunshi_meizhou'
import yunshi_yishen from '../pages/yunshi_yishen'
import yunshi_meiyue from '../pages/yunshi_meiyue'
import yunshi_meinian from '../pages/yunshi_meinian'
import xingming from '../pages/xingming'

export default new router({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/xiazai',
            component:xiazai
        },
        {
            path:'/minpan',
            component:minpan
        },
        {
            path:'/yunshi_meiri',
            component:yunshi_meiri
        },
        {
            path:'/yunshi_meizhou',
            component:yunshi_meizhou
        },
        {
            path:'/yunshi_yishen',
            component:yunshi_yishen
        },
        {
            path:'/yunshi_meiyue',
            component:yunshi_meiyue
        },
        {
            path:'/xingming',
            component:xingming
        },
        
        {
            path:'/yunshi_meinian',
            component:yunshi_meinian
        },
        
        {
            path:'/liunian',
            component:liunian
        },
        {
            path:'/minjvfenxi',
            component:minjvfenxi
        },
        {
            path:'/user',
            component:user
        },
        {
            path:'/fankui',
            component:fankui
        },
        {
            path:'/taocan',
            component:taocan
        },
        {
            path:'/chaxun',
            component:chaxun
        },
        {
            path:'/login',
            component:login,
            children:[
                {
                path:'/',
                component:login_router
            },
            {
                path:'/reg',
                component:login_reg
            }
        ]
        },
        {
            path:'/chongzhi',
            component:chongzhi
        },
        {
            path:'/chongzhi_list',
            component:chongzhi_list
        },
    ]
})