import { Lesson } from "../_types";
import { v4 as uuid } from "uuid";
import { getFakeWords } from "./word-generator";
import { randomNumberInRange } from "./random";

export const LESSONS: Lesson[] = Array.from({ length: 7 }).map(() => ({
  id: uuid(),
  title: getFakeWords({wordCount: 4}),
  content: getFakeWords({ phraseCount: 5 }),
  lessonDuration: randomNumberInRange(20, 120),
  lessonVideos: Array.from({ length: randomNumberInRange(2, 5) }).map(() => ({
    title: getFakeWords({ wordCount: 2 }),
    duration: randomNumberInRange(10, 60),
    id: uuid(),
  })),
}));
