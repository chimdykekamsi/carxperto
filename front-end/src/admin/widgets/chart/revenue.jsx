import React from "react";
import ReactApexChart from "react-apexcharts";

export class Revenue extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [25, 15, 44, 55, 41, 17],
        options: {
          chart: {
            width: '100%',
            type: 'pie',
          },
          labels: ["January", "Febuary", "March", "April", "May", "June"],
          theme: {
            monochrome: {
              enabled: true,
              
            }
          },
          plotOptions: {
            pie: {
              dataLabels: {
                offset: -5
              }
            }
          },
          title: {
            text: "User Registration"
          },
          dataLabels: {
            formatter(val, opts) {
              const name = opts.w.globals.labels[opts.seriesIndex]
              return [name, val.toFixed(1) + '%']
            }
          },
          legend: {
            show: false
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="pie" />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }