/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Code2, ChevronRight, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants/data';

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <SectionHeading centered subtitle="Key projects in ML, NLP, and Data Engineering.">
          Featured Projects
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card group flex flex-col p-8 min-h-[400px] border-zinc-800/50 hover:border-accent/30 transition-all duration-500"
            >
              {/* Header: Icon and Node ID */}
              <div className="flex items-start justify-between mb-12">
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500">
                  <project.icon size={24} />
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                    Node: {project.node}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-zinc-100 mb-4 group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {project.summary}
                </p>
              </div>

              {/* Footer: Tech Tags */}
              <div className="mt-auto pt-8 border-t border-zinc-800/30">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-1 rounded-sm border border-accent/10 bg-accent/5 text-accent/50 text-[8px] font-bold uppercase tracking-[0.15em] group-hover:border-accent/30 group-hover:text-accent transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
