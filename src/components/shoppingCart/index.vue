<template>
	<div class="shopCar">
		<div class="title">
			购物车
		</div>
		<div class="content">
			<ul class="cart_list">
				<li v-for="(item,index) in good_list">
					<div class="input-block cart_list_item">            
						 <label class="input-label" :class="{active:item.is_selected}" @click="select_one(index)"></label>
					</div> 
					<div class="cart_img cart_list_item">
						<img :src="item.img">
					</div>
					<div class="cart_cont cart_list_item">
						<h3>{{item.title}}</h3>
						<div class="cart_des">
							<span v-for="data in item.spec_item" style="display:block">{{data}}</span>
						</div>
					</div>
					<div class="num cart_list_item">               
						<span @click="reduce(index)">-</span>               
						<span>{{item.num}}</span>               
						<span @click="add(index)">+</span>             
					</div>
					<div class=" cart_list_item" style="margin-left: 0px;font-size:16px;">               
						<span>￥{{item.price}}x{{item.num}}</span>            
					</div>  
				</li>
			</ul>
		</div>
		<div class="footer">
			<div class="foot-car">         
				<label for="foot-check" class="input-label" :class="{active: selected_all}" style="top: 14px;" @click="slect_all"></label>       
			</div>      
			<div class="total-cont">         
				<span>总价：{{totalPrice}}</span>         
				<span>共{{totalNum}}件</span>       
			</div>       
			<div class="btn-box">         
				<button>立即下单</button>       
			</div> 
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				title:"购物车",
				good_list:[{
					title: 'Apple iPhone 6s 16GB',
					img: "https://img13.360buyimg.com/n7/s230x230_jfs/t6010/111/3843138696/73795/bf58700d/5959ab7fN154e56b4.jpg!cc_230x230.jpg",
					num: 2,
					price: 6070.00,
					spec_item: ['内存:16G', '网络:4G', '颜色:玫瑰金'],
					is_selected: false
				}, {
					title: 'Apple iPhone 6s 32GB',
					img: 'https://img20.360buyimg.com/n7/s230x230_jfs/t7423/194/3204708762/379719/b21a9fc1/59bb872eNf44497eb.jpg!cc_230x230.jpg',
					num: 2,
					price: 4570.00,
					spec_item: ['内存:32G', '网络:4G', '颜色:玫瑰金'],
					is_selected: true
				}, {
					title: 'Apple iPhone 6s 8GB',
					img: 'https://img14.360buyimg.com/n7/s230x230_jfs/t16168/128/2293578/334431/577d2ea5/5a28b409Nd99cdfaa.jpg!cc_230x230.jpg',
					num: 4,
					price: 4870.00,
					spec_item: ['内存:8G', '网络:4G', '颜色:玫瑰金'],
					is_selected: false
				}, {
					title: 'Apple iPhone 6s 12GB',
					img: 'https://img20.360buyimg.com/n7/s230x230_jfs/t22228/12/559223304/220056/47988376/5b10f82dN90bd907d.jpg!cc_230x230.jpg',
					num: 2,
					price: 10568.00,
					spec_item: ['内存:128G', '网络:4G', '颜色:玫瑰金'],
					is_selected: true
				}],
				totalPrice: 0,         
				totalNum: 0,         
				selected_all: false
			}
		},
		mounted: function () {       
			this.getTotal();     
		},     
		watch: {       
			'good_list': {         
				handler: function (val, oldVal) {                     
					return val;        
				},         
				deep: true      
			}     
		},
		methods:{
			getTotal() {
				this.totalPrice = 0; 
				this.totalNum = 0;
				for (var i = 0; i < this.good_list.length; i++) {
					var _d = this.good_list[i]
					if (_d.is_selected) {
						this.totalPrice += _d['price'] * _d['num'];
						this.totalNum += _d['num'];
					}
					if(this.good_list[i].is_selected == false){
						this.selected_all = false;
					}
				}
			},
			select_one(index) {
				if (this.good_list[index].is_selected == true) {
					this.good_list[index].is_selected = false;
				} else {
					this.good_list[index].is_selected = true;
				}
				this.getTotal();
			},
			slect_all() {
				if (this.selected_all) {
					for (var i = 0; i < this.good_list.length; i++) {
						this.good_list[i].is_selected = false;
					}
					this.selected_all = false;
				} else {
					for (var i = 0; i < this.good_list.length; i++) {
						this.good_list[i].is_selected = true;
					}
					this.selected_all = true;
				}
				this.getTotal()
			}, 
			reduce(index) {
				if (this.good_list[index].num <= 1) return;
				this.good_list[index].num--;
				this.getTotal();
			}, 
			add(index) {
				this.good_list[index].num++;
				this.getTotal();
			}
		}
	}
