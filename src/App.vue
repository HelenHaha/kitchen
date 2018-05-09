<template>
	<div id="app">
		<router-view/>
		<div class="footer-wrapper">
			<KFooter
				:footerBars="footerBars"
			/>
		</div>
	</div>
</template>

<script type="es6">
import KFooter from '@/components/KFooter/KFooter'
export default {
  name: 'App',
  data () {
  	return {
  		footerBars: [
				{
					icon: 'icon-fangzi',
					kind: '下厨房',
					path: '/'
				},
				{
					icon: 'icon-Shapecopy',
					kind: '市集',
					path: '/market'
				},
				{
					icon: 'icon-xin',
					kind: '收藏',
					path: '/collection'
				},
				{
					icon: 'icon-wo',
					kind: '我',
					path: '/mine'
				}
			]
  	}
  },
  components: {
  	KFooter
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
ul, ol{
	list-style: none;
}
a{
	text-decoration: none;
}
.clearfix{
	clear: both;
}
.iconfont-size-28{
	font-size: 28px;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.icon{
    /* 通过设置 font-size 来改变图标大小 */
    width: 1em; height: 1em;
    /* 图标和文字相邻时，垂直对齐 */
    vertical-align: -0.15em;
    /* 通过设置 color 来改变 SVG 的颜色/fill */
    fill: currentColor;
    /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示
    normalize.css 中也包含这行 */
    overflow: hidden;
}
.tab-bar-wrapper{
	position: absolute;
	bottom: 0
}
.footer-wrapper{
	width: 100%;
	position: fixed;
	bottom: 0;
	display: block;
	border-top: 1px solid #e2e2e2;
	background: #fff;
	left: 0;
}
</style>
