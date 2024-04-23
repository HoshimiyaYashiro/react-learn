import { getServerSession, getServerUser } from '../utils/amplifyServerUtils';

export default async function Home() {
  const user = await getServerUser();
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <h1>Hello {user?.username}</h1>
    </div>
  );
}
