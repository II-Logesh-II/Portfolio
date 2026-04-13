/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Dna, Database, Activity, Zap } from 'lucide-react';

export default function BioDataPipeline() {
  return (
    <div className="relative w-full h-full bg-zinc-950 overflow-hidden flex items-center justify-center p-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent opacity-50" />
      
      {/* DNA Strands Background - Enhanced */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0, x: i * 60 - 150 }}
            animate={{ 
              y: [0, 500], 
              opacity: [0, 0.5, 0],
              rotate: [0, 360],
              x: [i * 60 - 150, i * 60 - 100, i * 60 - 150]
            }}
            transition={{ 
              duration: 12 + i * 3, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5
            }}
            className="absolute"
          >
            <Dna size={40} className="text-accent/30" />
          </motion.div>
        ))}
      </div>

      {/* The Pipeline */}
      <div className="relative z-10 w-full max-w-md space-y-6 -mt-28">
        {/* Source: Raw Bio Data */}
        <div className="flex flex-col items-center relative">
          <motion.div
            animate={{ 
              boxShadow: ["0 0 10px rgba(6,182,212,0.2)", "0 0 30px rgba(6,182,212,0.5)", "0 0 10px rgba(6,182,212,0.2)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent relative overflow-hidden"
          >
            <Dna size={24} />
            {/* Sequencing Scanner Effect */}
            <motion.div 
              animate={{ y: [-30, 30] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-0.5 bg-accent/60 shadow-[0_0_8px_#06b6d4]"
            />
          </motion.div>
          <span className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] mt-2">Sequencing</span>
        </div>

        {/* Pipeline Line 1 with multiple packets */}
        <div className="relative h-10 w-px bg-zinc-800/50 mx-auto">
          {[0, 0.5, 1].map((delay) => (
            <motion.div
              key={delay}
              animate={{ y: [0, 40], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-accent rounded-full shadow-[0_0_10px_#06b6d4]"
            />
          ))}
        </div>

        {/* Processing Node - Enhanced with rotating rings */}
        <div className="flex flex-col items-center relative">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-accent/20"
            />
            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-accent/10 border-t-accent/40"
            />
            {/* Inner Core */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(6,182,212,0.1)", "rgba(6,182,212,0.2)", "rgba(6,182,212,0.1)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-14 h-14 rounded-full flex items-center justify-center text-accent shadow-[inset_0_0_15px_rgba(6,182,212,0.2)]"
            >
              <Activity size={20} />
            </motion.div>
          </div>
          <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] mt-2">Analyzing</span>
        </div>

        {/* Pipeline Line 2 */}
        <div className="relative h-10 w-px bg-zinc-800/50 mx-auto">
          {[0, 0.7].map((delay) => (
            <motion.div
              key={delay}
              animate={{ y: [0, 40], opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-accent rounded-full shadow-[0_0_10px_#06b6d4]"
            />
          ))}
        </div>

        {/* Destination: Insights */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ 
              y: [0, -4, 0],
              boxShadow: ["0 0 0px transparent", "0 0 20px rgba(6,182,212,0.1)", "0 0 0px transparent"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-accent"
          >
            <Database size={24} />
          </motion.div>
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] mt-2">Insights</span>
        </div>
      </div>

      {/* Floating Bio-Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 400 - 200, 
            y: Math.random() * 400 - 200,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -150 - 100],
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
            x: [null, (Math.random() - 0.5) * 50]
          }}
          transition={{ 
            duration: 3 + Math.random() * 3, 
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="absolute w-1 h-1 bg-accent/40 rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
}
