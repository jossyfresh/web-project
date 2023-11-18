import React from "react";

function Drawer({
	showDrawer,
	setShowDrawer,
}: {
	showDrawer: boolean;
	setShowDrawer: any;
}) {
	// const drawerStyle =
	// 	"w-full h-full absolute flex z-10 transition-all duration-300";
	const drawerStyle =
		"h-full w-1/2 flex flex-1 items-center justify-center bg-white";
	return (
		<div className="w-full h-full absolute flex z-10">
			<div
				className={
					showDrawer == true
						? ` h-full w-1/2 flex flex-1 items-center justify-center bg-white translate-x-0`
						: ` h-full w-1/2 flex flex-1 items-center justify-center bg-white translate-x-[-500px]`
				}
			>
				{/* <div className="h-full w-1/2 flex flex-1 items-center justify-center bg-white"> */}
				Drawer
			</div>
			<div
				className={
					showDrawer
						? " transition-opacity duration-700 flex-1 opacity-100 bg-black bg-opacity-70 hidden"
						: " transition-opacity duration-700 flex-1 opacity-0 visible"
				}
				onClick={() => setShowDrawer(false)}
			></div>
		</div>
	);
}

export default Drawer;
