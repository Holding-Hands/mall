<template>
	<div class="goods-list" v-if="GoodsList.length!==0">
		<good-list-item :goods-list-item="GoodsList" :ItemWidth="ItemWidth" :imgHeight="imgHeight"/>
	</div>
</template>

<script>
	import GoodListItem from './GoodsListItem.vue'
	
	export default{
		components:{
			GoodListItem
		},
		props:{
			GoodsList:Array,
			ItemWidth:String,
			imgHeight:String,
			oldPriceSize:String,
			newPriceSize:String,
			titleSize:String
		}
	}
	
</script>

<style>
</style>
