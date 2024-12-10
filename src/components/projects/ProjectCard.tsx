import {ExternalLink, Github} from "lucide-react";
import {Project} from "../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({project}: ProjectCardProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <a
          href={project.githubUrl}
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github size={20} className="mr-2" />
          Code
        </a>
        <a
          href={project.liveUrl}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
