"use client";
import { useState } from "react";

import { LESSONS } from "../../_utils/dummy";
import VideoLesson from "../_comp/video-lesson";
import LessonList from "../_comp/lesson-list";
import Container from "../../_comp/container";

type Props = {
  params: { videoId: string };
};

const Resource = ({ params: { videoId } }: Props) => {
  const [activeVideoId, setActiveVideoId] = useState(videoId);
  const handleVideoSwitch = (videoId: string) => {
    setActiveVideoId(videoId);
  };

  return (
    <main>
      <Container>
        <section className="grid grid-cols-[minmax(15rem,1fr)_3fr] items-start gap-10">
          <div
            className="w-full h-screen pr-7"
            style={{ boxShadow: "2px 0 5px #89898940" }}
          >
            <LessonList
              lessons={LESSONS}
              defaultValue={
                LESSONS.find((lesson) =>
                  lesson.lessonVideos.some((video) => video.id === videoId)
                )?.id || ""
              }
              onVideoLessonClick={handleVideoSwitch}
            />
          </div>
          <VideoLesson videoId={activeVideoId} />
        </section>
      </Container>
    </main>
  );
};

export default Resource;
