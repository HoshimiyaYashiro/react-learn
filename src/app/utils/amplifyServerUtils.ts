import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import config from '@/amplifyconfiguration.json';
import { generateServerClientUsingCookies, generateServerClientUsingReqRes } from '@aws-amplify/adapter-nextjs/api';
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

export const { runWithAmplifyServerContext } = createServerRunner({
  config
});

export const reqResClient = generateServerClientUsingReqRes({
  config
});

export const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
  authMode: "userPool",
});

export const getServerUser = async () => await runWithAmplifyServerContext({
  nextServerContext: { cookies },
  async operation(contextSpec) {
    try {
      const user = await getCurrentUser(contextSpec);
      return user;
    } catch (error) {
      return null;
    }
  },
});

export const getServerSession = async () => await runWithAmplifyServerContext({
  nextServerContext: { cookies },
  async operation(contextSpec) {
    try {
      const session = await fetchAuthSession(contextSpec);
      return session;
    } catch (error) {
      return null;
    }
  },
});