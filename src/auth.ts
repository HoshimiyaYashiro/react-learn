import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";

const { 
  NEXTAUTH_URL,
  COGNITO_REGION,
  COGNITO_DOMAIN,
  COGNITO_CLIENT_ID,
  COGNITO_USER_POOL_ID,
  COGNITO_CLIENT_SECRET,
} = process.env;

const COGNITO_ISSUER = `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CognitoProvider({
      clientId: COGNITO_CLIENT_ID as string,
      clientSecret: COGNITO_CLIENT_SECRET as string,
      client: {
        token_endpoint_auth_method: 'none',
      },
      issuer: COGNITO_ISSUER,
      wellKnown: `${COGNITO_ISSUER}/.well-known/openid-configuration`
    })
  ],
  callbacks: {
    jwt: async ({ token, account, profile }) => {
      return {...token, ...account }
    },
    session: async ({ session, token, user }) => {
      return { ...session, accessToken: token.access_token, refreshToken: token.refresh_token }
    },
    signIn: async ({ user, account, profile, email, credentials }) => {
      return true
    },
  }
} satisfies NextAuthOptions

export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, authOptions)
}