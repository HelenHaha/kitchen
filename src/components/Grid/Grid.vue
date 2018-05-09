<template>
	<div class="grid">
		<ul class="grid-list">
			<li v-for="(gridData, i) in gridDatas" :key="i">
				<svg class="icon" aria-hidden="true">
				    <use :xlink:href="gridData.icon"></use>
				</svg>
				<p>{{gridData.text}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props: ['gridDatas']
}
</script>

<style scoped>
.grid-list{
	display: flex;
	/*排列方式*/ 
	flex-direction: row;
	/*水平对齐方式*/
	justify-content: space-between;
	flex-wrap: wrap;
}
.grid-list > li{
	display: flex;
	width: 25%;
	flex-direction: column;
	/*主轴由flex-direction决定*/
	justify-content: flex-start;
	/*侧轴*/
	align-items: center;
	padding-top: 20px;
}
.grid-list > li > .icon{
	font-size: 24px;
}
.grid-list > li > p{
	font-size: 12px;
	margin-top: 5px;
}
</style>