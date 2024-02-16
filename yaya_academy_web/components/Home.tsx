"use client";
import FilterPanel from "@/components/FilterPanel";
import HomeNavBar from "@/components/HomeNavbar";
import { Button, Group, useMantineTheme } from "@mantine/core";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { recent_courses as rc } from "../app/data/dumy";
import RecentCourses from "@/components/RecentCourses";
import NavBar from "@/components/NavBar";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [stickNavBar, setStickNavBar] = useState(false);
  return (
    <div
      className={
        showDrawer
          ? "no-scrollbar overflow-clip overscroll-none"
          : "no-scrollbar overflow-clip"
      }
    >
      <div className="flex flex-col items-center mb-20 py-10">
        <p className="font-semibold w-full text-center ">Recent Coures</p>
        <div className="flex flex-row w-full">
          <p className="flex-1 lg:ml-5 text-center font-light text-sm lg:text-base opacity-80">
            Learn the latest lessons for a professional
          </p>
          <ArrowRight className="justify-self-end hidden lg:inline-block" />
        </div>
        {/* recent courses cards */}
        <div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-3 lg:px-16 no-scrollbar mt-5">
          {rc.map((el) => {
            return (
              <Link key={el.id} href={`/single_course/${el.id}`} scroll={false}>
                {RecentCourses({ ...el })}
              </Link>
            );
          })}
        </div>
        <div className=" w-full flex justify-center mt-5">
          <div className="lg:w-48 w-44">
            <Button
              variant="filled"
              radius={20}
              color="blue"
              fullWidth
              className="group bg-highlight-foreground text-highlight"
            >
              <div className="w-[200px] flex m-0 p-0 justify-center items-center">
                <p className="translate-x-3 lg:group-hover:translate-x-0 transition-all">
                  Explore Courses
                </p>
                <ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
              </div>
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="flex flex-col items-center mb-20">
        <p className="font-semibold w-full text-center">Popular Coures</p>
        <div className="flex flex-row w-full">
          <p className="flex-1 lg:ml-5 text-center font-light text-sm lg:text-base opacity-80">
            Learn the latest lessons for a professionals
          </p>
          {/* <ArrowRight className="justify-self-end" /> */}
        </div>
        <div className="flex items-center w-[100%] overflow-x-scroll space-x-6 px-3 lg:px-16 no-scrollbar mt-5">
          {rc.map((el) => {
            return (
              <Link key={el.id} href={`/single_course/${el.id}`} scroll={false}>
                {RecentCourses({ ...el })}
              </Link>
            );
          })}
        </div>
        <div className=" w-full flex justify-center mt-5">
          <div className="lg:w-48 w-44">
            <Button
              variant="filled"
              radius={20}
              color="blue"
              fullWidth
              className="group bg-highlight-foreground text-highlight"
            >
              <div className="w-[200px] flex m-0 p-0 justify-center items-center">
                <p className="translate-x-3 lg:group-hover:translate-x-0 transition-all">
                  Explore Courses
                </p>
                <ArrowRight className="opacity-0 group-hover:inline-block lg:group-hover:opacity-100 lg:group-hover:translate-x-3 transition-all duration-300 " />
              </div>
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
