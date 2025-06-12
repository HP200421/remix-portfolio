var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/services/email.client
var require_email = __commonJS({
  "empty-module:~/services/email.client"(exports, module) {
    module.exports = {};
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  Layout: () => Layout,
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx2(Outlet, {});
}

// app/routes/_layout.projects.tsx
var layout_projects_exports = {};
__export(layout_projects_exports, {
  default: () => Projects
});

// app/assets/images/bolt.png
var bolt_default = "/build/_assets/bolt-CKTOON3W.png";

// app/assets/images/touchmedia.png
var touchmedia_default = "/build/_assets/touchmedia-HNNFPN2P.png";

// app/assets/images/metron.png
var metron_default = "/build/_assets/metron-ZEHFAWL7.png";

// app/assets/icons/css.svg
var css_default = "/build/_assets/css-MYR6VQCW.svg";

// app/assets/icons/git.svg
var git_default = "/build/_assets/git-ZEYLLGUO.svg";

// app/assets/icons/github.svg
var github_default = "/build/_assets/github-X4LRFICL.svg";

// app/assets/icons/html.svg
var html_default = "/build/_assets/html-JTETXUIP.svg";

// app/assets/icons/javascript.svg
var javascript_default = "/build/_assets/javascript-E6XEUGGF.svg";

// app/assets/icons/nodejs.svg
var nodejs_default = "/build/_assets/nodejs-ZXCJGGRU.svg";

// app/assets/icons/react.svg
var react_default = "/build/_assets/react-YGFAHYZR.svg";

// app/assets/icons/redux.svg
var redux_default = "/build/_assets/redux-34YSXIPW.svg";

// app/assets/icons/tailwindcss.svg
var tailwindcss_default = "/build/_assets/tailwindcss-D53IQMFD.svg";

// app/assets/icons/linkedin.svg
var linkedin_default = "/build/_assets/linkedin-RA44NUE3.svg";

// app/assets/icons/zomato.svg
var zomato_default = "/build/_assets/zomato-S3CEH4DE.svg";

// app/assets/icons/arrow.svg
var arrow_default = "/build/_assets/arrow-NDOLYO63.svg";

// app/assets/icons/contact.svg
var contact_default = "/build/_assets/contact-R56SX332.svg";

// app/assets/icons/mysql.svg
var mysql_default = "/build/_assets/mysql-H276QDYU.svg";

// app/assets/icons/c.svg
var c_default = "/build/_assets/c-XPQUZ2V4.svg";

// app/assets/icons/cpp.svg
var cpp_default = "/build/_assets/cpp-HIIYJS6L.svg";

// app/assets/icons/assistant.svg
var assistant_default = "/build/_assets/assistant-6HNRJP63.svg";

// app/assets/icons/mongodb.svg
var mongodb_default = "/build/_assets/mongodb-TQXQ5CRU.svg";

// app/assets/icons/express.svg
var express_default = "/build/_assets/express-ZIN3BFV3.svg";

// app/assets/icons/todo.svg
var todo_default = "/build/_assets/todo-DL6NYFZD.svg";

// app/assets/icons/remix.svg
var remix_default = "/build/_assets/remix-HOMR5BY4.svg";

// app/assets/icons/docker.webp
var docker_default = "/build/_assets/docker-MTK7FEAM.webp";

// app/assets/icons/bids.svg
var bids_default = "/build/_assets/bids-QZQMYSIR.svg";

// app/assets/icons/building.svg
var building_default = "/build/_assets/building-3ZOZQXCB.svg";

// app/constants/index.ts
var skills = [
  {
    imageUrl: c_default,
    name: "c",
    type: "Programming Language"
  },
  {
    imageUrl: cpp_default,
    name: "cpp",
    type: "Programming Language"
  },
  {
    imageUrl: html_default,
    name: "HTML",
    type: "Frontend"
  },
  {
    imageUrl: css_default,
    name: "CSS",
    type: "Frontend"
  },
  {
    imageUrl: tailwindcss_default,
    name: "Tailwind CSS",
    type: "Frontend"
  },
  {
    imageUrl: javascript_default,
    name: "JavaScript",
    type: "Frontend"
  },
  {
    imageUrl: git_default,
    name: "Git",
    type: "Version Control"
  },
  {
    imageUrl: github_default,
    name: "GitHub",
    type: "Version Control"
  },
  {
    imageUrl: mysql_default,
    name: "MySQL",
    type: "Database"
  },
  {
    imageUrl: react_default,
    name: "React",
    type: "Frontend"
  },
  {
    imageUrl: redux_default,
    name: "Redux",
    type: "State Management"
  },
  {
    imageUrl: remix_default,
    name: "Remix",
    type: "Web Framework"
  },
  {
    imageUrl: docker_default,
    name: "Docker",
    type: "Tool"
  },
  {
    imageUrl: nodejs_default,
    name: "Node.js",
    type: "Backend"
  },
  {
    imageUrl: express_default,
    name: "Express",
    type: "Backend"
  },
  {
    imageUrl: mongodb_default,
    name: "MongoDB",
    type: "Backend"
  }
], experiences = [
  {
    title: "Software Engineer",
    company_name: "Metron Security",
    icon: metron_default,
    iconBg: "#fa8269",
    date: "Jan 2025 - Present",
    points: [
      "Built a Jira Forge app to automate project tracking, improving on-time delivery through real-time monitoring.",
      "Optimized Jira API integrations and built reusable React components, cutting load times by 40% and improving UI performance.",
      "Developed a custom ServiceNow application to efficiently manage network incidents for MSP and enterprise-level customers.",
      "Leveraged ServiceNow dashboards to track Incidents, Alerts, and Licenses per customer."
    ]
  },
  {
    title: "Full Stack Developer",
    company_name: "Touchmedia Ads Software",
    icon: touchmedia_default,
    iconBg: "#99c5ff",
    date: "Dec 2023 - Jan 2025",
    points: [
      "Developed a dynamic admin panel with React.js, implementing secure user authentication and efficient CRUD operations with Axios.",
      "Built the VIT Architecture College website and admin panel, focusing on session management, CRUD operations, and automating data processes.",
      "Created reusable UI components, integrated Firebase push notifications, and managed state using Redux for Bids On Motor website.",
      "Enhanced user experience across projects with React Hook Form, Yup validation, and Toast messaging for seamless interaction."
    ]
  },
  {
    title: "Web Developer",
    company_name: "Bolt IOT",
    icon: bolt_default,
    iconBg: "#d7f7b0",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Proficient in HTML, CSS, and JavaScript, with a focus on developing interactive and responsive web applications.",
      "Specialized expertise in React.js, demonstrating the ability to build efficient and dynamic user interfaces for web projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Experienced in implementing responsive design principles, ensuring optimal user experiences across various devices and screen sizes."
    ]
  }
], socialLinks = [
  {
    name: "Contact",
    iconUrl: contact_default,
    link: "/contact"
  },
  {
    name: "GitHub",
    iconUrl: github_default,
    link: "https://github.com/HP200421"
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin_default,
    link: "https://www.linkedin.com/in/haridas-pawar/"
  }
], projects = [
  {
    iconUrl: zomato_default,
    theme: "btn-back-red",
    projectType: "Personal",
    name: "Zomato Landing Page",
    description: "A replica of the Zomato landing page, showcasing various restaurants and food options. This project focuses on the frontend implementation using HTML and CSS.",
    link: "https://hp200421.github.io/Zomato_Landing_Page/"
  },
  {
    iconUrl: assistant_default,
    theme: "btn-back-yellow",
    projectType: "Personal",
    name: "Desktop Assistant",
    description: "Desktop Assistant is a voice-controlled AI assistant that performs various tasks based on user voice commands. The OpenAI GPT-3.5 API for natural language understanding and generation.",
    link: "https://github.com/HP200421/Desktop-Assistant"
  },
  {
    iconUrl: todo_default,
    theme: "btn-back-blue",
    projectType: "Professional",
    name: "Doctor Appointment",
    description: "Developed a website for booking doctor appointments and Implemented features for OTP via WhatsApp, mobile number, and email confirmation to enhance user experience.",
    link: "https://appointment.touchmediaads.com/drshibli"
  },
  {
    iconUrl: bids_default,
    theme: "btn-back-orange",
    projectType: "Professional",
    name: "Bids On Motor Admin Panel",
    description: "Developed an interactive website and user-friendly admin panel, leveraging ReactJS for dynamic and reusable UI component. Integrated Firebase push notifications for Admin Panel."
  },
  {
    iconUrl: building_default,
    theme: "btn-back-yellow",
    projectType: "Professional",
    name: "Archtype",
    description: "Built an architecture portfolio website with a custom admin panel for content management, enabling seamless updates for projects, blogs, and media.",
    link: "https://www.archtype.in/"
  }
];

// app/routes/_layout.projects.tsx
import { Link as Link2 } from "@remix-run/react";

// app/components/cta.tsx
import { Link } from "@remix-run/react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function CTA() {
  return /* @__PURE__ */ jsxs2("section", { className: "cta", children: [
    /* @__PURE__ */ jsxs2("p", { className: "cta-text", children: [
      "Have a project in mind?",
      /* @__PURE__ */ jsx3("br", { className: "sm:block hidden" }),
      "Let's build something together!"
    ] }),
    /* @__PURE__ */ jsx3(Link, { to: "/contact", className: "btn", children: "Contact" })
  ] });
}

