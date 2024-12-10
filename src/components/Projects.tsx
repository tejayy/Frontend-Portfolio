import ProjectCard from "./projects/ProjectCard";
import {projects} from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
