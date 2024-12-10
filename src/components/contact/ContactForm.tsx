const ContactForm = () => (
  <form className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Name
      </label>
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        placeholder="Your name"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Email
      </label>
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        placeholder="your@email.com"
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        Message
      </label>
      <textarea
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        placeholder="Your message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Send Message
    </button>
  </form>
);

export default ContactForm;
