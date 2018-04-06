import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'http://localhost:8080/'


/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/mall/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');

//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/api/mall/goodsFavorite/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/api/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');

//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/clear');


//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list');

module.exports = {
  hostGoodsList,
  getDiscoverList, getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  wxJsCode2Session,
  user2session,
  userSginInfo,
  doSign,
  pointInfo,
  browseInfo,addBrowser,delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,sendRandCode,
  getUserInfo,
  receiverInfoById,
  addSearchKeyword, searchKeywordList, clearSearchKeyword,
  rootCtegoryList, childGoodsCatetoryList,
  getAdList,
  getSignDate
}
