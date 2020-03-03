<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="user-comment">
      <div>商品评价({{commentInfo.cRate}})</div>
      <div>查看更多</div>
    </div>

    <div class="user-info">
      <div>
        <img :src="commentInfo.list[0].user.avatar" alt="">
      </div>
      <div>{{commentInfo.list[0].user.uname}}</div>
    </div>

    <div class="goods-style">
      <span>{{commentInfo.list[0].created|showDate}}</span>
      <span>{{commentInfo.list[0].style}}</span>
    </div>
    <div class="user-comment-info">{{commentInfo.list[0].content}}</div>

    <div class="user-show" v-if="commentInfo.images!==undefined">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/tools";

  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        //1.把时间戳转换为Date对象
        const date=new Date(value*1000);
        //2.将date进行格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped lang="less">
  .detail-comment-info {
    padding: 10px 10px;

    .user-comment {
      display: flex;
      justify-content: space-between;
      padding: 5px 8px 0;
      font-size: 14px;
      line-height: 20px;
      color: #666;
      margin: 6px;
    }

    .user-info {
      display: flex;
      margin-top: 8px;

      div:nth-child(1) {

        img {
          width: 24px;
          height: 24px;
          border-radius: 25px;
        }
      }

      div:nth-child(2) {
        margin-left: 10px;
        text-align: center;
        line-height: 24px;
        font-size: 12px;
      }
    }

    .goods-style {
      font-size: 10px;
      padding-top: 8px;
      color: #999;
      line-height: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 10px;

      span:nth-child(2){
        margin-left: 5px;
      }
    }


    .user-comment-info {
      color: #051b28;
      font-size: 13px;
      line-height: 16px;
      text-align: justify;
      display: -webkit-box;
      height: 32px;
      overflow: hidden;
      word-break: break-all;
      margin-top: 10px;
    }

    .user-show{
      margin-top: 10px;

      img{
        margin-right: 5px;
        width: 70px;
        height: 70px;
      }
    }
  }

</style>
