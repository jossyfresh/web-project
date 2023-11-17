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
							<p className="translate-x-3 group-hover:translate-x-0 transition-all">
								Explore Courses
							</p>
							<ArrowRight className="opacity-0 group-hover:inline-block group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-300 " />
						</Button>
					</div>
				</div>
			</div>
			<div className="px-32 flex flex-col items-center mb-28 mt-24">
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
					<p className="flex-1 ml-5 text-center font-light">
						Learn the latest lessons for a professional
					</p>
					<ArrowRight className="justify-self-end" />
				</div>
				{/* recent courses cards */}
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-16 no-scroll mt-5">
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
					<p className="flex-1 ml-5 text-center font-light">
						Learn the latest lessons for a professional
					</p>
					<ArrowRight className="justify-self-end" />
				</div>
				{/* recent courses cards */}
				<div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-16 no-scroll mt-5">
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
