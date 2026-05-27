import { IoPerson } from "react-icons/io5";
import streetSceneEve from "../../../../public/street_screne_evening.svg";
import Image from "next/image";
function AboutMe() {
  return (
    <div className="flex items-center w-full">
      {/* <div className="aspect-video relative bg-red-500">
        <Image
          src={streetSceneEve}
          sizes="100%"
          fill
          className="absolute inset-0 object-cover rounded-md"
          alt="Profile picture"
          priority
        />
      </div> */}
      <div className="flex flex-col space-y-1.5 grow w-full">
        <h1 className="  flex gap-2 items-center tracking-wide font-bold">
          <span className="text-lg text-primary">
            <IoPerson />
          </span>{" "}
          <span className="text-zinc-300 text-sm">About Me</span>
        </h1>
        <p className="text-zinc-200 text-[0.78rem] poppins-thin leading-6">
          Hi! I&apos;m Tristan, a 4th-year IT student and full-stack developer
          focused on the MERN stack and real-time applications with Socket.IO. I
          value clean architecture, maintainable code, and thoughtful user
          experiences. With three years of experience in web development, I
          enjoy building systems that are not only functional, but genuinely
          well-crafted. I&apos;m always exploring new technologies, improving my
          skills, and taking on projects that challenge me to grow.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
