import React, { Component} from 'react'
import ReactApexChart from 'react-apexcharts'


class ChartThree extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [42, 58],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['ผู้สูงอายุเพศชาย', 'ผู้สูงอายุเพศหญิง'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={280} />
            </div>
        );
    }
}

export default ChartThree