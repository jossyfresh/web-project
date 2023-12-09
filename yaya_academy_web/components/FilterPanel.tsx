import React from "react";

export default function FilterPanel() {
  return (
    <div className="flex gap-7 px-10 border border-gray-300 w-full">
      <div className="border-b-2 border-purple-700  px-2 py-1">
        <a href="">Home</a>
      </div>
      <div className=" border-black px-2 py-1">
        <a href="">InProgress</a>
      </div>
      <div className=" border-black px-2 py-1">
        <a href="">Completed</a>
      </div>
    </div>
  );
}
