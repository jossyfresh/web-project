"use client";
import React, { useState } from "react";
import FilterPanel from "@/components/FilterPanel";
import Image from "next/image";

export default function Page() {
  const [showDrawer, setshowDrawer] = useState(false);

  return (
    <div
      className={
        showDrawer
          ? "no-scrollbar overflow-clip overscroll-none"
          : "no-scrollbar overflow-clip"
      }
    >
      <div className="">
        <FilterPanel />
      </div>
      <div className=" px-32 py-10">
        <div className="flex flex-col gap-14">
          {Array.from({ length: 5 }, (_, index) => (
            <div className="px-5 border border-black h-60">
              <div className="w-1/2 h-full py-4">
                <h1 className="border border-black h-[10%]">
                  Construction Managment
                </h1>
                <div className="h-[90%]">
                  <Image
                    className="w-full h-full border border-black"
                    src="/ConstructionSafety.jpg"
                    alt="placeholder"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
