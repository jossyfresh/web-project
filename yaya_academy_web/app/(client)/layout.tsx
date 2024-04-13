"use client";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { MantineProvider, createTheme, darken } from "@mantine/core";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import AppDrawer from "@/components/Drawer";
import HomeNavBar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/lib/Provider";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: [] });

const darkTheme = createTheme({
	primaryColor: "orange",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [stickNavBar, setStickNavBar] = useState(true);
	const [logged_in, setLoggedin] = useState(true);

	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
			</head>
			<body className={cn(montserrat.className, "no-scrollbar")}>
				<MantineProvider theme={darkTheme}>
					<ReduxProvider>
						<AppDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
						<div
							className={
								stickNavBar
									? "sticky top-0 backdrop-blur-md w-full z-30 mt-5 -mb-4"
									: " mt-5 -mb-4"
							}
						>
							{!logged_in ? (
								<NavBar showDrawer={setShowDrawer} />
							) : (
								<HomeNavBar showDrawer={setShowDrawer} />
							)}
						</div>
						{children}
						<div className="mt-14">
							<Footer />
						</div>
					</ReduxProvider>
				</MantineProvider>
			</body>
		</html>
	);
}
