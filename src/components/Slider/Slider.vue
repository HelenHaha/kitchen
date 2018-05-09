<template>
	<div class="slider-wrapper" ref="bwrapper">
		<ul class="slider-content">
			<li v-for="(liBg, i) in liBgs" :key="i">
				<!--卡槽 slot-->
				<div class="slider-sbox" slot="slider-item">
					<img class="silder-bg" :src="liBg.bg" alt="" />
					<p><span class="item-topic">菜谱合辑</span></p>
					<p class="item-name">{{liBg.itemName}}</p>
				</div>
			</li>			
		</ul>
	</div>
</template> 

<script>
	// 引入better-scroll框架
	// 指明在确定的执行时机下绑定
import BetterScroll from 'better-scroll'
export default{
	data () {
		return {
			bscroll: null,
		}
	},
	props: ['liBgs'],
	mounted () {
		this.bscroll = new BetterScroll(this.$refs.bwrapper, {
			scrollX: true,
			snap: {
				loop: true,
				threshold: 0.6
			}				
		})
	}
}
</script>

<style scoped>
.slider-wrapper{
	width: 100%;
	height: 180px;
	overflow: scroll;
}
.slider-wrapper::-webkit-scrollbar {
  display: none;
}
.slider-content{
	width: 600%;
	height: 100%;
	display: flex;
}
.slider-content > li{
	width: 16.666%;
	height: 100%;
}
.slider-sbox{
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}
.slider-sbox .silder-bg{
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	vertical-align: top;
}
.slider-sbox .item-topic{
	color: #000000;
	margin-left: 15px;
	font-size: 6px;
	font-weight: bold;
	padding: 1px 5px;
	border-radius: 3px;
	background-color: #fff;
}
.slider-sbox .item-name{
	margin-top: -3px;
	padding-left: 15px;
	color: #fff;
	font-size: 14px;
	padding-top: 5px;
	font-weight: bold;
	width: 110px;
	word-wrap: break-word;
	margin-bottom: 15px;
}
</style>