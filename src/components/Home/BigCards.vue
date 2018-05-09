<template>
	<div class="bigcards" ref="bigcards">
		<ul class="bigcards-content">
			<li v-for="(BigCard, i) in BigCards" :key="i">
				<img :src="BigCard.imgSrc" alt="" />
				<p>{{BigCard.title}}</p>
				<span>{{BigCard.count}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default{
	data () {
		return {
			bscroll: null
		}
	},
	props: ['BigCards'],
	mounted () {
		this.bscroll = new BetterScroll(this.$refs.bigcards, {
			scrollX: true
		})
	}
}
</script>

<style scoped>
	.bigcards{
		width: 100%;
		overflow: scroll;
		height: 150px;
		margin-bottom: 15px;
	}
	.bigcards-content{
		width: 400%;
		height: 100%;
		display: flex;
	}
	.bigcards-content > li{
		font-weight: bold;
		color: #fff;
		margin-right: 15px;
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: relative;
	}
	.bigcards-content > li > img{
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 150px;
	}
	.bigcards-content > li >p{
		font-size: 18px;
		padding-left: 15px;
	}
	.bigcards-content > li >span{
		font-size: 12px;
		padding-left: 15px;
		margin-bottom: 20px;
	}
</style>