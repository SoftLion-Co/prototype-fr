import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import LinkedInProvider from "next-auth/providers/linkedin";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: <string>process.env.LINKEDIN_CLIENT_SECRET,
      wellKnown: 'https://www.linkedin.com/oauth/.well-known/openid-configuration',
      authorization: {
        params: {
          scope: "openid profile email",
        }
      },
    }),
    FacebookProvider({
      clientId: <string>process.env.FACEBOOK_CLIENT_ID,
      clientSecret: <string>process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  theme: {
    colorScheme: "light",
  },
  // pages: {
  //   signIn: '/login',
  // }
};

export default NextAuth(authOptions);
