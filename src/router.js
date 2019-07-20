import VueRouter from 'vue-router'


import account from './main/account.vue';
import goodslist from './main/goodsList.vue';
import register from './subcom/register.vue';
import login from './subcom/login.vue';

import homecontent from './components/tabbar/homecontent.vue';
import searchcontent from './components/tabbar/searchcontent.vue';
import shopcarcontent from './components/tabbar/shopcarcontent.vue';
import membercontent from './components/tabbar/memebercontent.vue';
var router = new VueRouter({
	routes:[
		{path:'/account', 
		component: account,
			children:[
				{path:'register', component:register},
				{path:'login', component:login}
			]
		},
		{path:'/goodslist', component:goodslist},

		{path:'/home', component:homecontent},
		{path:'/search', component:searchcontent},
		{path:'/shopcar', component:shopcarcontent},
		{path:'/member', component:membercontent}
	],
	linkActiveClass:'mui-active'
})
export default router;