import React from 'react'
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
import PeopleIcon from '@mui/icons-material/People';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
function Sidenavbar() {
  return (
    <div>
      <Row>
<Col>
<Button className='abc'><h1>Device</h1>Product</Button><br/><br/><br/>
       <Link to ='/reactapp'><Button className='ghf'><p> <SignalCellularAltIcon/>overview</p></Button></Link><br/><br/>
        <Link to='/Customer'><p><PeopleIcon/>Customers</p></Link>
        <Link to='/Account'><p>< PersonIcon/>Account</p></Link>
       <Link to='/Login'><p><LockOpenIcon/>Login</p></Link>
        <Link to='/Graph'><p><  SsidChartIcon/>Graph</p></Link>
        
</Col>
      </Row>
    </div>
  )
}

export default Sidenavbar
