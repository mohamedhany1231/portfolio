import Project from "../types/project";

export const projectsData: Project[] = [
  {
    title: "Teddy vile (demo project)",
    description:
      "E-commerce project to practice graphQL, postgresSql and integrate paypal payment",
    skills: ["Express js", "postgresSql", "graphQL", "react", "tailwind"],
    img: "projects/teddy.png",
    links: {
      back: "https://github.com/mohamedhany1231/teddy-back",
      front: "https://github.com/mohamedhany1231/teddy-front",
      live: "https://teddy-front-tau.vercel.app/",
    },
  },
  {
    title: "CAA supplements store",
    description: "E-commerce free lance project for supplements store",
    skills: ["Express js", "mongoDb", "next js", "tailwind"],
    img: "projects/caa.png",
    links: {
      live: "https://caa-front.vercel.app/",
      front: "https://github.com/mohamedhany1231/caa-front",
      back: "https://github.com/mohamedhany1231/caa-back",
    },
  },
  {
    title: "Smart Solar",
    description:
      "responsive dashboard for smart solar panel readings tracking, collaborated with embedded systems engineer to handle communication between hardware and api",
    skills: ["React", "Express js", "Mongo DB", "Tailwind"],
    img: "./projects/solar.jpeg",
    links: {
      front: "https://github.com/mohamedhany1231/solar_front",
      back: "https://github.com/mohamedhany1231/solar-back",
      live: "https://solar-front-theta.vercel.app/",
      video:
        "https://www.linkedin.com/feed/update/urn:li:activity:7237116938588459009/",
    },
  },
  {
    title: "chat App",
    description:
      "chatting website featuring real-time user-to-user and group conversations, complete with typing alerts to enhance interaction.",
    skills: ["React", "Express js", "socket.io", "Tailwind", "prisma"],
    img: "projects/chat.png",
    links: {
      video:
        "https://www.linkedin.com/feed/update/urn:li:activity:7243580997257056256/",
      front: "https://github.com/mohamedhany1231/chat_front",
      back: "https://github.com/mohamedhany1231/chat_server",
    },
  },
  {
    title: "Book store api",
    description:
      "Building an API for a bookstore, I collaborated closely with a front-end developer to deliver a seamless and well-integrated website experience.",
    skills: ["Express js", "Mongo DB"],
    img: "projects/book.png",
    links: { back: "https://github.com/mohamedhany1231/Ecomerce/" },
  },
];
