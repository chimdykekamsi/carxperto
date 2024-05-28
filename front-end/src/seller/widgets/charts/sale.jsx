import React, { Component } from "react";
import Chart from "react-apexcharts";

class Sales extends Component {
  constructor(props) {
    super(props);

    this.state = {
        options: {
          chart: {
            id: "basic-bar",
          },
          title: {
            text: "Sales summary",
            color: '#003b6d',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept'],
          },
          colors: ['#003b6d'],
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '14px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
            },
            background: {
              enabled: true,
              foreColor: '#000',
              borderRadius: 2,
              opacity: 0.9,
            },
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 12]
          }
        ],
        chartWidth: window.innerWidth < 768 ? 300 : 500, // Set initial chart width based on screen size
      };

    // Bind handleResize to the component
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // Add event listener for window resize
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Remove event listener for window resize
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    // Update chart width based on screen size
    const newWidth = window.innerWidth < 768 ? 300 : 500;
    this.setState({ chartWidth: newWidth });
  }

  render() {
    return (
      <div className="lg:w-[45%] w-[30px] " Sales="app">
        <div className="row">
          <div className="text-center">Summary Sales</div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={this.state.chartWidth}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sales;
