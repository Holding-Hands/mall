<template>
	<div class="goods-list-item" 
	      v-show="Object.keys(goodsListItem).length!==0"
		  :style="{flexWrap:isWrap}">
		  <!-- 一个item的宽度 -->
		<div class="item" 
		      v-for="item in goodsListItem" 
		      :key="item.id"
			  :style="{width:itemWidth}">
			  
			  <!-- 图片宽度 -->
			<img :src="item.image" :style="{height:imgHeight}" @load="detailImgLoad" @click="clickImg(item.iid)">
			<div class="content">
				<P class="title" 
				      :style="{fontSize:titleSize}"
					  >
					  {{item.title}}
				</p>
					  
					 <!-- 新价格 -->
				<div class="price">
					<span class="new-price"
					      :style="{fontSize:newPriceSize}">
					      ￥{{item.price}}
					</span>
					
					<!-- 老价格 -->
					<!-- <span class="old-price"
					      :style="{fontSize:oldPriceSize}">
						{{item.orgPrice}}
					</span> -->
					<!-- 老价格 -->
					<span class="sale">
						{{item.itemSale}}人付款
					</span>
				</div>
				
				<!-- 折扣 -->
				<!-- <span class="discount">{{item.discount}}折</span> -->
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			detailImgLoad(){
                // this.$bus.$emit('imgLoad')
                //根据不同的路由发送不同页面的
                if(this.$route.path.indexOf('/home')){
                    this.$bus.$emit('imgLoad')
                }else if(this.$route.path.indexOf('/detail')){
                    
				}
				this.$bus.$emit('detailImgLoad')
			},
			clickImg(iid){
				// 第一种方案
				this.$router.push('/detail/'+iid)
				// 第二种方案
				// this.$router.push({
				// 	path:'/detail',
				// 	query:{
				// 		iid:iid
				// 	}
				// })
			}
		},
		props:{
			//循环的商品数据
			goodsListItem:Array,
			
			//每个item的宽度(改变他让它变成一行几列)
			itemWidth:{
				type:String,
				default:'49%'
			},
			
			//每个商品图片大小(可以自行改变)
			imgHeight:{
				type:String,
				default:'100%'
			},
			
			// 改变item是否换行显示，如果让一行显示需要传值
			isWrap:{
				type:String,
				default:'wrap'
			},
			
			//改变商品文字大小
			titleSize:{
				type:String,
				default:'13px'
			},
			
			//改变老价格文字大小
			oldPriceSize:{
				type:String,
				default:'10px'
			},
			
			//改变老价格文字大小
			newPriceSize:{
				type:String,
				default:'16px'
			}
		}
	}
</script>

<style scoped lang="less">
	.goods-list-item {
		display: flex;
		justify-content: space-between;
		// flex-wrap: wrap;

		.item {
			// width: 49%;
			margin-bottom: 10px;
			img {
				width: 100%;
				height: 100%;
				border-radius: 5px;
			}

			.discount {
				border: 1rpx solid #FF3333;
				border-radius: 2px;
				color: #FF3333;
				font-size: 10px;
				padding: 2px 5px;
			}

			.content {
				text-align: center;

				.title {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					word-break: break-all;
					color: #333333;
					padding:7px 5px 0;
					margin-bottom: 5px;
				}

				.new-price {
					// font-size: 16px;
					margin-right: 4px;
					color: #ff5777;
				}

				.old-price {
					// font-size: 10px;
					text-decoration: line-through;
					color: #999999;
				}
				.sale{
					color: #999999;
					font-size: 10px;
				}
			}

		}
	}
</style>
