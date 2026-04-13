/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { CONTACT_INFO } from '../constants/data';

export default function Contact() {
  const contactCards = [
    { label: 'GitHub', value: 'logeswaran-s', icon: Github, href: CONTACT_INFO.github },
    { label: 'LinkedIn', value: 'Logeswaran Selvapandian', icon: Linkedin, href: CONTACT_INFO.linkedin },
    { label: 'Email', value: CONTACT_INFO.email, icon: Mail, href: `mailto:${CONTACT_INFO.email}` },
    { label: 'Phone', value: CONTACT_INFO.phone, icon: Phone, href: `tel:${CONTACT_INFO.phone}` },
  ];

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <SectionHeading centered subtitle="Open for collaboration on data engineering projects, research, or full-time opportunities.">
          Let’s Connect
        </SectionHeading>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {contactCards.map((card, i) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.label !== 'Email' && card.label !== 'Phone' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bento-card p-6 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
                    <card.icon size={24} />
                  </div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{card.label}</p>
                  <p className="text-xs font-bold text-zinc-100 truncate w-full">{card.value}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
