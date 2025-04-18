import { RefObject } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={ref}
      className="min-w-full min-h-screen grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6"
    >
      {projectsData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
