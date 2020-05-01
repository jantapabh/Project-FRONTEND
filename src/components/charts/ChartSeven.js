import React, { Component } from 'react'
import ReactApexChart from 'react-apexcharts'


class ChartSeven extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      series: [18],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['ตกหรือล้มทั่วไป'],
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

export default ChartSeven