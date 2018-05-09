<template>
	<div class="alert">
		<p class="alert-title">现在加入\下厨房会员/</p>
			<div class="alert-content">
				<div class="content-left">
					<p>免费看 下厨房甄选:</p>
					<p>150+专刊·电子书·视频课</p>
				</div>
				<a class="content-right">立刻拥有</a>
			</div>
	</div>
</template>

<script type="es6">
  export default {

  }
</script>

<style scoped>
	.alert{
		background-color: #f2e0b8;
		border-radius: 8px;
		padding: 10px 12px;
	}
	.alert .alert-title{
		font-size: 18px;
		font-weight: bold;
		letter-spacing: 3px;
		margin-bottom: 15px;
	}
	.alert-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content-left > p{
		font-size: 14px;
		font-weight: bold;
	}
	.content-left > p:first-child{
		padding-bottom: 10px;
	}
	.content-right{
		background-color: black;
		color: #f2e0b8;
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
		border-radius: 8px;
	}
</style>
