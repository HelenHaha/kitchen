<template>
	<div class="mine">
    <div class="header-wrapper" ref="CHeader">
      <div class="header">
        <i class="iconfont icon-jiahao"></i>
        <span>我</span>
        <i class="iconfont icon-tianjiahaoyou"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <div class="person-info">
          <div class="person-char">
            <h1>对方不显示昵称</h1>
            <div class="add-item">
              <p>添加厨房必需品</p>
              <span>···</span>
            </div>
            <ul class="follow-fan">
              <li v-for="(fan, i) in fans" :key="i">
                <span class="count">{{fan.count}}</span>
                <span class="text">{{fan.text}}</span>
              </li>
            </ul>
          </div>
          <div class="person-img">
            <img src="http://img2.imgtn.bdimg.com/it/u=3344324213,3763620715&fm=27&gp=0.jpg" alt=""/>
            <p>编辑个人资料</p>
          </div>
        </div>
        <div class="list-wrapper">
          <ul class="list-content">
            <li v-for="(listItem, i) in listItems" :key="i">
              <i class="iconfont" :class="listItem.icon"></i>
              <span>{{listItem.remark}}</span>
            </li>
          </ul>
        </div>
        <div class="pages-wrapper">
          <el-tabs v-model="activeName">
            <el-tab-pane label="菜谱" name="first">
              <p class="line-one">创建菜谱的人是厨房里的天使</p>
              <p class="line-two">开始创建第一道菜谱</p>
            </el-tab-pane>
            <el-tab-pane label="作品" name="second">
              <p class="line-one">记录美食，味道因回忆而美丽</p>
              <p class="line-two">分享我的美食作品</p>
            </el-tab-pane>
          </el-tabs>

        </div>
      </div>
    </div>
	</div>
</template>

<script type="es6">
import mineTag from "@/assets/mineTag.css"
import KHeader from "@/components/KHeader/KHeader"

export default{
  data () {
    return {
      activeName: 'first',
      fans: [
        {
          count: 0,
          text: "关注"
        },
        {
          count: 0,
          text: "粉丝"
        }
      ],
      listItems: [
        {
          icon: 'icon-204',
          remark: '会员'
        },
        {
          icon: 'icon-xin',
          remark: '我的收藏'
        },
        {
          icon: 'icon-dingdan',
          remark: '订单'
        },
        {
          icon: 'icon-boxsavemoney',
          remark: '钱包'
        }
      ]
    }
  },
	components: {
		KHeader
	}
}
</script>

<style scoped>
.mine{
	width: 100%;
}
.header-wrapper{
  width: 100%;
  height: 52px;
  position: relative;
  z-index: 999;
  background: #fff;
}
.header{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  line-height: 52px;
}
.header i{
  font-size: 28px;
}
.header span{
  margin-left: 36%;
  font-size: 22px;
}
.header .icon-tianjiahaoyou{
  margin-left: 72px;
}
.header .icon-shezhi{
  float: right;
}
.content-wrapper{
  width: 100%;
  padding: 20px 0 50px 0;
}
.content{
  width: 100%;
  height: 100%;
}
.person-info{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10px;
  overflow: hidden;
  height: 150px;
}
.person-char{
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.add-item p{
  font-size: 12px;
  color: tomato;
}
.add-item span{
  font-size: 18px;
  font-weight: bold;
}
.person-img{
  width: 110px;
  height: 100%;
  float: right;
}
.person-img > img{
  width: 100%;
  height: 110px;
  border-radius: 50%;
}
.person-img > p{
  width: 100%;
  text-align: center;
  color: tomato;
  font-size: 14px;
  padding-top: 10px;
}
.follow-fan{
  overflow: hidden;
}
.follow-fan > li{
  display: flex;
  flex-direction: column;
  float: left;
  margin-right: 18px;
}
.follow-fan > li .count{
  font-size: 15px;
  font-weight: bold;
}
.follow-fan > li .text{
  font-size: 12px;
}
.list-wrapper{
  width: 100%;
  height: 62px;
  padding: 15px 0;
  margin-top: 8px;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
}
.list-content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.list-content > li{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.list-content > li > i{
  font-size: 24px;
}
.pages-wrapper p{
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
}
.pages-wrapper .line-two{
  color: tomato;
}
</style>
