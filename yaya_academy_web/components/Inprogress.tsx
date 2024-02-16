"use client";
import React, { Key, useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@mantine/core";

export default function Inprogress() {
  const [showDrawer, setshowDrawer] = useState(false);

  return (
    <div
      className={
        showDrawer
          ? "no-scrollbar overflow-clip overscroll-none"
          : "no-scrollbar overflow-clip"
      }
    >
      <div className=" px-32 py-10">
        <div className="flex flex-col gap-14">
          {Array.from({ length: 5 }, (keys: Key, index) => (
            <div
              key={keys}
              className="w-full h-64 border border-grey-50 shadow-md flex rounded-lg"
            >
              {/* image and title part*/}
              <div className="w-1/2 h-full  flex flex-col py-5 space-y-1">
                <div className="h-full  px-5 rounded-md">
                  <Image
                    className="w-full h-full rounded-lg"
                    src="/ConstructionManagement.jpg"
                    alt="placeholder"
                    width="500"
                    height="500"
                  />
                </div>
              </div>
              {/* end */}
              {/* description and continue button*/}
              <div className="w-1/2 h-full  flex flex-col py-7">
                <div className=" h-1/4 px-10 py-5">
                  <h1 className="text-2xl font-montserrat">
                    Project Managment
                  </h1>
                </div>
                <div className=" h-1/2 px-10 py-5">
                  <p className="text-md font-montserrat">
                    The Construction Management Specialization offered by
                    Columbia University on Coursera is intended for construction
                    industry professionals...
                  </p>
                </div>
                <div className=" h-1/4 px-10 py-5">
                  <div className="w-40">
                    <Button
                      color="blue"
                      radius={15}
                      fullWidth
                      className="text-xl font-montserrat bg-blue-500"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
              {/* end */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
