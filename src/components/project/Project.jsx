import projects from './projects';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function Projects() {
  return <section className="section-shell" id="projects">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-label">Selected MERN stack work</p><h2 className="section-title">Projects built with purpose</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">A selection of MERN stack projects built with MongoDB, Express.js, React and Node.js.</p></div>
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {projects.map((p, index) => <article key={p.id} className="glass-card group relative overflow-hidden rounded-3xl p-7 sm:p-9 hover:-translate-y-1 hover:border-white/20">
        <div className="absolute right-5 top-2 font-display text-8xl font-bold text-white/[0.025]">0{index + 1}</div>
        <div className="relative"><span className="text-xs font-bold uppercase tracking-[.25em] text-cyan-400">Featured project</span><h3 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">{p.title}</h3><p className="mt-4 min-h-[48px] leading-7 text-slate-400">{p.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">{t}</span>)}</div>
          <div className="mt-8 flex gap-3">{p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg text-white transition hover:border-cyan-400 hover:text-cyan-400"><FiGithub/></a>}<a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">Live preview <FiArrowUpRight/></a></div>
        </div>
      </article>)}
    </div>
  </section>;
}
