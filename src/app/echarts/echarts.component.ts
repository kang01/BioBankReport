import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 30000;
  //   setTimeout(() => {
  //     this.showloading = false;
  //   }, 300);
  }
  // showloading = true;

  // tslint:disable-next-line:member-ordering
  datamapvalue = [
       {name: '海门', value: [121.15, 31.89, 4822023]},
       {name: '鄂尔多斯', value: [109.781327, 39.608266, 731449]},
       {name: '舟山', value: [122.207216, 29.985295, 2949131]},
       {name: '齐齐哈尔', value: [123.97, 47.33, 38041430]},
       {name: '盐城', value: [120.13, 33.38, 5187582]},
       {name: '赤峰', value: [118.87, 42.28, 3590347]},
       {name: '青岛', value: [120.33, 36.07, 4822023]},
       {name: '金昌', value: [102.188043, 38.520089, 632323]}
   ];
  // 地图
  // tslint:disable-next-line:member-ordering
  mapoption = {
    backgroundColor: '',
    title: {
      text: '全国主要城市样本量',
      subtext: '',
      sublink: 'http://www.pm25.in',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
  //   visualMap: {
  //     left: 'right',
  //     min: 500000,
  //     max: 38000000,
  //     inRange: {
  //         color: ['#EEB8AE', '#ff7963', '#262b3f', '#285692', '#b43129', '#a50026']
  //     },
  //     text: ['High', 'Low'],           // 文本，默认为数值文本
  //     calculable: true,
  //     textStyle: {
  //       color: '#fff'
  //     },
  //     show: false
  // },
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   orient: 'vertical',
    //   y: 'bottom',
    //   x: 'right',
    //   data: ['pm2.5'],
    //   textStyle: {
    //     color: '#fff'
    //   }
    // },
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // #323c48 0B13E8 04085E
          areaColor: '#04085E',
          borderColor: '#50C2FF'
        },
        emphasis: {
          areaColor: '#2a333d'
        }
      }
    },
    series: [
      {
        name: 'pm2.5',
        type: 'map',
        coordinateSystem: 'geo',
        data: this.datamapvalue,
        // symbolSize: function (val) {
        //   return val[2] / 10;
        // },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: this.datamapvalue,
        // symbolSize: function (val) {
        //   return val[2] / 10;
        // },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  };
  // 年龄性别样本量
  ageSexSampleoption = {
    textStyle: {
      color: '#fff'
    },
    title : {
        text: '年龄性别样本量',
        subtext: '纯属虚构',
        x: 'center',
        textStyle: {
          color: '#fff'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: ['年龄', '性别'],
        left: 'left',
        textStyle: {
          color: '#fff'
        }
    },
    // toolbox: {
    //     show : true,
    //     feature : {
    //         dataView : {show: true, readOnly: false},
    //         magicType : {show: true, type: ['line', 'bar']},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name: '年龄',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            },
            itemStyle: {
              color: '#0CD1F3'
            }
        },
        {
            name: '性别',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            itemStyle: {
              color: '#FEB906'
              // color: '#3ED139'
            }
        }
    ]
  };
  // 疾病分布
  illnessoption = {
    title : {
      text: '疾病分布',
      subtext: '纯属虚构',
      x: 'center',
      textStyle: {
        color: '#fff'
      }
  },
  tooltip : {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      textStyle: {
        color: '#fff'
      }
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
  // 类型分布
  typeoption = {
    title : {
      text: '类型分布',
      subtext: '纯属虚构',
      x: 'center',
      textStyle: {
        color: '#fff'
      }
  },
  tooltip : {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      textStyle: {
        color: '#fff'
      }
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
  // 项目分布
  projectoption = {
    title : {
      text: '项目分布',
      subtext: '纯属虚构',
      x: 'center',
      textStyle: {
        color: '#fff'
      }
  },
  tooltip : {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      textStyle: {
        color: '#fff'
      }
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
              emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          }
      }
  ]
};
// 出库量统计
stockoutoption = {
  title : {
    text: '出库量统计',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  textStyle: {
    color: '#fff'
  },
  xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      symbolSize: 10,
      lineStyle: {
        color: '#3ED139',
        width: 4
      }
  }]
};
// 存储量统计
storageoption = {
  title : {
    text: '存储量统计',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  textStyle: {
    color: '#fff'
  },
  xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      symbolSize: 10,
      lineStyle: {
        color: '#C3A720',
        width: 4
      }
  }]
};
// 电力使用消耗
electricityoption = {
  title : {
    text: '电力使用消耗',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  textStyle: {
    color: '#fff'
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      symbolSize: 8,
      areaStyle: {},
  }]
};
// 液氮使用消耗
lnoption = {
  title : {
    text: '液氮使用消耗',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  textStyle: {
    color: '#fff'
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      symbolSize: 8,
      lineStyle: {
        color: '#015DC2'
      },
      areaStyle: {
        color: '#015DC2'
      }
  }]
};
// 报警类型统计
alarmoption = {
  title : {
    text: '报警类型统计',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  barWidth : 20,
  textStyle: {
    color: '#fff'
  },
  color: ['#edec7b', '#75f474', '#7475f4', '#f374f4'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      left: 'left',
      textStyle: {
        color: '#fff'
      },
  },
  calculable: true,
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2012', '2013', '2014', '2015', '2016']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          data: [320, 332, 301, 334, 390]
      },
      {
          name: 'Steppe',
          type: 'bar',
          data: [220, 182, 191, 234, 290]
      },
      {
          name: 'Desert',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
      },
      {
          name: 'Wetland',
          type: 'bar',
          data: [98, 77, 101, 99, 40]
      }
  ]
};
// 报警类型统计
alarmTimeoption = {
  title : {
    text: '报警处理时段统计',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  barWidth : 20,
  textStyle: {
    color: '#fff'
  },
  color: ['#edec7b', '#75f474', '#7475f4', '#f374f4'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      left: 'left',
      textStyle: {
        color: '#fff'
      },
  },
  calculable: true,
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2012', '2013', '2014', '2015', '2016']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          data: [320, 332, 301, 334, 390]
      },
      {
          name: 'Steppe',
          type: 'bar',
          data: [220, 182, 191, 234, 290]
      },
      {
          name: 'Desert',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
      },
      {
          name: 'Wetland',
          type: 'bar',
          data: [98, 77, 101, 99, 40]
      }
  ]
};
// 报警处理方式
alarmprocessoption = {
  title : {
    text: '报警处理方式统计',
    subtext: '纯属虚构',
    x: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  barWidth : 20,
  textStyle: {
    color: '#fff'
  },
  color: ['#edec7b', '#75f474', '#7475f4', '#f374f4'],
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
      left: 'left',
      textStyle: {
        color: '#fff'
      },
  },
  calculable: true,
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2012', '2013', '2014', '2015', '2016']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Forest',
          type: 'bar',
          barGap: 0,
          data: [320, 332, 301, 334, 390]
      },
      {
          name: 'Steppe',
          type: 'bar',
          data: [220, 182, 191, 234, 290]
      },
      {
          name: 'Desert',
          type: 'bar',
          data: [150, 232, 201, 154, 190]
      },
      {
          name: 'Wetland',
          type: 'bar',
          data: [98, 77, 101, 99, 40]
      }
  ]
};
// 不同温度设备样本分布
temperatureoption = {
  // backgroundColor: '#2c343c',

  title: {
      text: '不同温度设备样本分布',
      left: 'center',
      textStyle: {
          color: '#fff'
      }
  },

  tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },

  visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
          colorLightness: [0, 1]
      }
  },
  series : [
      {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data: [
              {value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 274, name: '联盟广告'},
              {value: 235, name: '视频广告'},
              {value: 400, name: '搜索引擎'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
              normal: {
                  textStyle: {
                      color: 'rgba(255, 255, 255, 0.9)'
                  }
              }
          },
          labelLine: {
              normal: {
                  lineStyle: {
                      color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
              }
          },
          itemStyle: {
              normal: {
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
              return Math.random() * 200;
          }
      }
  ]
};
// 可用，总的，满载
equimentoption = {
  color: ['#0CD1F3', '#f374f4', '#3ED139'],
  tooltip: {
    trigger: 'axis'
  },
  angleAxis: {
    axisLabel: {
      color: '#fff'
    }
  },
  radiusAxis: {
      type: 'category',
      data: ['可用', '总的', '满载'],
      z: 10,
      axisLabel: {
        color: '#fff'
      }
  },
  polar: {
  },
  series: [{
      type: 'bar',
      data: [60, 2, 3],
      coordinateSystem: 'polar',
      name: '冰箱',
      stack: 'a'
  }, {
      type: 'bar',
      data: [2, 40, 6],
      coordinateSystem: 'polar',
      name: '液氮',
      stack: 'a'
  }, {
      type: 'bar',
      data: [30, 50, 100],
      coordinateSystem: 'polar',
      name: '冷库',
      stack: 'a'
  }],
  legend: {
      show: true,
      data: ['冰箱', '液氮', '冷库'],
      left: 'left',
      textStyle: {
        color: '#fff'
      },
  }
};

  ngOnInit() {
  }


}
