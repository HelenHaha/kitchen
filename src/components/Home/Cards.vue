<template>
	<div class="cards">
		<div class="title-wrapper">
			<p class="cards-title">{{cardsTitle}}</p>
			<span class="cards-all">查看全部</span>
		</div>
		<div class="card-wrapper" ref="cards">
			<ul class="card-swrapper">
				<li v-for="(cardsData, i) in cards" :key="i">
					<Card
						:img-src="cardsData.imgSrc"
						:prof="cardsData.prof"
						:name="cardsData.name"
						:activity="cardsData.activity"
						:count="cardsData.count"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BetterScroll from 'better-scroll'
import Card from './Card'

export default{
	data () {
		return {
			bscroll: null
		}
	},
	props: ['cardsTitle','cards'],
	components: {
		Card
	},
	mounted () {
		this.bscroll = new BetterScroll (this.$refs.cards, {
			scrollX: true
		})
	}
}

</script>

<style scoped>
	.cards{
		width: 100%;
		overflow: hidden;
	}
	.title-wrapper{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cards-title{
		font-size: 18px;
		font-weight: bold;
		margin: 25px 0;
	}
	.cards-all{
		color: #969896;
		font-size: 16px;
	}
	.card-wrapper{
		width: 100%;
	}
	.card-swrapper{
		height: 100%;
		width: 470%;
		overflow: hidden;
	}
	.card-swrapper > li{
		float: left;
    width: 140px;
    height: 305px;
    margin-right: 12px;
	}
  .card-swrapper > li:after{
    content: "";
    display: block;
    clear: both;
  }
</style>
