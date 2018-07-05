<template>
	<div class="content">
		<h3>刷新当前页面</h3>
		<div>当前num值：{{num}}</div>
		
		<button @click="down">减</button>
		<button @click="add">加</button>
		<div @click="_reload" style="width: 80px;height:30px;border: 1px solid #e1e1e1;text-align: center;line-height: 30px;margin-top: 10px;">刷新当前页</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				num:0
			}
		},
		inject:['reload'],//主要使用了inject 和 provide ，具体原理找度娘----provide()写在app.vue上
		methods:{
			add(){
				this.num++;
			},
			down(){
				this.num--;
			},
			_reload(){
				this.reload();
			}
		}
	}
</script>
<style >
	button{
		height: 20px;width: 60px;
	}
</style>