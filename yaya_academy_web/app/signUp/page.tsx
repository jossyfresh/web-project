import { Button, Input, PasswordInput } from "@mantine/core";
import { Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
	return (
		<div>
			<div className="w-full h-screen text-center flex justify-center items-center text-blue-800">
				<div className="space-y-3">
					<div className="text-2xl">Sign Up</div>
					<div>
						<div className="flex justify-center">
							<Input
								placeholder="Full Name"
								className="w-[300px] py-3"
								type="text"
								leftSection={<User size={20} />}
							/>
						</div>
						<div className="flex justify-center">
							<Input
								placeholder="Your Email"
								className="w-[300px] py-3"
								type="email"
								leftSection={<Mail size={20} />}
							/>
						</div>
						<div className="mt-2">
							<PasswordInput
								placeholder="Your Password"
								width="300px"
								leftSection={<Lock size={20} />}
							/>
						</div>
						<div className="mt-5">
							<PasswordInput
								placeholder="Confirm Your Password"
								width={300}
								leftSection={<Lock size={20} />}
							/>
						</div>
					</div>
					<div className="w-full text-right hover:cursor-pointer text-sm mt-0">
						Forgot Password ?
					</div>
					<div className="flex justify-center mt-3">
						<div className="w-[300px]">
							<Button fullWidth color="blue">
								Sign Up
							</Button>
						</div>
					</div>
					<div className="text-sm">
						Already have an account ?{" "}
						<Link className="text-blue-500 hover:cursor-pointer" href='/signIn'>Sign In</Link>
					</div>
				</div>
				<div className="pl-10">
					<Image src="/onlineLearning.svg" width="600" height="600" alt="image" />
				</div>
			</div>
		</div>
	);
}

export default page;
