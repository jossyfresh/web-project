import { Button, Input } from "@mantine/core";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
	return (
		<div>
			<div className="w-full h-screen text-center flex justify-center items-center text-blue-800">
				<div className="pr-10">
					<Image src="/onlineLearning.svg" width="600" height="600" alt="image" />
				</div>
				<div className="space-y-3">
					<div className="text-2xl">Sign In to continue</div>
					<div>
						<div className="flex justify-center">
							<Input
								placeholder="Your Email"
								className="w-[300px] py-3"
								type="email"
								leftSection={<Mail size={20} />}
							/>
						</div>
						<div className="flex justify-center">
							<Input
								placeholder="Your Password"
								className="w-[300px] py-3"
								type="password"
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
								Send
							</Button>
						</div>
                    </div>
                    <div className="text-sm">
                        Dont have and account yet ? <Link className="text-blue-500 hover:cursor-pointer" href='/signUp'>Sign Up</Link>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default page;
