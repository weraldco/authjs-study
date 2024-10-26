'use client';
import { logout } from '@/actions/auth';
import React from 'react';

export default function Logout() {
	return (
		<div onClick={() => logout()}>
			<div className="bg-gray-500 px-4 py-2 text-white font-semibold rounded-lg  hover:opacity-80 duration-200 cursor-pointer">
				Logout
			</div>
		</div>
	);
}
