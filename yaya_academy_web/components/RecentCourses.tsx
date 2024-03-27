// 'use client'
import React from "react";
import { Card, CardContent } from "./ui/card";
import { recent_course_type } from "@/app/(client)/data/dumy";
import Image from "next/image";

function RecentCourses(props: recent_course_type) {
  return (
    <div className="lg:min-w-[300px] min-w-[200px] hover:shadow-lg transition-all group hover:cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* <div className="min-w-[250px] "> */}
      <Image
        src={props.imageUrl}
        width="500"
        height="500"
        alt="image"
        className="object-cover w-full lg:h-40 h-28 rounded-t-lg"
      />
      <div className="p-3 lg:space-y-5 space-y-3 flex flex-col">
        <p className="h-10 overflow-hidden leading-5">{props.title}</p>
        <p className="lg:text-sm text-xs h-16 opacity-95 overflow-clip">
          {props.desc}
        </p>
        <div className="space-y-1 justify-self-end text-xs font-light opacity-80 group-hover:opacity-95">
          <p className="">{props.videos}</p>
          <p className="">Duration: {props.duration}</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default RecentCourses;
