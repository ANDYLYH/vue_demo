<template>
  <div class="hello">
    <div class="title">
        demo列表
    </div>
    <ul>
        <li v-for="(item,index) in demolist">
          <router-link :to="{name:item.name}">
             {{index+1}}、{{item.title}}
          </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      demolist:[
        {
          name:'shoppongCart',
          title:"购物车demo"
        },
        {
          name:'minirefresh',
          title:"下拉刷新、上拉加载更多demo"
        },
        {
          name:'pageReload',
          title:"刷新当前页面demo"
        }
        ,
        {
          name:'swiper',
          title:"轮播图，点击图片查看大图"
        },
        {
          name:'ModalPage',
          title:"modal模态框demo"
        },
        {
          name:'VuexExample',
          title:"vuex的使用案例"
        }
      ]
    }
  },
  mounted(){
    this.utils.showMsg();
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
  padding: 10px 0;
}
a {
  color: #42b983;
  font-size: 16px;
}
.title{
    height: 50px;width: 100%;border-bottom: 1px solid #ccc;text-align: center;line-height: 50px;font-size: 24px;
  }
</style>