// app/routes/_layout.projects.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Projects() {
  return /* @__PURE__ */ jsxs3("section", { className: "max-container", children: [
    /* @__PURE__ */ jsxs3("h1", { className: "head-text ", children: [
      "My",
      " ",
      /* @__PURE__ */ jsx4("span", { className: "blue-gradient_text font-semibold drop-shadow", children: "Projects" })
    ] }),
    /* @__PURE__ */ jsx4("div", { className: "mt-5 flex flex-col gap-3 text-slate-600", children: /* @__PURE__ */ jsx4("p", { children: "Passionate about turning ideas into reality, my projects reflect a commitment to creativity, problem-solving, and technical proficiency." }) }),
    /* @__PURE__ */ jsx4("div", { className: "flex flex-wrap my-20 gap-16", children: projects.map((project) => /* @__PURE__ */ jsxs3("div", { className: "lg:w-[400px] w-full relative", children: [
      /* @__PURE__ */ jsxs3("div", { className: "block-container w-12 h-12", children: [
        /* @__PURE__ */ jsx4("div", { className: `btn-back rounded-xl ${project.theme}` }),
        /* @__PURE__ */ jsx4("div", { className: "btn-front rounded-xl flex justify-center items-center", children: /* @__PURE__ */ jsx4(
          "img",
          {
            src: project.iconUrl,
            alt: "Project Icon",
            className: "w-1/2 h-1/2 object-contain"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx4("p", { className: "px-3 py-1 absolute right-[10px] top-2 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-semibold text-sm shadow-md", children: project.projectType }),
      /* @__PURE__ */ jsxs3("div", { className: "mt-5 flex flex-col", children: [
        /* @__PURE__ */ jsx4("h4", { className: "text-2xl font-poppins font-semibold", children: project.name }),
        /* @__PURE__ */ jsx4("p", { className: "mt-2 text-slate-600", children: project.description }),
        /* @__PURE__ */ jsx4("div", { className: "mt-5 flex items-center gap-2 font-poppins", children: project.link && /* @__PURE__ */ jsxs3(Fragment, { children: [
          /* @__PURE__ */ jsx4(
            Link2,
            {
              to: project.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "font-semibold text-blue-600",
              children: "Live Demo"
            }
          ),
          /* @__PURE__ */ jsx4(
            "img",
            {
              src: arrow_default,
              alt: "arrow",
              className: "w-4 h-4 object-contain"
            }
          )
        ] }) })
      ] })
    ] }, project.name)) }),
    /* @__PURE__ */ jsx4("hr", { className: "border-slate-200" }),
    /* @__PURE__ */ jsx4(CTA, {})
  ] });
}

// app/routes/_layout.contact.tsx
var layout_contact_exports = {};
__export(layout_contact_exports, {
  default: () => Contact
});
import { useRef } from "react";
import { useForm } from "react-hook-form";

// app/hooks/useAlert.ts
import { useState } from "react";
var useAlert = () => {
  let [alert, setAlert] = useState({
    show: !1,
    text: "",
    type: "danger"
  });
  return { alert, showAlert: ({
    text,
    type = "danger"
  }) => {
    setAlert({
      show: !0,
      text,
      type
    });
  }, hideAlert: () => {
    setAlert({
      show: !1,
      text: "",
      type: "danger"
    });
  } };
}, useAlert_default = useAlert;

// app/components/alert.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Alert({ type, text }) {
  return /* @__PURE__ */ jsx5("div", { className: "absolute top-10 left-0 right-0 flex justify-center items-center", children: /* @__PURE__ */ jsxs4(
    "div",
    {
      className: `${type === "danger" ? "bg-red-800" : "bg-blue-800"} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`,
      role: "alert",
      children: [
        /* @__PURE__ */ jsx5(
          "p",
          {
            className: `${type === "danger" ? "bg-red-500" : "bg-blue-500"} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`,
            children: type === "danger" ? "Failed" : "Success"
          }
        ),
        /* @__PURE__ */ jsx5("p", { className: "mr-2 text-left", children: text })
      ]
    }
  ) });
}

// app/routes/_layout.contact.tsx
var import_email = __toESM(require_email(), 1);
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Contact() {
  let formRef = useRef(null), { alert, showAlert, hideAlert } = useAlert_default(), { register, handleSubmit, reset } = useForm(), onSubmit = async (data) => {
    try {
      await (0, import_email.sendEmail)({
        to_name: "Haridas",
        // Your name or recipient name
        from_name: data.name,
        from_email: data.email,
        message: data.message
      }), showAlert({
        type: "success",
        text: "Message sent successfully!"
      }), reset();
    } catch (error) {
      showAlert({
        type: "danger",
        text: "Failed to send message. Please try again."
      }), console.error("Email sending error:", error);
    }
  };
  return /* @__PURE__ */ jsxs5("section", { className: "relative flex lg:flex-row flex-col max-container", children: [
    alert.show && /* @__PURE__ */ jsx6(Alert, { ...alert }),
    /* @__PURE__ */ jsxs5("div", { className: "flex-1 min-w-[50%] flex flex-col", children: [
      /* @__PURE__ */ jsx6("h1", { className: "head-text", children: "Get in Touch" }),
      /* @__PURE__ */ jsxs5(
        "form",
        {
          ref: formRef,
          onSubmit: handleSubmit(onSubmit),
          className: "w-full flex flex-col gap-7 mt-14",
          children: [
            /* @__PURE__ */ jsxs5("label", { className: "text-black-500 font-semibold", children: [
              "Name",
              /* @__PURE__ */ jsx6(
                "input",
                {
                  type: "text",
                  className: "input",
                  placeholder: "John",
                  required: !0,
                  ...register("name")
                }
              )
            ] }),
            /* @__PURE__ */ jsxs5("label", { className: "text-black-500 font-semibold", children: [
              "Email",
              /* @__PURE__ */ jsx6(
                "input",
                {
                  type: "email",
                  className: "input",
                  placeholder: "John@gmail.com",
                  ...register("email"),
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ jsxs5("label", { className: "text-black-500 font-semibold", children: [
              "Message",
              /* @__PURE__ */ jsx6(
                "textarea",
                {
                  ...register("message"),
                  rows: 4,
                  className: "textarea",
                  placeholder: "Write your message here...",
                  required: !0
                }
              )
            ] }),
            /* @__PURE__ */ jsx6("button", { type: "submit", className: "btn", children: "Submit" })
          ]
        }
      )
    ] })
  ] });
}

// app/routes/_layout.about.tsx
var layout_about_exports = {};
__export(layout_about_exports, {
  default: () => About
});
import pkg from "react-vertical-timeline-component";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var { VerticalTimeline, VerticalTimelineElement } = pkg;
function About() {
  return /* @__PURE__ */ jsxs6("section", { className: "max-container", children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx7("h3", { className: "subhead-text", children: "My Skills" }),
      /* @__PURE__ */ jsx7("div", { className: "mt-16 flex flex-wrap gap-12", children: skills.map(
        (skill) => /* @__PURE__ */ jsxs6("div", { className: "block-container w-20 h-20", children: [
          /* @__PURE__ */ jsx7("div", { className: "btn-back rounded-xl" }),
          /* @__PURE__ */ jsx7("div", { className: "btn-front rounded-xl flex justify-center items-center", children: /* @__PURE__ */ jsx7(
            "img",
            {
              src: skill.imageUrl,
              alt: skill.name,
              className: "w-1/2 h-1/2 object-contain"
            }
          ) })
        ] }, skill.name)
      ) })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: "py-16", children: [
      /* @__PURE__ */ jsx7("h3", { className: "subhead-text", children: "Work Experience" }),
      /* @__PURE__ */ jsx7("div", { className: "mt-5 flex flex-col gap-3 text-slate-600", children: /* @__PURE__ */ jsxs6("p", { children: [
        "I've worked out with Touchmedia Ads Software and currently working in ",
        /* @__PURE__ */ jsx7("b", { children: " Metron Security" }),
        ", leveling up my skills and teaming up with smart people. Here's the rundown:"
      ] }) }),
      /* @__PURE__ */ jsx7("div", { className: "mt-12 flex", children: /* @__PURE__ */ jsx7(VerticalTimeline, { children: experiences.map(
        (experience) => /* @__PURE__ */ jsxs6(
          VerticalTimelineElement,
          {
            visible: !0,
            date: experience.date,
            icon: /* @__PURE__ */ jsx7("div", { className: "flex justify-center items-center w-full h-full", children: /* @__PURE__ */ jsx7(
              "img",
              {
                src: experience.icon,
                alt: experience.company_name,
                className: "w-[60%] h-[60%] object-contain"
              }
            ) }),
            iconStyle: { background: experience.iconBg },
            contentStyle: {
              borderBottom: "8px",
              borderStyle: "solid",
              borderBottomColor: experience.iconBg,
              boxShadow: "none"
            },
            children: [
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx7("h3", { className: "text-black text-xl font-poppins font-semibold", children: experience.title }),
                /* @__PURE__ */ jsx7(
                  "p",
                  {
                    className: "text-black-500 font-medium font-base",
                    style: { margin: 0 },
                    children: experience.company_name
                  }
                )
              ] }),
              /* @__PURE__ */ jsx7("ul", { className: "my-5 list-disc ml-5 space-y-2", children: experience.points.map(
                (point, index) => /* @__PURE__ */ jsx7(
                  "li",
                  {
                    className: "text-blacl-500/50 font-normal pl-1 text-sm",
                    children: point
                  },
                  "experience-point-${index}"
                )
              ) })
            ]
          },
          experience.company_name
        )
      ) }) })
    ] }),
    /* @__PURE__ */ jsx7("hr", { className: "border-slate-200" }),
    /* @__PURE__ */ jsx7(CTA, {})
  ] });
}

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => Layout2
});
import { Outlet as Outlet2 } from "@remix-run/react";

// app/components/navbar.tsx
import { NavLink } from "@remix-run/react";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function Navbar() {
  return /* @__PURE__ */ jsxs7("header", { className: "header", children: [
    /* @__PURE__ */ jsx8(
      NavLink,
      {
        to: "/",
        className: "w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md",
        children: /* @__PURE__ */ jsx8("p", { className: "blue-gradient_text", children: "HP" })
      }
    ),
    /* @__PURE__ */ jsxs7("nav", { className: "flex text-lg gap-7 font-medium", children: [
      /* @__PURE__ */ jsx8(
        NavLink,
        {
          to: "/about",
          className: ({ isActive }) => isActive ? "text-blue-500" : "text-black",
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx8(
        NavLink,
        {
          to: "/projects",
          className: ({ isActive }) => isActive ? "text-blue-500" : "text-black",
          children: "Projects"
        }
      ),
      /* @__PURE__ */ jsx8(
        NavLink,
        {
          to: "/contact",
          className: ({ isActive }) => isActive ? "text-blue-500" : "text-black",
          children: "Contact"
        }
      )
    ] })
  ] });
}

// app/components/footer.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function Footer() {
  return /* @__PURE__ */ jsxs8("footer", { className: "footer font-poppins", children: [
    /* @__PURE__ */ jsx9("hr", { className: "border-slate-200" }),
    /* @__PURE__ */ jsxs8("div", { className: "footer-container", children: [
      /* @__PURE__ */ jsxs8("p", { children: [
        "\xA9 ",
        /* @__PURE__ */ jsx9("strong", { children: "Haridas Pawar" }),
        ". All rights reserved."
      ] }),
      /* @__PURE__ */ jsx9("div", { className: "flex gap-3 justify-center items-center", children: socialLinks.map((link) => /* @__PURE__ */ jsx9(Link3, { to: link.link, target: "_blank", children: /* @__PURE__ */ jsx9(
        "img",
        {
          src: link.iconUrl,
          alt: link.name,
          className: "w-6 h-6 object-contain"
        }
      ) }, link.name)) })
    ] })
  ] });
}

// app/routes/_layout.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function Layout2() {
  return /* @__PURE__ */ jsxs9("main", { className: "bg-slate-300/20", children: [
    /* @__PURE__ */ jsx10(Navbar, {}),
    /* @__PURE__ */ jsx10(Outlet2, {}),
    /* @__PURE__ */ jsx10(Footer, {})
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});

// app/routes/_home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function Home() {
  return /* @__PURE__ */ jsxs10("main", { className: "bg-slate-300/20", children: [
    /* @__PURE__ */ jsx11(Navbar, {}),
    /* @__PURE__ */ jsxs10("section", { className: "max-container", children: [
      /* @__PURE__ */ jsxs10("h1", { className: "head-text mt-40", children: [
        " ",
        "Hello, I'm",
        " ",
        /* @__PURE__ */ jsx11("span", { className: "blue-gradient_text font-semibold drop-shadow", children: "Haridas Pawar" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs10("p", { className: "text-lg mt-10 text-gray-700 text-justify leading-relaxed mb-4", children: [
        "A passionate ",
        /* @__PURE__ */ jsx11("b", { children: "Full Stack Developer" }),
        " with expertise in modern web technologies. I love creating innovative solutions and turning ideas into reality through clean, efficient code. Always eager to learn new technologies and take on challenging projects."
      ] }),
      /* @__PURE__ */ jsx11("hr", {})
    ] }),
    /* @__PURE__ */ jsx11(Footer, {})
  ] });
}

// app/routes/_index.tsx
import { Fragment as Fragment2, jsx as jsx12 } from "react/jsx-runtime";
function Index() {
  return /* @__PURE__ */ jsx12(Fragment2, { children: /* @__PURE__ */ jsx12(Home, {}) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-A7MG6QLI.js", imports: ["/build/_shared/chunk-JPC33ENL.js", "/build/_shared/chunk-DLUJ32DX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XUS6YUDR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_home": { id: "routes/_home", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_home-I7BRHXTP.js", imports: ["/build/_shared/chunk-TJCZMIOA.js", "/build/_shared/chunk-RR6PNJV5.js", "/build/_shared/chunk-BRBRVWTL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-D5REFECQ.js", imports: ["/build/_shared/chunk-TJCZMIOA.js", "/build/_shared/chunk-RR6PNJV5.js", "/build/_shared/chunk-BRBRVWTL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-RM5VBJH2.js", imports: ["/build/_shared/chunk-RR6PNJV5.js", "/build/_shared/chunk-BRBRVWTL.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.about": { id: "routes/_layout.about", parentId: "routes/_layout", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.about-3KPITOG4.js", imports: ["/build/_shared/chunk-2BUFGQM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.contact": { id: "routes/_layout.contact", parentId: "routes/_layout", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.contact-3CCFCD2L.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_layout.projects": { id: "routes/_layout.projects", parentId: "routes/_layout", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.projects-NTQAJHCR.js", imports: ["/build/_shared/chunk-2BUFGQM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "febd4f9b", hmr: void 0, url: "/build/manifest-FEBD4F9B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_layout.projects": {
    id: "routes/_layout.projects",
    parentId: "routes/_layout",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: layout_projects_exports
  },
  "routes/_layout.contact": {
    id: "routes/_layout.contact",
    parentId: "routes/_layout",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: layout_contact_exports
  },
  "routes/_layout.about": {
    id: "routes/_layout.about",
    parentId: "routes/_layout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: layout_about_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/_home": {
    id: "routes/_home",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
