import React from 'react'
import { Input } from 'antd'

const EntrySearchInput = ({ onSearch }) => {
  const handleChange = event => {
    onSearch(event.target.value)
  }

  return (
    <section className="entry-search-input">
      <Input.Search placeholder="Search" onChange={handleChange} />
    </section>
  )
}

export default EntrySearchInput
