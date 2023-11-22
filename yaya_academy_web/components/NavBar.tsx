"use client";
import React from "react";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MenuIcon, MoonStar, Search } from "lucide-react";
import { SetStateAction } from "react";

function NavBar({ showDrawer }: { showDrawer: any }) {
  const { setTheme, theme } = useTheme();
  return (
    <div className="flex justify-between items-center py-2 shadow-sm px-2 lg:px-10">
      <MenuIcon className="lg:hidden" onClick={() => showDrawer(true)} />
      <p className="font-poppins">Yaya Academy</p>
      <Input
        type="text"
        placeholder="Search"
        className="w-60 hidden lg:inline-block font-nunito"
      />
      <div className="lg:space-x-4 flex items-center">
        <MoonStar
          className="opacity-80 hover:cursor-pointer hidden lg:inline-block"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        />
        <Search className="opacity-80 hover:cursor-pointer visible md:hidden" />
        <Button
          variant="outline"
          className="hidden lg:inline-block font-nunito font-medium"
        >
          Login
        </Button>
        <Button
          variant="main"
          className="hidden lg:inline-block font-nunito font-semibold"
        >
          SignUp
        </Button>
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
