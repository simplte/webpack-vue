<template>
	<div>
		account

		<router-link to='/account/login'>登录</router-link>
        <router-link to='/account/register'>注册</router-link>
        <router-view></router-view>
	</div>
</template>

<script>

</script>
/* 使用scss或者less   lang="scss"*/
<style scoped>
	div{
		font-weight:bold
	}
</style>