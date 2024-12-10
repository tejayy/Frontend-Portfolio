export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}
