import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import request from 'superagent'
//@ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';

interface RegionReport {
  id: number;
  name: string;
  complete: number;
  incomplete: number;
  total: number;
}
// const data2 = [...data, calculateSum(data)]

interface RegionReportResponse {
  name: string
  complete: number
  inComplete: number
  studyCenter: number
  targetArea: number
  total: number
}

const RoyalReport = ({ type }: { type: 'status' | 'studyCenter' }) => {
  const [data, setData] = useState<RegionReport[]>([])
  const columns = [
    {
      name: 'ภาค',
      selector: 'name',
      sortable: true,
    },
    {
      name: type === 'status' ? 'ครบถ้วน' : 'ศูนย์เรียนรู้',
      selector: 'complete',
      sortable: true,
      right: true,
    },
    {
      name: type === 'status' ? 'ไม่ครบถ้วน' : 'พื้นที่เป้าหมาย',
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
  useEffect(() => {
    request.get('https://rdpb-2.appspot.com/report2/royalStudyCenter/region').then(data => data.body)
      .then((data: RegionReportResponse[]) => {
        const d = data.map((it, index) => {
          const c: RegionReport = type === 'status' ?
            { id: index + 1, name: it.name, complete: it.complete, incomplete: it.inComplete, total: it.total } :
            { id: index + 1, name: it.name, complete: it.studyCenter, incomplete: it.targetArea, total: it.total }
          return c
        })
        setData(d)
      })
  }, [])

  return (
    <>
      <DataTableExtensions
        columns={columns}
        data={data}
        exportHeader={true}
      >
        <DataTable
          data={[]}
          title={"รายงานศูนย์เรียนรู้ " + (type === 'status' ? 'ตามสถานะข้อมูล' : 'ตามสถานะศูนย์เรียนรู้')}
          columns={columns}
          striped={true}
          highlightOnHover={true}
        />
      </DataTableExtensions>
    </>
  )
}
export default RoyalReport