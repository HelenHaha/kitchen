<template>
	<div class="market">
		<div class="header-wrapper" ref="Mheader">
			<div class="header-content">
				<K-header
					Micon="icon-ICONbiaozhun_fuzhi-"
					clicon="icon-icon--"
					ricon="icon-gongwenbao"
					ktext="搜索商品"
					address="遵义市"
				/>
			</div>
		</div>
		<div class="content-wrapper" :style="{height: MCHeight + 'px'}" ref="MContent">
			<div class="content">
				<div class="grid-wrapper">
					<Grid
						:grid-datas="gridDatas"
					/>
				</div>
				<div class="first-wrapper">
					<div class="title-wrapper">
						<Title
							title-name="爱尝鲜"
							title-remark="全网好货，超值低价"
							title-all="查看全部"
						/>
					</div>
					<div class="first-content">
						<FirstItem
							:firstItemDatas="firstItemDatas"
						/>
					</div>
				</div>
				<div class="second-wrapper">
					<div class="title-wrapper">
						<Title
							title-name="市集上新"
							title-remark="好评新货，限时折扣"
							title-all="查看全部"
						/>
					</div>
					<div class="second-content">
						<SecondItem
							:itemDatas="secondItemDatas"
						/>
					</div>
				</div>
				<div class="third-wrapper">
					<div class="title-wrapper">
						<Title
							title-name="市集经典"
							title-remark="百万厨友，口碑票选"
							title-all="查看全部"
						/>
					</div>
					<div class="second-content">
						<SecondItem
							:itemDatas="thirdItemDatas"
						/>
					</div>
				</div>
				<div class="fourth-wrapper">
					<FourthItem />
				</div>
				<div class="fifth-wrapper">
					<div class="title-wrapper">
						<Title
							title-name="猜你喜欢"
							title-remark=""
							title-all=""
						/>
					</div>
					<div class="fifth-content">
						<FifthItem
							:fifthItemDatas="fifthItemDatas"
						/>
					</div>
				</div>
				<div class="Fifth-item-table-wrapper">
					<FifthItemTable
						:FifthItemTableDatas="FifthItemTableDatas1"
					/>
				</div>
				<div class="Fifth-item-table-bottom">
					<div class="fifth-content">
						<FifthItem
							:fifthItemDatas="fifthItemDatas"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="es6">
