import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
