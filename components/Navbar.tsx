import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logout from './Logout';

export default async function Navbar() {
	const session = await auth();
	return (
		<nav className="flex w-full items-center">
			<div className="flex w-full items-center justify-between my-4">
				<div className="font-bold text-2xl">
					<Link
						className=" text-green-500 hover:text-green-200 duration-200"
						href="/"
					>
						AUTHV5
					</Link>
				</div>
				<div className="flex items-center gap-x-5">
					<Link className="hover:text-purple-500 duration-200" href="/">
						Home
					</Link>

					<Link
						className=" hover:text-purple-500 duration-200"
						href="/middleware"
					>
						Middleware
					</Link>

					<Link className=" hover:text-purple-500 duration-200" href="/server">
						Server
					</Link>
				</div>
				<div className="flex items-center gap-x-4">
					{!session?.user ? (
						<Link
							className=" hover:text-purple-500 duration-200 "
							href="/sign-in"
						>
							<div className="bg-purple-500 px-4 py-2 text-white font-semibold rounded-lg  hover:opacity-80 duration-200">
								Login
							</div>
						</Link>
					) : (
						<>
							<div className="flex items-center gap-x-2 text-sm">
								{session.user.name}
								{session.user.image && (
									<Image
										className="rounded-full"
										width={30}
										height={30}
										alt="User Avatar"
										src={session?.user?.image || ''}
									/>
								)}
							</div>
							<Logout />
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