import BScroll from 'better-scroll'
import KHeader from "@/components/KHeader/KHeader"
import Grid from "@/components/Grid/Grid"
import Title from "@/components/Market/Title"
import FirstItem from "@/components/Market/FirstItem"
import SecondItem from "@/components/Market/SecondItem"
import FourthItem from "@/components/Market/FourthItem"
import FifthItem from "@/components/Market/FifthItem"
import FifthItemTable from "@/components/Market/FifthItemTable"
let firstItemDatas = [
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/e3a5ef808a8411e6a9a10242ac110002_1678w_2048h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		imgName: '蜀大侠好易煮袋装火锅',
		imgPrice: '尝鲜价12.5元包邮，原价15.8元',
		imgDate: '来自：下厨房市集 | 04-30',
		imgCount: '已售33'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/b9b6e96e86fa11e6a9a10242ac110002_600w_529h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		imgName: '老北京酸梅汤原料包 3包',
		imgPrice: '尝鲜价19元包邮，原价38元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售45'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/b9b6e96e86fa11e6a9a10242ac110002_600w_529h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		imgName: '老北京酸梅汤原料包 3包',
		imgPrice: '尝鲜价19元包邮，原价38元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售45'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/134e3e10094011e7bc9d0242ac110002_1024w_1024h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		imgName: '良润新良馒头自发粉 1斤',
		imgPrice: '尝鲜价9.9元包邮，原价13.8元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售36'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/890ab2ba168c11e7947d0242ac110002_1836w_2448h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		imgName: '老北京酸梅汤原料包 3包',
		imgPrice: '尝鲜价19元包邮，原价38元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售45'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/bb695136a994448fa389cca78154debb_482w_300h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		imgName: '老北京酸梅汤原料包 3包',
		imgPrice: '尝鲜价19元包邮，原价38元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售45'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/bb695136a994448fa389cca78154debb_482w_300h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		imgName: '老北京酸梅汤原料包 3包',
		imgPrice: '尝鲜价19元包邮，原价38元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售45'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/134e3e10094011e7bc9d0242ac110002_1024w_1024h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		imgName: '良润新良馒头自发粉 1斤',
		imgPrice: '尝鲜价9.9元包邮，原价13.8元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售36'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/134e3e10094011e7bc9d0242ac110002_1024w_1024h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		imgName: '良润新良馒头自发粉 1斤',
		imgPrice: '尝鲜价9.9元包邮，原价13.8元',
		imgDate: '来自：下厨房市集 | 05-01',
		imgCount: '已售36'
	}
]
let secondItemDatas = [
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/91286c5a500011e7bc9d0242ac110002_1590w_1061h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		post: '',
		itemName: '第三代鲜汤螺蛳粉 3包',
		itemPro: '臭味相投者，共嗦螺蛳粉',
		newPrice: '￥39',
		oldPrice: '￥49',
		fraction: '5分'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/26011f2e88ca11e6b87c0242ac110003_748w_560h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		post: '包邮',
		itemName: '进口巧克力泡芙',
		itemPro: '澳洲经典，巧克力果酱美味',
		newPrice: '￥35',
		oldPrice: '￥59',
		fraction: '4.9分'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/91286c5a500011e7bc9d0242ac110002_1590w_1061h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		post: '包邮',
		itemName: '第三代鲜汤螺蛳粉 3包',
		itemPro: '臭味相投者，共嗦螺蛳粉',
		newPrice: '￥39',
		oldPrice: '￥49',
		fraction: '5分'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/26011f2e88ca11e6b87c0242ac110003_748w_560h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		post: '包邮',
		itemName: '进口巧克力泡芙',
		itemPro: '澳洲经典，巧克力果酱美味',
		newPrice: '￥35',
		oldPrice: '￥59',
		fraction: '4.9分'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/91286c5a500011e7bc9d0242ac110002_1590w_1061h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
		post: '包邮',
		itemName: '第三代鲜汤螺蛳粉 3包',
		itemPro: '臭味相投者，共嗦螺蛳粉',
		newPrice: '￥39',
		oldPrice: '￥49',
		fraction: '5分'
	}
]
let thirdItemDatas = [
	{
		imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2193143280,2109963579&fm=27&gp=0.jpg',
		post: '包邮',
		itemName: '东方蜜一号甜瓜 4.5斤',
		itemPro: '时令水果 清脆香甜',
		newPrice: '￥39',
		oldPrice: '￥42',
		fraction: '已售61851'
	},
	{
		imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3432730525,3980029325&fm=27&gp=0.jpg',
		post: '包邮',
		itemName: '黄皮甜心芒 5斤',
		itemPro: '吃过香甜的芒果没有之一',
		newPrice: '￥35',
		oldPrice: '￥59',
		fraction: '已售6532'
	},
	{
		imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2193143280,2109963579&fm=27&gp=0.jpg',
		post: '包邮',
		itemName: '东方蜜一号甜瓜 4.5斤',
		itemPro: '时令水果 清脆香甜',
		newPrice: '￥39',
		oldPrice: '￥42',
		fraction: '5分'
	},
	{
		imgSrc: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3432730525,3980029325&fm=27&gp=0.jpg',
		post: '包邮',
		itemName: '黄皮甜心芒 5斤',
		itemPro: '吃过香甜的芒果没有之一',
		newPrice: '￥35',
		oldPrice: '￥59',
	},
	{
		imgSrc: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2193143280,2109963579&fm=27&gp=0.jpg',
		post: '包邮',
		itemName: '东方蜜一号甜瓜 4.5斤',
		itemPro: '时令水果 清脆香甜',
		newPrice: '￥39',
		oldPrice: '￥42',
		fraction: '5分'
	}
]
let fifthItemDatas = [
	{
		imgSrc: 'http://img5.imgtn.bdimg.com/it/u=604328168,2279298339&fm=27&gp=0.jpg',
		itemName: '铁胆米店 | 东北特产甜糯玉米 粘苞米10根装',
		itemInfo: '非转基因 农民自产 绿色种植',
		price: '￥39.8',
		count: '已售13197'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/a9fe52e40dcf11e7bc9d0242ac110002_1280w_1280h.jpg?imageView2/1/w/300/h/140/interlace/1/q/90',
		itemName: '【台城直营】台式纯肉手工香肠180*4盒 | 顺风速运',
		itemInfo: '精选新鲜猪肉 | 天然肠衣',
		price: '￥69',
		count: '已售11680'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/bb33a109cba24d39af4f02b8e56ce12a_1024w_683h.jpg?imageView2/1/w/300/h/140/interlace/1/q/90',
		itemName: '铁胆米店 | 东北特产甜糯玉米 粘苞米10根装',
		itemInfo: '非转基因 农民自产 绿色种植',
		price: '￥39.8',
		count: '已售13197'
	},
	{
		imgSrc: 'http://s2.cdn.xiachufang.com/6806522e93d74a1cbebffebcd452a01b_1024w_684h.jpg?imageView2/1/w/235/h/138/interlace/1/q/90',
		itemName: '【台城直营】台式纯肉手工香肠180*4盒 | 顺风速运',
		itemInfo: '精选新鲜猪肉 | 天然肠衣',
		price: '￥69',
		count: '已售11680'
	},
		{
		imgSrc: 'http://s1.cdn.xiachufang.com/3655888e872a11e6b87c0242ac110003_450w_675h.jpg@2o_50sh_1pr_1l_300w_140h_1c_1e_90q_1wh',
		itemName: '铁胆米店 | 东北特产甜糯玉米 粘苞米10根装',
		itemInfo: '非转基因 农民自产 绿色种植',
		price: '￥39.8',
		count: '已售13197'
	},
	{
		imgSrc: 'http://s1.cdn.xiachufang.com/624ec03f1b7b469fa9c30ac818608188_1920w_1080h.jpg@2o_50sh_1pr_1l_235w_138h_1c_1e_90q_1wh',
		itemName: '【台城直营】台式纯肉手工香肠180*4盒 | 顺风速运',
		itemInfo: '精选新鲜猪肉 | 天然肠衣',
		price: '￥69',
		count: '已售11680'
	}
]
let FifthItemTableDatas1 = [
	{
		itemChars: [
			{item: '淡奶油'},
			{item: '烤箱'},
			{item: '锅'},
			{item: '不粘锅'},
			{item: '盒饭'},
			{item: '餐具'},
			{item: '蛋挞皮'},
			{item: '牛排'},
			{item: '黄油'},
			{item: '芝士'}
		],
		imgSrc: 'http://s2.cdn.xiachufang.com/11c8a11a86f611e6a9a10242ac110002_500w_688h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
		itemName: '铁胆米店 | 东北特产甜糯玉米 粘苞米10根装',
		itemInfo: '非转基因 农民自产 绿色种植',
		price: '￥39.8',
		count: '已售13197'
	}
]
export default{
	data () {
		return {
			gridDatas: [
				{
					icon: '#icon-kaoxiang',
					text: '烘焙'
				},
				{
					icon: '#icon-shucai',
					text: '果蔬生鲜'
				},
				{
					icon: '#icon-chahu',
					text: '器具'
				},
				{
					icon: '#icon-youhuiquan',
					text: '领券'
				},
				{
					icon: '#icon-shiwuqimin1',
					text: '方便食品'
				},
				{
					icon: '#icon-huiliuqujinkoushipin',
					text: '进口食品'
				},
				{
					icon: '#icon-lizi',
					text: '时令鲜食'
				},
				{
					icon: '#icon-icon_hangyefenlei',
					text: '全部分类'
				}
			],
			firstItemDatas,
			secondItemDatas,
			thirdItemDatas,
			fifthItemDatas,
			FifthItemTableDatas1,
			bscroll: null,
			MCHeight: null
		}
	},
	components: {
		KHeader,
		Grid,
		Title,
		FirstItem,
		SecondItem,
		FourthItem,
		FifthItem,
		FifthItemTable
	},
	methods: {
		_getMHHeight () {
			return this.$refs.Mheader.offsetHeight
		},
		_getMCHeight () {
			return window.innerHeight - this._getMHHeight()
		}
	},
	mounted () {
		this.MCHeight = this._getMCHeight ()
		this.$nextTick(() => {
			this.bscroll = new BScroll(this.$refs.MContent, {
				scrollY: true
			})
		})
	}
}
</script>

<style scoped>
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
.content-wrapper{
	width: 90%;
	margin: 0 auto;
}
.first-wrapper{
	margin-top: 20px;
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid #e2e2e2;
}
.second-wrapper{
	width: 100%;
	padding: 20px 0;
}
.third-wrapper{
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid #e2e2e2;
}
.fourth-wrapper{
	width: 100%;
	padding: 20px 0;
	border-top: 1px solid #e2e2e2;
}
.fifth-wrapper{
	width: 100%;
	padding-top: 20px;
}
.Fifth-item-table-bottom{
	padding-bottom: 60px;
}
</style>
