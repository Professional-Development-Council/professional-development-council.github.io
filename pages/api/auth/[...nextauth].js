import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid profile email",
          hd: "iitgn.ac.in", // Hosted domain hint for Google Workspace
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign-in attempt:", {
        email: user.email,
        domain: user.email?.split("@")[1],
      });

      // Only allow users with @iitgn.ac.in email domain
      if (user.email && user.email.endsWith("@iitgn.ac.in")) {
        console.log("Access granted for:", user.email);
        return true;
      }

      console.log("Access denied for:", user.email);
      // Reject sign-in for non-IIT Gandhinagar users
      return false;
    },
    async session({ session, token }) {
      // Add additional user information to the session
      if (session?.user) {
        session.user.id = token.sub;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      // Store access token for API calls if needed
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
});
