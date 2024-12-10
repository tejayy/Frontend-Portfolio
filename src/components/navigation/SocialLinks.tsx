import {Github, Linkedin, Mail} from "lucide-react";

const SocialLinks = () => (
  <>
    <a
      href="https://github.com/tejayy"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/tejasjaybhaye/"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="tejas.jay07@gmail.com"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Mail size={20} />
    </a>
  </>
);

export default SocialLinks;
