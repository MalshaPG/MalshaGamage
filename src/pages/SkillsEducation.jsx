// src/pages/SkillsEducation.jsx
import { motion } from "framer-motion";

export default function SkillsEducation() {
  const skills = [
    { category: "Frontend", list: ["React (Tailwind CSS)", "HTML", "CSS"] },
    { category: "Backend", list: ["Java Spring Boot", "Python Flask", "Node.js (Beginner)", "PHP (Beginner)"] },
    { category: "Mobile", list: ["Flutter"] },
    { category: "Databases", list: ["MySQL", "MongoDB"] },
    { category: "Tools & Platforms", list: ["Git", "Bitbucket", "Postman", "Netlify", "Railway", "Render", "Cloudinary", "Firebase"] },
    { category: "Languages", list: ["Java", "Python", "JavaScript", "Go"] },
    { category: "Soft Skills", list: ["Teamwork", "Creativity", "Adaptability", "Time Management"] },
  ];

  const achievements = [
    "Participated in CodeRally 5.0 – IEEE Computer Society, IIT (24-hour Hackathon)",
    "Competed in Hult Prize IIT Qualifier (Coastal Canopy)",
    "Selected to showcase Coastal Canopy at IIT Cutting Edge 2025"
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-16 px-4 space-y-16">

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.category} className="space-y-2">
              <h3 className="font-semibold text-lg text-blue-600">{s.category}</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Education</h2>
        <div className="space-y-3 text-gray-700">
          <p><b>BSc (Hons) Computer Science</b> — Informatics Institute of Technology (Affiliated with University of Westminster), 2023–2027</p>
          <p>Sirimavo Bandaranaike Vidyalaya — GCE A/L (Bio Science) - 3Cs (2022)</p>
        </div>
      </motion.div>

    </section>
  );
}
