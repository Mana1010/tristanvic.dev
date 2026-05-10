import { FaBugSlash } from "react-icons/fa6";
import { RiTimerFlashLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoFlashSharp } from "react-icons/io5";

const skills = [
  {
    name: "Debugging",
    description:
      "Experience debugging real-time applications, authentication flows, and API integrations.",
    icon: <FaBugSlash />,
  },
  {
    name: " Real-Time Features",
    description:
      "Expertise in Socket.IO for live chat, notifications, and real-time data updates.",
    icon: <RiTimerFlashLine />,
  },
  {
    name: "UI/UX Design",
    description:
      "Focused on creating user-friendly, intuitive interfaces with Tailwind CSS & Figma.",
    icon: <LuLayoutDashboard />,
  },
];
function Skills() {
  return (
    <div className="flex flex-col space-y-1.5">
      <h1 className="  flex gap-1 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoFlashSharp />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-primary/30 bg-zinc-800/75 p-5 h-full flex items-center flex-col justify-center space-y-1 rounded-md"
          >
            <span className="text-white text-2xl">{skill.icon}</span>
            <h3 className="text-primary poppins-semibold text-sm">
              {skill.name}
            </h3>
            <p className="text-[0.7rem] poppins-thin text-[#F0F1F3] text-center">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
