import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#1A1A1A] grid sm:grid-cols-2 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="ml-2 w-full h-full flex justify-center items-center">
        <Image
          src={project.image}
          className="object-cover rounded-xl"
          width={300}
          height={100}
          alt="Project Image"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-zinc-300">{project.name}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
          {project.description}
        </p>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {project.tools}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 cursor-pointer rounded-lg w-full h-full px-4 py-2 mt-6">
          {project.link && (
            <a href={project.link} target="_blank">
              <HiMiniArrowRightEndOnRectangle className="text-white w-10 h-8" />
            </a>
          )}
          {project.github && (
            <Link href={project.github} target="_blank">
              {project.name === "RA Plumbing and Heating" ? (
                <TiDocumentText className="text-white w-10 h-8" />
              ) : (
                <FaGithub className="text-white w-10 h-8" />
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
