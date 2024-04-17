import { auth } from '@/auth';
import { getServerSession } from 'next-auth';

const HomeIndex = async () => {
  const session = await auth();
  
  return (
    <div>
      <p>Hello User {session?.user?.email}</p>
    </div>
  );
};

export default HomeIndex;