</script>
<style scope>
 	.shopCar{
 		width: 100%;
 		overflow: hidden;
 		position: relative;
 	}
 	.title{
 		height: 50px;width: 100%;border-bottom: 1px solid #ccc;text-align: center;line-height: 50px;font-size: 24px;
 	}
 	.footer{
 		height: 50px;width: 100%;position: fixed;bottom: 0;border-top: 1px solid #ccc;
 	}
 	.content{
 		width: 100%;overflow: hidden;
 		margin-bottom: 50px;
 	}
 	.cart_list li{
		position: relative;border-bottom: 1px solid #e1e1e1;padding:10px 0 10px 10px;
 	}
 	.cart_list img{
 		height: 60px;width: 60px;
 	}
 	.input-block{
 		width:30px ;
	 	float: left;  
	 	height: 55px;  
	 	line-height: 55px;
 	} 
 	
 	.input-label{
		cursor:pointer;    
		position:absolute;    
		width:18px;    
		height:18px;   
		top:30px;    
		left:10px;    
		background:#fff;    
		border:2px solid #ccc; 
		 border-radius:50%; 
	}   
	.input-label.active{
		background-color: #f00;
	}
	.input-label:after{
 		opacity:0 ;   
 		content: '' ;  
 		position:absolute;    
 		width:9px;    
 		height:5px ;   
 		background:transparent;    
 		top:6px ;   
 		left:6px ;   
 		border:2px solid #333   ; 
 		border-top:none ;   
 		border-right:none ;   
 		-webkit-transform:rotate(-45deg)    ; 
 		-moz-transform:rotate(-45deg)  ;   
 		-o-transform:rotate(-45deg);     
 		-ms-transform:rotate(-45deg)  ;   
 		transform:rotate(-45deg) ;  
	}   
	.cart_list_item{
		display: inline-block;
	}
	.num{
		position: absolute;
		top: 10px;
		right: 42px;
		height: 24px;
		width: 100px;
	}
	.num span{
		float: left;
		text-align: center;
		line-height: 24px;
	}
	.num span:nth-child(1),.num span:nth-child(3){
		height: 24px;
		width: 24px;
		border: 1px solid #e1e1e1;
		display: inline-block;
		font-size: 24px;
		text-align: center;
		line-height: 24px;
	}
	.num span:nth-child(2){
		height: 24px;
		width: 40px;
		border-top: 1px solid #e1e1e1;
		border-bottom: 1px solid #e1e1e1;
		display: inline-block;
	}
	.foot-car {
		width: 42px;
		height: 50px;
		float: left;
		margin-left: 12px;
		position: relative;
	}
	
	.total-cont {
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		float: left;
	}
	
	.total-cont span {
		display: inline-block;
		margin-left: 12px;
	}
	
	.btn-box {
		float: right;
		height: 50px;
		line-height: 60px;
	}
	
	.btn-box button {
		height: 55px;
		width: 100px;
		border: none;
		background: #F15A24;
		color: #fff;
		font-size: 16px;
	}
</style>