"use client";
import React, { useRef, useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MenuIcon, MoonStar, Search } from "lucide-react";
import { SetStateAction } from "react";
import AvatarMenu from "./ui/AvatarMenu";
import Link from "next/link";

function HomeNavBar({ showDrawer }: { showDrawer: any }) {
  const searchRef = useRef(null);

  const [showInput, setShowInput] = useState(false);
  const { setTheme, theme } = useTheme();
  return (
			<div className="flex justify-between items-center py-3 shadow-sm px-2 lg:px-10">
				<MenuIcon className="lg:hidden" onClick={() => showDrawer(true)} />
				<div>
					{!showInput && (
						<Link href={"/"}>
							<p className="h-8 w-full text-center">YaYa Academy</p>
						</Link>
					)}
					{showInput && (
						<Input
							ref={searchRef}
							type="text"
							placeholder="Search"
							className="w-60 h-8"
						/>
					)}
				</div>
				<Input
					type="text"
					placeholder="Search"
					className="w-60 hidden lg:inline-block"
				/>
				<div className="lg:space-x-4 flex items-center mr-10">
					<MoonStar
						className="opacity-80 hover:cursor-pointer hidden lg:inline-block"
						onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
					/>
					<Search
						className="opacity-80 hover:cursor-pointer visible md:hidden"
						onClick={() => setShowInput((state) => !state)}
					/>
					<AvatarMenu />
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

export default HomeNavBar;
