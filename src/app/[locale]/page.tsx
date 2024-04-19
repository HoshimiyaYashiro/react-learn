import HomeIndex from '../components/home';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth/server';
import { runWithAmplifyServerContext } from '@/app/utils/amplifyServerUtils';
import { cookies } from 'next/headers';

export default async function Home() {
  const currentUser = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        console.log(session)
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  });
  return (
    <HomeIndex />
  );
}
