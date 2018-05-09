<template>
	<ul class="fifth-item clearfix">
		<li v-for="(fifthItemData, i) in fifthItemDatas" :key="i">
			<div class="item-top">
				<img :src="fifthItemData.imgSrc" alt="" />
			</div>
			<div class="item-bottom">
				<div class="item-prod">
					<p class="item-name">
						{{fifthItemData.itemName}}
					</p>
					<p class="item-info">
						{{fifthItemData.itemInfo}}
					</p>
				</div>
				<div class="item-price">
					<span class="price">{{fifthItemData.price}}</span>
					<span class="count">{{fifthItemData.count}}</span>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default{
	props: ['fifthItemDatas']
}
</script>

<style scoped>
.fifth-item{
	width: 100%;
	margin-top: 20px;
}
.fifth-item:after{
	content: "";
	display: block;
	clear: both;
}
.fifth-item > li{
	width: 48%;
	float: left;
	padding-bottom: 20px;
}
.fifth-item > li:nth-of-type(odd){
	padding-right: 4%;
}
.item-top{
	width: 100%;
	height: 150px;
	margin-bottom: 5px;
}
.item-top > img{
	width: 100%;
	height: 100%;
}
.item-bottom{
	width: 100%;
	height: 85px;
}
.item-name{
	width: 100%;
	font-size: 16px;	
	overflow : hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.item-info{
	font-size: 14px;
	color: #999;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 8px;
}
.item-price{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.price{
	font-weight: bold;
	font-size: 14px;
	color: tomato;
}
.count{
	font-size: 14px;
	color: #999;
}
</style>