"use client";
import React from "react";
import { lazy, Suspense } from "react";
import {
	course_material,
	courses_unit,
	single_unit_resource,
	single_unit_type,
} from "@/app/data/dumy";
import { Accordion } from "@mantine/core";
import { CheckCircle2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Player from "@/components/VidPlayer/player";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Quiz from "@/components/Quiz";
// import ReactPla@/components/Quiz-player/lazy';

function Page({ params }: { params: { slug: any } }) {
	const ReactPlayer = lazy(() => import("react-player/lazy"));

	console.log(params.slug);

	const units: single_unit_type[] = courses_unit["1"];
	const openUnit: single_unit_type | undefined = units.find(
		(el) => el.unit == params.slug[0]
	);
	const unit_id = params.slug[0];
	const resource_id = params.slug[1];

	const lessons_accordion = units.map((el) => {
		return (
			<Accordion.Item key={el.unit} value={el.title}>
				<Accordion.Control>{el.title}</Accordion.Control>
				<Accordion.Panel>
					{el.resource.map((res, index) => {
						return (
							<Link
								key={res.title}
								href={`/unit_resource/${unit_id}/${index}`}
								className={cn("flex justify-between items-center pr-5 rounded-md", {
									"bg-gray-200": resource_id == index,
								})}	
							>
								<div className="flex space-y-2 p-2">
									{res.checked == true ? (
										<CheckCircle2
											fill="blue"
											color="white"
											size={20}
											className="self-center mx-3"
										/>
									) : (
										<CheckCircle2 opacity={0.5} size={20} className="self-center mx-3" />
									)}
									{res.title}
								</div>
								<div className="text-sm opacity-75">
									{res.type}
								</div>
							</Link>
						);
					})}
				</Accordion.Panel>
			</Accordion.Item>
		);
	});

	return (
		<div className="flex justify-end lg:w-[100%] no-scrolbar gap-5 h-full">
			{openUnit!["resource"][resource_id]["type"] == "video" && (
				<div className="lg:w-full lg:px-10 lg:pt-10 rounded-md">
					<Player />
				</div>
			)}
			{openUnit!["resource"][resource_id]["type"] == "quiz" && (
				<Quiz quiz={course_material[unit_id][resource_id]} link={`/quiz/${unit_id}/${resource_id}`} />
			)}
			{openUnit!["resource"][resource_id]["type"] == "file" && <h6>Files here</h6>}
			<div className="lg:w-[30%] sticky right-0 bottom-0 border-gray-100 border shadow-md p-5 lg:space-y-6 space-y-3 flex-col lg:font-extralight mt-5 lg:mt-0">
				<Accordion defaultValue={openUnit?.title}>{lessons_accordion}</Accordion>
			</div>
		</div>
	);
}

export default Page;
