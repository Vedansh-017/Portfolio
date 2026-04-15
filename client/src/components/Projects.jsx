import { useState } from "react";
import { FiExternalLink, FiCode } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import plusone from "../assets/plsuone.png";
import swapkr from "../assets/swapkr.jpeg";
const projects = [
  {
    title: "PlusONE (Ride Sharing Platform)",
    category: "Full-Stack",
    image: plusone,
    desc: "A full-stack ride-sharing platform enabling users to find, share, and book rides with real-time matching and secure authentication. Successfully deployed with 100+ active users.",
    tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Vedansh-017/plusONE",
    liveLink: "https://plusone-psi.vercel.app/",
  },
  {
    title: "SwapKR (Item Exchange Platform)",
    category: "Full-Stack",
    image: swapkr,
    desc: "A peer-to-peer item exchange platform allowing users to list, browse, and swap products with others, featuring authentication and interactive user experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Vedansh-017/SwapKr",
    liveLink: "https://www.swapkr.tech/",
  },
    {
    title: "BlogSphere (Blog Platform)",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    desc: "A full-stack blogging platform where users can create, edit, and publish blogs with authentication, rich UI, and seamless content management.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
     github: "https://github.com/Vedansh-017/my-website",
    liveLink: "https://my-website-m5v32mor0-vedansh-017s-projects.vercel.app/",
  },
  {
    title: "Job Search Aggregator",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    desc: "A job aggregation platform that fetches listings from multiple sources with advanced filtering, favorites, and one-click apply functionality.",
    tech: ["React.js", "Node.js", "APIs", "MongoDB"],
    github: "https://github.com/Vedansh-017/AutoApply",
    liveLink: "https://auto-apply-lake.vercel.app/",
  },
  {
    title: "Resume Selector System",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
    desc: "A machine learning-based system that ranks and filters resumes based on job descriptions using NLP techniques without deep learning.",
    tech: ["Python", "Scikit-learn", "NLP", "Pandas"],
    github: "https://github.com/",
    liveLink: "https://example.com/",
  },
];
export default function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects = filter === "All Projects"
    ? projects
    : projects.filter((proj) => proj.category === filter);

  return (
    <section id="projects" className="py-24 px-6 relative">

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
        <span className="glass px-4 py-1 rounded-full text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 mt-4">
          A showcase of my recent work and technical expertise
        </p>
      </motion.div>

      {/* FILTER BUTTONS */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12 flex-wrap"
      >
        {["All Projects", "Full-Stack", "UI/UX", "Frontend", "Backend"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              filter === item ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {item}
          </button>
        ))}
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={proj.title}
              className="glass rounded-2xl overflow-hidden group"
            >

            {/* IMAGE */}
            <div className="relative overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* HOVER ICONS */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition bg-black/50">
                <a href={proj.liveLink} target="_blank" rel="noreferrer" className="bg-black/80 hover:bg-white hover:text-black p-3 rounded-lg transition">
                  <FiExternalLink />
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer" className="bg-black/80 hover:bg-white hover:text-black p-3 rounded-lg transition">
                  <FiCode />
                </a>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full">
                  {proj.category}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">{proj.desc}</p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <a href={proj.liveLink} target="_blank" rel="noreferrer" className="flex-5 border border-white/20 bg-white/5 hover:bg-white/10 rounded-lg py-2 text-sm flex items-center justify-center gap-2 transition">
                  <FiExternalLink /> Live Demo
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer" className="flex-1 border border-white/20 rounded-lg py-2 text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition">
                  <FiCode /> 
                </a>

              </div>

            </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}