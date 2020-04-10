/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Navbar, Container, Accordion, Card, Button, Tabs, Tab } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SufficiencyReport from './sufficiency-region-report';
import { AppTypeReport as SufficiencyTypeReport } from './sufficiency-type-report';
import { SufficiencyTypeReportProvince } from './sufficiency-type-province-report';


function App() {
  const [showTab1, setShowTab1] = useState(false)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#home">รายงานศูนย์เรียนรู้</Navbar.Brand>
      </Navbar>
      <Container>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{ marginTop: 20 }}>
          <Tab eventKey="home" title="เศรษฐกิจพอเพียง">
            <Accordion defaultActiveKey="" >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setShowTab1(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {
                      showTab1 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <SufficiencyReport type={'status'} />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => setShowTab2(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {
                      showTab2 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <SufficiencyReport type={'studyCenter'} />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={() => setShowTab3(true)}>
                    รายงานศูนย์เรียนรู้ตามประเภท
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {
                      showTab3 &&
                      <>
                        <h3>รวม</h3>
                        <SufficiencyTypeReport />
                        <hr />
                        <h3>รายจังหวัด</h3>
                        <SufficiencyTypeReportProvince />
                      </>
                    }
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
