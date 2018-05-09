<template>
	<div class="home">
		<div class="header-wrapper" ref="homeHeader">
			<div class="header-content">
				<k-header
					licon="icon-jiahao"
					clicon="icon-icon--"
					cricon="icon-yuyin"
					ricon="icon-gongwenbao"
					ktext="搜素菜谱、食材"
				/>
			</div>
		</div>

		<div class="content" v-if="hCHeight" :style="{height: hCHeight + 'px'}" ref="homeContent">
			<div class="homecontent">
				<div class="grid-wrapper">
					<Grid
						:grid-datas="gridDatas"
					/>
				</div>
				<div class="cube-wrapper">
					<Cube
						img-src="http://s2.cdn.xiachufang.com/6d52d70e1e3e465dae14e13ce35484e4_911w_1620h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90"
						time="本周"
						menu="流行菜谱"
					/>
					<Cube
						img-src="http://s2.cdn.xiachufang.com/773882a8883711e6a9a10242ac110002_393w_286h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90"
						time="查看好友"
						menu="并关注他们"
					/>
				</div>
				<div class="slider-box">
					<Slider
						:li-bgs='liBgs'
					/>
				</div>
				<div class="time-wrapper">
					<Time
						:times="times"
					/>
				</div>
				<div class="alert-wrapper">
					<Alert />
				</div>
				<div class="class-wrapper">
					<Cards
						cards-title="厨 studio 课堂"
						:cards="cardsDatas1"
					/>
				</div>
				<div class="book-wrapper">
					<Cards
						cards-title="专栏 ·电子书"
						:cards="cardsDatas2"
					/>
				</div>
				<div class="book-wrapper">
					<Cards
						cards-title="市集精选折扣"
						:cards="cardsDatas3"
					/>
				</div>
				<div class="book-wrapper">
					<Cards
						cards-title="菜单推荐"
					/>
					<BigCards
						:BigCards="BigCards"
					/>
				</div>
				<div class="book-wrapper">
					<Cards
						cards-title="厨 studio 课堂热卖精选"
						:cards="cardsDatas4"
					/>
				</div>
				<div class="book-wrapper">
					<Cards
						cards-title="厨房活动"
						:cards = "cardsDatas5"
					/>
				</div>
				<p class="warning">已经到底了</p>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import Slider from '@/components/Slider/Slider'
import KHeader from '@/components/KHeader/KHeader'
import Grid from '@/components/Grid/Grid'
import Cube from '@/components/Home/Cube'
import Time from '@/components/Home/Time'
import Alert from '@/components/Alert/Alert'
import Cards from '@/components/Home/Cards'
import BigCards from '@/components/Home/BigCards'
//import KFooter from '@/components/KFooter/KFooter'
// 定义假数据
let cardsDatas1 = [
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/76fdfe4866b311e7947d0242ac110002_1000w_667h.png@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/76fdfe4866b311e7947d0242ac110002_1000w_667h.png@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	}
]
let cardsDatas2 = [
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/d3d8905c891811e6b87c0242ac110003_1280w_1280h.jpg?imageView2/2/w/660/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/d0d5c495e3f3449aa19c6da9b1373a03_1080w_720h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	}
]
let cardsDatas3 = [
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/890ab2ba168c11e7947d0242ac110002_1836w_2448h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/bb695136a994448fa389cca78154debb_482w_300h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/890ab2ba168c11e7947d0242ac110002_1836w_2448h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/bb695136a994448fa389cca78154debb_482w_300h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	}
]
let cardsDatas4 = [
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/4002b3b22888478dbbcf772f087a53d8_5760w_3840h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	}
]
let cardsDatas5 = [
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/413dade488c411e6a9a10242ac110002_640w_424h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/8558d798894a11e6a9a10242ac110002_721w_961h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/413dade488c411e6a9a10242ac110002_640w_424h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/8558d798894a11e6a9a10242ac110002_721w_961h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/413dade488c411e6a9a10242ac110002_640w_424h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/8558d798894a11e6a9a10242ac110002_721w_961h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/e365b8feff7f4b72a4237e3065ba5f62_1440w_889h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		prof: '讲师',
		name: '任冉',
		activity: '限时特价 | 3款易卷又美味的香缇奶油戚风面包',
		count: '2543人参与'
	}
]

