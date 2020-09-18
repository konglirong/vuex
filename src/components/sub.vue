
<template>
<div class='wrapper'>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="sub(10)">-1</button>
    <p>============================</p>
     <button @click="subjian(8)">-n</button>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {mapState,mapMutations} from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    ...mapState(['count']),
    
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    ...mapMutations(['subjian']),
    sub(num){
        this.$store.commit('subjian',num)
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>