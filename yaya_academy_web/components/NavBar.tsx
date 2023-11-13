"use client";
import React from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function NavBar() {
	const { setTheme, theme } = useTheme();
	return (
		<div className="flex justify-between items-center px-10 py-2 shadow-sm">
			<p>Yaya Academy</p>
			<Input type="text" placeholder="Search" className="w-60" />
			<div className="space-x-4">
				<Button variant="outline">Login</Button>
				<Button variant="main">SignUp</Button>
				{/* <Button
					onClick={() => (theme == "light" ? setTheme("dark") : setTheme("light"))}
				>
					change
				</Button>
				{theme} */}
			</div>
		</div>
	);
}

export default NavBar;
