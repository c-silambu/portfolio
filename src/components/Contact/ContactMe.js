import React from 'react';
import { FiArrowUpRight, FiMail, FiPhone } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const contacts = [
  { icon: <FiMail/>, label: 'Email', value: 'silambu0414@gmail.com', href: 'mailto:silambu0414@gmail.com' },
  { icon: <FiPhone/>, label: 'Phone', value: '+91 82703 41319', href: 'tel:+918270341319' },
  { icon: <FaLinkedinIn/>, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/silambu-c-60496b358/' },
];

const ContactMe = () => <section className="section-shell" id="contact">
  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.12] via-white/[0.04] to-violet-500/[0.12] p-7 sm:p-12 lg:p-16">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
      <div><p className="section-label">Let's work together</p><h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Have an idea?<br/>Let's make it real.</h2><p className="mt-5 max-w-xl leading-7 text-slate-400">I'm open to full-time opportunities, freelance projects and meaningful collaborations. Drop me a message and I'll get back to you.</p><a href="mailto:silambu0414@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300">Start a conversation <FiArrowUpRight/></a></div>
      <div className="space-y-3">{contacts.map(item => <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg text-cyan-400">{item.icon}</span><span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-wider text-slate-500">{item.label}</span><span className="block truncate text-sm font-semibold text-white sm:text-base">{item.value}</span></span><FiArrowUpRight className="text-slate-500 transition group-hover:text-cyan-400"/></a>)}</div>
    </div>
  </div>
</section>;
export default ContactMe;
