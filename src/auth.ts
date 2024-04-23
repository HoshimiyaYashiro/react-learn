import NextAuth, { NextAuthConfig } from "next-auth"
import Cognito from "next-auth/providers/cognito"

const authConfig = {
  providers: [Cognito({
    client: {
      token_endpoint_auth_method: 'none',
    },
  })],
  experimental: {
    enableWebAuthn: true
  },
  debug: true,
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)