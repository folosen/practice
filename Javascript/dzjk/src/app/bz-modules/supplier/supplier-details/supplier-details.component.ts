import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss']
})
export class SupplierDetailsComponent implements OnInit {
  public startDate: Date;
  public endDate: Date;
  public ch: {};
  public items: Array<any>;
  public tbFirst = 0;
  public totalRecords = 0;
  public pageConfig = {totalNum: 1000, curPage: 1};
  public supplierStatus = {name: '全部', value: -1};
  public status = [{name: '全部', value: -1}, {name: '成功', value: 1}, {name: '失败', value: 0}];
  constructor() { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();
    this.ch = {
      /** 每周第一天，0代表周日 */
      firstDayOfWeek: 0,
      /** 每周天数正常样式 */
      dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      /** 每周天数短样式（位置较小时显示） */
      dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      /** 每周天数最小样式 */
      dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
      /** 每月月份正常样式 */
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      /**每月月份短样式 */
      monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    };

    this.items = [
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
        {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'}
    ];
  }

  public searchData() {
    this.pageConfig = {totalNum: 2000, curPage: 3};
    console.log('search');
    this.items = [
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'}
    ];
    this.totalRecords = 50;
    this.tbFirst = 0;
    console.log(this.supplierStatus);
  }

  public exportList() {
    console.log('download');
    this.items = [
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司1', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'}
    ];
    this.totalRecords = 20;
  }
  public loadCarsLazy($event: any) {
    this.items = [
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '成功'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '失败'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '等待'},
      {'asc_name': '上海怡通汽车销售服务有限公司浦东分公司', 'asc_code': '4102028', 'level': '1-标准服务商', 'provincecode': '310115013243', 'quantity': '100', 'snum': '88', 'fnum': '12', 'start_time': '2018.10.1', 'error_desc': '888'}
    ];
    console.log($event);
  }
  public getPageData($event) {
    console.log($event);
  }
}
