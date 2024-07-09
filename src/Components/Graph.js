import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


function Graph() {
  return (
    <div>
      <Row>
      <h1><center>THIS IS GRAPH</center></h1>
        <Col>
        <BarChart
  width={600}
  height={300}
  series={[
    { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
    { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
  ]}
  xAxis={[{ data: xLabels, scaleType: 'band' }]}
/>
        </Col>
        <Col>
        <PieChart  
  series={[
    {
      data: [
        { id: 0, value: 10,  },
        { id: 1, value: 15,  },
        { id: 2, value: 20,  },
      ],
    },
  ]}
  width={700}
  height={250}
/>
        </Col>
        </Row>
        <Row>
        <Col>
        <BarChart
  series={[
    { data: [3, 4, 1, 6, 5], stack: 'A',  },
    { data: [4, 3, 1, 5, 8], stack: 'A',  },
    { data: [4, 2, 5, 4, 1], stack: 'B',  },
    { data: [2, 8, 1, 3, 1], stack: 'B',  },
    { data: [10, 6, 5, 8, 9], },
  ]}
  width={550}
  height={330}
/>
        </Col>
      </Row>
    </div>
  )
}

export default Graph
