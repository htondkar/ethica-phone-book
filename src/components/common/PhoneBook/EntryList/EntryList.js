import React from 'react'
import EntryRow from './EntryRow'

const EntryList = ({ entries = [] }) => (
  <section className="entry-list">
    {entries.map((entry, index) => (
      <EntryRow key={index} entry={entry} />
    ))}
  </section>
)

export default EntryList
