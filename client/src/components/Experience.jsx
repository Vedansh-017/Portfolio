import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[var(--accent-cyan)]">04.</span> Experience & Education
          </h2>
          <div className="space-y-6 border-l-2 border-[var(--glass-border)] ml-3 pl-6 relative">
            
            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-[var(--accent-cyan)] -left-[33px] top-1 shadow-[0_0_10px_var(--accent-cyan)]"></div>
              <h3 className="text-xl font-bold">B.Tech Electrical Engineering</h3>
              <p className="text-[var(--accent-cyan)] font-mono text-sm mb-2">2021 — 2025</p>
              <p className="text-[var(--text-muted)]">
                Exploring the fundamentals of electrical systems while independently mastering software engineering and artificial intelligence.
              </p>
            </div>

            <div className="relative">
              <div className="absolute w-4 h-4 rounded-full bg-[var(--glass-border)] border border-white -left-[33px] top-1"></div>
              <h3 className="text-xl font-bold">Independent Software Developer</h3>
              <p className="text-[var(--accent-cyan)] font-mono text-sm mb-2">Present</p>
              <p className="text-[var(--text-muted)]">
                Building personal projects, conceptualizing full-stack architectures, and developing machine learning models to solve real-world problems.
              </p>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-[var(--accent-purple)]">05.</span> Achievements
          </h2>
          <div className="glass glass-card p-6 rounded-2xl h-full flex flex-col justify-center gap-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[var(--accent-purple)]">★</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Advanced ML Implementations</h3>
                <p className="text-[var(--text-muted)] text-sm">Successfully designed and trained complex customer segmentation models and resume parsing systems with high accuracy.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[var(--accent-cyan)]">★</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Full-Stack Development</h3>
                <p className="text-[var(--text-muted)] text-sm">Engineered highly responsive and scalable web applications integrating diverse tech stacks securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
