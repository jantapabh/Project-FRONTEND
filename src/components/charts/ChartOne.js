import React, {Component} from 'react'
import ReactApexChart from 'react-apexcharts'
import ApexCharts from 'apexcharts'

class ChartOne extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            series: [33.1, 23.4, 29.9, 13.6],
            options: {
                chart: {
                    width: 500,
                    type: 'pie',
                },theme: {
                    mode: 'light', 
                    palette: 'palette2', 
                    monochrome: {
                        enabled: false,
                        color: '#F9CE1D',
                        shadeTo: 'light',
                        shadeIntensity: 0.65
                    },
                },
                labels: ['วัยต้น 60 -64 ปี', 'วัยต้น 65 - 69 ปี', 'วัยกลาง 70 - 79 ปี', 'วัยปลาย 80 ปีขึ้นไป'],
                responsive: [{
                    breakpoint: 550,
                    options: {
                        chart: {
                            width: 600
                        },
                        legend: {
                            position: 'center'
                        }
                    }
                }]
            },
            


        };
    }


    render() {

        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series}  type="pie" width={500} />
            </div>

        );
    }
}


export default ChartOne