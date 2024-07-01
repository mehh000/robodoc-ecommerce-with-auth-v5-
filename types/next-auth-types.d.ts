import { DefaultSession, DefaultUser, Session, User as NextAuthUser } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the default Session and User types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends NextAuthUser {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
  }
}
