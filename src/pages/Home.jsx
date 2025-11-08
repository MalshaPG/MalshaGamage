import Projects from "./Projects";
import SkillsEducation from "./SkillsEducation";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="space-y-32 animate-fadeIn">
      {/* --- Hero/Profile Section --- */}
      <section
        id="profile"
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pt-16 scroll-mt-20"
      >
        {/* --- Image Side --- */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="me.jpg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-full shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* --- Text Side --- */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 bg-white/40 p-6 rounded-xl ">
          <h2 className="text-4xl font-extrabold text-blue-700">
            Hello, I'm Malsha Gamage 👋
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I'm a <b>Computer Science undergraduate</b> at the{" "}
            <span className="text-blue-600 font-medium">
              Informatics Institute of Technology (affiliated with the University of Westminster)
            </span>
            , passionate about <b>software development</b> and{" "}
            <b>mobile & web technologies</b>.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            I enjoy creating meaningful, user-focused solutions using modern frameworks and tools like{" "}
            <b>React, Flutter, and Spring Boot</b>.
          </p>

        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="scroll-mt-20">
        <Projects />
      </section>

      {/* --- Skills & Education Section --- */}
      <section id="skills" className="scroll-mt-20">
        <SkillsEducation />
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      {/* --- Footer --- */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Malsha Gamage. All Rights Reserved.
      </footer>
    </div>
  );
}
