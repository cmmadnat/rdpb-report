import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
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
        <h2>รายงานศูนย์เรียนรู้ ตามสถานะข้อมูล</h2>
        <h3>รายภาค</h3>
        <h3>รายจังหวัด</h3>
        <h2>รายงานศูนย์เรียนรู้ ตามสถานะศูนย์เรียนรู้ พื้นที่เป้าหมาย</h2>
        <h3>รายภาค</h3>
        <h3>รายจังหวัด</h3>
        <h2>รายงานศูนย์เรียนรู้ตามประเภท</h2>
        <h3>รายภาค</h3>
        <h3>รายจังหวัด</h3>
        <h2>รายงานศูนย์เรียนรู้ตามหน่วยงาน</h2>
        <h3>รายภาค</h3>
        <h3>รายจังหวัด</h3>
        <h2>รายงานศูน์เรียนรู้ตามศูนย์พัฒนา</h2>
      </Container>
    </>
  );
}

export default App;
