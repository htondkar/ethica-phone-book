import React from 'react'
import { Table } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
]

const addKey = (item, index) => {
  item.key = index
  return item
}

const EntryList = ({ entries = [] }) => (
  <Table dataSource={entries.map(addKey)} columns={columns} pagination={false} bordered={true} />
)

export default EntryList
