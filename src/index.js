import css from './css/index.css'
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'; 
import axios from 'axios'
import VueAxios from 'vue-axios'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// Vue.use(VueResource)
Vue.use(MintUI);


import VueRouter from 'vue-router'
 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

// 默认webpack 无法打包.vue文件，需要安装相关的loader
// npm i vue-loader vue-template-compiler -D
// 在配置文件中新增loader的配置项，{test:/\.vue$/,use:'vue-loader'}


import router from './router.js'

Vue.use(VueRouter);
Vue.use(VueAxios, axios)

import store  from './store/index';

import app from './app.vue';
// 创建路由对象
var vm = new Vue({
	el:'#app',
	data:{
		msg:'123'
	},
	// components:{
	// 	login
	// }
	// render 会把el指定的容器所有东西覆盖
	render:function(createElements){
		return createElements(app)
	},
	router,
	store
})