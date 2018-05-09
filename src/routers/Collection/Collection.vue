<template>
	<div class="collection">
		<div class="header-wrapper" ref="CHeader">
			<div class="header">
				<K-header
					clicon="icon-icon--"
					ktext="搜索我的收藏"
				/>
			</div>
		</div>
		<div class="content-wrapper" :style="{height: CCHeight + 'px'}" ref="CContent">
			<div class="content">
        <el-tabs v-model="activeName">
          <el-tab-pane label="菜单" name="first">
            <div class="block-wrapper">
              <div class="img-wrapper">
                <img
                  src="http://s1.cdn.xiachufang.com/225e296ebd0611e6bc9d0242ac110002_1280w_827h.jpg@2o_50sh_1pr_1l_660w_90q_1wh"
                  alt=""/>
              </div>
              <div class="img-prod">
                <p>我的收藏</p>
                <span>1菜谱</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="课程" name="second">
            <div class="block-wrapper">
              <div class="block-two-content">
                <h1>你好像还未收藏过</h1>
                <p>如果你喜欢某个课程，只需将它收藏，以后就可以在这里找到。</p>
                <span>寻找高人气课程</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="浏览历史" name="third">
            <ul class="block-wrapper">
              <li class="block-three-item" v-for="(threeData, i) in threeDatas" :key="i">
                <img :src="threeData.imgSrc" alt=""/>
                <div class="img-introduce">
                  <p>{{threeData.imgName}}</p>
                  <span class="chef">{{threeData.chef}}</span>
                  <span class="count">{{threeData.count}}</span>
                </div>
                <ul class="points">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
			</div>
		</div>
	</div>
</template>

<script type='es6'>
//import BScroll from 'better-scroll'
import KHeader from "@/components/KHeader/KHeader"

export default{
	data () {
		return {
			CCHeight: null,
			//bscroll: null,
      activeName: 'first',
      threeDatas: [
        {
          imgSrc: 'http://s1.cdn.xiachufang.com/d0a696849b4911e69ae90242ac110002_1080w_1440h.jpg@2o_50sh_1pr_1l_215w_136h_1c_1e_90q_1wh',
          imgName: '蔓越莓饼干（君之配方改良，易操作版）',
          chef: '涵妈diy',
          count: '8.1分 7023人做过'
        },
        {
          imgSrc: 'http://s2.cdn.xiachufang.com/f8d7fb608aec11e6a9a10242ac110002_4912w_3264h.jpg?imageView2/1/w/215/h/136/interlace/1/q/90',
          imgName: '青梅酱，初夏才有的风味',
          chef: '苏安蓝',
          count: '5人做过'
        }
      ]
	  }
  },
	components: {
		KHeader
	},
	methods: {
		_getCHHeight () {
			return this.$refs.CHeader.offsetHeight
		},
		_getCCHeight () {
			return window.innerHeight - this._getCHHeight ()
		}
	},
	mounted () {
		this.CCHeight = this._getCCHeight ()
		//this.$nextTick(() => {
		//	this.bscroll = new BScroll(this.$refs.CContent, {
		//		scrollY: true
		//	})
		//})
	}
}
</script>

<style scoped>
.collection{
	width: 100%;
}
.header-wrapper{
	width: 100%;
	position: relative;
	z-index: 999;
	background: #fff;
}
.header{
	width: 90%;
	margin: 0 auto;
}
.content-wrapper{
  width: 100%;
  height: 100%;
}
.content{
  width: 100%;
  height: 100%;
}
.block-wrapper{
  width: 90%;
  margin: 0 auto;
}
.img-wrapper{
  width: 100%;
  height: 150px;
}
.img-wrapper > img{
  width: 100%;
  height: 100%;
}
.img-prod{
  padding-top: 5px;
  width: 100%;
}
.img-prod p{
  font-size: 18px;
}
.img-prod span{
  line-height: 2;
  font-size: 12px;
  color: #999;
}
.block-two-content{
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
.block-two-content p{
  margin: 50px 0;
}
.block-two-content span{
  font-size: 18px;
  color: tomato;
}
.block-three-item{
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}
.block-three-item > img{
  width: 120px;
  height: 120px;
  float: left;
  margin-right: 20px;
}
.block-three-item .img-introduce{
  width: 180px;
  float: left;
}
.img-introduce p{
  font-size: 20px;
  font-weight: bold;
}
.img-introduce .chef{
  font-size: 12px;
  color: #999;
  display: block;
  margin: 15px 0;
}
.img-introduce .count{
  font-size: 14px;
}
 .points{
  margin-top: 90px;
  float: right;
}
 .points > li{
  width: 4px;
  height: 4px;
   margin-top: 3px;
  border-radius: 50%;
  background-color: #2c3e50;
}
</style>
