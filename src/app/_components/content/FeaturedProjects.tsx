import { IoStar } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

import Image from "next/image";
import { groupedProjects } from "@/app/helper/groupedArr";
function FeaturedProjects() {
  return (
    <div onClick={groupedProjects} className="flex w-full flex-col space-y-1.5">
      <h1 className=" w-full flex gap-2 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoStar />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Featured Projects</span>
      </h1>
      <div className="grow w-full pl-2 relative">
        <div className="absolute inset-y-0 left-0 w-0.5 bg-primary/75" />
        <div className="flex flex-col items-center gap-2.5">
          {groupedProjects().map((p, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <div className="bg-primary/75 h-0.5 w-5" />
                <h6 className="text-zinc-300 font-bold text-[0.7rem]">
                  {p[0]}
                </h6>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {p[1].map((proj) => (
                  <div
                    key={proj.date + i}
                    className="border-zinc-700 border flex justify-between space-y-1 rounded-md p-2"
                  >
                    <div className="flex gap-3 grow">
                      <Image
                        src={proj.logo}
                        width={
                          proj.name === "CommuHelp" ||
                          proj.name === "Memory Game"
                            ? 40
                            : 30
                        }
                        height={
                          proj.name === "CommuHelp" ||
                          proj.name === "Memory Game"
                            ? 40
                            : 30
                        }
                        alt={`${proj.name}'s logo`}
                        className="self-start"
                        priority
                      />
                      <div className="flex flex-col space-y-1">
                        <span className="text-primary poppins-semibold text-[0.6rem]">
                          {proj.date}
                        </span>
                        <div>
                          <h5 className="text-zinc-100 text-[0.7rem]">
                            {proj.name}
                          </h5>
                          <p className="text-[0.6rem] text-zinc-300/75">
                            {proj.description}
                          </p>
                          <div className="flex gap-1 flex-wrap pt-1.5">
                            {proj.technologies.map((t) => (
                              <span
                                key={t}
                                className="text-zinc-300 text-[0.6rem] px-2 py-0.5 rounded-3xl bg-primary/25 border border-primary/50"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="text-primary">
                      <GoArrowUpRight />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
