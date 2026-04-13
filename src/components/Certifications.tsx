/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { CERTIFICATIONS } from '../constants/data';

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <SectionHeading centered subtitle="Industry-standard certifications and funded research recognitions.">
          Certifications & Awards
        </SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-6 flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
                <cert.icon size={28} />
              </div>
              <h3 className="text-sm font-bold text-zinc-100 leading-tight uppercase tracking-wider">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
