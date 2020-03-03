// 导入公共组件BackTop返回顶部组件
import BackTop from "components/content/backTop/BackTop";

export const mixinBackTop = {
    components: {
        BackTop,
      },
      data(){
          return {
            isShowBackTop: false,
          }
      }
}