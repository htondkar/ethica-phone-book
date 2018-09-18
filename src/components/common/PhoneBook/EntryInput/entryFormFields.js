import React from 'react'
import { Icon, Input } from 'antd'

export const createNameInput = getFieldDecorator => {
  const nameFieldHOC = getFieldDecorator('name', {
    rules: [{ required: true, message: 'Name is required' }],
  })

  return nameFieldHOC(
    <Input
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="name"
    />
  )
}

// ────────────────────────────────────────────────────────────────────────────────

export const createPhoneInput = getFieldDecorator => {
  const phoneFieldHOC = getFieldDecorator('phone', {
    rules: [{ required: true, message: 'Phone number is required' }],
  })

  return phoneFieldHOC(
    <Input
      prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
      type="phone"
      placeholder="phone"
    />
  )
}
