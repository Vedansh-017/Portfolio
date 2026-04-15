import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, ArrowUpIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[var(--glass-border)] pt-16 pb-8 mt-auto w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Profile and Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-black font-bold text-lg leading-none">
                V
              </div>
              <span className="text-xl font-bold text-white tracking-wide">Vedansh</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm max-w-sm leading-relaxed mt-2">
              Full Stack Web Developer passionate about creating digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex gap-5 pt-2">
              <a href="https://github.com/Vedansh-017" aria-label="GitHub" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vedansh-mamodiya-74880229a?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com/Vedansh782086" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="mailto:[EMAIL_ADDRESS]" aria-label="Email" className="text-[var(--text-muted)] hover:text-white transition-colors">
                <MailIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:mx-auto">
            <h3 className="text-white font-semibold text-lg pb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-3">
              <li><a href="#about" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#projects" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="#skills" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Skills</a></li>
              <li><a href="#contact" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-[var(--text-muted)] hover:text-white transition-colors text-sm">Credits</a></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div className="flex flex-col md:ml-auto">
            <h3 className="text-white font-semibold text-lg pb-4">Get In Touch</h3>
            <p className="text-[var(--text-muted)] text-sm mb-4">Ready to start a project?</p>
            <a href="mailto:vedansh@example.com" className="flex items-center gap-2 border border-[#333] bg-[#111] hover:bg-[#222] transition-colors rounded-md px-4 py-2 w-max group">
              <MailIcon className="w-4 h-4 text-[var(--text-muted)] group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-[var(--text-muted)] group-hover:text-white transition-colors">Send Email</span>
            </a>
            <p className="text-[var(--text-muted)] text-xs mt-3 opacity-70">Response within 24 hours</p>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#222] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} Vedansh. Made with <span className="text-red-500 mx-1">❤️</span> and lots of coffee
          </p>
          <div className="flex items-center gap-4 text-[var(--text-muted)] text-xs">
            <span>Built with React & Tailwind CSS</span>
            <button onClick={scrollToTop} className="hover:text-white transition-colors p-1" aria-label="Scroll to top">
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
