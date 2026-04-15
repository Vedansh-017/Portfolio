import { FaUser, FaCode, FaBullseye, FaCoffee } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">

      {/* BACKGROUND */}
      <div className="grid-bg"></div>

      {/* HEADER */}
      <div className="text-center mb-16">
        <span className="glass px-4 py-1 text-sm rounded-full">About Me</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Get to know me better
        </h2>
        <p className="text-gray-400 mt-4">
          Passionate about creating digital experiences that make a difference
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 w-full max-w-[2000px] mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          {/* MY STORY */}
 <div className="glass !bg-black/60 p-8 sm:p-10 rounded-3xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300">
  <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6">
    <FaUser /> My Story
  </h3>

  <p className="text-gray-400 text-lg leading-relaxed">
    I am a Full Stack Web Developer with expertise in building dynamic,
    user-friendly applications using modern frontend and backend technologies.
    I focus on creating efficient, scalable, and high-quality solutions.
  </p>

  <p className="text-gray-400 text-lg leading-relaxed mt-4">
    Alongside development, I have a strong foundation in Data Structures and Algorithms.
    I have solved <span className="text-white font-semibold">750+ problems on LeetCode</span> and
    actively participate in competitive programming on CodeChef and Codeforces,
    which has strengthened my problem-solving and analytical skills.
  </p>
</div>

          {/* CARDS */}
          <div className="grid gap-4">

            <div className="glass !bg-black/60 p-5 rounded-xl flex gap-4 items-start hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
              <FaCode className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Full Stack Expertise</h4>
                <p className="text-gray-400 text-sm">
                  Proficient in MERN stack with hands-on experience in building end-to-end apps
                </p>
              </div>
            </div>


              <div className="glass !bg-black/60 p-5 rounded-xl hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300 cursor-pointer">
  <div className="flex items-center gap-3 mb-3">
    <FaCodeBranch />
    <h4 className="font-semibold">DSA & Competitive Programming</h4>
  </div>

  <p className="text-gray-400 text-sm mb-3">
    Strong problem-solving skills with consistent practice across platforms.
  </p>

  <div className="flex gap-3 flex-wrap text-sm">
    <span className="px-3 py-1 bg-white/10 rounded-full">750+ LeetCode</span>
    <span className="px-3 py-1 bg-white/10 rounded-full">CodeChef</span>
    <span className="px-3 py-1 bg-white/10 rounded-full">Codeforces</span>
  </div>
</div>
            {/* <div className="glass p-5 rounded-xl flex gap-4 items-start">
              <FaBullseye className="text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Problem Solver</h4>
                <p className="text-gray-400 text-sm">
                  Focus on creating efficient, scalable solutions for real-world problems
                </p>
              </div>
            </div> */}

              {/* here to add */}

          </div>
        </div>

        {/* RIGHT SIDE (EXPERIENCE & STATS) */}
        <div className="flex flex-col gap-6">
          <div className="glass !bg-black/60 p-8 sm:p-10 rounded-3xl flex-1 hover:-translate-y-2 hover:!bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>

            <div className="space-y-8">

              {/* ITEM */}
              <div className="flex gap-5">
                <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-xl">Web Developer Intern</h4>
                  <p className="text-base text-gray-400 mt-1">The Codeshooters</p>
                  <p className="text-sm text-gray-500 mt-1">June 2025 - July 2025</p>
                  <p className="text-base text-gray-400 mt-3">
                    Built responsive interfaces and optimized performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-xl">Full Stack Developer</h4>
                  <p className="text-base text-gray-400 mt-1">Projects</p>
                  <p className="text-sm text-gray-500 mt-1">2024 - Present</p>
                  <p className="text-base text-gray-400 mt-3">
                    Developed full-stack applications using MERN stack.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* STATS */}
          <div className="bg-white text-black rounded-3xl p-8 sm:p-10 grid grid-cols-2 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm font-semibold mt-2">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1+</h3>
              <p className="text-sm font-semibold mt-2">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm font-semibold mt-2">Technologies</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm font-semibold mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS MOVED TO RIGHT SIDE */}

    </section>
  );
}