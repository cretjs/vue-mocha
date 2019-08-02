// 引入mockjs
const Mock = require('mockjs');

// 课程详情/demo
Mock.mock('/getData', 'get',{
    "code": 200
});