<template>
	<div class="footer">
		<ul class="footer-content">
			<router-link :to="footerBar.path" tag="li" v-for="(footerBar, i) in footerBars" :key="i" >
				<i class="iconfont" :class="footerBar.icon"></i>
				<span class="kind">{{footerBar.kind}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default{
	props: ['footerBars']	
}
</script>

<style scoped>
	.footer{
		width: 90%;
		margin: 0 auto;
		height: 52px;
	}
	.footer-content{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer-content li{
		display: flex;
		flex-direction: column;
		text-align: center;
		color: #100000;
	}
	.footer-content li i{
		font-size: 24px;
	}
	.footer-content li span{
		font-size: 14px;
	}
	.footer-content .router-link-exact-active{
		color: tomato;
	}
</style>