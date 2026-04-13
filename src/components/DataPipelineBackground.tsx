/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function DataPipelineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Horizontal Flowing Lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`h-line-${i}`}
            x1="-100%"
            y1={`${15 + i * 15}%`}
            x2="200%"
            y2={`${15 + i * 15}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Vertical Flowing Lines */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={`v-line-${i}`}
            x1={`${20 + i * 20}%`}
            y1="-100%"
            x2={`${20 + i * 20}%`}
            y2="200%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Moving Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            r="2"
            fill="var(--color-accent)"
            initial={{ 
              cx: `${Math.random() * 100}%`, 
              cy: `${Math.random() * 100}%`,
              opacity: 0.2
            }}
            animate={{ 
              cx: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              cy: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      
      {/* Radial Gradients for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_0%,var(--color-bg-dark)_80%)]" />
    </div>
  );
}
