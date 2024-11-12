import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';

const RetentionChart = () => {
  const data = {
    labels: ['7 Days', '14 Days', '30 Days'],
    datasets: [
      {
        label: 'Zalo',
        data: [40, 30, 25],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'Facebook Messenger',
        data: [35, 28, 20],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'User Retention Rate' }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };

  return(<Card><Bar data={data} options={options} /></Card>) 
};

export default RetentionChart;
