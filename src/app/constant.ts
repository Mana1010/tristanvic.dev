import commuhelpLogo from "../../public/project-logos/commuhelp_logo.png";
import memoryGameLogo from "../../public/project-logos/memory_game_logo.png";
import chitchatLogo from "../../public/project-logos/chitchat_logo.png";
import hangmanLogo from "../../public/project-logos/hangman_logo.svg";
import freshBasketLogo from "../../public/project-logos/fresh_basket_logo.png";
import keepMeLogo from "../../public/project-logos/keepMe_logo.svg";
import personalWebsiteLogo from "../../public/project-logos/personal_website_logo.svg";
import servioLogo from "../../public/servio_logo.png";
export const FEATURED_PROJECTS = [
  {
    name: "CommuHelp",
    date: "April 2025 - April 2026",
    description:
      "A community support platform that provides communication, counseling, and collaboration tools through chat, forums, video counseling, AI assistance, and appointment scheduling.",
    logo: commuhelpLogo,
    type: "Academic Projects",
    status: "Live",
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
    status: "Live",
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
    status: "Live",
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
    status: "Local",
    technologies: ["React.js", "Laravel", "MySQL"],
  },
  {
    name: "Memory Game",
    date: "April 2024 - Nov 2024",
    type: "Personal Projects",
    status: "Live",
    description:
      "An interactive card-matching game featuring multiple difficulty levels, mini-games, background music, and a competitive leaderboard system.",
    logo: memoryGameLogo,
    technologies: ["Next.js", "Express.js", "Mongoose", "Figma"],
  },
  {
    name: "Hang Man",
    date: "May 2024",
    type: "Academic Projects",
    status: "Live",
    description:
      "A programming-themed puzzle game where players solve coding-related questions by arranging shuffled letters before the hostage reaches the maximum danger level.",
    logo: hangmanLogo,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "KeepMe",
    date: "Jan 2024 - March 2024",
    type: "Personal Projects",
    status: "Live",
    description:
      "A simple and customizable note-taking application that allows users to create, organize, and personalize their notes.",
    logo: keepMeLogo,
    technologies: ["Next.js", "Express.js", "Mongoose", "Tailwind"],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "SERVIO Technologies",
    date: "May 2026 - Present",
    position: "Intern",
    logo: servioLogo,
    description: `Intern focused on ERPNext and Frappe infrastructure operations, assisting in DevOps-related tasks including consolidation of sandbox environments into a centralized DigitalOcean droplet deployment. Worked with containerized environments, deployment configurations, and server-side setup to support ERP system operations and environment management.
        
      `,
  },
  {
    company: "SERVIO Technologies",
    date: "Feb 2026 - May 2026",
    position: "OJT Trainee",
    logo: servioLogo,
    description: `
OJT Trainee focused on ERPNext and Frappe operations, contributing to ERP customization, BIR source mapping, accounting investigations, and system testing. Worked on 200+ journal and GL entry corrections, created training module outlines and presentation materials, and assisted in ERP accounting validation and documentation.
      `,
  },
] as const;
