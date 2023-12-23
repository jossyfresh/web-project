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

function SingleCourse({ params }: { params: { slug: any } }) {
  const course = rc.find((el) => el.id == params.slug);
  console.log(course);
  return (
    <div>
      {/* <NavBar /> */}
      <div className="lg:mt-6 mt-3 sm:text-sm font-semibold mb-3 lg:pl-8 text-center lg:text-left">
        {course?.title}
      </div>
      <div className="lg:h-[500px] lg:px-8 lg:mt-4 flex flex-col lg:flex-row justify-between">
        {/* Image Display */}
        <div className="lg:w-[65%]">
          <Image
            src="/ConstructionManagement.jpg"

            width="500"
            height="500"
            alt="image"
            className="object-cover lg:w-full w-[95%] lg:h-[90%] h-[200px] mx-2 self-center rounded-sm"
          />
          <div className="flex justify-between lg:px-1 px-3 pt-3">
            <p className="font-light">Introduction to the course</p>
            <p className="font-extralight text-gray-800">1:39</p>
          </div>
        </div>

        {/* Course Description */}
        <div className="lg:w-[30%] lg:h-full border-gray-100 border rounded-lg shadow-md p-5 lg:space-y-6 space-y-3 flex-col lg:font-extralight mt-5 lg:mt-0">
          <div className="flex flex-row items-center">
            {/* <BarChart2 size={30} strokeWidth={1.5} /> */}
            <BarChart />
            <p className="self-end pl-3">Level: {course?.level}</p>
          </div>
          <div className="flex flex-row items-center">
            <TimerIcon />
            <p className="self-end pl-3">{course?.duration}</p>
          </div>
          <div className="flex flex-row items-center">
            <Volume2 />
            <p className="self-end pl-3"> Amharic </p>
          </div>
          <div className="flex flex-row items-center">
            <Video />
            <p className="self-end pl-3">{course?.videos}</p>
          </div>
          <div className="flex flex-row items-center">
            <FileText />
            <p className="self-end pl-3">2 recourses</p>
          </div>
          <div className="flex flex-row items-center">
            <User />
            <p className="self-end pl-3">Teacher: Abel Tesfaye</p>
          </div>
          <div className="w-full flex-col text-center pt-14">
            <p>Want to learn?</p>
            <Button color="blue" fullWidth>
              <p className="font-light">Register Now</p>
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:p-8 mt-10 p-4">
        <p className="mb-5 font-semibold">About the course</p>

        <div>{course?.about}</div>
      </div>
      <div className="lg:p-8 mt-10 p-4">
        <p className="mb-5 font-semibold">Requirements</p>

        <div>{course?.pre_requisits}</div>
      </div>
    </div>
  );
}

export default SingleCourse;
