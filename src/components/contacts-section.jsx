/* eslint-disable no-unused-vars */
// Example: src/components/ContactSection.jsx
import contactLinks from "@/data/contactlinks";
import { Icon } from "lucide-react";
const ContactSection = () => {
  return (
    <section id="contact">
      <div className="contact-me">
        <h1 className="headings">CONTACT ME</h1>
        <p className="descriptions">Follow me On</p>
        <div className="flex flex-row">
          {contactLinks.map(({ id, link, icon: Icon, label }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={40} className="h-10 flex m-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
