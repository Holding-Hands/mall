<template>
  <div class="category">
    <CategorySerach />
    <div class="category-content">
      <CategoryTreeSelect :categoryList="categoryList" @selectIndex="selectIndex" />
      <CategoryContent class="category" :listInfo="listInfo" />
    </div>
  </div>
</template>

<script>
//导入请求分类列表数据的相关函数
import { getCategory, getSubcategory } from "network/category.js";

//导入子组件导航
import CategorySerach from "./childComponents/CategorySearch";
//导入子组件CategoryTreeSelect的分类选择树
import CategoryTreeSelect from "./childComponents/CategoryTreeSelect";
//导入子组件CategoryContent分类列表内容
import CategoryContent from "./childComponents/CategoryContent";

export default {
  data() {
    return {
      //1.分类列表数据
      categoryList: [],
      //2.分类的参数
      maitKey: [],
      //3.分类的index
      index: 0,
      //4.分类列表的详细信息
      listInfo: []
    };
  },
  created() {
    // 1.获取分类列表数据
    getCategory().then(res => {
      this.categoryList = res.data.data.category.list;
      let list= res.data.data.category.list;
      for(let item of list){
        this.maitKey.push(item.maitKey)
      }
    });
    //2.默认获取第一页数据展示
    this._getSubcategory( 3627)
  },
  methods: {
    //1.监听子组件CategoryTreeSelect选择的下标值
    selectIndex(index) {
      this.index = index;
      this.maitKey&&this._getSubcategory(this.maitKey[this.index]);
    },
    //2.将获取分类数据封装成一个函数
    _getSubcategory(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.listInfo = res.data.data.list;
      });
    }
  },
  components: {
    CategoryTreeSelect,
    CategoryContent,
    CategorySerach
  }
};
</script>

<style lang="less" scoped>
.category-content {
  display: flex;
  justify-content: space-between;
}
.category {
  flex: 1;
}
</style>