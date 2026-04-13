/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants/data';

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        <SectionHeading centered subtitle="Technical toolkit across data engineering, analytics, and machine learning.">
          Technical Skills
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-5 rounded-xl bg-zinc-900/10 border border-zinc-800/30 hover:bg-zinc-900/20 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
                  <Code2 size={16} />
                </div>
                <h3 className="text-[10px] font-bold text-zinc-100 uppercase tracking-[0.2em]">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[10px] font-bold bg-zinc-800/20 text-zinc-500 rounded-md border border-zinc-700/20 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
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
