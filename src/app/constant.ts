import commuhelpLogo from "../../public/project-logos/commuhelp_logo.png";
import memoryGameLogo from "../../public/project-logos/memory_game_logo.png";
import chitchatLogo from "../../public/project-logos/chitchat_logo.png";
import hangmanLogo from "../../public/project-logos/hangman_logo.svg";
import freshBasketLogo from "../../public/project-logos/fresh_basket_logo.png";
import keepMeLogo from "../../public/project-logos/keepMe_logo.svg";
import personalWebsiteLogo from "../../public/project-logos/personal_website_logo.svg";
export const FEATURED_PROJECTS = [
  {
    name: "CommuHelp",
    date: "April 2025 - April 2026",
    description:
      "A community support platform that provides communication, counseling, and collaboration tools through chat, forums, video counseling, AI assistance, and appointment scheduling.",
    logo: commuhelpLogo,
    type: "Academic Projects",
    technologies: [
      "Next.js",
      "Express.js",
      "Prisma",
      "Socket.io",
      "Grok AI",
      "Twilio",
      "Redis",
    ],
  },
  {
    name: "Portfolio Website",
    date: "May 2026 - Present",
    description:
      "Personal developer portfolio showcasing projects, animations, responsive UI, and modern web development practices. Includes custom branding, interactive sections, and optimized performance.",
    logo: personalWebsiteLogo,
    type: "Personal Projects",
    technologies: ["Next.js", "Tailwind", "DiceBear"],
  },
  {
    name: "ChitChat",
    date: "Aug 2024 - Jan 2025",
    description:
      "A real-time messaging application that supports private, group, and public conversations with live messaging and email notifications.",
    logo: chitchatLogo,
    type: "Personal Projects",
    technologies: [
      "Next.js",
      "Express.js",
      "Mongoose",
      "Socket.io",
      "NextAuth",
    ],
  },

  {
    name: "Fresh Basket",
    date: "May 2025 - June 2025",
    description:
      "An employee-focused Point of Sale (POS) system that streamlines product management, inventory tracking, and cashier transactions through role-based access for cashiers, managers, and administrators.",
    logo: freshBasketLogo,
    type: "Academic Projects",
    technologies: ["React.js", "Laravel", "MySQL"],
  },
  {
    name: "Memory Game",
    date: "April 2024 - Nov 2024",
    type: "Personal Projects",
    description:
      "An interactive card-matching game featuring multiple difficulty levels, mini-games, background music, and a competitive leaderboard system.",
    logo: memoryGameLogo,
    technologies: ["Next.js", "Express.js", "Mongoose", "Figma"],
  },
  {
    name: "Hang Man",
    date: "May 2024",
    type: "Academic Projects",
    description:
      "A programming-themed puzzle game where players solve coding-related questions by arranging shuffled letters before the hostage reaches the maximum danger level.",
    logo: hangmanLogo,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "KeepMe",
    date: "Jan 2024 - March 2024",
    type: "Personal Projects",
    description:
      "A simple and customizable note-taking application that allows users to create, organize, and personalize their notes.",
    logo: keepMeLogo,
    technologies: ["Next.js", "Express.js", "Mongoose", "Tailwind"],
  },
] as const;
