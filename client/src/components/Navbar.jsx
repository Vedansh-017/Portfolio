import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full glass z-50 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-tighter">
        VED<span className="text-gradient">ANSH.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="relative group text-[var(--text-muted)] hover:text-white transition-colors duration-300 py-1"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] transition-all duration-300 group-hover:w-full rounded-full drop-shadow-[0_0_8px_var(--accent-cyan)]"></span>
          </a>
        ))}
      </div>
    </nav>
  );
}
