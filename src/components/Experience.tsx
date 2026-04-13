/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE } from '../constants/data';

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <SectionHeading centered subtitle="My professional journey and key contributions in data-driven roles.">
          Work Experience
        </SectionHeading>

        <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800/50">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={`${exp.role}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-10 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-bg-dark border border-zinc-800 flex items-center justify-center z-10 group-hover:border-accent transition-colors">
                <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-accent transition-colors" />
              </div>

              <div className="bento-card p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">{exp.role}</h3>
                    <p className="text-accent font-bold tracking-wide uppercase text-sm">{exp.organization}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-[11px] text-zinc-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {exp.description && (
                  <p className="text-zinc-400 text-base mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {/* Performance Stats Row */}
                {exp.stats && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {exp.stats.map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-bg-dark/40 border border-zinc-800/50 group/stat hover:border-accent/30 transition-all">
                        <div className="text-xl font-bold text-accent group-hover/stat:scale-110 transition-transform origin-left">
                          {stat.value}
                        </div>
                        <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-zinc-500 text-sm leading-relaxed group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors flex-shrink-0" />
                      <span className="group-hover/item:text-zinc-300 transition-colors">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
