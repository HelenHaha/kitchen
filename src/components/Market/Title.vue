<template>
	<div class="title">
		<div class="title-name">
			<p>{{titleName}}</p>
			<span>{{titleRemark}}</span>
		</div>
		<div class="title-all">
			<p>{{titleAll}}</p>
		</div>
	</div>
</template>

<script>
export default{
	props: ['titleName', 'titleRemark','titleAll']
}
</script>

<style scoped>
.title{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.title-name p{
	font-size: 22px;
	letter-spacing: 2px;
	font-weight: bold;
}
.title-name span{
	font-size: 16px;
	color: #999;
}
.title-all p{
	font-weight: bold;
	font-size: 18;
	color: tomato;
}
</style>