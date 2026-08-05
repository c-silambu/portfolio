import React from 'react';
import { FiArrowDownRight, FiDownload, FiMapPin } from 'react-icons/fi';

const floatingSkills = [
  { name: 'React.js', dot: 'bg-cyan-400', position: '-left-10 top-[18%]', motion: 'float-one' },
  { name: 'JavaScript', dot: 'bg-yellow-400', position: '-right-12 top-[8%]', motion: 'float-two' },
  { name: 'Node.js', dot: 'bg-emerald-400', position: '-right-16 top-[48%]', motion: 'float-three' },
  { name: 'MongoDB', dot: 'bg-green-500', position: '-left-14 top-[60%]', motion: 'float-two' },
  { name: 'Express.js', dot: 'bg-violet-400', position: 'left-[8%] -bottom-8', motion: 'float-three' },
  { name: 'HTML / CSS', dot: 'bg-pink-400', position: 'right-[4%] -bottom-10', motion: 'float-one' },
];

const SkillBadge = ({ skill, mobile = false }) => (
  <div className={`${mobile ? 'relative' : `absolute z-20 ${skill.position}`} ${skill.motion} flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-slate-950/80 px-4 py-2.5 text-xs font-bold text-slate-200 shadow-xl shadow-black/30 backdrop-blur-xl sm:text-sm`}>
    <span className={`h-2.5 w-2.5 rounded-full ${skill.dot} shadow-[0_0_12px_currentColor]`} />
    {skill.name}
  </div>
);

const Hero = () => (
  <section className="section-shell flex min-h-screen items-center pt-28" id="home">
    <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
      <div>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/> Available for opportunities</div>
        <p className="mb-3 font-display text-lg font-medium text-cyan-400 sm:text-xl">Hello, I'm Silambu C.</p>
        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">I build digital<br/><span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">experiences.</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">MERN Stack Developer crafting reliable, scalable and user-focused web applications with React, Node.js, Express and MongoDB.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300">Explore my work <FiArrowDownRight/></a>
          <a href="/SILAMBU_RES.pdf" download className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"><FiDownload/> Download CV</a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-slate-500"><FiMapPin className="text-cyan-400"/> Madurai, Tamil Nadu, India</p>
      </div>
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/25 to-violet-500/20 blur-2xl"/>
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-slate-900 p-2 shadow-glow">
          <img src="/silambuimg.jpg" alt="Silambu C" className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-top"/>
          <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-slate-950/75 p-4 backdrop-blur-xl"><p className="font-display font-bold text-white">MERN Stack Developer</p><p className="mt-1 text-xs text-slate-400">Turning ideas into production-ready products</p></div>
        </div>
        <div className="hidden sm:block">
          {floatingSkills.map(skill => <SkillBadge key={skill.name} skill={skill}/>) }
        </div>
      </div>
      <div className="col-span-full -mt-5 flex flex-wrap justify-center gap-3 sm:hidden">
        {floatingSkills.map(skill => <SkillBadge key={skill.name} skill={skill} mobile/>) }
      </div>
    </div>
  </section>
);
export default Hero;
