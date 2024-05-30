import { Lesson } from "../_types";
import { v4 as uuid } from "uuid";
import { randomNumberInRange } from "./random";
import { getFakeWords } from "./word-generator";

// export const LESSONS: Lesson[] = Array.from({ length: 7 }).map(() => ({
//   id: uuid(),
//   title: getFakeWords({ wordCount: 4 }),
//   content: getFakeWords({ phraseCount: 5 }),
//   lessonDuration: randomNumberInRange(20, 120),
//   lessonVideos: Array.from({ length: randomNumberInRange(2, 5) }).map(() => ({
//     title: getFakeWords({ wordCount: 2 }),
//     duration: randomNumberInRange(10, 60),
//     id: uuid(),
//   })),
// }));

export const LESSONS: Lesson[] = [
  {
    id: "lesson1",
    title: "Introduction to Programming",
    content:
      "This lesson covers the basics of programming, including variables, control structures, and functions.",
    lessonDuration: 120,
    lessonVideos: [
      {
        id: "video1",
        title: "What is Programming?",
        duration: 15,
      },
      {
        id: "video2",
        title: "Basic Syntax and Variables",
        duration: 25,
      },
      {
        id: "video3",
        title: "Control Structures",
        duration: 30,
      },
      {
        id: "video4",
        title: "Functions",
        duration: 50,
      },
    ],
  },
  {
    id: "lesson2",
    title: "Advanced JavaScript",
    content:
      "This lesson delves into more advanced topics in JavaScript, including closures, promises, and async/await.",
    lessonDuration: 150,
    lessonVideos: [
      {
        id: "video5",
        title: "Closures in JavaScript",
        duration: 20,
      },
      {
        id: "video7",
        title: "Async/Await",
        duration: 30,
      },
      {
        id: "video8",
        title: "Advanced Functions",
        duration: 60,
      },
    ],
  },
  {
    id: "lesson3",
    title: "Web Development Basics",
    content:
      "This lesson provides an overview of web development, covering HTML, CSS, and basic JavaScript for web pages.",
    lessonDuration: 180,
    lessonVideos: [
      {
        id: "video9",
        title: "Introduction to HTML",
        duration: 20,
      },
      {
        id: "video10",
        title: "Introduction to CSS",
        duration: 25,
      },
      {
        id: "video12",
        title: "Building Your First Website",
        duration: 90,
      },
    ],
  },
];
