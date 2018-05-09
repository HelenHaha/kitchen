<template>
	<div class="time" ref="timewrapper">
		<ul class="time-content" ref="time">
			<li v-for="(time, i) in times" :key="i" ref="meal">
				<div class="moon"><img :src="time.imgUrl" alt="" /></div>
					<div class="schedule"><p class="meal">{{time.meal}}</p></div>
					<div class="meal-img"><img :src="time.mealImg" alt="" /></div>
			</li>
		</ul>
		<ul class="point-list" ref="point">
			<li class="active"></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default{
	data () {
		return {
			bScroll: null,
			activeIndex: 0,
			left: 0
		}
	},
	props: ['times'],
	mounted () {
		this.bScroll = new BetterScroll(this.$refs.timewrapper, {
			scrollX: true,
			snap: {
				loop: false,
				threshold: 0.6
			}
		});
	}
}
</script>

<style scoped>
	.time{
		width: 100%;
		overflow: scroll;
	}
	.time .time-content{
		width: 300%;
		display: flex;
	}
	.time .time-content > li{
		width: 33.33%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0;
	}
	.time-content img{
		width: 60px;
		height: 60px;
		vertical-align: top;
	}
	.moon img{
		margin-left: 15px;
	}
	.meal{
		font-size: 18px;
		font-weight: bold;
	}
	.point-list{
		display: inline-block;
		text-align: center;
		position: relative;
		top: -18px;
		left: 50%;
		margin-left: -9px;
	}
	.point-list >li{
		display: inline-block;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #e5e4df;
	}
	.point-list .active{
		background-color: #df442f;
	}
</style>