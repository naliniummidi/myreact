import React from 'react'
import Row from'react-bootstrap/Row';
import Col from'react-bootstrap/Col';
function Customer() {
  return (
    <div>
      <h1><center>THIS IS CUSTOMER PAGE</center></h1>
      <Row className='are'>
        <Col sm={4}>
      <img src={'https://wp-bn.salesforce.com/blog/wp-content/uploads/sites/2/2018/04/SFC-22038-Blog-Image-How-to-Raise-Your-Customer-Service-Standards.jpg'}height={'300px'}width={'300px'}/>
      </Col>
      <Col sm={4}>
      <img src={'https://images.businessnewsdaily.com/app/uploads/2021/03/17104835/Why-is-customer-loyalty-important.png'}height={'300px'}width={'300px'}/>
      </Col>
      <Col sm={4}>
     <img src={'https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/07/SFC-22038-Blog-Image-7-Principles-that-Spark-Business-Growth.jpg?w=889'}height={'300px'}width={'300px'}/>
      </Col>
      <Row>
        <Col sm={4}>
        <img src={'https://knowledge.wharton.upenn.edu/wp-content/uploads/2023/07/7.19.23-fader-customer-centricity-book-excerpt-GettyImages-1368585997.jpg'}height={'300px'}width={'300px'}/>
        </Col>
        <Col sm={4}>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEeJZfmTMHtF9cNZ40ZlRd-hsrmAxs5HVYQ&s'}height={'300px'}width={'300px'}/>
        </Col>
        <Col sm={4}>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_CDTZCZVQDVyijakJOzuy0Z5RYPci4Dk5g&s'}height={'300px'}width={'300px'}/>
        </Col>
      </Row>
      </Row>
      </div>
  )
}

export default Customer
