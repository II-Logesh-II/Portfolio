/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ children, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-10 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 tracking-tight">
          {children}
        </h2>
        {subtitle && (
          <p className={`text-zinc-400 text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
        <div className={`h-1 w-12 bg-accent mt-6 rounded-full ${centered ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  );
}
