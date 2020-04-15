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

export function AppRoyalTypeReport(props: IAppTypeReportProps) {
  const [data, setData] = React.useState<TypeReport[]>([])
  React.useEffect(() => {
    request.get('http://rdpb-2.appspot.com/report2/royalProject/type').then(data => data.body)
      .then((d: TypeReport[]) => {
        setData(d)
      })
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
  return (

    <>
      <DataTableExtensions
        columns={columns}
        data={data}
        exportHeader={true}
      >
        <DataTable
          data={[]}
          title="รายงานศูนย์เรียนรู้ ตามประเภทศูนย์เรียนรู้ รายภาค"
          columns={columns}
          striped={true}
          highlightOnHover={true}
        />
      </DataTableExtensions>
    </>
  );
}
