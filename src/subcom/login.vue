<template>
	<div>
		login count子组件
		<span @click='jia'>增加</span>
		<span @click='jian'>减少</span>
		<input v-model='this.$store.state.count'></h3>
	</div>
</template>

<script>
	export default{
		data() {
			return{

			}
		},
		mounted(){
			console.log(this.$store.state)
		},
		methods:{
			jia() {
				this.$store.dispatch('ac_increment', 1);
			},
			jian(){
				this.$store.dispatch('ac_reduce', 1);
			}
		}
	}
</script>

<style>

</style>