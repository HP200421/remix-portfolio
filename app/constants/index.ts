import { salesforce, bolt, touchmedia, metron } from "../assets/images";
import {
  contact,
  css,
  quiz,
  git,
  github,
  html,
  javascript,
  linkedin,
  nodejs,
  zomato,
  react,
  redux,
  weather,
  assistant,
  tailwindcss,
  mysql,
  c,
  cpp,
  analysis,
  metaverse,
  express,
  mongodb,
  todo,
  remix,
  docker,
} from "../assets/icons";

export interface skillsList {
  imageUrl: string;
  name: string;
  type: string;
}

export const skills: skillsList[] = [
  {
    imageUrl: c,
    name: "c",
    type: "Programming Language",
  },
  {
    imageUrl: cpp,
    name: "cpp",
    type: "Programming Language",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: remix,
    name: "Remix",
    type: "Web Framework",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Tool",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Metron Security",
    icon: metron,
    iconBg: "#fa8269",
    date: "Jan 2025 - Present",
    points: [
      "Developed a dynamic admin panel with React.js, implementing secure user authentication and efficient CRUD operations with Axios.",
      "Built the VIT Architecture College website and admin panel, focusing on session management, CRUD operations, and automating data processes.",
      "Created reusable UI components, integrated Firebase push notifications, and managed state using Redux for Bids On Motor website.",
      "Enhanced user experience across projects with React Hook Form, Yup validation, and Toast messaging for seamless interaction.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Touchmedia Ads Software",
    icon: touchmedia,
    iconBg: "#99c5ff",
    date: "Dec 2023 - Jan 2025",
    points: [
      "Developed a dynamic admin panel with React.js, implementing secure user authentication and efficient CRUD operations with Axios.",
      "Built the VIT Architecture College website and admin panel, focusing on session management, CRUD operations, and automating data processes.",
      "Created reusable UI components, integrated Firebase push notifications, and managed state using Redux for Bids On Motor website.",
      "Enhanced user experience across projects with React Hook Form, Yup validation, and Toast messaging for seamless interaction.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Bolt IOT",
    icon: bolt,
    iconBg: "#d7f7b0",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Proficient in HTML, CSS, and JavaScript, with a focus on developing interactive and responsive web applications.",
      "Specialized expertise in React.js, demonstrating the ability to build efficient and dynamic user interfaces for web projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Experienced in implementing responsive design principles, ensuring optimal user experiences across various devices and screen sizes.",
    ],
  },
  {
    title: "Salesforce Developer",
    company_name: "Salesforce",
    icon: salesforce,
    iconBg: "#99d8f2",
    date: "Oct 2022 - Dec 2023",
    points: [
      "Completed the Smart Bridge Salesforce Supported Virtual Internship Program, accredited by AICTE.",
      "Acquired comprehensive knowledge of Salesforce products and services through hands-on experience in Salesforce development.",
      "Successfully accomplished a Salesforce certification and earned super badges on the Salesforce Trailblazer Platform.",
      "Engaged in practical application of Salesforce skills during the internship, contributing to real-world projects and solutions.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/HP200421",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/haridas-pawar/",
  },
];

export const projects = [
  {
    iconUrl: zomato,
    theme: "btn-back-red",
    name: "Zomato Landing Page",
    description:
      "A replica of the Zomato landing page, showcasing various restaurants and food options. This project focuses on the frontend implementation using HTML and CSS.",
    link: "https://hp200421.github.io/Zomato_Landing_Page/",
  },
  {
    iconUrl: metaverse,
    theme: "btn-back-green",
    name: "Metaverse Explore",
    description:
      "A captivating Metaverse-themed React application built using the Next.js framework, Tailwind CSS for responsive design, and Framer Motion library for stunning animations.",
    link: "https://metaverseexplore.netlify.app/",
  },
  {
    iconUrl: todo,
    theme: "btn-back-purple",
    name: "TODO Application",
    description:
      "TODO Application is a simple to-do list application built using React, Context API and Tailwind CSS. It allows users to add, edit, delete tasks and can mark them as completed.",
    link: "https://manage-todo-daily.netlify.app/",
  },
  {
    iconUrl: assistant,
    theme: "btn-back-yellow",
    name: "Desktop Assistant",
    description:
      "Desktop Assistant is a voice-controlled AI assistant that performs various tasks based on user voice commands. The OpenAI GPT-3.5 API for natural language understanding and generation.",
    link: "https://github.com/HP200421/Desktop-Assistant",
  },
  {
    iconUrl: weather,
    theme: "btn-back-blue",
    name: "Weather Application",
    description:
      "A one-page weather website providing temperature, humidity, wind information, and sunrise/sunset details for specified cities using Weather API.",
    link: "https://hp200421.github.io/Weather_Application/",
  },
  {
    iconUrl: analysis,
    theme: "btn-back-black",
    name: "Hotel Booking Sentiment Analysis",
    description:
      "A Python project employing data visualization to analyze trends in hotel booking cancellations, offering valuable insights for informed decision-making by hotel managers and stakeholders.",
    link: "https://github.com/HP200421/Analysis_of_Hotel_Booking_Cancellation",
  },
];
