import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const SalesRegionChart = () => {
    // Define sales data for each state in the US
    const stateSalesData = {
        'AL': 500,
        'AK': 200,
        'AZ': 700,
        'AR': 300,
        'CA': 1000,
        'CO': 400,
        'CT': 450,
        'DE': 350,
        // Add sales data for other states as necessary
    };

    const stateNameMapping = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        // Add the rest of the states...
    };

    // Convert sales data into arrays for locations and values
    const locations = Object.keys(stateSalesData);
    const values = Object.values(stateSalesData);

    const stateFullNames = locations.map(abbr => stateNameMapping[abbr]);

    // Define the initial state
    const [chartData] = useState({
        data: [{
            type: 'choropleth',
            locationmode: 'USA-states',
            locations: locations,
            z: values,
            text: stateFullNames,
            colorscale: '#003b6d',
            colorbar: {
                title: 'Sales',
                orientation: 'h' // Set orientation to 'h' for horizontal orientation
            }
        }],
        
        layout: {
            title: 'Sales Region Chart (US States)',
            geo: {
                scope: 'usa'
            },
            margin: {
                t: 50, // Top margin
                r: 0,
                b: 50,
                l: 0,
            },
            colorbar: {
                orientation: 'h' // Set orientation to 'h' for horizontal orientation
            },
        }
    });

    // Define state for chart width based on screen size
    const [chartWidth, setChartWidth] = useState(window.innerWidth < 768 ? '88%' : '80%');

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            const newWidth = window.innerWidth < 768 ? '88%' : '80%';
            setChartWidth(newWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <Plot
                data={chartData.data}
                layout={chartData.layout}
                style={{ width: chartWidth, height: '400px' }}
            />
        </div>
    );
};

export default SalesRegionChart;
