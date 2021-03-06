/*
直接更新state对象 
 */
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    INCREMENT_FOOD_COUNT,
    DECREMENT_FOOD_COUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS,
} from './mutation-types'
export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_USER_INFO](state,{userInfo}){
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state){
        state.userInfo = {}
    },
    //mock数据
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    [INCREMENT_FOOD_COUNT](state,{food}){
        if(!food.count){ //第一次增加
            Vue.set(food,'count',1)
            //将food添加到cartfoods中
            state.cartFoods.push(food)
        }else {
            food.count++
        }
    },
    [DECREMENT_FOOD_COUNT](state,{food}){
        if (food.count) { //为0了之后无法进入
            food.count--
            if (food.count===0) {
                //将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state){
        //清楚food中的count
        state.cartFoods.forEach(food =>food.count=0)
        //移除购物车中的所有购物项
        state.cartFoods = []
    },
    [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
        state.searchShops = searchShops
    },

}