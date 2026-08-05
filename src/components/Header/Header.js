import React, { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const links = [['Home','home'], ['About','about'], ['Skills','skills'], ['Projects','projects'], ['Education','education']];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <a href="#home" className="font-display text-xl font-bold text-white" onClick={() => setOpen(false)}>Silambu<span className="text-cyan-400">.</span></a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([name,id]) => <a key={id} href={`#${id}`} className="text-sm font-medium text-slate-400 transition hover:text-white">{name}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 md:flex">Let's talk <FiArrowUpRight /></a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle navigation" className="rounded-lg border border-white/10 p-2 text-xl text-white md:hidden">{open ? <FiX/> : <FiMenu/>}</button>
      </div>
      {open && <nav className="border-t border-white/10 bg-ink px-5 py-5 md:hidden">
        {[...links, ['Contact','contact']].map(([name,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 font-medium text-slate-300">{name}</a>)}
      </nav>}
    </header>
  );
};
export default Header;
