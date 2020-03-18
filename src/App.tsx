import React from 'react';
import { Navbar, Container, Accordion, Card, Button } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">รายงานศูนย์เรียนรู้</Navbar.Brand>
      </Navbar>
      <Container>
        <h1>รายงานศูนย์เรียนรู้</h1>

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <span>รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล</span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h3>รายภาค</h3>
                <h3>รายจังหวัด</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้ พื้นที่เป้าหมาย
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h3>รายภาค</h3>
                <h3>รายจังหวัด</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                รายงานศูนย์เรียนรู้ตามประเภท
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <h3>รายภาค</h3>
                <h3>รายจังหวัด</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card><Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                รายงานศูนย์เรียนรู้ตามหน่วยงาน
      </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <h3>รายภาค</h3>
                <h3>รายจังหวัด</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card><Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                รายงานศูน์เรียนรู้ตามศูนย์พัฒนา
                 </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <h3>รายภาค</h3>
                <h3>รายจังหวัด</h3>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default App;
