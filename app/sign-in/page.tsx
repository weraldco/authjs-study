import LoginForm from '@/components/LoginForm';
import LoginGithub from '@/components/LoginGithub';
import React from 'react';

export default function SignInPage() {
	return (
		<div className="w-full flex mt-10 justify-center">
			<section className="flex flex-col w-[400px]">
				<h1 className="text-3xl w-full text-center font-bold mb-6">Sign in</h1>
				<LoginForm />
				<LoginGithub />
			</section>
		</div>
	);
}
