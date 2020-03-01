<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BetterScroll",
    data() {
      return {
        scroll: null,
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      //1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,//2的时候不能监听惯性滚动位置，3的时候可以
        click: true,
        pullUpLoad:this.pullUpLoad,//是否下拉加载
      });
      //2.监听滑动位置
      this.scroll.on('scroll',(position)=>{
        this.$emit('scrollTo',position)
      });
      //3.监听上拉加载事件
      this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp')
      })
    },
    methods:{
      scrollTo(x,y,timer=500){
        this.scroll&&this.scroll.scrollTo(x,y,timer);
      },
      finishPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll&&this.scroll.refresh();
      },
      saveScrollY(){
        return this.scroll?this.scroll.y:0;
      },
    }
  }
</script>

<style scoped>

</style>
