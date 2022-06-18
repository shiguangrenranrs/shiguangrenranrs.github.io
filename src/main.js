import Vue from "vue";
import App from "./App";
// 引入App组件，由 vue-loader 提供 .vue 文件解析能力
/*
由 vue-template-compiler(vue-模板-解析) 将 template 解析成 render 函数
*/
Vue.config.productionTip = false
/*控制台小提示
You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html
*/
import 'normalize.css';
new Vue({
    el: "#app",
    // 用template渲染替换el目标标签
    render: h => h(App)
    // runtime-only 
    // h:  createElement('标签名', {属性名: "属性值"}, ['内容', createElement(...), ...])
    // h:  createElement(组件)
})

// template -> ast(抽象语法树) -> render -> V-DOM -> DOM