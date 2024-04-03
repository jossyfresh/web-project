"use client";
import {
  course_material,
  quiz,
  quiz_question,
  single_course_quiz,
  single_unit_resource,
} from "@/app/(client)/data/dumy";
import { Button, Checkbox, Group } from "@mantine/core";
import Link from "next/link";
import React from "react";

function Page({ params }: { params: { slug: any } }) {
  const unit_id = params.slug[0];
  const resource_id = params.slug[1];
  const oneQuiz: quiz_question[] = quiz["1"];

  return (
    <div className="w-full px-32 pt-10">
      {oneQuiz.map((el) => {
        return (
          <div key={el.question} className="space-y-5 mb-7">
            <div className="pl-10 space-y-2">
              <Checkbox.Group
                className=""
                defaultValue={["react"]}
                label={
                  <div className="text-lg flex justify-between items-center">
                    {el.question}
                    {/* <div className="text-sm opacity-70  ">1 Point</div> */}
                  </div>
                }
                description="Select one or more"
              >
                <div className="space-y-5 pt-4 pl-8">
                  {el.options.map((ans) => {
                    return (
                      <Checkbox
                        key={el.answer}
                        value={ans}
                        label={ans}
                        className=""
                      />
                    );
                  })}
                </div>
              </Checkbox.Group>
            </div>
          </div>
        );
      })}
      <div className="w-[150px] pl-10">
        <Link href={`/unit_resource/${unit_id}/${resource_id}`}>
          <Button
            variant="filled"
            radius={10}
            color="blue"
            fullWidth
            className="group bg-highlight-foreground text-highlight"
          >
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page;
