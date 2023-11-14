import React from "react";
import { Card, CardContent } from "./ui/card";
import { recent_course_type } from "@/app/data/dumy";
import Image from "next/image";

function RecentCourses(props: recent_course_type) {
	return (
		<Card>
			<CardContent>
				<Image
					src=""
					width="100"
					height="100"
					alt="image"
				/>
			</CardContent>
		</Card>
	);
}

export default RecentCourses;
