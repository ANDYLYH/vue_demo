<template>
	<div class="uploadMore">
		<div class="title">下拉刷新上拉加载</div>
		<div id="minirefresh" class="minirefresh-wrap" @scroll="paperScroll()" style="top: 50px;">
			<div class="minirefresh-scroll">
				<ul class="listContent_ul">
					<li v-for="item in list" class="list">
						加载数据{{item}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	data(){
		return {
			list:[],
			minirefresh: null,
		}
	},

	created(){
		document.title = "下拉刷新上拉加载";
	},
	activated(){
		
	},
	mounted () {
		var self = this;
		self.miniRefresh = new MiniRefresh({
			container: '#minirefresh',
			down: {
				isLock: false,//默认false，不禁止下拉
				callback: self.downCallback,
				loadFull:{
					isEnable:true,
					delay:300
				},
				successAnim:{
					isEnable:true,
					duration:300
				}
			},
			up: { 
				isAuto: true,
				callback: self.upCallback,
				loadFull:{//自动加载满屏相关配置
					isEnable:true,//是否开启自动加载满屏
					delay:300//延迟加载的时间
				},
				offset:10,
			}
		});
	},
	methods: {
		downCallback(){
			console.log('downCallback')
			const $self = this;
			// setTimeout(function(){
				$self.list = [];
				for(var i = 0; i < 6; i++){
					$self.list.push(i);
				}
				$self.miniRefresh.endDownLoading(true);
				$self.miniRefresh.refreshOptions(false);
			// },2000);
		},
		upCallback(){
			console.log('upCallback')
			const $self = this;
			// if($self.pageTotal == $self.pageCurrent){
			// 	$self.miniRefresh.endUpLoading(true);
			// 	return false;
			// }
			var len = this.list.length;
			setTimeout(function(){
				for(var i = len; i < len + 6; i++){
					$self.list.push(i);
				}
			    $self.miniRefresh.endUpLoading(false);
		    },1500);
		},
		paperScroll(){
			// this.$store.state.cashTop = $('#minirefresh').scrollTop();
		}
	},  
}
</script>
<style scope>
	.listContent_ul{
		width: 100%;overflow: hidden;
	}
	.listContent_ul li:first-child{
		border-top: 1px solid #e1e1e1;
	}
	.listContent_ul li{
		padding: 20px;border-bottom: 1px solid #e1e1e1;font-size: 14px;
	}
	.title{
 		height: 50px;width: 100%;border-bottom: 1px solid #ccc;text-align: center;line-height: 50px;font-size: 24px;
 	}
</style>