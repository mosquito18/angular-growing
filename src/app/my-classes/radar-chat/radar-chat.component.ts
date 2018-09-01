import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radar-chat',
  templateUrl: './radar-chat.component.html',
  styleUrls: ['./radar-chat.component.less']
})
export class RadarChatComponent implements OnInit {
  @Input() alldata;
  option;
  @Input() allcolor; 

  constructor() { }

  ngOnInit() {
    console.log(this.alldata);
    this.option = {
      // title: {
      //   text: '基础雷达图'
      // },
      tooltip: {},
      backgroundColor: '#fff',
      // legend: {
      //   data: ['上次测评结果', '本次测评结果']
      // },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            fontSize: "12px",
            backgroundColor: '#fff',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        center: ['50%', '50%'],
        radius: 50,
        splitArea: {
          areaStyle: {
            // color: ['rgba(114, 172, 209, 0.2)',
            //   'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
            //   'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
            color: 'rgba(255, 255, 255, 1)',
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 10
          }
        },

        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 1)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 1)'
          }
        },
        indicator: [
          { name: '人际交往能力', max: 10 },
          { name: '工作态度', max: 10 },
          { name: '创造力', max: 10 },
          { name: '技术技能', max: 10 },
          { name: '学习能力', max: 10 },
          { name: '执行力', max: 10 }
        ]
      },
      series: [{
        // name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // symbol: "none",
        itemStyle: {
          normal: {
            color: "rgba(0,0,0,1)", // 图表中各个图区域的边框线拐点颜色
            lineStyle: {
              color: "black" // 图表中各个图区域的边框线颜色
            },
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [
          // {
          //   value: [28000, 10000, 4300, 35000, 50000, 19000],
          //   label: {
          //     normal: {
          //       show: true,
          //       color:'rgba(249, 160, 56, 0.8)',              
          //       formatter: function (params) {
          //         return params.value;
          //       }
          //     }
          //   },
          //   lineStyle: {
          //     normal: {
          //       color:'rgba(249, 160, 56, 0.8)',
          //     }
          //   },
          //   areaStyle: {
          //       normal: {
          //           // opacity: 0.9,
          //           color: 'rgba(249, 160, 56, 0.8)',
          //       }
          //   },
          //   name: '预算分配（Allocated Budget）'
          // },

          {
            value: this.alldata,
            label: {
              normal: {
                color: this.allcolor,
                show: true,
                formatter: function (params) {
                  return params.value;
                }
              }
            },
            lineStyle: {
              normal: {
                color: this.allcolor,
              }
            },
            areaStyle: {
              normal: {
                color: this.allcolor,
              }
            },
            name: '测评结果'
          }
        ]
      }]
    };
  }

}
