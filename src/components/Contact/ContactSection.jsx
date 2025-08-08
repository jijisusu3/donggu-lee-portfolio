import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactItem from "./ContactItem";
import { contactItems } from "../../data/contact";

function ContactSection() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const apiPublicKey = import.meta.env.VITE_PUBLIC_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.current.from_name.value,
          email: form.current.email.value,
          message: form.current.message.value,
        },
        {
          publicKey: apiPublicKey,
        }
      )
      .then(
        () => {
          alert("✅ Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };
  return (
    <section className="w-full bg-white py-12 px-4 text-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-5">
            {contactItems.map((item, idx) => (
              <ContactItem
                key={idx}
                icon={item.icon}
                label={item.label}
                value={item.value}
                link={item.link}
              />
            ))}
          </div>
        </div>

        {/* Right: Contact Form */}

        <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Send Me a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Name
              </label>
              <input
                name="from_name"
                type="text"
                placeholder="What's your name?"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="What's your email?"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="What would you like to say?"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
