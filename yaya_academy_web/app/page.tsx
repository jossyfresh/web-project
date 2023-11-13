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
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const login_status = useAppSelector((state) => state.logged_in?.logged_in);
	return (
		<div className="">
			<NavBar />
			<div className="flex mb-20 mt-12">
				{/* Iamge container */}
				<div className="flex-1 flex items-center justify-center">
					<Image src="landingImg.svg" alt="placeholder" width="500" height="500" />
				</div>
				{/* Text Container */}
				<div className="flex-1 flex flex-col justify-center">
					<div className="space-y-10 mt-10">
						<div>
							<p className="text-6xl font-medium">
								Learn <span className="text-main">online</span>,
							</p>
							<p className="text-5xl font-medium">about construction...</p>
						</div>
						<p className="text-2xl font-light text-gray-800">
							Learn the skills you need to <span className="text-main">build</span>{" "}
							your dream home or start a career in construction.
						</p>
						<Button variant="main" className="w-52 group">
							<p className="translate-x-3 group-hover:translate-x-0 transition-all">Explore Courses</p>
							<ArrowRight className="opacity-0 group-hover:inline-block group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300 " />
						</Button>
					</div>
				</div>
			</div>
			<div className="px-20 flex flex-col items-center">
				<p className="text-main text-lg">Hello</p>
				<p>
					Are you feeling stuck or overwhelmed in your construction skills? Don't
					worry, I've got your back! Together, we'll work to level up your skills,
					increase your earning potential, and <span>build</span> a brighter future.
				</p>
			</div>
		</div>
	);
}
