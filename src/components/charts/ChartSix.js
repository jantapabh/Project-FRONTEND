import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'


class ChartSix extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [5],
      options: {
        chart: {
          height: 370,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
            }
          },
        },
        labels: ['ตกจากที่สูง'],
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={150} />
</div>


    );
  }
}

export default ChartSix