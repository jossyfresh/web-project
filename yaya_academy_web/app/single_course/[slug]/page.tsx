"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { recent_courses as rc } from "../../data/dumy";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import {
  BarChart,
  BarChart2,
  File,
  FileText,
  TimerIcon,
  User,
  Video,
  Volume2,
} from "lucide-react";
import { Button } from "@mantine/core";
import Player from "@/components/VidPlayer/player";
import Link from "next/link";

function SingleCourse({ params }: { params: { slug: any } }) {
  const course = rc.find((el) => el.id == params.slug);
  console.log(course);
  return (
    <div>
      {/* <NavBar /> */}
      <div className="lg:mt-6 mt-3 sm:text-base font-semibold mb-3 font-montserrat lg:pl-8 text-center lg:text-left">
        {course?.title}Construction Management Specialization
      </div>
      <div className="lg:h-[500px] lg:px-8 lg:mt-4 flex flex-col lg:flex-row justify-between">
        {/* Image Display */}
        <div className="lg:w-[65%] rounded-md">
          <Player />
        </div>

        {/* Course Description */}
        <div className="lg:w-[30%] lg:h-full border-gray-100 border rounded-lg shadow-md px-5 lg:space-y-6 space-y-3 flex-col lg:font-extralight mt-5 lg:mt-0 py-10">
          <div className="flex flex-row items-center">
            {/* <BarChart2 size={30} strokeWidth={1.5} /> */}
            <BarChart />
            <p className="self-end pl-3">
              Level: {course?.level}Beginner level
            </p>
          </div>
          <div className="flex flex-row items-center">
            <TimerIcon />
            <p className="self-end pl-3">
              {course?.duration}12 hours, 16 minutes
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Volume2 />
            <p className="self-end pl-3"> Amharic </p>
          </div>
          <div className="flex flex-row items-center">
            <Video />
            <p className="self-end pl-3">{course?.videos}22 videos</p>
          </div>
          <div className="flex flex-row items-center">
            <FileText />
            <p className="self-end pl-3">2 recourses</p>
          </div>
          <div className="flex flex-row items-center">
            <User />
            <p className="self-end pl-3">Teacher: Abel Tesfaye</p>
          </div>
          <div className="w-full flex-col text-center pt-10">
            <p>Want to learn?</p>
            <Link href="/unit_resource/1/1">
            <Button color="blue" fullWidth>
              <p className="font-bold font-montserrat leading-9">
                Register Now
              </p>
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:p-8 mt-10 p-4">
        <p className="mb-5 text-xl font-semibold font-montserrat">
          About the course
        </p>
        <p className="w-[70%] font-montserrat">
          {" "}
          engineers, and architects who are looking to advance their careers, as
          well as students who are interested in learning about construction
          management. The specialization consists of five courses taught by Dr.
          Ibrahim Odeh and more than 20 guest lecturers. The courses cover the
          major facets of construction management including project initiation
          and planning, scheduling techniques and procedures, cost estimating
          and control, and construction project financials
        </p>
        <div>{course?.about}</div>
      </div>
      <div className="lg:p-8 mt-5 p-4">
        <p className="mb-5 font-semibold font-montserrat">Requirements</p>
        <p className="w-[70%] font-montserrat">
          There are no prerequisites for this specialization. However, it is
          recommended that you have some experience in the construction industry
          or a related field
        </p>
        <div>{course?.pre_requisits}</div>
      </div>
    </div>
  );
}

export default SingleCourse;
