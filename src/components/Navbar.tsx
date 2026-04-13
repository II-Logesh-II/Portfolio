/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants/data';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6',
        scrolled ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-zinc-100 tracking-tighter group"
        >
          LOKI<span className="text-accent group-hover:ml-1 transition-all">-</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'nav-link',
                  activeSection === link.href.substring(1) && 'nav-link-active'
                )}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-100 transition-colors"
                title={link.name}
              >
                <link.icon size={18} />
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="px-5 py-2 rounded-xl bg-zinc-100 text-bg-dark text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-bg-dark transition-all"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-zinc-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    activeSection === link.href.substring(1) ? 'text-accent' : 'text-zinc-400'
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-zinc-800 my-2" />
              <div className="flex items-center gap-6">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-accent transition-colors"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
              <a
                href="/resume.pdf"
                className="btn-primary w-full"
                onClick={() => setIsOpen(false)}
              >
                <FileText size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
