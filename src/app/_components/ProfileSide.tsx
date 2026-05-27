import myself from "../../../public/myself.jpg";
import {
  SiSocketdotio,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiReactquery,
} from "react-icons/si";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import profileBg from "../../../public/profile_bg_2.svg";
function ProfileSide() {
  return (
    <div
      style={{
        backgroundImage: `url(${profileBg.src})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="flex space-x-2 w-full md:basis-[40%] lg:basis-[30%] h-full flex-col p-2 rounded-lg space-y-2 justify-between"
    >
      <div className="flex flex-col space-y-2">
        <Image
          src={myself}
          width={150}
          height={150}
          className="rounded-lg mx-auto"
          alt="myself"
          priority
        />
        <div className="w-full flex flex-col items-center">
          <span className="text-white">I am</span>
          <h1 className="text-primary text-xl poppins-semibold">
            Tristan Vic T. Clarito
          </h1>
          <span className="text-[0.65rem] italic text-zinc-400">
            A Typescript Enthusiast | MERN
          </span>
          <ul className="flex items-center gap-2 justify-center pt-2">
            <a
              href="https://github.com/Mana1010"
              className="text-white text-lg hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/tanvic.clarito?mibextid=ZbWKwL"
              className="text-white text-lg hover:text-primary"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/tristan-vic-clarito-a256322a0/"
              className="text-white text-lg hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </ul>
        </div>
        <a
          // download="ClaritoResume.pdf"
          href="/my_resume.pdf"
          target="_blank"
          className="rounded-2xl py-1.5 px-5 bg-transparent text-primary text-[0.79rem] border border-zinc-700 duration-200 transition-colors hover:bg-primary hover:text-white cursor-pointer mx-5 text-center"
        >
          Show CV
        </a>
      </div>
      {/* <div className=" flex space-x-2.5 justify-center items-center w-full pb-5">
        <span className="text-primary/80 text-2xl">
          <SiNextdotjs />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiExpress />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiMongodb />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiSocketdotio />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiPrisma />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiReactquery />
        </span>
        <span className="text-primary/80 text-2xl">
          <SiTailwindcss />
        </span>
      </div> */}
    </div>
  );
}

export default ProfileSide;
