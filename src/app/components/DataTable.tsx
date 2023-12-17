"use client"

import "@/assets/componentsstyle/DataTable.css"

import { Card } from "antd";
import Search from "antd/es/input/Search";
import Table, { ColumnsType } from "antd/es/table";

function DataTable(props: { columns: ColumnsType<any>, data: any }) {

  return (
    <>
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
            <Search placeholder="Input To Search" />
          </div>
        </div>
        <div className="table-body">
          <Table
            columns={props.columns}
            dataSource={props.data}
          />
        </div>
      </Card>
    </>
  )
}

export default DataTable;