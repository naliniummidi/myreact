import React from 'react'
import Row from'react-bootstrap/Row'
import Col from'react-bootstrap/col'
import Container from 'react-bootstrap/Container';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon  from '@mui/icons-material/PeopleAlt';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PaidIcon from '@mui/icons-material/Paid';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import Footer from './Footer';
function Overview() {
  return (
    <Container>
        <Row >
            <Col sm={3} className='zip'>
            <div style={{color:'red'}}>
            <h2>BUDGET <MonetizationOnIcon/></h2>
            </div>
            <h1>$24k</h1>
            <p style={{color:'green'}}><NorthIcon/>12% Since last month</p>
          </Col>
          <Col sm={3} className='zip'>
          <div style={{color:'green'}}>
          <h2>TOTALCUSTOMERS<PeopleAltIcon/></h2>
          </div>
          <h1>1.6k</h1>
          <p style={{color:'red'}}><SouthIcon/>16% Since last month</p>
            </Col>
            <Col sm={3} className='zip'>
            <div style={{color:'orange'}}>
              <h2>TASK PROORESS<FormatListBulletedIcon/></h2>
              </div>
            <h1>75.5%</h1>
            </Col>
            <Col sm={3} className='zip'>
            <div style={{color:'blue'}}>
              <h2>TOTAL PROFIT< PaidIcon/></h2>
              </div>
              <h2>$15k</h2>
            </Col>
        </Row>
        <Footer/>
    </Container>
    
   

  )
}
export default Overview
