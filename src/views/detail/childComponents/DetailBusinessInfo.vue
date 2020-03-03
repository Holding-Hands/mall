<template>
  <div class="detail-business-info" v-if="Object.keys(businessInfo).length!==0">
      
    <div class="business-info-up">
      <div>
        <img :src="businessInfo.logo" alt />
      </div>
      <div class="name">{{ businessInfo.name}}</div>
    </div>
    <div class="business-info-middle">
      <ul>
        <li v-for="index in businessInfo.score.length" :key="index">
          <span>{{ businessInfo.score[index-1].name}}</span>
          <span>{{ businessInfo.score[index-1].score}}</span>
        </li>
      </ul>
    </div>

    <div class="business-info-down">
      <div class="business-info-down-item">
        <div>{{ businessInfo.sells|sellCountFilter}}</div>
        <div>总销量</div>
      </div>

      <div class="business-info-down-item">
        <div>{{ businessInfo.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
    </div>

    <div class="business-bottom">
      <div class="enter-business">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBusinessInfo",
  props: {
    businessInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + "万";
      }
      return result;
    }
  }
};
</script>

<style scoped lang="less">
.detail-business-info {
  padding: 3px 10px 0;
  background-color: #fff;
}

.business-info-up {
  display: flex;
  margin-top: 10px;
  &:nth-child(1){
    border-radius: 5px;
  }

  img {
    width: 54px;
    height: 54px;
  }

  .name {
    padding: 5px 10px;
    text-align: center;
    line-height: 54px;
    color: #333;
    font-size: 16px;
    font-family: Helvetica, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  padding-right: 5px;
}

.business-info-middle ul {
  display: flex;
  justify-content: space-around;

  li {
    list-style: none;
    color: #999;
    font-size: 12px;

    span:nth-child(2) {
      color: #00b78b;
      padding-right: 14px;
      background-position: 100% 50%;
      background-repeat: no-repeat;
      background-size: 12px;
      font-weight: 400;
    }
  }
}

.business-info-down {
  display: flex;
  justify-content: space-around;

  .business-info-down-item {
    div:nth-child(1) {
      text-align: center;
      font-size: 24px;
      font-weight: bolder;
      margin: 7px 0;
    }
  }
}

.business-bottom {
  text-align: center;
  margin-top: 10px;

  .enter-business {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
}
</style>
