import React from 'react'
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import { MoonStar } from 'lucide-react';

function Drawer({ showDrawer, setShowDrawer }: { showDrawer: boolean, setShowDrawer: any }) {
    const { theme, setTheme } = useTheme();
    const drawerStyle =
					"w-full h-full absolute z-10 transition-all duration-300";
	return (
		<div
			className={
				showDrawer == true
					? ` ${drawerStyle} translate-x-0 flex overscroll-none`
					: ` ${drawerStyle} translate-x-[-500px] hidden`
			}
		>
			<div className="h-full w-1/2 flex flex-1 items-center justify-center bg-background px-10">
				<div className="space-x-4 flex items-center self-end mb-5">
					<MoonStar
						className="opacity-80"
						onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
					/>
					<Button variant="outline" className="inline-block">
						Login
					</Button>
					<Button variant="main" className="inline-block">
						SignUp
					</Button>
				</div>
			</div>
			<div
				className={
					showDrawer
						? " transition-opacity duration-1000 flex-1 opacity-100 bg-black bg-opacity-70"
						: " transition-opacity duration-1000 flex-1 opacity-0"
				}
				onClick={() => setShowDrawer(false)}
			></div>
		</div>
	);
}

export default Drawer