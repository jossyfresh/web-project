"use client";

import { Lesson as LessonType } from "../_types";

import { Accordion } from "@/components/ui/accordion";

import Lesson from "./lesson";

type Props = { lessons: LessonType[] };

const LessonList = ({ lessons }: Props) => {
  return (
    <Accordion collapsible type="single" defaultValue={lessons.at(0)?.id}>
      {lessons.map((lesson) => (
        <Lesson lesson={lesson} key={lesson.id} />
      ))}
    </Accordion>
  );
};

export default LessonList;
