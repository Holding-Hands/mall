module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375, //视口宽度，对应设计稿的宽度
            viewportHeight: 667, //视口高度，对应设计稿的高度
            viewportUnit: 'vw', //指定需要转换的视口单位
            unitPrecision: 5, //指定px转换单位值的小数位数
            selectorBlackList: [], // 指定不需要转换的类
            minPixelValue: 1, //小于等于1px不转换视口单位
            mediaQuery: false //允许在媒体查询中转换px
        }
    }
}
