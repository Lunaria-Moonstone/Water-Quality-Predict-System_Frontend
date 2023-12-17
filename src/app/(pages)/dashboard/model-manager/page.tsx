"use client"

import DataTable from "@/app/components/DataTable"
import { ColumnsType } from "antd/es/table"


interface TableDataType {
  key: string
  name: string
  activate: boolean
}

function ModelManager() {
  const columns: ColumnsType<TableDataType> = [
    {
      title: 'key',
      dataIndex: 'key',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'activate',
      dataIndex: 'activate',
      render: (activate: boolean) => <span>{activate ? 'available' : 'unavailable'}</span>
    },
    {
      title: 'actions',
      key: 'acitons',
      width: 220,
      fixed: 'right',
      render: () => (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <button
            className="px-3 py-1 font-sans text-xs font-bold text-center text-red-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Delete
          </button>
          <button
            className="px-3 py-1 font-sans text-xs font-bold text-center text-yellow-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Edit
          </button>
          <button
            className="px-3 py-1 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Unactive
          </button>
        </div>
      )
    }
  ]

  const data: TableDataType[] = [
    {
      key: '1',
      name: 'sill',
      activate: true
    }, {
      key: '2',
      name: 'luna',
      activate: false,
    }
  ]

  return (
    <>
      <div className="manager-body">
        <div className="title">
          <h1>Model Manager</h1>
          <h3>16-2023 Dec.</h3>
        </div>
        <hr />
        <div className="table-card">
          <DataTable columns={columns} data={data}/>
        </div>
      </div>
    </>
  )
}

export default ModelManager