'use client';
import { login } from '@/actions/auth';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function LoginGithub() {
	return (
		<div
			onClick={() => login('github')}
			className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center"
		>
			<FaGithub size={30} className="text-white" />
			<p className="text-white"> Login with Github</p>
		</div>
	);
}
