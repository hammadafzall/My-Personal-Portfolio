import ProjectCard from "./ProjectCard";

const ProjectsList = [
  {
    name: "RA Plumbing and Heating",
    description:
      "Web app for a Nottingham-based business. The design features descriptive content paired with relevant images, creating a visually engaging and informative user experience.",
    tools:
      "React, TypeScript, Tailwind, Swiper.Js, React Router, Google Maps, Helmet, NPM Packages",
    image: "/plumbing.JPG",
    link: "https://randaplumbing.netlify.app/",
    github: "/technicaloverview",
  },
  {
    name: "Task Box",
    description:
      "Task-box is based on time boxing technique. Simple and appealing design to increase productivity on a daily basis.",
    tools:
      "Next.js-14, Tailwind, TypeScript, Mongoose, JWT, Bcrypt, Full Calendar, Axios, Redux",
    image: "/task-box.JPG",
    link: "https://task-box-app.vercel.app/",
    github: "https://github.com/hammad42662/time_box_app",
  },
  {
    name: "Personal Portfolio",
    description: "Developed my  portfolio to showcase skills and experience.",
    tools: "Next.js-14, Tailwind, JavaScript, Node.js, Node Mailer",
    image: "/portfolio.JPG",
    link: "https://hammadafzal.vercel.app/",
    github: "https://github.com/hammad42662/My-Personal-Portfolio",
  },
  {
    name: "Big Phone Store",
    description:
      "Created an Amazon-like product page with zoom image functionality using Vue.js that works on large small and touch devices.",
    tools: "Vue, JavaScript, Tailwind",
    image: "/big-phone.JPG",
    link: "https://bigphonestore.netlify.app/",
    github: "https://github.com/hammad42662/vueproductpage",
  },
];

export default function ProjectList() {
  return (
    <ul className="flex flex-row flex-wrap gap-10 justify-center items-center mb-12">
      {ProjectsList.map((project, index) => (
        <li key={index}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
