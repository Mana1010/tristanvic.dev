import { GoArrowUpRight } from "react-icons/go";
import { IoSchoolSharp } from "react-icons/io5";

function Education() {
  const education = [
    {
      schoolName: "Filamer Christian University (Senior High School)",
      circa: "2020-2022",
      course: "TVL - ICT",
    },
    {
      schoolName: "Filamer Christian University (College)",
      circa: "2022-2026",
      course: "BS in Information Technology",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-1.5 py-2">
      <h1 className="  flex gap-2 items-center tracking-wide font-bold">
        <span className="text-lg text-primary">
          <IoSchoolSharp />
        </span>{" "}
        <span className="text-zinc-300 text-sm">Education</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
        {education.map((educ) => (
          <div
            key={educ.schoolName}
            className="border-zinc-700 border flex justify-between space-y-1 rounded-md p-2"
          >
            <div className="flex flex-col space-y-1">
              <span className="text-primary poppins-semibold text-[0.7rem]">
                {educ.circa}
              </span>
              <div>
                <h5 className="text-zinc-100 text-sm">{educ.schoolName}</h5>
                <p className="text-xs text-zinc-300/75">{educ.course}</p>
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

export default Education;
