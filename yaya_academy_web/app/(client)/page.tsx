"use client";
// import { Button } from "@/components/ui/button";
import { Button, Group, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "@/components/NavBar";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { home_page_data, recent_courses as rc } from "./data/dumy";
import RecentCourses from "@/components/RecentCourses";
import Drawer from "@/components/Drawer";
import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import parse from "html-react-parser";
import HtmlParser from "@/components/HtmlParser";

// let prevScrollPos = window.scrollY;
export default function Home() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div
      className={
        showDrawer
          ? "no-scrollbar overflow-clip overscroll-none"
          : "no-scrollbar overflow-clip"
      }
    >
      <div className="flex flex-col lg:flex-row mb-20 md:mt-12 mt-3">

        {/* Iamge container */}
        <div className="flex-1 justify-center hidden lg:flex ">
          <Image
            src="/landing/manTeaching.svg"
            alt="placeholder"
            width="600"
            height="600"
          />
        </div>

        {/* Text Container */}
        <div className="flex-1 flex flex-col justify-center pl-3 items-center">
          <div className="space-y-10 mt-10 flex flex-col items-center lg:items-start">
            <div className="w-full">
              <p className="lg:text-6xl text-5xl font-medium w-full text-center lg:text-left">
                <span className="text-4xl font-base text-gray-800 lg:ml-1">
                  {" "}
                  Learn about
                </span>{" "}
                <br /> <span className="">Construction </span> <br />{" "}
                <span className="text-highlight-foreground">Online</span>
              </p>
            </div>
            <div>
              <HtmlParser data={home_page_data["site_description"]} />
            </div>
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
        </div>
      </div>
      <div className="lg:px-32 px-3 flex flex-col items-center mb-28 mt-24">
        <HtmlParser data={home_page_data["self_intro_title"]} />
        <HtmlParser data={home_page_data["self_intro_pharagraph"]} />
      </div>
      <div className="flex flex-col items-center mb-20">
        <p className="font-semibold w-full text-center ">Recent Coures</p>
        <div className="flex flex-row w-full">
          <HtmlParser data={home_page_data["recent_courses_subtitle"]} />
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

      {/* Popular Courses cards */}
      <div className="flex flex-col items-center mb-20">
        <p className="font-semibold w-full text-center">Popular Coures</p>
        <div className="flex flex-row w-full">
          <HtmlParser data={home_page_data["popular_courses_subtitle"]} />
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
