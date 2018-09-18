import React from 'react'
import { Form, Button } from 'antd'

import * as formFields from './entryFormFields'
import { hasErrors } from './util'

import './entry-input.scss'

const EntryInput = ({ onNewEntry, form }) => {
  const { getFieldDecorator, getFieldsError, getFieldError, resetFields } = form

  const submitHandler = event => {
    event.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        onNewEntry(values)
        resetFields()
        event.target.name.focus()
      }
    })
  }

  const nameError = getFieldError('name')
  const phoneError = getFieldError('phone')

  return (
    <Form layout="inline" className="entry-input" onSubmit={submitHandler}>
      <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
        {formFields.createNameInput(getFieldDecorator)}
      </Form.Item>

      <Form.Item validateStatus={phoneError ? 'error' : ''} help={phoneError || ''}>
        {formFields.createPhoneInput(getFieldDecorator)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
          ADD
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create()(EntryInput)
