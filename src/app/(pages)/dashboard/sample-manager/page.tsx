"use client"

import DataTable from "@/app/components/DataTable"
import { ColumnsType } from "antd/es/table"

interface TableDataType {
  key: string,
  ph: number,
  time: string,
}

function SampleManager() {

  const columns: ColumnsType<TableDataType> = [
    {
      title: 'key',
      dataIndex: 'key'
    },
    {
      title: 'ph',
      dataIndex: 'ph'
    },
    {
      title: 'time',
      dataIndex: 'time'
    }
  ]

  const data: TableDataType[] = [
    {
      key: '1',
      ph: 7,
      time: '2022'
    },
    {
      key: '2',
      ph: 6,
      time: '2022'
    },
  ]

  return (
    <>
      <div className="manager-body">
        <div className="title">
          <h1>Sample Manager</h1>
          <h3>16-2023 Dec.</h3>
        </div>
        <hr />
        <div className="table-card">
          <DataTable columns={columns} data={data} />
        </div> 
      </div>
    </>
  )
}

export default SampleManager