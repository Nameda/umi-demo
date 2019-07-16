// 可以把 每一個页面/模块 都写成一个 store 文件，然后在 index 中 合并成一个 store
import {combineReducers} from 'redux';
import homeStore from './home';

//合并store
const appStore = combineReducers({
    homeStore,
})

export default appStore;