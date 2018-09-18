import React, { Component } from 'react'
import { Layout } from 'antd'

import PhoneBookContainer from './components/pages/PhoneBookContainer/PhoneBookContainer'

import 'antd/dist/antd.css'
import './app.scss'

const { Header, Content } = Layout

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Ethica Phone Book</Header>
        <Content>
          <PhoneBookContainer />
        </Content>
      </Layout>
    )
  }
}
