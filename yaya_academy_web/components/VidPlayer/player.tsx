"use client";
import "@vidstack/react/player/styles/base.css";
import { useEffect, useRef, useState } from "react";
import { FullscreenButton, Time } from "@vidstack/react";
// See "Icons" component page for setup before importing the following:
import { FullscreenExitIcon, FullscreenIcon } from "@vidstack/react/icons";
import { CaptionButton } from "@vidstack/react";
// See "Icons" component page for setup before importing the following:
import { PIPButton } from "@vidstack/react";
// See "Icons" component page for setup before importing the following:
import {
  PictureInPictureExitIcon,
  PictureInPictureIcon,
} from "@vidstack/react/icons";

import {
  ClosedCaptionsIcon,
  ClosedCaptionsOnIcon,
} from "@vidstack/react/icons";
import {
  isHLSProvider,
  useMediaStore,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
  type MediaCanPlayDetail,
  type MediaCanPlayEvent,
  type MediaPlayerInstance,
  type MediaProviderAdapter,
  type MediaProviderChangeEvent,
  MuteButton,
  VolumeSlider,
  PlayButton,
  TimeSlider,
} from "@vidstack/react";
import {
  MuteIcon,
  PauseIcon,
  PlayIcon,
  VolumeHighIcon,
  VolumeLowIcon,
} from "@vidstack/react/icons";

