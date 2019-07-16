/*
 * Description: what
 * Author: WangTing
 * Date: 2019-07-15 17:04:48
 * @LastEditors: WangTing
 * @LastEditTime: 2019-07-16 19:22:38
 */

export default {
    plugins:[
        ['umi-plugin-react',{
            antd:true,//使用 antd
            dva:false //不使用 ava ,直接使用 redux
        }],
    ],
    cssLoaderOptions:{
        localIdentName:'[local]'
    },
    theme:'src/assets/css/theme.js',
    routes:[{
        path:'/',
        component:'index',
        routes:[{
            path:'/',
            component:'./home'
        },{
            path:'/center',
            component:'./center'
        }]
    }]
}