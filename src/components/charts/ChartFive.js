import React, { Component} from 'react'
import ReactApexChart from 'react-apexcharts'

class ChartFive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [60],
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
        labels: ['การลื่น'],
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

export default ChartFive