import { GoArrowUpRight } from "react-icons/go";
import servioLogo from "../../../../public/servio_logo.png";
import Image from "next/image";
import { IoBriefcaseSharp } from "react-icons/io5";
function Experience() {
  const experience = [
    {
      company: "SERVIO Technologies",
      date: "May 2026 - Present",
      position: "Intern",
      logo: servioLogo,
    },
    {
      company: "SERVIO Technologies",
      date: "Feb 2026 - May 2026",
      position: "OJT Trainee",
      logo: servioLogo,
    },
  ];
  return (
    <div className="flex flex-col space-y-1.5 w-full">
      <h1 className="  flex gap-2 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoBriefcaseSharp />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Experience</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
        {experience.map((exp, i) => (
          <div
            key={exp.date + i}
            className="border-zinc-700 border flex justify-between space-y-1 rounded-md p-2"
          >
            <div className="flex items-center gap-3 grow">
              <Image
                src={exp.logo}
                width={40}
                height={40}
                alt={`${exp.company}'s logo`}
                priority
                className="rounded-full"
              />
              <div className="flex flex-col space-y-1">
                <span className="text-primary poppins-semibold text-[0.6rem]">
                  {exp.date}
                </span>
                <div>
                  <h5 className="text-zinc-100 text-[0.7rem]">{exp.company}</h5>
                  <p className="text-[0.6rem] text-zinc-300/75">
                    {exp.position}
                  </p>
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
  );
}

export default Experience;
