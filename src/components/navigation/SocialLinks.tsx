import {Github, Linkedin, Mail} from "lucide-react";

const SocialLinks = () => (
  <>
    <a
      href="https://github.com"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Github size={20} />
    </a>
    <a
      href="https://linkedin.com"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="mailto:contact@example.com"
      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <Mail size={20} />
    </a>
  </>
);

export default SocialLinks;
