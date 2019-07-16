/*
 * @Description: what
 * @Author: WangTing
 * @Date: 2019-07-16 16:22:22
 * @LastEditors: WangTing
 * @LastEditTime: 2019-07-16 19:19:53
 */

 //初始化 homeStore
 const initHomeStore = {
     isShowDesc:true
 }

const homeStore = (state=initHomeStore , action) =>{
    switch (action.type){
        case 'home-show-desc':
            return{
                ...state,
                isShowDesc:action.value
            }
        case 'home-get-list':
            return{
                ...state,
                listData:action.value
            }
        default:
            return state;
    }
}
export default homeStore;