export default{
	data () {
		return {
			gridDatas: [
				{
					icon: '#icon-guochan',
					text: '厨房好物'
				},
				{
					icon: '#icon-shiwuqimin',
					text: '发现新菜'
				},
				{
					icon: '#icon-paihangbang-',
					text: '排行榜'
				},
				{
					icon: '#icon-icon_caidanpeizhi',
					text: '菜谱分类'
				}
			],
			liBgs: [
				{
					bg: "http://s2.cdn.xiachufang.com/69fcb15c87b711e6a9a10242ac110002_525w_350h.jpg?imageView2/2/w/660/interlace/1/q/90",
					itemName: '越南，越开胃'
				},
				{
					bg: "http://s1.cdn.xiachufang.com/118ffede5eee11e7947d0242ac110002_1080w_864h.jpg@2o_50sh_1pr_1l_660w_90q_1wh",
					itemName: '有泡菜的餐桌才有生活的味道'
				},
				{
					bg: "http://s2.cdn.xiachufang.com/c85b59788aba11e6a9a10242ac110002_1261w_909h.jpg?imageView2/2/w/660/interlace/1/q/90",
					itemName: '孤独的美食家:来自厨房的观影者'
				},
				{
					bg: "http://s2.cdn.xiachufang.com/4ce49ad6b5ab11e6bc9d0242ac110002_640w_480h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90",
					itemName: '离不开的小龙虾'
				}
			],
			times: [
				{
					imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=183519365,2376373431&fm=27&gp=0.jpg",
					meal: "早餐",
					mealImg: "http://s1.cdn.xiachufang.com/5ed279cf64044d7d8b3395a7b6442810_817w_817h.jpg@2o_50sh_1pr_1l_150w_100h_1c_1e_90q_1wh"
				},
				{
					imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525262842&di=36a195291cfbc988df92d296ae866f24&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120713%2F201982-120G313462076.jpg",
					meal: "午餐",
					mealImg: "http://s2.cdn.xiachufang.com/91fabc6886ee11e6b87c0242ac110003_441w_308h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90"
				},
				{
					imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1208822125,246355460&fm=200&gp=0.jpg",
					meal: "晚餐",
					mealImg: "http://s2.cdn.xiachufang.com/01c64fd0889d11e6b87c0242ac110003_638w_628h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90"
				}
			],
			BigCards: [
				{
					imgSrc: 'http://s2.cdn.xiachufang.com/add354e88a3811e6a9a10242ac110002_1620w_1199h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
					title: '下午茶并不需要多复杂',
					count: '52道菜谱'
				},
				{
					imgSrc: 'http://s2.cdn.xiachufang.com/f43196d2e5d54742b922e79b75ec1cf2_2000w_2000h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
					title: '只用烤箱就能作的美食',
					count: '76道菜谱'
				},
				{
					imgSrc: 'http://s1.cdn.xiachufang.com/e42f3e2d0ca741c0a7f176b937b128a3_754w_1008h.jpg@2o_50sh_1pr_1l_150w_100h_1c_1e_90q_1wh',
					title: '回做率超高的饼干方子',
					count: '76道菜谱'
				},
				{
					imgSrc: 'http://s2.cdn.xiachufang.com/204fc6828ad411e6a9a10242ac110002_5184w_3456h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
					title: '品一品异域味道',
					count: '176道菜谱'
				}
			],
			bscroll: null,
			cardsDatas1,
			cardsDatas2,
			cardsDatas3,
			cardsDatas4,
			cardsDatas5,
			hCHeight: null
		}
	},
	components: {
		KHeader,
		Grid,
		Cube,
		Slider,
		Time,
		Alert,
		Cards,
		BigCards,
//		KFooter
	},
	methods: {
		_getHheight () {
			return this.$refs.homeHeader.offsetHeight
		},
		_getHCHeight () {
			return window.innerHeight - this._getHheight()
		}
	},
	mounted () {
		this.hCHeight = this._getHCHeight()
		this.$nextTick(() => {
			this.bscroll = new BScroll(this.$refs.homeContent, {
				scrollY: true
			})
		})
	}
}
</script>

<style scoped>
.home{
	height: 667px;
	position: relative;
	overflow: hidden;
}
.header-wrapper{
	width: 100%;
	position: relative;
	z-index: 999;
	background: #fff;
}
.header-content{
	width: 90%;
	margin: 0 auto;
}
.content{
	width: 90%;
	margin: 0 auto;
}
.cube-wrapper{
	display: flex;
	justify-content: space-between;
}
.slider-box{
	vertical-align: top;
	margin-top: 20px;
}
.book-wrapper{
	margin-top: -20px;
}
.warning{
	margin-top: 60px;
	font-size: 14px;
	color: #94958F;
	text-align: center;
	margin-bottom: 40px;
}
</style>
