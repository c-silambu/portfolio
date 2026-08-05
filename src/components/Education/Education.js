import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const education = [
  { degree: 'B.E. Computer Science & Engineering', place: 'Mangayarkarasi College of Engineering, Madurai', year: '2021 — 2025', score: 'CGPA 7.69' },
  { degree: 'HSC · 12th Standard', place: 'Holy Angel Higher Secondary School, Madurai', year: '2020 — 2021', score: '76%' },
  { degree: 'SSLC · 10th Standard', place: 'Holy Angel Higher Secondary School, Madurai', year: '2018 — 2019', score: '64%' },
];

const Education = () => <section className="section-shell" id="education">
  <div className="text-center"><p className="section-label">My journey</p><h2 className="section-title">Education</h2></div>
  <div className="relative mx-auto mt-12 max-w-4xl before:absolute before:bottom-0 before:left-[23px] before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-transparent sm:before:left-1/2">
    {education.map((item, i) => <div key={item.degree} className={`relative mb-8 pl-16 sm:w-1/2 sm:pl-0 ${i % 2 ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
      <div className={`absolute left-0 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 text-cyan-400 sm:left-auto ${i % 2 ? 'sm:-left-6' : 'sm:-right-6'}`}><FiBookOpen/></div>
      <article className="glass-card rounded-2xl p-6 hover:border-cyan-400/30"><span className="text-xs font-bold tracking-wider text-cyan-400">{item.year}</span><h3 className="mt-3 font-display text-lg font-bold text-white">{item.degree}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.place}</p><span className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">{item.score}</span></article>
    </div>)}
  </div>
</section>;
export default Education;
