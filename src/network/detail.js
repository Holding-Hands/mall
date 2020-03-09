import {request} from './request'

//封装获取detail的详细信息
export function getDetail (iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

// 封装获取推荐数据的网络请求
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

//把BaseInfo基本信息整合到一个对象，采用面向对象方法
export class BaseInfo {
    constructor(itemInfo, columns, services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.newPrice = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.price
      this.lowNowPrice=itemInfo.lowNowPrice //没有￥符号number类型，为了后面计算购物车加个
    }
}
//将多个信息整理为商家所需要的信息，采用面向对象方式
  export class BusinessInfo {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }

//将需要的信息整理成公共的类，传参数就行
export class ParamInfo {
  constructor(info, rule) {
    //images某些商品有值, 某些没有值
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}