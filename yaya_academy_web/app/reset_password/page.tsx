import { Button, Input } from "@mantine/core";
import { Mail } from "lucide-react";
import React from "react";

function page() {
	return (
		<div className="w-full h-screen text-center flex justify-center items-center text-blue-800">
			<div className="space-y-5">
				<div className="text-2xl font-semibold">Reset Your Password</div>
				<div className="flex justify-center">
					<div className="w-[38%]">
						{`Forgot your password? No worries! Just enter your email address below, and
					we'll send you a link to reset your password.`}
					</div>
				</div>
				<div className="flex justify-center">
					<Input
						placeholder="Your email"
						leftSection={<Mail />}
						className="w-[300px]"
						type="email"
					/>
				</div>
				<div className="flex justify-center">
					<div className="w-[31%]">
						<Button fullWidth color="blue">Send</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
