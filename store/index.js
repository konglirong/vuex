import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex)

export default new vuex.Store({
    //仓库
    state: {
        count: 100
    },
    //提交
    mutations: {
        add(state, step) {
            state.count += step
        },
        subjian(state, num) {
            state.count -= num
        }
    },
    //异步提交
    actions: {
        addAsync(context, step) {
            setTimeout(() => {
                context.commit('add', step)
            }, 1000);
        }
    },
    getters: {
        showNum(state) {
            return '当前数量【' + state.count + '】'
        }
    }
})