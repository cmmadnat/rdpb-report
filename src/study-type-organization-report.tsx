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

export function StudyTypeOrganizationReport() {
  const [data, setData] = React.useState<TypeReport[]>([])
  const [selectedOrganization, setSelectedOrganization] = React.useState('')
  const [orgs, setOrgs] = React.useState<string[]>([])
  React.useEffect(() => {

    request.get('https://rdpb-2.appspot.com/api/organization').then(data => data.body)
      .then((data: { name: string }[]) => {
        return data.map(it => it.name)
      })
      .then(data => {
        setOrgs(data)
        setSelectedOrganization(data[0])
      }
      )

  }, [])
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
  React.useEffect(() => {

    if (selectedOrganization.length === 0) return;
    request.get('https://rdpb-2.appspot.com/report2/studyCenter/organization/type/' + selectedOrganization).then(data => data.body)
      .then((data: TypeReport[]) => {
        const d = data.map((it, index) => {
          return { name: it.name, total: it.total }
        })
        setData(d)
      })
  }, [selectedOrganization])
  return (

    <>
      <Card style={{ padding: 10 }}>
        <span>
          เลือกหน่วยงาน :
        </span>
        <select onChange={e => {
          setSelectedOrganization(e.target.value)
        }}>
          {
            orgs.map(it => (<option value={it} key={it}>{it}</option>))
          }
        </select>

      </Card>
      <DataTableExtensions
        columns={columns}
        data={data}
        exportHeader={true}
      >
        <DataTable
          data={[]}
          title={"รายงานศูนย์เรียนรู้ ตามประเภทศูนย์เรียนรู้ " + selectedOrganization}
          columns={columns}
          striped={true}
          highlightOnHover={true}
        />
      </DataTableExtensions>
    </>
  );
}
