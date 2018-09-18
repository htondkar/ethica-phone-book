import React from 'react'

import EntrySearchInput from '../../common/PhoneBook/EntrySearchInput/EntrySearchInput'
import EntryList from '../../common/PhoneBook/EntryList/EntryList'
import EntryInput from '../../common/PhoneBook/EntryInput/EntryInput'

import { filterEntryList } from './util'

import './phone-book.scss'

class PhoneBookContainer extends React.Component {
  constructor(props) {
    super(props)

    const initialState = {
      entries: this.props.initialEntries || [],
      search: '',
    }

    this.state = initialState
    this.queryEntries = filterEntryList(this.state.entries)
  }

  handleNewEntry = ({ values: newEntry }) => {
    this.setState(currentState => ({ entries: [newEntry, ...currentState.entries] }))
  }

  handleSearch = value => {
    this.setState({ search: value })
  }

  render() {
    const filteredEntriesList = this.queryEntries(this.state.search)

    return (
      <main className="phone-book">
        <EntrySearchInput onSearch={this.handleSearch} />
        <EntryList entries={filteredEntriesList} />
        <EntryInput onNewEntry={this.handleNewEntry} />
      </main>
    )
  }
}

export default PhoneBookContainer
