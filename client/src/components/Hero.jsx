import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-start min-h-[70vh] reveal active mt-4 md:mt-1 text-center pt-2">
      
      {/* Status badge */}
      <div className="inline-flex items-center justify-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-6 border border-[rgba(255,255,255,0.05)]">
        <div className="pulse-dot"></div>
        Available for work
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight tracking-tighter">
        Hi, I'm <span className="text-gradient-purple">Vedansh</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-[var(--text-muted)] font-semibold mb-6 tracking-wide">
        Software Developer / ML Engineer
      </h2>
      <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mb-10 leading-relaxed mx-auto">
        Building intelligent systems and scalable web apps. I bridge the gap between complex machine learning models and beautiful, user-centric web applications.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {['React', 'Node.js', 'Python', 'Machine Learning', 'Tailwind'].map(tag => (
          <span key={tag} className="glass px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--text-muted)] group-hover:text-white transition-colors border border-[rgba(255,255,255,0.05)]">
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#projects" className="btn-primary px-8 py-3.5 rounded-xl text-sm transition-all flex items-center justify-center font-bold">
          View Work
        </a>
        <a href="#contact" className="glass px-8 py-3.5 rounded-xl font-semibold hover:bg-[rgba(255,255,255,0.1)] transition-colors border border-[rgba(255,255,255,0.1)] text-white text-sm flex items-center justify-center cursor-pointer">
          Get In Touch
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-gradient px-8 py-3.5 rounded-xl font-semibold text-white text-sm shadow-xl flex items-center justify-center cursor-pointer">
          Download Resume
        </a>
      </div>

      {/* SOCIALS */}
      <div className="flex gap-6 mt-16 text-[var(--text-muted)]">
        <a href="https://www.instagram.com/vedansh._017?utm_source=qr&igsh=cnVxb2t6NjEyb3Vk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1"><FiInstagram size={24} /></a>
        <a href="https://github.com/Vedansh-017" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1"><FiGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/vedansh-mamodiya-74880229a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:-translate-y-1"><FiLinkedin size={24} /></a>
      </div>

    </section>
  );
}
