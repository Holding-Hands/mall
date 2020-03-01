
//防抖函数
// export function  debounce(fun,delay){
//   let timer =null;
//   return function (...args) {
//     if (timer){
//       clearTimeout(timer)
//     }
//     timer=setTimeout(()=>{
//       fun.apply(this,args)
//     },delay)
//   }
// }

//防抖函数高级版
export function debounce(func,wait,immediate=false) {
  let timer;

  return function () {
      let context = this;
      let args = arguments;

      if (timer) clearTimeout(timer);
      if (immediate) {
          var callNow = !timer;
          timer = setTimeout(() => {
              timer = null;
          }, wait)
          if (callNow) func.apply(context, args)
      } else {
          timer = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
  }
}
//日期格式化
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}
