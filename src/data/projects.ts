import {Project} from "../types";

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform built with React and Node.js",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    image:
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Material-UI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with interactive maps",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
