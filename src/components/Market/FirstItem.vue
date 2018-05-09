<template>
	<div class="first-item-wrapper" ref="firstItem">
		<ul class="first-item">
			<li v-for="(firstItemData, i) in firstItemDatas" :key="i">
				<div class="img-wrapper">
					<img :src="firstItemData.imgSrc" alt="" />
				</div>
				<div class="img-message">
					<div class="img-news">
						<p class="img-name">{{firstItemData.imgName}}</p>
						<p class="img-price">{{firstItemData.imgPrice}}</p>
					</div>
					<div class="img-info">
						<span>{{firstItemData.imgDate}}</span>
						<span>{{firstItemData.imgCount}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="es6">
import BScroll from 'better-scroll'
export default{
	data () {
		return {
			bscroll: null
		}
	},
	props: ['firstItemDatas'],
	mounted () {
		this.bscroll = new BScroll (this.$refs.firstItem, {
			scrollX: true
		})
	}
}
</script>

<style scoped>
.first-item-wrapper{
	width: 100%;
	overflow: scroll;
}
.first-item{
	width: 255%;
	overflow: hidden;
}
.first-item li{
	height: 96px;
	width: 31%;
	padding: 10px 17px 10px 0;
	float: left;
	overflow: hidden;
}
.img-wrapper{
	float: left;
	height: 100%;
	width: 76px;
	margin-right: 10px;
}
.img-wrapper img{
	height: 100%;
	width: 100%;
	vertical-align: top;
	margin-right: 10px;
	border-radius: 10px;
}
.img-message{
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
}
.img-price{
	font-size: 14px;
	padding-top: 3px;
	color: tomato;
}
.img-info{
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	color: #999;
}
</style>
