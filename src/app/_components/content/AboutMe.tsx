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
          🗒️: Hi! I&apos;m a 4th year Information Tech student specializing in
          the MERN stack with a focus on real-time applications using Socket.io.
          I care deeply about writing quality code — I&apos;d rather get it
          right than get it done fast. With three years of experience in web
          development, I&apos;m always seeking to learn, improve, and take on
          challenges that push me to grow. My goal is to build applications that
          are not just functional, but genuinely well-crafted.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
