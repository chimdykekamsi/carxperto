import React from "react";
import ReactApexChart from "react-apexcharts";

 export class Revenuelisting extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          title: {
            text: "User Registration Traffic"
          },
          responsive: [{
            breakpoint: 280,
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
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }