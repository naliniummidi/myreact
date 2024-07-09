import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Sidenavbar from './Components/Sidenavbar';
import Home from './Components/Home';

import Customer from './Components/Customer';
import Account from './Components/Account';
import Login from './Components/Login';
import Graph from'./Components/Graph';
import Overview from './Components/Overview';
import Footer from './Components/Footer';
import './App.css';
import { Cake } from '@mui/icons-material';

function App() {
  return (
    <div>
      <Router>
        <Row>
        <Col sm={2}><Sidenavbar/></Col>
        <Col sm={10}>
          <Routes>
          <Route path='/Customer' exact Component={Customer}/>
          <Route path ='/Overview' exact Component={Overview}/>
          <Route path='/Account' exact Component={Account}/>
          <Route path='/Login' exact Component={Login}/>
          <Route path='/Graph' exact Component={Graph}/>
         

          </Routes>
        </Col>
      </Row>
      </Router>
    </div>
  )
}

export default App
