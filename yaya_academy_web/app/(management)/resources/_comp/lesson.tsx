import React from "react";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRightIcon } from "@radix-ui/react-icons";

import { Check } from "lucide-react";
import { useMantineColorScheme } from "@mantine/core";
import { cn } from "@/lib/utils";
import type { Lesson } from "../../_types";

type Props = {
  lesson: Lesson;
  onVideoLessonClick: (videoId: string) => void;
};

const Lesson = ({ lesson, onVideoLessonClick }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <AccordionItem value={lesson.id} key={lesson.id} className="border-0">
      <AccordionTrigger className="justify-start gap-x-3 hover:no-underline [&[data-state=open]>svg]:rotate-90">
        <ChevronRightIcon className="h-6 w-6 shrink-0 transition-transform duration-200 " />

        <h3 className="text-[.9rem] md:text-[1rem] text-left">
          {lesson.title}
        </h3>
      </AccordionTrigger>
      <AccordionContent
        className={cn(
          "pl-10  text-neutral-800 text-[.8rem] md:text-[.9rem] leading-[150%]",
          {
            "text-neutral-100": isDark,
          }
        )}
      >
        <section className="space-y-3 ">
          {lesson.lessonVideos.map((lessonVideo) => (
            <div
              key={lessonVideo.id}
              onClick={() => onVideoLessonClick(lessonVideo.id)}
              className="flex gap-x-3 items-center cursor-pointer"
            >
              <span className="bg-neutral-400 block rounded-full size-[24px] grid place-items-center">
                <Check className="text-white" size={13} />
              </span>
              <span className="font-medium">{lessonVideo.title}</span>
            </div>
          ))}
        </section>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Lesson;
