import axios from 'axios'

export function request (config){
     const instance1 = axios.create({
        // baseURL : "http://123.207.32.32:8000/api/wh" 
      //   baseURL : "http://106.54.54.237:8000/api/wh" 
      // baseURL : "http://106.54.54.237:8000/api/wh" 
     baseURL:' http://123.207.32.32:8000/api/h3'
     })

    return instance1(config)
}