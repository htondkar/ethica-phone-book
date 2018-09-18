import React from 'react'
import EntrySearchInput from '../../common/PhoneBook/EntrySearchInput/EntrySearchInput'
import EntryList from '../../common/PhoneBook/EntryList/EntryList'
import EntryInput from '../../common/PhoneBook/EntryInput/EntryInput'

class PhoneBookContainer extends React.Component {
  render() {
    return (
      <main className="phone-book">
        <EntrySearchInput />
        <EntryList entries={[]} />
        <EntryInput />
      </main>
    )
  }
}

export default PhoneBookContainer
