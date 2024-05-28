// axios
import request from '@/utils/axios'
//1. 获取轮播图片,get请求，无参数
export function getImgs() {
  return request({
    url: '/imglist',
    method: 'get'
  })
}

//2. 获取商品分类，get请求，有参数
export function getGoodsList(data) {
  return request({
    url: '/goodslist',
    method: 'get',
    params: data
  })
}

//3. 用户登录，post请求，有参数
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data: data
  })
}
 
export function category() {
  return request({
    url: '/category',
    method: 'get',
   
  })
}
 //用户登录验证接口
export function user1() {
  return request({
    url: '/user',
    method: 'get',
    
   
  })
}
export function ordercreate(data) {
  return request({
    url: '/order/create',
    method: 'post',
    data: data
  })
}
export function  addersscreate(data) {
  return request({
    url: '/address/save',
    method: 'post',
    data: data
  })
}
export function  addresslist(data) {
  return request({
    url: '/address',
    method: 'get',
    
  })
}
export function   getaddress(data) {
  return request({
    url: '/address/def?id='+data,   
    method: 'get',
     
    
  })
}
export function   delgetaddress(data) {
  return request({
    url: '/address/del'   ,
    method: 'post',
     data:data
    
  })
}
export function   getorderlist(data) {
  return request({
    url: "order/list" ,
    method: 'get',
 
  })
}
export function   register(data) {
  return request({
    url: "/register" ,
    method: 'post',
 data:data
  })
}
//输出三个方法
export default {
  getImgs,
  getGoodsList,
  login,
  category,
  user1,
  ordercreate,
  addersscreate,
  addresslist,
  getaddress,
  delgetaddress,
  getorderlist,
  register
}
