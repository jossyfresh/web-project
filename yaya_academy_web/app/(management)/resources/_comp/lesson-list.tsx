"use client";
import { Accordion } from "@/components/ui/accordion";

import type { Lesson as LessonType } from "../../_types";
import Lesson from "./lesson";

type Props = {
  lessons: LessonType[];
  defaultValue: string;
  onVideoLessonClick: (videoId: string) => void;
};

const LessonList = ({ lessons, defaultValue, onVideoLessonClick }: Props) => {
  return (
    <Accordion collapsible type="single" defaultValue={defaultValue}>
      {lessons.map((lesson) => (
        <Lesson lesson={lesson} key={lesson.id} onVideoLessonClick={onVideoLessonClick} />
      ))}
    </Accordion>
  );
};

export default LessonList;
