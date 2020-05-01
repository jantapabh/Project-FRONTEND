// Chart แสดงข้อมูลของผู้สูงอายุที่อาศัยอยู่บ้านตามลำพัง

import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'



class ChartFour extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: '80 ปีขึ้นไป',
          data: [7, 10, 11, 9,, 9 ,11, 13, 20, 22]
        }, {
          name: '70-79 ปี',
          data: [6, 7, 7, 13, 14, 11, 12, 13, 12]
        }, {
          name: '60-69 ปี',
          data: [3, 4, 3, 5, 7, 5, 5, 6, 7, 6]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['2551', '2552', '2553', '2554', '2555', '2556', '2557', '2558'],
          },
          yaxis: {
            title: {
              text: 'อัตราการเสียชีวิตต่อประชากรแสนคน'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "จำนวน" + val + " คน"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={210} />
</div>


      );
    }
  }

export default ChartFour;