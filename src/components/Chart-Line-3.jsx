import { Card } from 'antd';
import { Line } from 'react-chartjs-2';

const ResponseChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Response Rate (%)',
        data: [90, 88, 92, 85, 87, 90, 93],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y'
      },
      {
        label: 'Response Time (s)',
        data: [1.2, 1.5, 1.3, 1.6, 1.7, 1.4, 1.3],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Response Rate and Time' }
    },
    scales: {
      y: { type: 'linear', position: 'left' },
      y1: { type: 'linear', position: 'right' }
    }
  };

  return(
    <Card>
        <Line data={data} options={options} />
    </Card>
  ) 
};

export default ResponseChart;
