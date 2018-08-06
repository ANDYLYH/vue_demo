<template>
	<div>
		<h1>{{count}}</h1>
		<el-button type="primary" @click="ADD_COUNT">加</el-button>
		<el-button type="primary" @click="DOWN_COUNT">减</el-button>
	</div>
</template>

<script>
	
	import {mapActions,mapGetters,mapState} from 'vuex'
	export default {
		data(){
			return {
				title:'测试'
			}
		},
		methods:{
			...mapActions(['ADD_COUNT','DOWN_COUNT'])
		},
		computed:{
			...mapState([
				'count'
			])
		}
	}
</script>

<style scoped>
</style>