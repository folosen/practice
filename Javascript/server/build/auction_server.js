"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是二个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是三个商品，是我在学习慕课网Angular入门实战时创建的', ['硬件设备']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是六个商品，是我在学习慕课网Angular入门实战时创建的', ['图书'])
];
var app = express();
app.post('/monitorComponent/logout', function (req, res) {
    res.json({ "success": true,
    "message": "查询成功",
    "timestamp": 1534153513145,
    "resultCode": "200"})
});
app.get('/monitorComponent/getTable', function (req, res) {
    // res.json({ "success": true,
    //     "message": "查询成功",
    //     "timestamp": 1534153513145,
    //     "resultCode": "200",
    //     "data": {
    //         "no": "searchList", "name": "查看列表", "id": 1,
    //         "tableList": {
    //             "details": [
    //                 { "bugget": "60w","firm":"上汽大通","id": "8", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "9", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "10", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "11", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "12", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "13", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "14", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "15", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "16", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "17", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }, 
    //                 { "bugget": "60w","firm":"上汽大通","id": "18", "number_id": "20180416_83847738", "car_model": "越野车", "end_time": "2018-04-17 00:00:00.0", "item_name": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_id": "0677-1Z180411-217", "reggion": "华北大区", "privince": "河北", "city": "衡水", "type": "状态：公告", "invite_bids_brief": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "invite_bids_detail": "衡水市2018年保衡线（S231）赵圈至外环口段等4个中修工程施工监理招标公告", "url": "http://www.qianlima.com/zb/detail/20180416_83847738.html", "other": "更新时间:\n\n\n2018年04月17日\n\n\n\n\n招标单位:\n\n\n衡水市交通运输局公路管理处  \n\n\n\n\n代理机构:\n\n\n山东正信招标有限责任公司  \n\n\n\n\n招标编号:\n\n\n0677-1Z180411-217 \n\n\n\n\n关键信息:\n\n\n工程施工 监理", "release_time": "2018年04月17日" }
    //             ], "rowCount": "11"
    //         }
    //     } });
    res.json({
        "success":true,
        "message":"查询成功",
        "timestamp":1534218358466,
        "resultCode":"200",
        "data":{"no":"no1","name":"每天数据发送查询","id":1,
        "tableList":{
            "details":[
                {"id":"3","start_time":"","end_time":"2018-08-11 10:34:40","monitor_point":"getAccessToken","req_text":"","msg_text":"","asc_code":"4122012","error_code":"999999","error_desc":"","quantity":"0","snum":"0","fnum":"0","asc_name":"赤峰金众汽车销售有限公司","level":"1-标准服务商","city":"东内蒙古","area":"红山区"}],"rowCount":"13"}}});
});
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动，地址是： http://localhost:8000');
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (websocket) {
    websocket.send('这个消息是服务器主动推送的');
});
