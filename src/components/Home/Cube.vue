<template>
	<div class="cube">
		<img :src="imgSrc" class="cube-bg"/>
		<p class="time">{{time}}</p>
		<p class="menu">{{menu}}</p>
	</div>
</template>

<script>
export default{
	props: [
		'imgSrc',
		'time',
		'menu'
	]
}
</script>

<style scoped>
	.cube{
		width: 48%;
		margin-top: 20px;
		height: 120px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.cube .cube-bg{
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
	.cube > p{
		color: #fff;
		font-weight: bold;
		font-size: 16px;
		margin-left: 15px;
	}
	.cube .menu{
		margin-bottom: 15px;
	}
</style>
