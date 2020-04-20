import * as React from 'react';
import DataTable from 'react-data-table-component'
import request from 'superagent'
//@ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';
import { Card } from 'react-bootstrap';

export interface TypeReport {
  name: string;
  total: number;
}

export interface IAppTypeReportProps {
}

export function SufficiencyTypeReportProvince() {
  const [provinces, setProvinces] = React.useState<string[]>([])
  const [province, setProvince] = React.useState('')
  const [data, setData] = React.useState<TypeReport[]>([])
  React.useEffect(() => {
    request.get('https://rdpb-2.appspot.com/report2/provinces').then(data => data.body)
      .then((d: string[]) => {
        setProvinces(d)
        setProvince(d[0])
      })
  }, [])
  React.useEffect(() => {
    if (province.length === 0) return;
    request.get('https://rdpb-2.appspot.com/report2/sufficiencyReport/province/' + province).then(data => data.body)
      .then((d: TypeReport[]) => {
        setData(d)
      })
  }, [province])
  const columns = [
    {
      name: 'ด้าน/ประเภท/ชนิด',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'จํานวนศูนย์เรียนรู้',
      selector: 'total',
      sortable: true,
      right: true,
    }
  ];
  return (

    <>
      <Card style={{ padding: 10 }}>
        <span>
          เลือกจังหวัด :
        </span>
        <select onChange={e => {
          setProvince(e.target.value)
        }}>
          {provinces.map(it => (<option value={it} key={it}>{it}</option>))}
        </select>

      </Card>
      <DataTableExtensions
        columns={columns}
        data={data}
        exportHeader={true}
      >
        <DataTable
          data={[]}
          title={"รายงานศูนย์เรียนรู้ ตามประเภทศูนย์เรียนรู้ " + province}
          columns={columns}
          striped={true}
          highlightOnHover={true}
        />
      </DataTableExtensions>
    </>
  );
}
