"use client";
import React from "react";
import {
	courses_unit,
	recent_courses as rc,
	recent_course_type,
	single_unit_type,
} from "../../data/dumy";
import { Accordion, AccordionItem, AccordionPanel } from "@mantine/core";
import { CheckCircle, CheckCircle2 } from "lucide-react";

const groceries = [
	{
		emoji: "🍎",
		value: "Apples",
		description:
			"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
	},
	{
		emoji: "🍌",
		value: "Bananas",
		description:
			"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
	},
	{
		emoji: "🥦",
		value: "Broccoli",
		description:
			"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
	},
];

function page({ params }: { params: { slug: any } }) {
	const course: recent_course_type | undefined = rc.find(
		(el) => el.id == params.slug
	);

	const units: single_unit_type[] = courses_unit["1"];

	// const items = groceries.map((item) => (
	// 	<Accordion.Item key={item.value} value={item.value}>
	// 		<Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
	// 		<Accordion.Panel>{item.description}</Accordion.Panel>
	// 	</Accordion.Item>
	// ));

	const all_units = units.map((el) => {
		return (
			<Accordion.Item key={el.unit} value={el.title}>
				<Accordion.Control>{el.title}</Accordion.Control>
				<AccordionPanel>
					<div className="font-light flex flex-col gap-3">
						<p>{el.desc}</p>
						<p className="font-extralight">{el.total_time} of content</p>
						{el.resource.map((res) => {
							return (
								<div
									key={res.title}
                                    className="flex w-full border-gray-300 border-b-[.4px] pr-3"
								>
									{res.checked == true ? (
										<CheckCircle2 fill="blue" color="white" size={20} className="self-center mx-3" />
									) : (
										<CheckCircle2 opacity={0.5} size={20} className="self-center mx-3" />
									)}

									<div className=" w-full">
										<div className="flex justify-between ">
											<p>{res.title}</p>
											<p>{res.minutes}</p>
										</div>
										<div className="font-extralight">{res.type}</div>
									</div>
								</div>
							);
						})}
					</div>
				</AccordionPanel>
			</Accordion.Item>
		);
	});

	return (
		<div className="flex justify-end lg:w-full no-scrolbar">
			<div className="lg:w-[65%]">
				<Accordion variant="contained" defaultValue="Hey" id="units_accordion">
					{all_units}
				</Accordion>
			</div>
			<div className="lg:w-[30%] lg:h-full border-gray-100 border rounded-lg shadow-md p-5 lg:space-y-6 space-y-3 flex-col lg:font-extralight mt-5 lg:mt-0"></div>
		</div>
	);
}

export default page;
