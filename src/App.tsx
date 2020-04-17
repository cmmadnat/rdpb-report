/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { Navbar, Container, Accordion, Card, Button, Tabs, Tab } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SufficiencyReport from './sufficiency-region-report';
import { AppTypeReport as SufficiencyTypeReport } from './sufficiency-type-report';
import { SufficiencyTypeReportProvince } from './sufficiency-type-province-report';
import SufficiencyReportRegion from './sufficiency-region-by-report';
import RoyalReport from './royal-region-report';
import RoyalReportRegion from './royal-region-by-report';
import { AppRoyalTypeReport } from './royal-type-report';
import { RoyalTypeReportProvince } from './royal-type-province-report';
import StudyReport from './study-region-report';
import StudyReportRegion from './study-region-by-report';
import { StudyTypeReport } from './study-type-report';
import { StudyTypeReportProvince } from './study-type-province-report';
import { RoyalDevelopmentCenterReport } from './royal-development-center-report';
import { StudyOrganizationReport } from './study-organization-report';
import StudyReportRegionOrganization from './study-region-organization-report';


function App() {
  const [showTab1, setShowTab1] = useState(false)
  const [showTab2, setShowTab2] = useState(false)
  const [showTab3, setShowTab3] = useState(false)
  const [showTab4, setShowTab4] = useState(false)
  const [showTab5, setShowTab5] = useState(false)
  const [showTab6, setShowTab6] = useState(false)
  const [showTab7, setShowTab7] = useState(false)
  const [showTab8, setShowTab8] = useState(false)
  const [showTab9, setShowTab9] = useState(false)
  const [showTab10, setShowTab10] = useState(false)
  const [showTab11, setShowTab11] = useState(false)
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
                        <hr />
                        <h3>รายภาค</h3>
                        <SufficiencyReportRegion type={'status'} />
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
                        <hr />
                        <h3>รายภาค</h3>
                        <SufficiencyReportRegion type={'studyCenter'} />
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
            <Accordion defaultActiveKey="" >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setShowTab4(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {
                      showTab4 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <RoyalReport type={'status'} />
                        {/* <SufficiencyReport type={'status'} /> */}
                        <hr />
                        <h3>รายภาค</h3>
                        <RoyalReportRegion type={'status'} />
                        {/* <SufficiencyReportRegion type={'status'} /> */}
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => setShowTab5(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {
                      showTab5 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <RoyalReport type={'studyCenter'} />
                        <hr />
                        <h3>รายภาค</h3>
                        <RoyalReportRegion type={'studyCenter'} />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={() => setShowTab6(true)}>
                    รายงานศูนย์เรียนรู้ตามประเภท
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {
                      showTab6 &&
                      <>
                        <h3>รวม</h3>
                        <AppRoyalTypeReport />
                        <hr />
                        <h3>รายจังหวัด</h3>
                        <RoyalTypeReportProvince />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10" onClick={() => setShowTab10(true)}>
                    รายงานศูนย์เรียนรู้ จำแนกตามศูนย์ศึกษาการพัฒนาพื้นที่
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body>
                    {
                      showTab10 &&
                      <>
                        <RoyalDevelopmentCenterReport />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </Tab>
          <Tab eventKey="contact" title="ศูนย์เรียนรู้หน่วยงานต่างๆ" >
            <Accordion defaultActiveKey="" >
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setShowTab7(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {
                      showTab7 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <StudyReport type={'status'} />
                        <hr />
                        <h3>รายภาค</h3>
                        <StudyReportRegion type={'status'} />
                        <h3>หน่วยงาน</h3>
                        <StudyReportRegionOrganization type={'status'} />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" onClick={() => setShowTab8(true)}>
                    <span>รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้</span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {
                      showTab8 &&
                      <>
                        <h3>ทุกภาค</h3>
                        <StudyReport type={'studyCenter'} />
                        <hr />
                        <h3>รายภาค</h3>
                        <StudyReportRegion type={'studyCenter'} />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2" onClick={() => setShowTab9(true)}>
                    รายงานศูนย์เรียนรู้ตามประเภท
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {
                      showTab9 &&
                      <>
                        <h3>รวม</h3>
                        <StudyTypeReport />
                        <hr />
                        <h3>รายจังหวัด</h3>
                        <StudyTypeReportProvince />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3" onClick={() => setShowTab11(true)}>
                    รายงานศูนย์เรียนรู้ตามหน่วยงาน
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {
                      showTab11 &&
                      <>
                        <StudyOrganizationReport />
                      </>
                    }
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </Tab>
        </Tabs>

      </Container>
    </>
  );
}

export default App;
