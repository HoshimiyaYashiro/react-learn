'use client';
import { Tabs, Typography } from '@arco-design/web-react';
import Login from "./login";
import Register from "./register";

const TabPane = Tabs.TabPane;

const Auth = () => {
  return (
    <div className="auth-form max-w-xl">
      <Tabs defaultActiveTab='1'>
        <TabPane key='1' title='Login'>
          <Login />
        </TabPane>
        <TabPane key='2' title='Register'>
          <Register />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Auth;
