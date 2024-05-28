import React from "react";
import ReactApexChart from "react-apexcharts";
export class TransChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          colors: ['#003b6d'],
          annotations: {
            xaxis: [{
              x: 500,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#003b6d',
                },
                text: 'X annotation',
              }
            }],
            yaxis: [{
              y: 'July',
              y2: 'September',
              label: {
                text: 'Y annotation'
              }
            }]
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          title: {
            text: "Transactions"
          },
          dataLabels: {
            enabled: true
          },
          xaxis: {
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
          },
          grid: {
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          yaxis: {
            reversed: false,
            axisTicks: {
              show: true
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }