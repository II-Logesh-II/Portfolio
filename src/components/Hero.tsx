/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { FileText, Mail, ChevronRight, Download, ExternalLink, BarChart3, Brain, Database, Search, Sparkles } from 'lucide-react';
import { HERO_CONTENT, ABOUT_CONTENT, RUNNING_KEYWORDS } from '../constants/data';

import BioDataPipeline from './BioDataPipeline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center pt-20 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="section-container space-y-8">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Intro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bento-card flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest border border-accent/20"
                >
                  {HERO_CONTENT.intro}
                </motion.span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter">
                  {HERO_CONTENT.name.split(' ')[0]} <br />
                  <span className="text-accent">{HERO_CONTENT.name.split(' ')[1]}</span>
                </h1>
                
                {/* Roles Line */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                  {HERO_CONTENT.roles.map((role, i) => (
                    <div key={role} className="flex items-center gap-3">
                      <span className="text-sm md:text-base font-bold text-zinc-100 tracking-wider uppercase">
                        {role}
                      </span>
                      {i < HERO_CONTENT.roles.length - 1 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Card (Moved below name) */}
              <div className="space-y-4 border-l-2 border-accent/20 pl-6">
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
                  {HERO_CONTENT.summary}
                </p>
              </div>

              {/* Running Keywords (Marquee) */}
              <div className="relative w-full overflow-hidden py-4">
                <div className="flex items-center gap-4 animate-marquee whitespace-nowrap">
                  {[...RUNNING_KEYWORDS, ...RUNNING_KEYWORDS].map((word, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-xs font-mono font-bold text-accent/60 uppercase tracking-widest">
                        {word}
                      </span>
                      <Sparkles size={12} className="text-zinc-800" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card-bg to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card-bg to-transparent z-10" />
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary group">
                  View Projects
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="btn-secondary group">
                  Let's Talk
                  <Mail size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile/Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bento-card p-0 overflow-hidden relative group min-h-[400px]"
          >
            <BioDataPipeline />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card p-4 border-white/10">
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mb-1">Current Focus</p>
                <p className="text-sm font-bold text-zinc-100">Omics Data Analysis @ BMRC</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_CONTENT.highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card p-6 flex flex-col items-center text-center justify-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-zinc-100">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_CONTENT.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bento-card p-6 flex flex-col justify-center items-center text-center group"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <div className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-widest leading-tight">
                {stat.label.split(' (').map((part, idx) => (
                  <span key={idx} className="block">
                    {idx === 1 ? `(${part}` : part}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
