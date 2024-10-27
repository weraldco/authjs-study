'use client';
import { loginWithCreds } from '@/actions/auth';
import React from 'react';
import AuthButton from './AuthButton';

export default function LoginForm() {
	return (
		<div>
			<form action={loginWithCreds} className="flex flex-1 flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="text-sm">
						Email
					</label>
					<input
						className="px-4 py-2 rounded-lg"
						type="text"
						name="email"
						id="email"
						placeholder="Email.."
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="password" className="text-sm">
						Password
					</label>
					<input
						className="px-4 py-2 rounded-lg text-black"
						type="password"
						name="password"
						id="password"
						placeholder="Password.."
					/>
				</div>
				<div>
					<AuthButton />
				</div>
			</form>
		</div>
	);
}
