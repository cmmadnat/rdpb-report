/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Navbar, Container, Accordion, Card, Button, Tabs, Tab } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SufficiencyReport from './sufficiency-region-report';


function App() {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">รายงานศูนย์เรียนรู้</Navbar.Brand>
      </Navbar>
      <Container>

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{ marginTop: 20 }}>
          <Tab eventKey="home" title="เศรษฐกิจพอเพียง">
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
                    <SufficiencyReport type={'status'} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <h3>รายภาค</h3>
                    <SufficiencyReport type={'studyCenter'} />
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
              </Card>

            </Accordion>
          </Tab>
          <Tab eventKey="profile" title="ตามแนวพระราชดำริ">

          </Tab>
          <Tab eventKey="contact" title="ศูนย์เรียนรู้หน่วยงานต่างๆ" >

          </Tab>
        </Tabs>

      </Container>
    </>
  );
}

export default App;
