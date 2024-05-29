"use client";
import { Accordion } from "@/components/ui/accordion";

import Lesson from "./lesson";
import type { Lesson as LessonType } from "../../_types";

type Props = {
  lessons: LessonType[];
};

const LessonList = ({ lessons }: Props) => {
  return (
    <Accordion collapsible type="single" defaultValue={lessons[0].id}>
      {lessons.map((lesson) => (
        <Lesson lesson={lesson} key={lesson.id} />
      ))}
    </Accordion>
  );
};

export default LessonList;
