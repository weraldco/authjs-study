import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { db } from './db';

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	adapter: PrismaAdapter(db),
	session: { strategy: 'jwt' },
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
		Credentials({}),
	],
});
