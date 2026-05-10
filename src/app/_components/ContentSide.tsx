import AboutMe from "./content/AboutMe";
import ContactUs from "./content/ContactUs";
import Skills from "./content/Skills";
import Education from "./content/Education";
import Experience from "./content/Experience";
import FeaturedProjects from "./content/FeaturedProjects";

function ContentSide() {
  return (
    <div className="flex space-x-2 items-center w-full md:basis-[60%] scrollbar-hidden lg:basis-[70%] bg-zinc-700/45 md:h-full flex-col p-2 rounded-lg space-y-5 px-5  overflow-y-auto">
      <AboutMe />
      <div className="border-b border-zinc-500/75 w-1/2" />
      <Skills />
      <div className="border-b border-zinc-500/75 w-1/2" />
      <Experience />
      <div className="border-b border-zinc-500/75 w-1/2" />
      <FeaturedProjects />
      <div className="border-b border-zinc-500/75 w-1/2" />
      <Education />
      <div className="border-b border-zinc-500/75 w-1/2" />
      <ContactUs />
    </div>
  );
}

export default ContentSide;
