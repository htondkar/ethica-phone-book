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

const EntryList = ({ entries = [] }) => (
  <Table dataSource={entries} columns={columns} pagination={false} bordered={true} />
)

export default EntryList
