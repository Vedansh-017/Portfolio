import { FaCode, FaDatabase, FaServer, FaTools, FaLaptopCode, FaMobileAlt, FaCodeBranch, FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">

      {/* BACKGROUND */}
      <div className="grid-bg"></div>

      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="glass px-4 py-1 rounded-full text-sm">
          Skills & Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Technical Proficiency
        </h2>
        <p className="text-gray-400 mt-4">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* MAIN CONTENT AREA */}
      <div className="grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto">

        {/* LEFT SIDE (CATEGORIES) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-8 grid md:grid-cols-2 gap-8"
        >
          {/* LANGUAGES */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaCode /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["C", "C++", "JavaScript", "TypeScript", "Python"].map((item) => (
                <span key={item} className="px-3 py-1 bg-yellow-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DATABASE */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaDatabase /> Database & Storage
            </h3>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "SQL", "MySQL", "PostgreSQL", "SQLite"].map((item) => (
                <span key={item} className="px-3 py-1 bg-purple-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FRONTEND */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaCode /> Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "React", "Next.js", "Tailwind", "Redux", "Bootstrap", "Material UI", "Chakra UI"].map((item) => (
                <span key={item} className="px-3 py-1 bg-blue-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaServer /> Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "REST APIs", "FastAPI", "Django"].map((item) => (
                <span key={item} className="px-3 py-1 bg-green-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <FaTools /> Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code", "Postman", "Docker", "Figma"].map((item) => (
                <span key={item} className="px-3 py-1 bg-cyan-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* DEPLOYMENT */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              🚀 Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Vercel", "Netlify", "Render", "AWS"].map((item) => (
                <span key={item} className="px-3 py-1 bg-red-500/10 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE (PROGRESS BARS + STATS) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col gap-10"
        >

          {/* PROGRESS */}
          <div className="glass !bg-black/60 p-6 rounded-2xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-6">Proficiency Levels</h3>

            {[
              { name: "JavaScript", val: 90 },
              { name: "React.js", val: 85 },
              { name: "Node.js", val: 80 },
              { name: "MongoDB", val: 75 },
              { name: "CSS/Tailwind", val: 85 },
              { name: "Express.js", val: 80 },
            ].map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.val}%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.val}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="bg-white text-black rounded-2xl p-8 flex-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <h3 className="text-lg font-semibold mb-6 text-center">
              Development Stats
            </h3>

            <div className="space-y-4 text-sm mt-4">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Lines of Code</span>
                <span className="font-bold">50K+</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Projects Built</span>
                <span className="font-bold">10+</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Coffee Consumed</span>
                <span className="font-bold">∞</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* BOTTOM FEATURES */}
      <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">
        {[
          { title: "Web Development", desc: "High quality and scalable solutions", icon: <FaLaptopCode className="text-4xl mx-auto mb-4 text-[#bfbfff]" /> },
          { title: "Responsive Design", desc: "Mobile-first approach for all screens", icon: <FaMobileAlt className="text-4xl mx-auto mb-4 text-[#bfbfff]" /> },
          { title: "Version Control", desc: "Git workflow & collaborative development", icon: <FaCodeBranch className="text-4xl mx-auto mb-4 text-[#bfbfff]" /> },
          { title: "Performance", desc: "Optimized for speed & efficiency", icon: <FaTachometerAlt className="text-4xl mx-auto mb-4 text-[#bfbfff]" /> },
        ].map((item, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={item.title} 
            className="glass !bg-black/60 p-6 rounded-xl text-center hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer"
          >
            {item.icon}
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-gray-400 text-sm mt-2">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}