import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(() => setStatus('✅ Message sent successfully!'))
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('❌ Failed to send message. Please try again.');
      });
  };

  return (
    <section className="max-w-lg mx-auto text-center space-y-10 animate-fadeIn bg-white/70 backdrop-blur-md p-6 rounded-xl">
      {/* Encouraging Heading */}
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-3">Let’s Build Something Amazing Together 💡</h2>
        <p className="text-gray-700 max-w-md mx-auto">
          I’m always excited to connect with people who love technology and creativity.  
          Whether it’s a project idea, internship opportunity, or just a tech chat — feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-3 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-center mt-3">{status}</p>}
      </form>

      {/* Connect With Me Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Connect With Me</h3>
        <p className="text-gray-700 mb-3">
          Let’s stay in touch and grow together — I’d love to hear from you!
        </p>
        <div className="flex justify-center gap-6 text-3xl text-gray-600">
          <a
            href="https://github.com/MalshaPG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/malsha-gamage-633074293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition transform hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:malsha.20232325@iit.ac.lk"
            className="hover:text-blue-700 transition transform hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