export default function Player() {
  let player = useRef<MediaPlayerInstance>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { canFullscreen, fullscreen } = useMediaStore(player);
  const [isControlsHovered, setIsControlsHovered] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    player.current?.play();
  };

  useEffect(() => {
    // Subscribe to state updates.
    return player.current!.subscribe(({ paused, viewType }) => {
      // console.log('is paused?', '->', state.paused);
      // console.log('is audio view?', '->', state.viewType === 'audio');
      setIsPlaying(!paused);
      viewType === "audio" && setIsPlaying(false);
    });
  }, []);

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  // We can listen for the `can-play` event to be notified when the player is ready.
  function onCanPlay(
    detail: MediaCanPlayDetail,
    nativeEvent: MediaCanPlayEvent
  ) {
    // ...
  }

  return (
    <MediaPlayer
      className="w-full aspect-video text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4"
      title="Sprite Fight"
      src="https://www.youtube.com/watch?v=AMtGWoRZaSg"
      crossorigin
      autoPlay={true}
      playsinline
      onProviderChange={onProviderChange}
      onCanPlay={onCanPlay}
      ref={player}
      onMouseEnter={() => setIsControlsHovered(true)}
      onMouseLeave={() => setIsControlsHovered(false)}
      onClick={() => player.current?.pause()}
    >
      <MediaProvider className="rounded-md">
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 object-cover"
          src="/Buildinginf.jpg"
          alt=""
        />
      </MediaProvider>

      {/* central Big start button if player is playing hide it */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          isPlaying ? "hidden" : ""
        }`}
      >
        <button
          className="group ring-media-focus opacity-50 bg-gray-900 relative inline-flex h-20 w-20 rounded-full cursor-pointer items-center justify-center outline-none ring-inset hover:bg-gray-700 data-[focus]:ring-4"
          onClick={handlePlay}
        >
          <PlayIcon className="w-12 h-12" />
        </button>
      </div>
      {/* background color for the controls but  */}
      <div
        className={`absolute bottom-0 w-full h-20 bg-black/50 hover:visible ${
          isPlaying && !isControlsHovered ? "hidden" : ""
        }`}
      ></div>
      {/* Bottom progress bar */}
      <div
        className={`absolute bottom-10 flex items-end justify-between w-full px-2 ${
          isPlaying && !isControlsHovered ? "hidden" : ""
        }`}
      >
        <TimeSlider.Root className="group relative mx-[7.5px] inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
          <TimeSlider.Chapters className="relative flex h-full w-full items-center rounded-[1px]">
            {(cues, forwardRef) =>
              cues.map((cue) => (
                <div
                  className="last-child:mr-0 relative mr-0.5 flex h-full w-full items-center rounded-[1px]"
                  style={{ contain: "layout style" }}
                  key={cue.startTime}
                  ref={forwardRef}
                >
                  <TimeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
                    <TimeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--chapter-fill)] rounded-sm will-change-[width]" />
                    <TimeSlider.Progress className="absolute z-10 h-full w-[var(--chapter-progress)] rounded-sm bg-white/50 will-change-[width]" />
                  </TimeSlider.Track>
                </div>
              ))
            }
          </TimeSlider.Chapters>

          <TimeSlider.Preview
            className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none"
            noClamp
          >
            <TimeSlider.ChapterTitle className="text-sm" />
            <TimeSlider.Value className="rounded-sm bg-black px-2 py-px text-[13px] font-medium text-white" />
          </TimeSlider.Preview>

          <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
        </TimeSlider.Root>
      </div>
      {/* Bottom left play pause button with sound control and bottom right fullscreen and pip and caption */}
      <div
        className={`absolute left-4 bottom-2 flex items-end justify-between ${
          isPlaying && !isControlsHovered ? "hidden" : ""
        }`}
      >
        {/* Play/Pause Button */}
        <PlayButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
          <PlayIcon className="w-8 h-8 hidden group-data-[paused]:block" />
          <PauseIcon className="w-8 h-8 group-data-[paused]:hidden" />
        </PlayButton>

        {/* Mute Button */}
        <MuteButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
          <MuteIcon className="w-8 h-8 hidden group-data-[state='muted']:block" />
          <VolumeLowIcon className="w-8 h-8 hidden group-data-[state='low']:block" />
          <VolumeHighIcon className="w-8 h-8 hidden group-data-[state='high']:block" />
        </MuteButton>

        {/* Volume Slider */}
        <div className="w-[70px]">
          <VolumeSlider.Root className="group relative mx-[7.5px] inline-flex h-10 w-full max-w-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
            {/* VolumeSlider Track and TrackFill components */}
            <VolumeSlider.Track className="relative ring-sky-400 z-0 h-[5px] w-full rounded-sm bg-white/30 group-data-[focus]:ring-[3px]">
              <VolumeSlider.TrackFill className="bg-indigo-400 absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
            </VolumeSlider.Track>

            {/* VolumeSlider Preview */}
            <VolumeSlider.Preview
              className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none"
              noClamp
            >
              <VolumeSlider.Value className="rounded-sm bg-black px-2 py-px text-[13px] font-medium text-white" />
            </VolumeSlider.Preview>

            {/* VolumeSlider Thumb */}
            <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 ring-white/40 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
          </VolumeSlider.Root>
        </div>
        <div className="ml-5 mb-2.5 flex items-center text-sm font-medium">
          <Time className="time" type="current" />
          <div className="mx-1 text-white/80">/</div>
          <Time className="time" type="duration" />
        </div>
        {/* Fullscreen Button */}
        <div className={`${fullscreen ? "ml-[960px]" : "ml-[435px]"} flex`}>
          {/* Adjusted margin here */}
          <CaptionButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4">
            <ClosedCaptionsOnIcon className="w-8 h-8 hidden group-data-[active]:block" />
            <ClosedCaptionsIcon className="w-8 h-8 group-data-[active]:hidden" />
          </CaptionButton>

          <PIPButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden">
            <PictureInPictureIcon className="w-8 h-8 group-data-[active]:hidden" />
            <PictureInPictureExitIcon className="w-8 h-8 hidden group-data-[active]:block" />
          </PIPButton>

          <FullscreenButton className="group ring-sky-400 relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden">
            <FullscreenIcon className="w-8 h-8 group-data-[active]:hidden" />
            <FullscreenExitIcon className="w-8 h-8 hidden group-data-[active]:block" />
          </FullscreenButton>
        </div>
      </div>
    </MediaPlayer>
  );
}
