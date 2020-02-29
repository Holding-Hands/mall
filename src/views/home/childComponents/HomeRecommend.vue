<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item ,index) in recommend" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <p class="title">{{item.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="less" scoped>
.recommend{
    height: 130px;
    display: flex;
    justify-content: center;
    padding: 5px 5px;
    border-bottom: 8px solid #eeeeee;
}
.recommend-item{
    width: 24%;
    margin-left:5px; 
}
.recommend-item:first-child{
    margin-left: 0px;
}

.recommend-item img{
    width: 80px;
}
.recommend .title{
    text-align: center;
    font-size: 12px;
}
</style>