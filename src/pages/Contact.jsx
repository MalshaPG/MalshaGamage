import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // show spinner

    emailjs
      .send(
        "service_frxqjcc",
        "template_wmcskov",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "L9W9-cOwhOXrL7ZxD"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false); // 👈 hide spinner
        setTimeout(() => setStatus(""), 4000); // hide status after 4s
      });
  };

  return (
    <section className="relative max-w-3xl mx-auto py-16 text-center">
      <h2 className="text-4xl font-bold mb-6 text-white-700">Let's Connect!</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-md">
        <p className="text-gray-700 mb-8">
          I’d love to collaborate or discuss new opportunities. Feel free to drop a message — I’ll get back to you soon!
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="text-black w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="text-black w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-black w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold text-white rounded-md transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-4 text-lg">{status}</p>}

      {/* 🔵 Loading overlay */}
      {loading && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      )}
    </section>
  );
}
