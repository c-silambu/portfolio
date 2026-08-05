import Ss from './Ss';

export default function Skills() {
  return <section className="section-shell" id="skills">
    <div className="text-center"><p className="section-label">My toolkit</p><h2 className="section-title">Technologies I work with</h2><p className="mx-auto mt-4 max-w-2xl text-slate-400">A focused stack for building modern, end-to-end web applications.</p></div>
    <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
      {Ss.map((item) => <div key={item.skill} className="glass-card group flex flex-col items-center rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06]">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg"><img src={item.img} alt={item.skill} className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-110"/></div>
        <h3 className="mt-4 font-display text-sm font-semibold capitalize text-white">{item.skill}</h3>
      </div>)}
    </div>
  </section>;
}
