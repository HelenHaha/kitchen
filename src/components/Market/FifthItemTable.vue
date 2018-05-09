<template>
	<ul class="fifth-item-table">
		<li v-for="(FifthItemTableData, i) in FifthItemTableDatas" :key="i">
			<div class="table-wrapper">
				<ul class="table">
					<li v-for="(itemchar, i) in FifthItemTableData.itemChars">{{itemchar.item}}</li>
				</ul>
			</div>
			<div class="item-wrapper">
				<div class="item-top">
					<img :src="FifthItemTableData.imgSrc" alt="" />
				</div>
				<div class="item-bottom">
					<div class="item-prod">
						<p class="item-name">
							{{FifthItemTableData.itemName}}
						</p>
						<p class="item-info">
							{{FifthItemTableData.itemInfo}}
						</p>
					</div>
					<div class="item-price">
						<span class="price">{{FifthItemTableData.price}}</span>
						<span class="count">{{FifthItemTableData.count}}</span>
					</div>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default{
	props: ['FifthItemTableDatas']
}
</script>

<style scoped>
.fifth-item-table{
	width: 100%;
}
.fifth-item-table > li{
	width: 100%;
	overflow: hidden;
}
.table-wrapper{
	width: 48%;
	height: 235px;
	margin-right: 4%;
	float: left;
}
.table-wrapper:after{
	content: "";
	display: block;
	clear: both;
}
.table{
	width: 100%;
	height: 100%;
	background: #F1F1EF;
}
.table > li{
	width: 50%;
	height: 20%;
	border-top: 1px solid #e0e0e0;
	box-sizing: border-box;
	display: inline-block;
	text-align: center;
	line-height: 50px;
	float: left;
	font-size: 14px;
}
.table > li:after{
	content: "";
	display: block;
	clear: both;
}
.table > li:nth-of-type(odd){
	box-sizing: border-box;
	border-right: 1px solid #e0e0e0;
}
.table > li:nth-child(1), .table > li:nth-child(2){
	border-top: none;
}
.item-wrapper{
	width: 48%;
	float: right;
}
.item-wrapper:after{
	content: "";
	display: block;
	clear: both;
}
.item-top{
	width: 100%;
	height: 150px;
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