import React from "react";

type Props = {
  videoId: string;
};

const VideoLesson = ({ videoId }: Props) => {
  return <div className="w-full aspect-video bg-neutral-200 rounded-md grid place-items-center">
    {videoId}
    </div>;
};

export default VideoLesson;
