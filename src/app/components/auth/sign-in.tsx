'use client';

import { fetchCurrentUser } from '@/app/utils/amplifyClientUtils';
import { Authenticator } from '@aws-amplify/ui-react';
import { Hub } from 'aws-amplify/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function SignIn() {
  const router = useRouter();
  useEffect(() => {
    const fetchAmplifyUser = async () => {
      const user = await fetchCurrentUser();
      if (user) {
        router.push('/');
      }
    };
    fetchAmplifyUser().then(() => {
      Hub.listen('auth', (data) => {
        const { payload } = data;
        if (payload.event === 'signedIn') {
          router.push('/');
        }
      });
    });
  }, [router]);
  return (
    <Authenticator.Provider>
      <div className='container-auth'>
        <Authenticator />
      </div>
    </Authenticator.Provider>
  );
}
