import React, { Component } from 'react'
import faker from 'faker'
import { Layout } from 'antd'

import PhoneBookContainer from './components/pages/PhoneBookContainer/PhoneBookContainer'

import 'antd/dist/antd.css'
import './app.scss'

const { Header, Content } = Layout

const initialPhoneBookEntries = Array(5)
  .fill()
  .map(_ => ({ name: faker.name.findName(), phone: faker.phone.phoneNumber() }))

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Ethica Phone Book</Header>
        <Content>
          <PhoneBookContainer initialEntries={initialPhoneBookEntries} />
        </Content>
      </Layout>
    )
  }
}
