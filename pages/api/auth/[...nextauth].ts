import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import  LinkedInProvider  from 'next-auth/providers/linkedin';
import { signIn } from 'next-auth/react';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
    
    }), 
    LinkedInProvider({
      clientId: <string>process.env.LINKEDIN_CLIENT_ID,
      clientSecret: <string>process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: { scope: 'openid profile email' },
      }
    }),
    FacebookProvider({
      clientId: <string>process.env.FACEBOOK_CLIENT_ID,
      clientSecret: <string>process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn(user, account, profile) {
      console.log('user', user);
      console.log('account', account);
      console.log('profile', profile);
      return true;
    }
  }
};

export default NextAuth(authOptions);