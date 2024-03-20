import { Button, Input } from "@mantine/core";
import { Mail } from "lucide-react";
import React from "react";

function page() {
	return (
		<div className="w-full h-screen text-center flex justify-center items-center text-blue-800">
			<div className="space-y-5">
				<div className="text-2xl font-semibold">Email Verification</div>
				<div className="flex justify-center">
					<div className="w-[58%]">
						Enter the Text Code that we sent to jossyfresh@2002gmail.com
					</div>
				</div>
				<div className="flex justify-center">
					<Input
						placeholder="The Code"
						className="w-[300px]"
						type="text"
					/>
				</div>
				<div className="flex justify-center">
					<div className="w-[31%]">
						<Button fullWidth color="blue">
							Send
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default page;
