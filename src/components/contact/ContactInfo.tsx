import {Mail, Phone, MapPin} from "lucide-react";

const ContactInfo = () => (
  <div>
    <h3 className="text-2xl font-bold mb-6 dark:text-white">
      Contact Information
    </h3>
    <div className="space-y-4">
      <div className="flex items-center">
        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
        <span className="dark:text-gray-300">contact@example.com</span>
      </div>
      <div className="flex items-center">
        <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
        <span className="dark:text-gray-300">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
        <span className="dark:text-gray-300">San Francisco, CA</span>
      </div>
    </div>
  </div>
);

export default ContactInfo;
