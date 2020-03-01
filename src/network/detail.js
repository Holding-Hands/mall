import {request} from './request'

export function getDetail (iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
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