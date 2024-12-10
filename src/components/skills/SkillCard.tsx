import {SkillCategory} from "../../types";

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard = ({category}: SkillCardProps) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
        {category.icon}
      </div>
      <h3 className="text-xl font-bold dark:text-white">{category.title}</h3>
    </div>
    <ul className="space-y-2">
      {category.skills.map((skill, i) => (
        <li
          key={i}
          className="flex items-center text-gray-700 dark:text-gray-300"
        >
          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
