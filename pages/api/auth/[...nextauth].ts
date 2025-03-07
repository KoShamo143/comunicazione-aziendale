import { User as UserModel } from "@/models/userModel";
import { NextAuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await UserModel.findByEmail(credentials?.email || "");
        if (!res) {
          return null;
        }
        const passwordsMatch = await UserModel.comparePassword(
          credentials?.password || "",
          res.password
        );

        if (!passwordsMatch) {
          return null;
        }

        return {
          id: res.id.toString(),
          name: res.name + " " + res.lastName,
          email: res.email,
          image: undefined,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // set user id and fetch user role right after sign in
      if (account) {
        const adminId = parseInt(token.sub!);
        token.id = adminId;
        token.role = (await UserModel.getRoleLevel(adminId)) || 0;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
  },
};

export default NextAuth(authOptions);
