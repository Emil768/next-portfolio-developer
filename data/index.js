import {
  GithubFinderIcon,
  NextPortfolioIcon,
  React_comixIcon,
  React_notesIcon,
  ShopIcon,
  TrelloIcon,
  VKLoaderIcon,
} from "public/img";

export const skills = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "ReactJs",
  "NextJs",
  "Typescript",
  "NodeJs",
  "Redux",
  "Zustand",
  "SWR",
  "MongoDB",
  "ExpressJs",
  "GIT",
  "SEO",
  "Figma",
];

export const projects = [
  {
    preview: NextPortfolioIcon,
    title: "Next Portfolio-courses 🌍",
    text: "My long-term project, which I did completely from scratch, and I am very pleased with it. The appendix implemented: authorization, registration, add test, TOP tests of the test, comments and a lot of interesting 👌.",
    tags: [
      "ReactJs",
      "Typescript",
      "NextJs",
      "SWR",
      "Zustand",
      "NodeJs",
      "Axios",
      "MongoDB",
      "Express",
      "Cloudinary",
      "JWT",
      "Bcrypt",
    ],
    youtube: "https://youtu.be/fFeWCmT8N34",
    link: "https://next-porfolio-courses.vercel.app/tests",
    gitLink: "https://github.com/EmilMurahas228/next-porfolio-courses",
  },
  {
    preview: React_notesIcon,
    title: "React-notes 📒",
    text: "An application where each user can write their own note. The application implements: authorization, registration and adding notes.",
    tags: [
      "ReactJs",
      "NodeJs",
      "Redux-toolkit",
      "React-redux",
      "Axios",
      "MongoDB",
      "Express",
      "Cloudinary",
      "JWT",
      "Bcrypt",
    ],
    youtube: "https://www.youtube.com/watch?v=4k2BAI6sUro",
    link: "https://mern-notes-frontend.vercel.app/",
    gitLink: "https://github.com/EmilMurahas228/mern-notes-frontend",
  },

  {
    preview: React_comixIcon,
    title: "React-comix 🛒",
    text: "The application where the interaction of json server with the react application is implemented, in other things it turned out, I think it turned out well.",
    tags: [
      "ReactJs",
      "NodeJs",
      "Redux-toolkit",
      "Typescript",
      "JSON-server",
      "Axios",
    ],
    youtube: "https://youtu.be/jMoqcv50YTk",
    link: "https://react-comix-v-2.vercel.app/",
    gitLink: "https://github.com/EmilMurahas228/react-comix-v.2",
  },

  {
    preview: ShopIcon,
    title: "Internet-shop 🛒",
    text: "My first online store. The application mainly implements layout, but even so it turned out to be quite voluminous.",
    tags: ["HTML", "CSS", "Javascript"],
    youtube: "https://youtu.be/SyyN3Ff0aiI",
    link: "https://internet-shop-six.vercel.app/",
    gitLink: "https://github.com/EmilMurahas228/react-internet-shop",
  },

  {
    preview: GithubFinderIcon,
    title: "Github-finder 🔎",
    text: "My first typescript application. Pretty simple and at the same time informative application.",
    tags: ["ReactJs", "Typescript", "GithubApi"],
    youtube: "https://youtu.be/42UE1EwNBB0",
    link: "https://github-finder-psi-nine.vercel.app/",
    gitLink: "https://github.com/EmilMurahas228/github-finder",
  },

  {
    preview: VKLoaderIcon,
    title: "VK-loader 📂",
    text: "Application inspired by the files tab in vk.com.Of course, this is not a social network where files play a significant role, but I think it turned out to be a pretty good copy!",
    tags: ["ReactJs", "NodeJs", "Express", "Multer"],
    youtube: "https://youtu.be/rqeKnopTt28",
    link: "https://emilmurahas228.github.io/vk-loader/",
    gitLink: "https://github.com/EmilMurahas228/vk-loader",
  },

  {
    preview: TrelloIcon,
    title: "Trello 📝",
    text: "Probably there is no such person who did not make todo application there, so I also decided to do something similar, only using native tools.",
    tags: ["HTML", "CSS", "Javascript"],
    youtube: "https://youtu.be/xjGsgZEMCZw",
    link: "https://emilmurahas228.github.io/Trello-clone-js/",
    gitLink: "https://github.com/EmilMurahas228/Trello-clone-js",
  },
];
