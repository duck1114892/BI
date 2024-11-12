import { Card } from 'antd';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
  } from 'chart.js';
  
  // Register the required components, including ArcElement
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title
  );
const EngagementChart = () => {
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
      title: { display: true, text: 'Platform-Specific Engagement Rates' }
    }
  };

  return (
    <Card><Pie data={data} options={options} /></Card>
  );
};

export default EngagementChart;
