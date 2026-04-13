/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-dark border-t border-zinc-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              Logeswaran <span className="text-accent">Selvapandian</span>
            </h3>
            <p className="text-zinc-500 text-sm max-w-xs">
              Data Scientist | Data Analyst | Data Engineer
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900/50">
          <p className="text-zinc-600 text-[10px] font-medium uppercase tracking-widest">
            © 2026 Logeswaran Selvapandian. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent transition-all"
                title={link.name}
              >
                <link.icon size={16} />
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="w-8 h-8 rounded-full bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent transition-all"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
