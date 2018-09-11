import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sys-monitor',
  templateUrl: './sys-monitor.component.html',
  styleUrls: ['./sys-monitor.component.scss']
})
export class SysMonitorComponent implements OnInit {


  public pieChart = {
        tooltip: {
            formatter: function (params) {
                var info = '<p style="font-size:18px">' + params.name + '</p><p style="font-size:14px">服务商详细信息</p>'
                return info;
            },
            backgroundColor: "#ff7f50",//提示标签背景颜色
            textStyle: { color: "#fff" } //提示标签字体颜色
        },
        dataRange: {
            x: 'left',
            y: '600px',
            splitList: [
                {start: 6, end: 6, label: '异常', color: '#f42d05'},
                {start: 8, end: 8, label: '部分异常', color: '#f9a400'},
                {start: 10, end: 10, label: '正常', color: '#00b503'},
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                clickable:false,
                // selectedMode: 'multiple',
                label: {
                    normal: {
                        show: true,//显示省份标签
                        // textStyle:{color:"#c71585"}//省份标签字体颜色
                    },
                    emphasis: {
                        show: true,//对应的鼠标悬浮效果
                        // textStyle:{color:"#800080"}
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: .5,//区域边框宽度
                        borderColor: '#BDAFAD',//区域边框颜色
                        areaColor:"#F4F3EF",//区域颜色
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#4b0082',
                        areaColor: "#ffdead"
                    }
                },
                data: [{ name: '北京' }, { name: '天津' }, { name: '上海', value: 10 }, { name: '重庆' }, { name: '河北' }, { name: '河南', value: 6 }, { name: '云南' }, { name: '辽宁' }, { name: '黑龙江' }, { name: '湖南', value: 6 }, { name: '安徽', value: 8 }, { name: '山东', value: 10 },
                        { name: '新疆' }, { name: '江苏' }, { name: '浙江', value: 10 }, { name: '江西', value: 8 }, { name: '湖北' }, { name: '广西' }, { name: '甘肃' }, { name: '山西' }, { name: '内蒙古' }, { name: '陕西' }, { name: '吉林' }, { name: '福建', value: 10 }, { name: '贵州' },
                        { name: '广东' }, { name: '青海' }, { name: '西藏' }, { name: '四川' }, { name: '宁夏' }, { name: '海南' }, { name: '台湾' }, { name: '香港' }, { name: '澳门' }]
            }
        ]
    };

  barChart = {
    title: {
      text: 'NiceFish月访问量统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  };
  
  lineChart = {
    title: {
      text: 'NiceFish月访问趋势图',
      subtext: '纯属虚构',
      x:"center"
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} 次'
      }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10,123,100,99,66,199]
      }

    ]
  };

  constructor() { }

  ngOnInit() {
  }
}
