import React from 'react'
import Swal from "sweetalert2";
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';
//import { Container, Row, Col } from 'reactstrap';

function Loading() {
  
 
  return (


    <div style={{height: '300px'}}>
    <div className="alert alert-danger mx-left" role="alert"  style={{width:'20%'}}>
No record to display
</div>
</div>
    /*<Container>
      <Row>
        <Col className="col-lg-8">
          <div style={{height: '300px'}}>
        <div className="alert alert-danger mx-auto" role="alert" p-6>
    No record to display
  </div>
  </div>
        </Col>
      </Row>
    </Container>*/
    
    
      //<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
 
}

export default Loading


