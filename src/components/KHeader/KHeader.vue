<template>
	
	<div class="header">
		<div class="h-left">
			<i class="iconfont iconfont-size-28 " v-bind:class="licon"></i>
			<i class="iconfont Micon" v-bind:class="Micon"></i>
			<p class="address">{{address}}</p>
		</div>
		<div class="h-center"> 
			<i class="iconfont" v-bind:class="clicon"></i>
			<input type="text" class="h-input" :placeholder="ktext"/>
			<i class="iconfont" v-bind:class="cricon"></i>
		</div>
		<div class="h-right">
			<i class="iconfont iconfont-size-28" v-bind:class="ricon"></i>
		</div>
	</div>
	
</template>
  
<script>
 /* eslint-disable */
export default{
	props: [
	'Micon',
	'licon',
	'clicon',
	'cricon',
	'ricon',
	'ktext',
	'address'
	]
}
</script>

<style scoped>
.header{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 52px;
}
.header .h-left{
	height: 32px;
	text-align: center;
}
.header .h-left .iconfont.Micon{
	position: relative;
	top: -8px;
	margin-top: -18px;
	font-size: 18px;
}
.header .h-left .address{
	margin-top: -13px;
	color: #333333;
	font-size: 8px;
}
.header .h-center{
	width: 70%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header .h-center > i{
	font-size: 20px;
	position: relative;
	color: #94958f;
}
.header .h-center .icon-icon--{
	left: 20%;
}
.header .h-center .icon-yuyin{
	right: 25px;
}
.header .h-center .h-input{
	height: 32px;
	width: 100%;
	border: none;
	background-color: #f1f1ef;
	border-radius: 3px; 
	text-align: center;
	outline: none;
}
</style>