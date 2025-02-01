import {Code, Layout, Database, Terminal, Cloud, Container} from "lucide-react";
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
  {
    title: "Cloud / AWS",
    icon: <Cloud className="w-6 h-6" />, // You can add an appropriate icon here
    skills: ["AWS EC2", "AWS S3", "AWS Lambda", "AWS RDS", "AWS CloudFormation", "AWS API Gateway", "AWS IAM"],
  },
  {
    title: "DevOps",
    icon: <Container className="w-6 h-6" />,
    skills: ["Linux", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
  },
]
