"use client"
import { ColumnsType } from "antd/es/table"
import { notification } from "antd"
import { useEffect, useState } from "react"

import DataTable from "@/app/components/DataTable"

import user_manage from "@/api/manager/user_manage"


interface TableDataType {
  key: string
  name: string
  activate: boolean
  created: string,
  updated: string,
}

async function UserManager() {

  let [api, contextHolder] = notification.useNotification()

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
      title: 'created',
      dataIndex: 'created'
    },
    {
      title: 'updated',
      dataIndex: 'updated'
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
  const [data, setData]: [ColumnsType<TableDataType>, any] = useState([])
  // let data: ColumnsType<TableDataType> = [];
  
  return (
    <>
      { contextHolder }
      <div className="manager-body">
        <div className="title">
          <h1>User Manager</h1>
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

export default UserManager