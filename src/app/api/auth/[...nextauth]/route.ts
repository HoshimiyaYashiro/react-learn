import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from 'next-auth';

// const auth: AuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         username: {},
//         password: {}
//       },
//       async authorize(credentials, req) {
//         const getCredentials = await fetch('http://localhost:8000/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ email: credentials?.username, password: credentials?.password })
//         })
//         const resCredentials = await getCredentials.json()
//         console.log({ resCredentials })
//         if (resCredentials?.success) {
//           const getMe = await fetch('http://localhost:8000/users/me', {
//             headers: {
//               Authorization: `Bearer ${resCredentials.data.access_token}`
//             }
//           })
//           const resMe = await getMe.json()
//           console.log({ resMe })
//           if (resMe?.success) {
//             return { ...resMe.data, jwt: resCredentials.data }
//           }
//         }
//         return null
//       },
//     })
//   ],
//   callbacks: {
//     jwt: async ({token, user}) => {
//       if (user) {
//         return {
//           ...token,
//           jwt: user.jwt.access_token
//         }
//       }
//       // console.log({ token, user })
//       return token
//     },
//     session: async ({session, token}) => {
//       // console.log({ session, token })
//       if (token) {
//         session.jwt = token.jwt
//       }
//       return session
//     }
//   }
// };

import { authOptions } from '@/auth';

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }