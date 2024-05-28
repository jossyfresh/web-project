import React from "react";
import { Lesson as LessonType } from "../_types";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { convertMinutesToHoursAndMinutes } from "../_utils/formatter";
import { Check } from "lucide-react";

type Props = {
  lesson: LessonType;
};

const Lesson = ({ lesson }: Props) => {
  return (
    <AccordionItem value={lesson.id} key={lesson.id} className="border-0">
      <AccordionTrigger className="justify-start gap-x-3 hover:no-underline [&[data-state=open]>svg]:rotate-90">
        <ChevronRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 " />

        <h3 className="text-[1.35rem]">{lesson.title}</h3>
      </AccordionTrigger>
      <AccordionContent className="px-12 mt-5 text-neutral-800 text-[1.25rem] leading-[150%]">
        <p className="line-clamp-3">{lesson.content}</p>
        <h3 className="mt-5">
          <span className="font-semibold">
            {convertMinutesToHoursAndMinutes(lesson.lessonDuration)}
          </span>{" "}
          of videos
        </h3>
        <section className="space-y-4 mt-7 mb-10">
          {lesson.lessonVideos.map((lessonVideo) => (
            <div key={lessonVideo.id} className="flex gap-x-4 ">
              <div className="flex gap-x-7 items-center">
                <span className="bg-neutral-400 rounded-full size-[30px] grid place-items-center">
                  <Check className="text-white" size={20} />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{lessonVideo.title}</span>
                  <span className="text-neutral-600">Video</span>
                </div>
              </div>

              <span className="ml-auto text-neutral-500">
                {convertMinutesToHoursAndMinutes(lessonVideo.duration, true)}
              </span>
            </div>
          ))}
        </section>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Lesson;
