export type Lesson = {
  id: string;
  title: string;
  content: string;
  lessonDuration: number;
  lessonVideos: {
    id: string;
    title: string;
    duration: number;
  }[];
};
