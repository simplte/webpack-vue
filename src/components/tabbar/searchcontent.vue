<template>
		<Search></Search>
</template>

<script>
import {Search} from 'mint-ui';

	export default{
		data() {
			return{

			}
		},
		methods:{
			jia() {
				this.$store.dispatch('ac_increment', 1);
			},
			jian(){
				this.$store.dispatch('ac_reduce', 1);
			}
		},
		components: {
		Search	
		}
	}
</script>

<style>

</style>