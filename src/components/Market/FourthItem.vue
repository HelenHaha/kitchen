<template>
	<div class="fourth-item">
		<div class="img-wrapper">
			<img src="http://s2.cdn.xiachufang.com/c670e340358b11e7947d0242ac110002_1280w_853h.jpg?imageView2/1/w/300/h/140/interlace/1/q/90" alt="" />
		</div>
		<div class="char-wrapper">
			<p>吃货挚爱，这些进口零食不能错过！</p>
			<span>吃货一族全店满89-10 159-15，更有新人特惠！</span>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped>
.fourth-item{
	position: relative;
}
.img-wrapper{
	width: 100%;
	height: 160px;
}
.img-wrapper img{
	width: 100%;
	height: 100%;
}
.char-wrapper{
	position: absolute;
	bottom: 15px;
	left: 15px;
}
.char-wrapper > p{
	width: 100%;
	font-size: 20px;
	color: #fff;
	font-weight: bold;
}
.char-wrapper > span{
	font-size: 14px;
	color: #fff;
}
</style>