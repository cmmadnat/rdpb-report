import * as React from 'react';
import DataTable from 'react-data-table-component'
import request from 'superagent'
//@ts-ignore
import DataTableExtensions from 'react-data-table-component-extensions';

export interface TypeReport {
  name: string;
  total: number;
}

export interface IAppTypeReportProps {
}

export function StudyOrganizationReport(props: IAppTypeReportProps) {
  const [data, setData] = React.useState<TypeReport[]>([])
  React.useEffect(() => {
    request.get('https://rdpb-2.appspot.com/report2/studyCenter/organization').then(data => data.body)
      .then((d: TypeReport[]) => {
        setData(d)
      })
  }, [])
  const columns = [
    {
      name: 'หน่วยงาน',
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
      <DataTableExtensions
        columns={columns}
        data={data}
        exportHeader={true}
      >
        <DataTable
          data={[]}
          title="รายงานศูนย์เรียนรู้ จําแนกตามหน่วยงาน"
          columns={columns}
          striped={true}
          highlightOnHover={true}
        />
      </DataTableExtensions>
    </>
  );
}
