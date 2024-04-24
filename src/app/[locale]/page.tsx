import StoreProvider from '../StoreProvider';
import HomeIndex from '../components/home';
import { getServerSession, getServerUser } from '../utils/amplifyServerUtils';

export default async function Home() {
  const user = await getServerUser();
  const session = await getServerSession();
  console.log(session);
  return (
    <div>
      <StoreProvider>
        <HomeIndex />
      </StoreProvider>
    </div>
  );
}
