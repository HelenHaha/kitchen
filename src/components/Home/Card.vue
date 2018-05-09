<template>
	<div class="card">
		<div class="card-top">
			<img class="card-bg" :src="imgSrc" alt="" />
			<div><span class="prof">{{prof}}</span></div>
			<p class="name">{{name}}</p>
		</div>
		<div class="card-bottom">
			<p class="activity">{{activity}}</p>
			<span class="activity-count">{{count}}</span>
		</div>
	</div>
</template>

<script>
export default{
	props:['imgSrc','prof','name','activity','count']
}
</script>

<style scoped>
	.card{
		width: 100%;
		height: 100%;
		margin-right: 20px;
	}
	.card-top{
		display: flex;
    width: 100%;
    height: 200px;
		flex-direction: column;
		justify-content: flex-end;
		position: relative;
	}
	.card-bg{
		/*border-top: 0.1px solid transparent;*/
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 200px;
		vertical-align: top;
	}
	.prof{
		font-size: 6px;
		font-weight: bold;
		background-color: #fff;
		padding: 3px 8px;
		border-radius: 4px;
		margin-left: 18px;
	}
	.name{
		font-size: 18px;
		font-weight: bold;
		color: #fff;
		margin-left: 18px;
		padding-top: 10px;
		margin-bottom: 20px;
		letter-spacing: 2px;
	}
	.activity{
		width: 100%;
		font-size: 16px;
		font-weight: bolder;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-top: 10px;
		margin-bottom: 12px;
	}
	.activity-count{
		font-size: 4px;
		color: #999999;
	}
</style>
