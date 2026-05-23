import commuhelpLogo from "../../public/project-logos/commuhelp_logo.png";
import memoryGameLogo from "../../public/project-logos/memory_game_logo.png";
import chitchatLogo from "../../public/project-logos/chitchat_logo.png";
import hangmanLogo from "../../public/project-logos/hangman_logo.svg";

export const FEATURED_PROJECTS = [
  {
    name: "CommuHelp",
    date: "May 2026 - Present",
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
    name: "ChitChat",
    date: "Feb 2026 - May 2026",
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
    name: "ChitChat",
    date: "Feb 2026 - May 2026",
    description:
      "A real-time messaging application that supports private, group, and public conversations with live messaging and email notifications.",
    logo: chitchatLogo,
    type: "Academic Projects",
    technologies: [
      "Next.js",
      "Express.js",
      "Mongoose",
      "Socket.io",
      "NextAuth",
    ],
  },
  {
    name: "Memory Game",
    date: "Feb 2026 - May 2026",
    type: "Personal Projects",
    description:
      "An interactive card-matching game featuring multiple difficulty levels, mini-games, background music, and a competitive leaderboard system.",
    logo: memoryGameLogo,
    technologies: ["Next.js", "Express.js", "Mongoose", "Figma"],
  },
  {
    name: "Hang Man",
    date: "Feb 2026 - May 2026",
    type: "Academic Projects",
    description:
      "A programming-themed puzzle game where players solve coding-related questions by arranging shuffled letters before the hostage reaches the maximum danger level.",
    logo: hangmanLogo,
    technologies: ["HTML", "CSS", "Javascript"],
  },
] as const;
