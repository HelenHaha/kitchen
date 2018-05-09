<template>
	<div class="second-item-wrapper" ref="secondItem">
		<ul class="second-item">
			<li v-for="(itemData, i) in itemDatas" :key="i">
				<div class="item-top">
					<img :src="itemData.imgSrc" alt="" />
					<span ref="span">{{itemData.post}}</span>
				</div>
				<div class="item-bottom">
					<div class="item-info">
						<p class="item-name">{{itemData.itemName}}</p>
						<p class="item-pro">{{itemData.itemPro}}</p>
					</div>
					<div class="item-price">
						<div class="price">
							<span class="newPrice">{{itemData.newPrice}}</span>
							<s class="oldPrice">{{itemData.oldPrice}}</s>
						</div>
						<span class="fraction">{{itemData.fraction}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="es6">
import BScroll from "better-scroll"
export default{
	data () {
		return {
			bscroll: null,
			spanContent: null
		}
	},
	props: ['itemDatas'],
	mounted () {
		this.bscroll = new BScroll (this.$refs.secondItem, {
			scrollX: true
		})
		this._getSpanContent ()
		this._changeStyle ()
	},
	methods: {
		_getSpanContent () {
			let newArr = this.$refs.span.map(function (e, i) {
				return e;
			})
			return newArr;
		},
		_changeStyle () {
			this.spanContent = this._getSpanContent ()
//			console.log(this.spanContent)
			this.spanContent.map((item,index)=>{
//				console.log(item);
				if(item.innerHTML === ''){
					item.style.padding = 0;
				}
			});
		}
	}
}
</script>

<style scoped>
.second-item-wrapper{
	width: 100%;
	overflow: scroll;
}
.second-item{
	width: 750px;
	overflow: hidden;
}
.second-item li{
	width: 140px;
	margin-right: 10px;
	float: left;
}
.item-top{
	position: relative;
}
.item-top > img{
	width: 100%;
	height: 140px;
	border-radius: 8px;
	margin: 10px 10px 0 0;
}
.item-top > span{
	position: absolute;
	left: 10px;
	top: 20px;
	background-color: #FFFF00;
	border-radius: 5px;
	font-size: 12px;
	padding: 0 3px 3px;
}
.item-bottom{
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.item-name{
	width: 100%;
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.item-pro{
	font-size: 14px;
	color: #999;
	padding-top: 3px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.item-price{
	width: 100%;
	font-size: 14px;
	display: flex;
	justify-content: space-between;
	color: #999;
}
.item-price .newPrice{
	color: tomato;
}
</style>
