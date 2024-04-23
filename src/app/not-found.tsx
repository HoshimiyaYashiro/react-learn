import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  return (
    <div>
      <h2>Not Found: </h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Back Home</Link>
      </p>
    </div>
  )
}