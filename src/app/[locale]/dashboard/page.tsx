'use client';
import { AuthUser, getCurrentUser, signOut } from "aws-amplify/auth";
import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

Amplify.configure(config, { ssr: true });


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
  return (
    <div className="dashboard-page min-h-screen flex justify-center items-center">
      <h1>Hello { user?.username } </h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default DashboardPage;