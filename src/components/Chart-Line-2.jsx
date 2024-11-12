import { Card } from 'antd';
import { Line } from 'react-chartjs-2';

const AvgDurationChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Average Duration (mins)',
        data: [2.5, 3.0, 2.8, 3.2, 3.1, 2.9, 3.4],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Average Conversation Duration' }
    }
  };

  return (<Card>
    <Line data={data} options={options} />
  </Card>)
};

export default AvgDurationChart;
