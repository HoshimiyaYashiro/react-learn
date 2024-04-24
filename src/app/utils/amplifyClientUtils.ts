import { getCurrentUser } from "aws-amplify/auth";
import config from '@/amplifyconfiguration.json';
import { Amplify } from 'aws-amplify';

Amplify.configure(config, { ssr: true });

export const fetchCurrentUser = async () => {
  try {
    const userData = await getCurrentUser();
    return userData;
  } catch (error) {
    console.log('error fetching user', error);
    return null;
  }
};