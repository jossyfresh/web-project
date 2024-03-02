import React from "react";
import { single_unit_resource } from "../app/data/dumy";
import { Button } from "@mantine/core";
import Link from "next/link";

function Quiz({ quiz, link }: { quiz: single_unit_resource, link: string }) {
	return (
		<div className="w-full px-10 py-32">
			<div className="text-2xl">{quiz.title}</div>
			<div className="text-lg opacity-80">{quiz.description}</div>
			<div className="mt-44">
				<div className="flex justify-between opacity-80">
					<p>Total grade</p>
					<p>Your grade</p>
				</div>
				<hr />
				<hr />
				<div className="flex justify-between">
					<p>{quiz.passPercentage + "% to pass"}</p>
					<pre>{`   ---   `}</pre>
				</div>
			</div>
			<div className="w-[200px] mt-10">
				<Link href={link}>
					<Button
						variant="filled"
						radius={10}
						color="blue"
						fullWidth
						className="group bg-highlight-foreground text-highlight"
					>
						Start Exam
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Quiz;
