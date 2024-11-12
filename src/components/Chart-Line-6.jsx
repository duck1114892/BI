import { Card } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the required components, including ArcElement and ChartDataLabels
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

const DoughnutChart = () => {
  const data = {
    labels: ['Zalo', 'Facebook Messenger'],
    datasets: [
      {
        label: 'Engagement Rate (%)',
        data: [65, 35],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Platform-Specific Engagement Rates' },
      datalabels: {
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
          const percentage = ((value / total) * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#000',
        font: {
          weight: 'bold'
        },
      },
    }
  };

  return (
    <Card><Doughnut data={data} options={options} /></Card>
  );
};

export default DoughnutChart;