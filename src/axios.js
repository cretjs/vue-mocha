import Vue from 'vue'
import axios from 'axios'
import VueAxios from "vue-axios";
import qs from 'qs'

// import jsonp from './util/jsonp'
// import store from './store'

axios.defaults.timeout =  30000;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    //转化数据
    if(config.type !== 'json' && config.data){
        config.data = qs.stringify(config.data)
    }

    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // if(response.data.code == '2' ){
    //     location.href = store.state.loginUrl
    //     return {}
    // }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// axios.jsonp = jsonp

Vue.use(VueAxios, axios)
export  default  axios
