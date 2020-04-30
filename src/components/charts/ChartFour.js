// Chart แสดงข้อมูลของผู้สูงอายุที่อาศัยอยู่บ้านตามลำพัง

import React, { Component } from 'react'
import ChartFour from 'react-apexcharts'

class ChartFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                colors: colors,
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        ['John', 'Doe'],
                        ['Joe', 'Smith'],
                        ['Jake', 'Williams'],
                        'Amber',
                        ['Peter', 'Brown'],
                        ['Mary', 'Evans'],
                        ['David', 'Wilson'],
                        ['Lily', 'Roberts'],
                    ],
                    labels: {
                        style: {
                            colors: colors,
                            fontSize: '12px'
                        }
                    }
                }
            },


        };
    }

    render() {
        
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}



export default ChartFour;