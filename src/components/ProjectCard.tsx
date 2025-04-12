import { FaCode, FaGlobe, FaServer } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import Project from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const { description, img, skills, title } = project;
  return (
    <div className="rounded-2xl shadow-md grid  lg:grid-cols-[2fr_5fr_1fr] overflow-hidden bg-zinc-900/90 backdrop-blur-sm border border-cyan-500/10  group   hover:shadow-cyan-500 transition-shadow  duration-300   ">
      <div className=" group-hover:opacity-100 opacity-60 transition-opacity  overflow-hidden ">
        <img
          className=" max-h-72  h-full w-full  object-cover object-center group-hover:scale-105 transition-transform"
          src={img}
          alt={title}
        />
      </div>

      <div className=" flex flex-col gap-4 lg:justify-between py-4">
        <div className="sm:!p-6 px-4 py-2">
          <h3 className="font-semibold text-xl sm:text-2xl mb-2 text-white  leading-6">
            {title}
          </h3>
          <p className="text-neutral-400 text-base sm:text-lg h-[3lh] line-clamp-3 ">
            {description}
          </p>
        </div>

        <div className="sm:px-6 sm:pt-4 lg:pb-2 px-2  mx-auto lg:mx-0 ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className=" capitalize cursor-default inline-block bg-purple-700/70 rounded-full sm:px-3 sm:py-1 py-0.5 text-sm  px-2 font-semibold text-neutral-300 mr-2 sm:mr-4 mb-2 hover:bg-purple-500/80 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex lg:flex-col gap-2 px-6 py-4 items-center justify-evenly">
        {project.links.video && (
          <a
            href={project.links.video}
            target="_blank"
            rel="noopener noreferrer"
            title="Video Demo"
          >
            <MdOndemandVideo className="text-neutral-100 hover:text-purple-500 transition-colors w-6 h-6 " />
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 hover:text-sky-500 transition-colors"
            title="Live Demo"
          >
            <FaGlobe className="text-neutral-100 hover:text-purple-500 transition-colors w-6 h-6" />
          </a>
        )}
        {project.links.back && (
          <a
            href={project.links.back}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 hover:text-purple-500 transition-colors"
            title="Backend Code"
          >
            <FaServer className="text-neutral-100 hover:text-purple-500 transition-colors w-6 h-6" />
          </a>
        )}
        {project.links.front && (
          <a
            href={project.links.front}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-100 hover:text-sky-500 transition-colors"
            title="Frontend Code"
          >
            <FaCode className="text-neutral-100 hover:text-purple-500 transition-colors w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  );
}
