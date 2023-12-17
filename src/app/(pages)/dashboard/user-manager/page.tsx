"use client"

import { Card } from "antd"
import Search from "antd/es/input/Search"
import Table, { ColumnsType } from "antd/es/table"


interface TableDataType {
  key: string
  name: string
  activate: boolean
}

function UserManager() {
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
          <h1>User Manager</h1>
          <h3>16-2023 Dec.</h3>
        </div>
        <hr />
        <div className="table-card">
          <Card bordered={false}>
            <div className="buttons-and-search">
              <div className="buttons">
                <button
                  className="select-none rounded-lg bg-blue-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  ADD
                </button>
                <button
                  className="select-none rounded-lg bg-red-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  DELETE
                </button>
                <button
                  className="select-none rounded-lg bg-yellow-600 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  DEACTIVATE
                </button>
              </div>
              <div>
                <Search placeholder="input search text"  />
              </div>
            </div>
            <div className="table-body">
              <Table
                columns={columns}
                dataSource={data}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default UserManager