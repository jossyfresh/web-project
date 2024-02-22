"use client";
import React from "react";
import { lazy, Suspense } from "react";
import { courses_unit, single_unit_type } from "@/app/data/dumy";
import { Accordion } from "@mantine/core";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
// import ReactPlayer from 'react-player/lazy';

function page({ params }: { params: { slug: any } }) {
	const ReactPlayer = lazy(() => import("react-player/lazy"));

	console.log(params);

	const units: single_unit_type[] = courses_unit["1"];
	const openUnit = units.find((el) => el.unit == params.slug);

	const lessons_accordion = units.map((el) => {
		return (
			<Accordion.Item key={el.unit} value={el.title}>
				<Accordion.Control>{el.title}</Accordion.Control>
				<Accordion.Panel>
					{el.resource.map((res) => {
						return (
							<div key={res.title} className="flex space-y-2">
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
						);
					})}
				</Accordion.Panel>
			</Accordion.Item>
		);
	});

	return (
		<div className="flex justify-end lg:w-[100%] no-scrolbar gap-5 h-full">
			<div className="lg:w-[65%] mt-10">
				<Suspense fallback={<div>Video is loading...</div>}>
					<ReactPlayer
						url="https://youtu.be/tWP6z0hvw1M?si=jMFDCsnZjgVL5BX0"
						width="850px"
						height="450px"
					/>
				</Suspense>
			</div>
			<div className="lg:w-[30%] sticky right-0 bottom-0 border-gray-100 border shadow-md p-5 lg:space-y-6 space-y-3 flex-col lg:font-extralight mt-5 lg:mt-0">
				<Accordion defaultValue={openUnit?.title}>{lessons_accordion}</Accordion>
			</div>
		</div>
	);
}

export default page;
