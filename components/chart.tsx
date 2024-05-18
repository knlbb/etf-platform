// components/PortfolioChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js/auto';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

interface PortfolioData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
    }[];
}

const PortfolioChart: React.FC = () => {
    const chartData: PortfolioData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Portfolio Value',
                data: [1000, 1020, 1045, 1070, 1060, 1100, 1150],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const data: ChartData<'line', PortfolioData['datasets'][0]> = {
        labels: chartData.labels,
        datasets: chartData.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor,
            backgroundColor: dataset.backgroundColor,
            fill: dataset.fill,
        })),
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                type: 'category', // Use 'category' scale for x-axis
                title: {
                    display: true,
                    text: 'Day',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Portfolio Value',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Portfolio Growth Over Last 7 Days',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default PortfolioChart;
