<template>
	<div style="margin: 20px;">
		<el-button type="primary" @click="showModal = true;">show Modal</el-button>
	 	<modal-page v-if="showModal" @close="showModal = false"></modal-page>
	</div>
</template>
<script>
	import ModalPage from '@/components/ModalPage/modal'
	export default {
		data(){
			return {
				showModal:false
			}
		},
		components:{
			ModalPage
		}
	}
</script>