import { PrismaAdapter } from '@auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { db } from './db';
import { saltAndHashPassword } from './ulits/helper';

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
		Credentials({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'email@example.com',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			authorize: async (credentials) => {
				if (!credentials || !credentials.email || !credentials.password) {
					return null;
				}
				const email = credentials.email as string;
				const hash = saltAndHashPassword(credentials.password as string);

				let user: any = await db.user.findUnique({
					where: {
						email,
					},
				});

				if (!user) {
					user = await db.user.create({
						data: {
							email,
							hashedPassword: hash,
						},
					});
				} else {
					const isMatch = bcrypt.compareSync(
						credentials.password as string,
						user.hashedPassword
					);
					if (!isMatch) {
						throw new Error('Incorrect Password');
					}
				}
				return user;
			},
		}),
	],
});
