<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="param-info-middle">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="param-info-key">{{info.key}}</td>
        <td class="param-info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="param-info-down" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .detail-param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;

    table {
      width: 100%;
      border-collapse: collapse;

      tr {
        height: 42px;

        td {
          border-bottom: 1px solid rgba(100, 100, 100, .1);
        }
      }
    }

    .param-info-middle {
      border-top: 1px solid rgba(0, 0, 0, .1);

      .param-info-key {
        width: 95px;
      }

      .param-info-value {
        color: #eb4868
      }
    }

    .param-info-down img {
      width: 100%;
    }
  }
</style>
