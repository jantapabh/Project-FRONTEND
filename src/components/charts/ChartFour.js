// Chart แสดงข้อมูลของผู้สูงอายุที่อาศัยอยู่บ้านตามลำพัง

import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'



class ChartFour extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: '80 ปีขึ้นไป',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: '70-79 ปี',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: '60-69 ปี',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
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
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
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