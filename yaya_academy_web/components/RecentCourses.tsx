import React from "react";
import { Card, CardContent } from "./ui/card";
import { recent_course_type } from "@/app/data/dumy";
import Image from "next/image";

function RecentCourses(props: recent_course_type) {
	return (
		<Card className="min-w-[300px] hover:shadow-lg transition-all">
			{/* <div className="min-w-[250px] "> */}
			<Image
				src={props.imageUrl}
				width="500"
				height="500"
				alt="image"
				className="object-cover w-full h-40 rounded-t-lg"
			/>
			<div className="p-3 space-y-5 flex flex-col">
				<p className="h-10 overflow-hidden">{props.title}</p>
				<p className="text-sm font-light h-16 overflow-clip">{props.desc}</p>
				<div className="space-y-1 justify-self-end text-xs">
					<p className="text-sm">{props.videos}</p>
					<p className="text-sm">Duration: {props.duration}</p>
				</div>
			</div>
			{/* </div> */}
		</Card>
	);
}

export default RecentCourses;
