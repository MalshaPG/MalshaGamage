import { motion } from "framer-motion";

export default function Projects() {
  const experiences = [
    {
      title: "SLT Internship Experience",
      desc: "Currently completing my 6-month internship at Sri Lanka Telecom. Worked on UI updates for the Telco-Agent module and implemented a Teacher–Student Task Manager App as part of internal projects. Gained experience in collaborative development and agile environments.",
      tech: "Flutter, Firebase, JavaScript, HTML, CSS, UI Design, Agile",
      timeline: "July 2025 – Present",
      img: "slt_logo_new.be681e06.png",
    },
  ];

  const projects = [
    {
      title: "Coastal Canopy (coastalcanopy.org.lk)",
      desc: "A mangrove conservation platform with forums, mapping, and awareness features. Built using React + Vite, Flask, and MongoDB.",
      tech: "React, Flask, MongoDB, YOLOv8, Firebase, Cloudinary",
      timeline: "Sep 2024 – June 2025",
      link: "https://coastalcanopy.org.lk/",
      img: "mangroves.jpg",
      repo: "https://github.com/MalshaPG/CoastalCanopy_CS149",
    },
    {
      title: "Student–Teacher Task Management App",
      desc: "Flutter mobile app for teachers and students with Firebase Authentication and Firestore real-time database.",
      tech: "Flutter, Firebase, Firestore",
      timeline: "Oct 2025",
      link: null,
      repo: "https://github.com/MalshaPG/Student-Teacher-Task-Management-Application",
      img: "st-te.jpg",
    },
    {
      title: "Event Ticketing System",
      desc: "Full-stack real-time ticketing app with concurrency control and responsive UI.",
      tech: "Spring Boot, React + Vite, MySQL",
      timeline: "Sep 2024 – Dec 2024",
      link: null,
      repo: "https://github.com/MalshaPG/Real_time_event_ticketing_system_fullStack",
      img: "ticket.jpg",
    },
    {
      title: "Transaction Tracker API",
      desc: "GoLang + Gin REST API to track user financial transactions.",
      tech: "Go, Gin, MySQL",
      timeline: "Mar 2025 – May 2025",
      link: null,
      repo: "https://github.com/MalshaPG/transaction-tracker",
      img: "transaction.jpg",
    },
    {
      title: "Bookstore RESTful API",
      desc: "Created an API to manage books, authors, carts, and orders using JAX-RS and Java Collections. Packaged as a WAR file and deployed on Apache Tomcat.",
      tech: "JAX-RS (Jersey), Java, Apache Tomcat, JSON, Postman",
      timeline: "January 2024",
      link: null,
      repo: "https://github.com/MalshaPG/bookstore_api",
      img: "bookstore.jpg",
    },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-16 px-4 space-y-20">
      {/* Experience Section */}
      <div>
        <h2 className="text-4xl font-bold mb-12 text-center text-white-700">
          Experience
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {exp.img && (
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                  {exp.title}
                </h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {exp.timeline}
                </div>
                <p className="text-gray-700 mb-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {exp.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-100 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-4xl font-bold mb-12 text-center text-white-700">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                  {p.title}
                </h3>
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {p.timeline}
                </div>
                <p className="text-gray-700 mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-100 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
