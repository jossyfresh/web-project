"use client";
import React from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MenuIcon, MoonStar } from "lucide-react";
import { SetStateAction } from 'react';

function NavBar( {showDrawer}: {showDrawer: any }) {
	const { setTheme, theme } = useTheme();
	return (
		<div className="flex justify-between items-center px-10 py-2 shadow-sm">
			<MenuIcon className="lg:hidden" onClick={()=>showDrawer(true)} />
			<p className="">Yaya Academy</p>
			<Input type="text" placeholder="Search" className="w-60 hidden lg:inline-block" />
			<div className="space-x-4 flex items-center">
				<MoonStar className="opacity-80 hover:cursor-pointer" onClick={()=> theme == "dark" ? setTheme("light") : setTheme("dark")}/>
				<Button variant="outline" className="hidden lg:inline-block">Login</Button>
				<Button variant="main" className="hidden lg:inline-block">SignUp</Button>
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
