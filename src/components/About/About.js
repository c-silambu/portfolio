import React from 'react';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';

const About = () => (
  <section className="section-shell" id="about">
    <div className="grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
      <div className="relative mx-auto max-w-md">
        <div className="absolute -bottom-5 -right-5 h-full w-full rounded-3xl border border-cyan-400/20"/>
        <img src="/silambuimg2.jpg" alt="Silambu" className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top grayscale transition duration-500 hover:grayscale-0"/>
        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 backdrop-blur"><strong className="font-display text-3xl text-cyan-400">2+</strong><p className="text-xs text-slate-400">Real-world projects</p></div>
      </div>
      <div>
        <p className="section-label">Get to know me</p><h2 className="section-title">More than just code.</h2>
        <div className="mt-7 space-y-5 text-base leading-8 text-slate-400">
          <p>I'm <span className="font-semibold text-white">Silambu</span>, a passionate MERN Stack Developer who enjoys building modern, user-friendly web applications from scratch.</p>
          <p>I specialize in full-stack development with MongoDB, Express.js, React and Node.js—combining responsive interfaces with reliable server-side logic and maintainable code.</p>
          <p>During my MERN Stack internship, I gained hands-on experience building real-world, full-stack web applications including a Billing & Invoice Management System. I also have a strong foundation in C programming and continuously explore new technologies.</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="/SILAMBU_RES.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">View resume <FiArrowUpRight/></a>
          <a href="/SILAMBU_RES.pdf" download className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"><FiDownload/> Download</a>
        </div>
      </div>
    </div>
  </section>
);
export default About;
