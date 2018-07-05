<template>
	<div class="swiperContent">
		<div class="swiper-container swiper-container_1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in detailImgs" >
					<img src="img/bitmap.png" :data-src="item" class="swiper-img swiper-lazy" :data-imglist="escape(detailImgs)" @click="clickImg">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<!-- 预览大图 -->
		<big-img v-if="showImg" @clickit="closeImg" :imgSrc="imgSrc" :index="activeIndex"></big-img>
	</div>
</template>
<script>
	import BigImg from '@/components/swiper/BigImg'
	export default {
	data(){
		return {
			detailImgs:['http://slab.image.soushi88.com/block/5876/20180117/10/151615672748732728/b01a2deb32abe1b609177d5861a45979.jpg?x-oss-process=style/high',
			'http://slab.image.soushi88.com/block/5876/20180425/24/152464459841429543/f83523855c7aa6ead5cbb65253aec325.jpg?x-oss-process=style/high',
			'http://slab.image.soushi88.com/block/5876/20180425/2730/152464470394441572/acac23ab67b727a4266904bc4dfe6afe.jpg?x-oss-process=style/high'],
			mySwiper:null,
			activeIndex:null,
			showImg:false,
			imgSrc:null
		}
	},
	components:{
		BigImg
	},
	inject:['reload'],
	beforeCreate(){
		
	},
	activated(){
	},
	created(){	
		
	},
	methods:{
		_initSwiper() {
			var self = this;
			this.mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				observer:true, //修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
    			lazyLoading: true,
    			loop:true,
    			onSlideChangeEnd: function (swiper){
    				self.activeIndex = swiper.activeIndex;
    			}
			});
		},
		escape(obj){
        	return JSON.stringify(obj);
        },
        clickImg(e) {
            this.showImg = true;
            // 获取当前图片地址
            this.imgSrc = e.target.dataset.imglist;
        },
        closeImg(){
        	this.reload();
        	this.showImg =false;
        }
	},
	mounted(){
		this._initSwiper();
	}
}
</script>
<style>
	.swiperContent{
		width: 100%;overflow: hidden;
	}
	].swiper-container_1{
		width: 100%;
	}
	.swiper-container_1 img{
		width: 100%;
		height: auto;
	}
</style>