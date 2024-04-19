// import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
// import { cookies } from 'next/headers';
'use client';
import { generateClient } from 'aws-amplify/api';
import { createBlog } from '@/graphql/mutations';
import { Button, Form, Input } from 'antd';


const HomeIndex = () => {
  const client = generateClient();
  const createBlogFnc = async (formData: any) => {
    console.log(formData)
    const result = await client.graphql({
      query: createBlog,
      variables: {
        input: {
          name: formData.name,
        },
      },
    })
    console.log(result)
  }
  return (
    <div>
      <Form onFinish={createBlogFnc}>
        <Form.Item
          label="Blog Name"
          name="name"
          rules={[{ required: true, message: 'Please input blog name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HomeIndex;