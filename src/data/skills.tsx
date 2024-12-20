import {Code, Layout, Database, Terminal} from "lucide-react";
import {SkillCategory} from "../types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Git", "Webpack", "Docker", "Jest", "CI/CD"],
  },
  {
    title: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"],
  },
];
