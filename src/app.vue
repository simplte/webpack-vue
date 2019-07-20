<template>
	<div class='app-container'>
		<mt-header fixed title='webpack搭建vue环境'></mt-header>

		<router-view></router-view>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				<span class="mui-badge">{{shopCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		<!--
			<mt-button type='danger' @click='show'>default</mt-button>
			<mt-button type='danger' size='large'>default</mt-button>

			<router-link to='/account'>account</router-link>
	        <router-link to='/goodslist'>goodslist</router-link>
		-->
		
	</div>
</template>

<script>
import {Toast} from 'mint-ui';

export default {
	data() {
	return {
		content: '',
		shopCount : 0
	};
	},
	methods:{
		show() {
		Toast('bqc项目')
		},
		getStudents() {
			this.axios.post("http://api.komavideo.com/news.list").then((response) => {
			  console.log(response.data);
			  this.content = response.data
			})
		}
	},
	mounted() {
		let self = this;
	},
	components:{
	},
	computed:{
		shopCountF() {
			let self = this;
			return  self.$store.state.home.selFruitList ? self.$store.state.home.selFruitList.length : 0;
		}
	},
	watch: {
		shopCountF(val) {
			this.shopCount = val
		}
	}
}
</script>

<style>
.app-container{
	padding-top:45px;
}
</style>