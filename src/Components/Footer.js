import * as React from 'react';
import Container from'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import { PieChart } from '@mui/x-charts/PieChart';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import CallIcon from '@mui/icons-material/Call';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';

export  default function(){
  return (
    <Container>
    <Row>
      <Col sm={6}>
      
        <h1>Sales</h1> 
       
      
        
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

  <Col sm={6}>
  
  
    <h1><p> <center>Traffic sources</center></p></h1>

 
<br/><br/><PieChart  
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
<Col>

</Col>
  <Col sm={2}>
    <h2><PersonalVideoIcon/></h2>
  <h1>Desktop</h1>
  <p>63%</p>
</Col>
<Col sm={2}>
  <h2><TabletAndroidIcon/></h2>
  <h1>Tablet</h1>
  <p>15%</p>
</Col>
<Col sm={2}>
  <h2>< CallIcon /></h2>
  <h1>Phone</h1>
  <p>22%</p>
</Col>


</Row>
</Container>
  )
}
