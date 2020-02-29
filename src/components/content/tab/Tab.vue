<template>
  <div class="tab">
      <div class="tab-item" v-for="(item,index) in TabTitle" :key="index" @click="changeCurrentIndex(index)">
          <span :class="{active:CurrentIndex===index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            CurrentIndex:0
        }
    },
    props:{
        TabTitle:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        changeCurrentIndex(index){
            this.CurrentIndex=index;
            this.$emit('tabClick',index);
        }
    }
}
</script>
<style lang="less" scoped>
.tab{
    background: #ffffff;
    display: flex;
    justify-content: center;
}
.tab-item{
    height: 40px;
    line-height: 40px;
    text-align: center;
    flex: 1;

    span{
        padding-bottom:5px; 
    }
}
.active{
    color:var(--color-high-text);
    border-bottom: 3px solid var(--color-tint); 
}
</style>