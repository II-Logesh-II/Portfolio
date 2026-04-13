/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Database, GitBranch, Terminal, Cpu, Network, Workflow } from 'lucide-react';

const PIPELINE_ITEMS = [
  { text: "ETL_PIPELINE_RUNNING", icon: Workflow },
  { text: "AZURE_DATABRICKS_ACTIVE", icon: Database },
  { text: "ML_MODEL_TRAINING", icon: Cpu },
  { text: "SQL_QUERY_OPTIMIZED", icon: Terminal },
  { text: "DATA_STREAM_SYNCED", icon: Network },
  { text: "GIT_COMMIT_DEPLOYED", icon: GitBranch },
];

export default function RunningPipeline() {
  return (
    <div className="w-full bg-accent/5 border-y border-accent/10 py-6 overflow-hidden relative">
      <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
        {[...PIPELINE_ITEMS, ...PIPELINE_ITEMS, ...PIPELINE_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-bg-dark transition-all duration-500">
              <item.icon size={20} />
            </div>
            <span className="text-xl md:text-2xl font-mono font-bold text-zinc-700 group-hover:text-accent transition-colors tracking-tighter">
              {item.text}
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-accent/20 to-transparent rounded-full" />
          </div>
        ))}
      </div>
      
      {/* Decorative overlays */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-bg-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-bg-dark to-transparent z-10" />
      
      {/* Scanning line effect */}
      <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-y-0 w-1 bg-accent/20 blur-sm z-20"
      />
    </div>
  );
}
