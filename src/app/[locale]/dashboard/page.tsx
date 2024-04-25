'use client';
import { AuthUser, getCurrentUser, signOut } from "aws-amplify/auth";
import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { Form, Input, Button, Checkbox } from '@arco-design/web-react';
import { generateClient } from 'aws-amplify/api';

Amplify.configure(config, { ssr: true });
const FormItem = Form.Item;


const DashboardPage = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/auth')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.log('error fetching user', error);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    console.log('formData:', formData);
    const client = generateClient()
    try {
      // const result = await client.graphql({query: createBlog, variables: {input: formData}})
      // console.log('result:', result)
    } catch (error) {
      console.log('error creating blog:', error)
    }
  }
  return (
    <div className="dashboard-page min-h-screen flex justify-center items-center">
      <Form style={{ width: 600 }} autoComplete='off' onSubmit={handleSubmit}>
        <FormItem label='Blogname' field='name'>
          <Input placeholder='please enter your username...'/>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type='primary' htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      <Button type='primary' onClick={handleSignOut}>Sign Out</Button>
    </div>
  );
};

export default DashboardPage;