import myself from "../../../../public/myself.jpg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { TbPhotoSearch } from "react-icons/tb";
import useAppStore from "@/store/appStore";
function MainInfo() {
  const { togglePreviewProfile } = useAppStore();
  return (
    <div className="flex flex-col bg-zinc-700/45 rounded-lg p-6 w-full space-y-2">
      <button
        onClick={togglePreviewProfile}
        className="size-40 mx-auto cursor-pointer group relative hover  rounded-full"
      >
        <Image
          src={myself}
          fill
          className="rounded-full object-top object-cover"
          alt="myself"
          quality={90}
          priority
          sizes="100%"
        />
        <div className="absolute group-hover:flex hidden inset-0 bg-zinc-900/50 rounded-full gap-1 flex-col items-center justify-center">
          <TbPhotoSearch className="text-primary text-lg" />
          <h6 className="text-zinc-300 text-xs">Preview Image</h6>
        </div>
      </button>
      <div className="w-full flex flex-col items-center">
        <span className="text-white">I am</span>
        <h1 className="text-primary text-xl poppins-semibold">
          Tristan Vic T. Clarito
        </h1>
        <span className="text-[0.7rem] italic text-zinc-400">
          A Typescript Enthusiast | MERN
        </span>
        <p className="text-zinc-400 text-sm italic text-center mt-2">
          <span className="text-primary">❝</span> Passionate about creating
          efficient and scalable web applications with modern technologies.{" "}
          <span className="text-primary">❞</span>
        </p>
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
        download="my_resume.pdf"
        href="/my_resume.pdf"
        target="_blank"
        className="rounded-2xl px-5 text-white text-sm border border-zinc-700 duration-200 transition-colors bg-primary py-2 cursor-pointer mx-5 text-center"
      >
        Download CV
      </a>
    </div>
  );
}

export default MainInfo;
