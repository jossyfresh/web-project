import React from "react";
import { TextInput } from "@mantine/core";

export default function page() {
  return (
    <div className="mt-14  flex justify-center">
      <div className="w-[80%]">
        <div className="text-3xl leading-7 tracking-wider py-5">Profile</div>
        <div className="px-10 py-10 rounded-lg bg-gray-50 flex justify-between">
          <div className="w-1/3 py-5 flex flex-col gap-20">
            <TextInput size="lg" label="Your Email" placeholder="Your email" />
            <TextInput size="lg" label="Your Name" placeholder="Your email" />
          </div>
          <div className="w-1/3 py-5 flex flex-col gap-5">
            <TextInput size="lg" label="Your Phone" placeholder="Your email" />
          </div>
        </div>
      </div>
    </div>
  );
}
