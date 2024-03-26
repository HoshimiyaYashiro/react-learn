'use client';
import { Form, Input, Button, Checkbox } from '@arco-design/web-react';
import { useRef, useEffect, useState } from 'react';

const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const handleSubmit = async () => {
    if (form) {
      const formData = form.getFieldsValue();
      console.log(formData);
    }
  };
  return (
    <Form form={form} style={{ width: 600 }} autoComplete='off'>
      <FormItem label='Username' field='username'>
        <Input placeholder='Please enter your username' normalize={v => v ? v.trim() : v} />
      </FormItem>
      <FormItem label='Password' field='password'>
        <Input.Password placeholder='Please enter your password' normalize={v => v ? v.trim() : v} />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' onClick={handleSubmit}>Submit</Button>
      </FormItem>
    </Form>
  );
};

export default Login;