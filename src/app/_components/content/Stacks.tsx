import { groupedStacks } from "@/app/helper/groupedArr";
import { IoLayers } from "react-icons/io5";
function Stacks() {
  return (
    <div className=" w-full flex flex-col gap-2">
      <h1 className="  flex gap-2 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoLayers />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Stacks</span>
      </h1>
      <div className="grow w-full pl-2 relative">
        <div className="absolute inset-y-0 left-0 w-0.5 bg-primary/75" />
        <div className="flex flex-col gap-2.5">
          {groupedStacks().map((s, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                  <div className="bg-primary/75 h-1 w-5" />
                  <h6 className="text-zinc-300 font-bold text-[0.7rem]">
                    {s[0]}
                  </h6>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-2">
                  {s[1].map((stack) => (
                    <div
                      key={stack.name}
                      className="bg-zinc-900/25 border items-center gap-2 text-zinc-200 border-zinc-500/25 p-4 flex rounded-lg text-xs"
                    >
                      <div
                        style={{ backgroundColor: stack.color }}
                        className="w-3 h-3 rounded-full border border-zinc-300/25"
                      />
                      <span>{stack.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
