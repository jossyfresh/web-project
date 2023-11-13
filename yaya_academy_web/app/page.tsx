"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "./Redux/store";
import NavBar from "@/components/NavBar";

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const login_status = useAppSelector((state) => state.logged_in?.logged_in);
	return (
		<div>
			<NavBar />
			<div className="flex">
				{/* Iamge container */}
				<div className="flex-1 flex items-center justify-center">
					<Image src="landingImg.svg" alt="placeholder" width="700" height="700" />
				</div>
				{/* Text Container */}
				<div className="flex-1 flex flex-col justify-center">
					<div className="space-y-10">
						<div>
							<p className="text-[80px] font-medium">
								Learn <span className="text-main">online</span>,
							</p>{" "}
							<br />{" "}
							<p className="text-[70px] mt-[-60px] font-medium">
								{" "}
								about construction...
							</p>
						</div>
						<p className="text-4xl font-light text-gray-800">
							Learn the skills you need to build your dream home or start a career in
							construction.
						</p>
						<Button variant="main">Explore Courses</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
