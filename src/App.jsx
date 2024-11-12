import { Card, Layout, Row, Col } from 'antd';
import './App.css';
import TotalSessionsChart from './components/Chart-Line-1';
import AvgDurationChart from './components/Chart-Line-2';
import ResponseChart from './components/Chart-Line-3';
import EngagementChart from './components/Chart-Line-4';
import RetentionChart from './components/Chart-Line-5';
import DoughnutChart from './components/Chart-Line-6';

const App = () => {
  return (
    <Layout style={{ width: '100%' }}>
      <Layout.Content>
        <Card>
          <h1>Dashboard</h1>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <TotalSessionsChart />
            </Col>
            <Col span={8}>
              <AvgDurationChart  />
            </Col>
            <Col span={8}>
              <ResponseChart  />
            </Col>
            <Col span={8}>
              <EngagementChart />
            </Col>
             <Col span={8}>
              <RetentionChart/>
             </Col>
             <Col span={8}>
              <DoughnutChart/>
             </Col>
          </Row>
        </Card>
      </Layout.Content>
      <Layout.Footer>
        <h1>Footer</h1>
      </Layout.Footer>
    </Layout>
  );
};

export default App;
