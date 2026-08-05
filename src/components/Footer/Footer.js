import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => <footer className="relative z-10 border-t border-white/[0.07]">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
    <div><a href="#home" className="font-display text-xl font-bold text-white">Silambu C<span className="text-cyan-400">.</span></a><p className="mt-1 text-xs text-slate-500">Designed & built with passion.</p></div>
    <p className="text-xs text-slate-500">© {new Date().getFullYear()} Silambu C. All rights reserved.</p>
    <div className="flex gap-2">{[
      ['https://github.com/c-silambu', <FaGithub/>, 'GitHub'],
      ['https://www.instagram.com/silambu_tn_58/', <FaInstagram/>, 'Instagram'],
      ['https://www.linkedin.com/in/silambu-c-60496b358/', <FaLinkedinIn/>, 'LinkedIn'],
    ].map(([href, icon, label]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/40 hover:text-cyan-400">{icon}</a>)}</div>
  </div>
</footer>;
export default Footer;
