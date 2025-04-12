import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <div className="min-w-full min-h-full grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
      {projectsData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
