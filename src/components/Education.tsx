/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EDUCATION } from '../constants/data';

export default function Education() {
  return (
    <section id="education" className="relative py-4">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:border-accent/30 transition-all group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
                  <edu.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 tracking-tight">{edu.school}</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">{edu.degree}</p>
                </div>
              </div>
              <div className="flex flex-col items-end text-right">
                <div className="px-3 py-1 rounded-full bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/10 mb-2">
                  GPA: {edu.gpa} / 4.0
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  <Calendar size={12} />
                  <span>{edu.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
