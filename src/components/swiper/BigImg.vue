<template>
    <!-- 过渡动画 -->
    <transition name="fade">
        <div class="img-view" @click="bigImg">
            <!-- 遮罩层 -->
            <div class="img-layer"></div>
             <div class="swiper-container bigImgContent" style="z-index:1000">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in unescape(imgSrc)">
                        <img :src="item" >
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: [
     'imgSrc',"index"
    ],
    data(){
        return {
            _Swiper:null
        }
    },
    methods: {
        bigImg() {
            // 发送事件
            this.$emit('clickit')
        },
        _initSwiper() {
            var self = this;
            this._Swiper = new Swiper('.swiper-container', {
                autoplay: 3000,//可选选项，自动滑动
                pagination : '.swiper-pagination',
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                lazyLoading: true,
                loop:false,
                initialSlide:self.index-1
            });
        },
        unescape(obj){
            return JSON.parse(obj);
        }
    },
    mounted(){
        this._initSwiper();
    }
}
</script>
<style scoped>
/*动画*/
.fade-enter-active,
.fade-leave-active {
    transition: all .1s linear;
    transform: translate3D(0, 0, 0);
    opacity: 1;
}

.fade-enter,
.fade-leave-active {
    /*transform: translate3D(100%, 0, 0);*/
     opacity: 0;
}


/* bigimg */

.img-view {
    /*position: relative;*/
    width: 100%;
    height: 100%;
}

/*遮罩层样式*/
.img-view .img-layer {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.bigImgContent {
    position: absolute;
    width: 100%;
    overflow: hidden;
    top: 150px;
    /*top: 50%;
    margin-top: -281px;
    bottom: 0;*/
}
.bigImgContent img{
    width: 100%;
    height: auto; 
}
/*不限制图片大小，实现居中*/
.img-view .img{
    width: 100%;
    overflow: hidden;
}
.img-view .img img {
    width: 100%;
    height: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin-top: -281px;
    /*margin: auto;*/
    z-index: 1000;
}
</style>