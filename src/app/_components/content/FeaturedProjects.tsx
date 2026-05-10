import React from "react";
import { IoStar } from "react-icons/io5";

function FeaturedProjects() {
  return (
    <div>
      <h1 className=" w-full flex gap-2 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoStar />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Featured Projects</span>
      </h1>
    </div>
  );
}

export default FeaturedProjects;
