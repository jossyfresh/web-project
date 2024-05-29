import React from "react";
import { Lesson as LessonType } from "../../_types";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { convertMinutesToHoursAndMinutes } from "../../_utils/formatter";
import { Check } from "lucide-react";
import { useMantineColorScheme } from "@mantine/core";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  lesson: LessonType;
};

const Lesson = ({ lesson }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  console.log("🚀 ~ LessonDetail ~ isDark:", isDark)

  return (
    <AccordionItem value={lesson.id} key={lesson.id} className="border-0">
      <AccordionTrigger className="justify-start gap-x-3 hover:no-underline [&[data-state=open]>svg]:rotate-90">
        <ChevronRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 " />

        <h3 className="text-[1.1rem] md:text-[1.2rem] text-left">{lesson.title}</h3>
      </AccordionTrigger>
      <AccordionContent
        className={cn(
          "pl-10 mt-3 text-neutral-800 text-[1rem] md:text-[1.1rem] leading-[150%]",
          {
            "text-neutral-100": isDark,
          }
        )}
      >
        <p className="line-clamp-3">{lesson.content}</p>
        <h3 className="mt-5">
          <span className="font-semibold">
            {convertMinutesToHoursAndMinutes(lesson.lessonDuration)}
          </span>{" "}
          of videos
        </h3>
        <section className="space-y-4 my-5">
          {lesson.lessonVideos.map((lessonVideo) => (
            <Link
              href={`/resources/${lessonVideo.id}`}
              key={lessonVideo.id}
              className="flex gap-x-4 "
            >
              <div className="flex gap-x-7 items-center">
                <span className="bg-neutral-400 block rounded-full size-[15px] md:size-[25px] grid place-items-center">
                  <Check className="text-white size-[10px] md:size-[15px]" />
                </span>
                <div className="flex flex-col">
                  <span className="font-medium">{lessonVideo.title}</span>
                  <span className="text-neutral-600">Video</span>
                </div>
              </div>

              <span className="ml-auto text-neutral-500">
                {convertMinutesToHoursAndMinutes(lessonVideo.duration, true)}
              </span>
            </Link>
          ))}
        </section>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Lesson;
