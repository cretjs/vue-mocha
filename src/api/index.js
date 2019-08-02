import Vue from 'vue'
import '@/mockjs'

export const getData = ()=>{
    return Vue.axios.get('/getData')
}