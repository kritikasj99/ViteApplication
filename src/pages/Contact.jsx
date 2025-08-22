
import React, { useState, useRef, useTransition } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', subject: '', message: '' });
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 3000);
    });
  };

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Get in <span className="text-pink-500">Touch</span> With Us
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        We'd love to hear from you. Whether you have a question about products, pricing, returns, or anything else, our team is ready to answer all your questions.
      </p>

      {/* Contact Information */}
      <section className="mb-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📍 Address</h2>
          <p className="text-gray-600">StyleHub HQ, 123 Fashion Street, Delhi, India</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📧 Email</h2>
          <p className="text-gray-600">support@stylehub.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📞 Phone</h2>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Send Us a Message</h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 text-lg font-medium">
              ✅ Thank you {form.name}! We received your message.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded shadow-md transition"
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      {/* Social Media */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-pink-500 hover:text-pink-600 text-2xl"
            aria-label="Instagram"
          >
            📸
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 text-2xl"
            aria-label="Facebook"
          >
            👍
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-500 text-2xl"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="#"
            className="text-red-500 hover:text-red-600 text-2xl"
            aria-label="YouTube"
          >
            ▶️
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © 2025 <span className="text-pink-500 font-semibold">StyleHub</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
