let url = {
    hotLists:'index/hotLists',
    banner: 'index/banner',
    topLists: 'category/topList',
    subLists: "category/subList",
    rank:'category/rank',
    searchList:'search/list',
    details:"goods/details",
    deal:'goods/deal',
    addCart:'cart/add',
    cartLists:'cart/list',
    cartReduce:'cart/reduce',
    cartRemove:'cart/remove',
    cartMrremove:'cart/mrremove',
    addressLists:'address/list',
    addressAdd:'address/add',
    addressRemove:'address/remove',
    addressUpdate:'address/update',
    addressDefault:'address/setDefault'
}

//开发环境和真实环境的切换
//let host = 'http://rap2api.taobao.org/app/mock/7058/'
let host = "https://easy-mock.com/mock/5d68e529cd2c201c25e08631/sdf/"

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}

export default url