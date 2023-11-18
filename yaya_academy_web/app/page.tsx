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
import { recent_courses as rc } from "./data/dumy";
import RecentCourses from "@/components/RecentCourses";
import Drawer from "@/components/Drawer";
import {useState} from 'react'


export default function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const login_status = useAppSelector((state) => state.logged_in?.logged_in);

	const [showDrawer, setShowDrawer] =  useState(false);
	return (
		<div className="no-scrollbar overflow-clip">
			<Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
			<NavBar showDrawer={setShowDrawer} />
			<div className="flex flex-col lg:flex-row mb-20 md:mt-12 mt-3">
				{/* Iamge container */}
				<div className="flex-1 justify-center hidden lg:flex ">
					<Image src="landingImg.svg" alt="placeholder" width="500" height="500" />
				</div>
				{/* Text Container */}
				<div className="flex-1 flex flex-col justify-center pl-3 items-center">
					<div className="space-y-10 mt-10 flex flex-col items-center lg:items-start">
						<div className="w-full">
							<p className="lg:text-6xl text-5xl font-medium w-full text-center lg:text-left">
								Learn <span className="text-main">online</span> <br />{" "}
								<span className="lg:text-5xl text-4xl font-medium">
									about construction<span className="hidden lg:inline-block">...</span>
								</span>
							</p>
						</div>
						<p className="p-2 lg:text-2xl md:text-left text-center text-base font-light text-gray-800">
							Learn the skills you need to <span className="text-main">build</span>{" "}
							your dream home or start a career in construction.
						</p>
						<Button variant="main" className="w-52 group">
							<p className="translate-x-3 group-hover:translate-x-0 transition-all">
								Explore Courses
							</p>
							<ArrowRight className="opacity-0 group-hover:inline-block group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300 " />
						</Button>
					</div>
				</div>
			</div>
			<div className="lg:px-32 px-3 flex flex-col items-center mb-28 mt-24">
				<p className="text-main text-lg font-semibold">Hello</p>
				<p className="text-center">
					Are you feeling stuck or overwhelmed in your construction skills?
					Don&apos;t worry, I&apos;ve got your back! Together, we&apos;ll work to
					level up your skills, increase your earning potential, and
					<span className="text-main">build</span> a brighter future.
				</p>
			</div>
			<div className="flex flex-col items-center mb-20">
				<p className="font-semibold">Recent Coures</p>
				<div className="flex flex-row w-full">
					<p className="flex-1 ml-5 text-center font-light text-sm lg:text-base">
						Learn the latest lessons for a professional
					</p>
					<ArrowRight className="justify-self-end hidden lg:inline-block" />
				</div>
				{/* recent courses cards */}
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-3 lg:px-16 no-scrollbar mt-5">
					{rc.map((el) =>
						RecentCourses({
							id: el.id,
							title: el.title,
							imageUrl: el.imageUrl,
							desc: el.desc,
							videos: el.videos,
							duration: el.duration,
						})
					)}
				</div>
				{/* </div> */}
			</div>

			{/* Popular Courses cards */}
			<div className="flex flex-col items-center mb-20">
				<p className="font-semibold">Popular Coures</p>
				<div className="flex flex-row w-full">
					<p className="flex-1 ml-5 text-center font-light text-sm lg:text-base">
						Learn the latest lessons for a professional
					</p>
					<ArrowRight className="justify-self-end" />
				</div>
				{/* recent courses cards */}
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-16 no-scrollbar mt-5">
					{rc.map((el) =>
						RecentCourses({
							id: el.id,
							title: el.title,
							imageUrl: el.imageUrl,
							desc: el.desc,
							videos: el.videos,
							duration: el.duration,
						})
					)}
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}
