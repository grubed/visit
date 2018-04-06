### 安装（更新） wepy 命令行工具。
	npm install wepy-cli -g

### 安装依赖包
	npm install

### 开发实时编译。
	npm run dev

### 生产压缩
	npm run build //上传代码时，请先执行此代码，否则会提示包体积过大


### 开发使用说明(重要)

1、使用微信开发者工具-->添加项目，项目目录请选择dist目录。

2、微信开发者工具-->项目-->关闭ES6转ES5。 <font color=red>重要：漏掉此项会运行报错。</font> 

3、微信开发者工具-->项目-->关闭上传代码时样式自动补全。  <font color=red>重要：某些情况下漏掉此项也会运行报错。</font> 

4、微信开发者工具-->项目-->关闭代码压缩上传。  <font color=red>重要：开启后，会导致真机computed, props.sync 等等属性失效。</font> 



### wepy开发文档地址
	https://tencent.github.io/wepy/

### 小程序开发文档
	http://mp.weixin.qq.com/debug/wxadoc/dev/


    
### 目录结构

    ├── api
    │   └── api.js              //接口
    ├── app.wpy                 //入口文件
    ├── components                  //组件
    │   ├── common              //公共组件
    │   │   ├── bottomLoadMore.wpy      //底部加载更多组件
    │   │   ├── placeholder.wpy         //空列表显示组件
    │   │   ├── timer.wpy               //倒计时组件
    │   │   ├── wepy-area-picker.wpy    //省市区组件
    │   │   ├── wepy-sign-time.wpy      //签到组件
    │   │   └── wepy-swipe-delete.wpy   //左滑删除组件
    │   ├── discover.wpy        //发现列表
    │   ├── filterSlider.wpy    //筛选右侧栏组件
    │   ├── filter_bar.wpy      //分类排序组件
    │   ├── order_item.wpy      //订单列表组件
    │   ├── points_detail.wpy   //列表组件
    │   ├── points_rule.wpy     //列表组件
    │   ├── rate.wpy            //评分组件
    │   ├── search.wpy          //搜索组件
    │   ├── shop_grid_list.wpy  //矩阵列表
    │   ├── shop_item_list.wpy  //条形列表
    │   └── tab.wpy             //选项卡组件
    ├── images                  //图片文件夹
    ├── pages                   //页面
    │   ├── classify.wpy        //分类
    │   ├── filter.wpy          //筛选
    │   ├── goods_detail.wpy    //商品详情
    │   ├── home.wpy            //首页
    │   ├── home_detail.wpy     //首页详情
    │   ├── info.wpy            //信息
    │   ├── messages.wpy        //我的消息
    │   ├── points.wpy          //积分
    │   ├── points_more.wpy     //更多积分
    │   ├── points_rule.wpy     //积分规则
    │   ├── search.wpy          //搜索
    │   ├── setting.wpy         //设置
    │   ├── sign_in.wpy         //签到
    │   ├── test.wpy            //---
    │   └── wholesale.wpy       //现货批发
    ├── plugins                 //插件
    │   └── wxParse             //富文本
    │       ├── html2json.js
    │       ├── htmlparser.js
    │       ├── showdown.js
    │       ├── wxDiscode.js
    │       ├── wxParse.js
    │       ├── wxParse.wxml
    │       └── wxParse.wxss    
    ├── styles                  //样式
    │   ├── base.less
    │   ├── icon.less           // 图标文件
    │   └── style.less
    └── utils                   //工具类
        ├── constant.js             //常量
        ├── md5.js                  //md5
        ├── regions.js              //省市区数据
        ├── tip.js                  //提示弹框组件
        ├── util.js                 //工具
        └── wxRequest.js            //ajax请求




