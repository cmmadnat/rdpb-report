import React from 'react';
import { Navbar, Container, Accordion, Card, Button } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface RegionReport {
  id: number;
  name: string;
  complete: number;
  incomplete: number;
  total: number;
}
const data = [
  { id: 1, name: 'เหนือ', complete: 1982, incomplete: 1982, total: 1982 },
  { id: 2, name: 'ตะวันออกเฉียงเหนือ', complete: 1982, incomplete: 1982, total: 1982 },
  { id: 3, name: 'กลาง', complete: 1982, incomplete: 1982, total: 1982 },
  { id: 4, name: 'ใต้', complete: 1982, incomplete: 1982, total: 1982 },
];
const calculateSum = (data: RegionReport[]) => {
  const complete = data.map(it => it.complete).reduce((t, c) => t + c)
  const incomplete = data.map(it => it.incomplete).reduce((t, c) => t + c)
  const total = data.map(it => it.total).reduce((t, c) => t + c)
  const output = { id: 99, name: 'รวม', complete, incomplete, total } as RegionReport
  return output
}
const data2 = [...data, calculateSum(data)]
const columns = [
  {
    name: 'ภาค',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'ครบถ้วน',
    selector: 'complete',
    sortable: true,
    right: true,
  },
  {
    name: 'ไม่่่ครบถ้วน',
    selector: 'incomplete',
    sortable: true,
    right: true,
  },
  {
    name: 'รวม',
    selector: 'total',
    sortable: true,
    right: true,
  },
];

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
                <DataTable
                  title="รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล รายภาค"
                  columns={columns}
                  className='-striped -highlight'
                  data={data2}
                />
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
