import React from "react";
import ReactApexChart from "react-apexcharts";


export class Line extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'XYZ MOTORS',
          data: [
            [1167609600000, 25.93],
            [1167696000000, 25.82],
            [1167782400000, 25.81],
            [1167868800000, 25.84],
            [1167955200000, 25.87],
            [1168214400000, 25.96],
            [1168300800000, 25.91],
            [1168387200000, 26.00],
            [1168473600000, 26.10],
            [1168560000000, 26.18],
            [1168819200000, 26.15],
            [1168905600000, 26.19],
            [1168992000000, 26.25],
            [1169078400000, 26.30],
            [1169164800000, 26.18],
            [1169424000000, 26.10],
            [1169510400000, 26.15],
            [1169596800000, 26.23],
            [1169683200000, 26.36],
            [1169769600000, 26.25],
            [1170028800000, 26.30],
            [1170115200000, 26.40],
            [1170201600000, 26.55],
          ]
        }],
        
        options: {
          chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
              type: 'x',
              enabled: true,
              autoScaleYaxis: true
            },
            toolbar: {
              autoSelected: 'zoom'
            }
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
          },
          title: {
            text: 'Active listings',
            align: 'left'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              inverseColors: false,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100]
            },
             colors: ['#003b6d']
          },
          yaxis: {
            labels: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0);
              },
            },
            title: {
              text: 'Price'
            },
          },
          xaxis: {
            type: 'datetime',
          },
          tooltip: {
            shared: false,
            y: {
              formatter: function (val) {
                return (val / 1000000).toFixed(0)
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }
