import vuex from 'vuex'

import Vue from 'vue'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {
            xin: '',
            min: '',
            sex: '',
            rili: '',
            shenri_nian: '',
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    mutations: {
        changeuser(state, s) {
            state.user = s
            console.log(s)
        }
    }
})