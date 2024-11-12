import { useState } from 'react';
import { Card, Select, Button, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement);

const { Option } = Select;
const { Text } = Typography;

const TotalSessionsChart = () => {
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [filteredData, setFilteredData] = useState([120, 150, 130, 180, 210, 190, 250]);

  const originalData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    data: [120, 150, 130, 180, 210, 190, 250],
  };

  // Handle month selection and filter data
  const handleMonthChange = (months) => {
    setSelectedMonths(months);
    const filteredValues = originalData.data.filter((_, index) => months.includes(originalData.labels[index]));
    setFilteredData(filteredValues);
  };

  const data = {
    labels: selectedMonths.length > 0 ? selectedMonths : originalData.labels,
    datasets: [
      {
        label: 'Total Sessions',
        data: filteredData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend to make it cleaner
      title: { display: false }, // Hide title for a cleaner look
      tooltip: { mode: 'index', intersect: true },
    },
    scales: {
      x: {
        display: true,
        grid: { display: false },
      },
      y: {
        display: true,
        grid: { color: '#e0e0e0' },
        ticks: {
          stepSize: 50, // Adjust as needed
        },
      },
    },
  };

  return (
    <Card>
      <Text strong style={{ fontSize: '16px' }}>Total Uptime</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <div>
          <Text style={{ color: '#4CAF50' }}>Up for 21 hour</Text>
        </div>
        <div>
          <Text>Total Uptime: 99.1%</Text>
        </div>
        <div>
          <Text>Response time: 3.1s</Text>
        </div>
      </div>
      <Line data={data} options={options} />
    </Card>
  );
};

export default TotalSessionsChart;