"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

type Filter = "all" | "conceptual" | "technical" | "urban";

const filters: { label: string; value: Filter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Conceptual", value: "conceptual" },
  { label: "Technical", value: "technical" },
  { label: "Urban Systems", value: "urban" },
];

const categoryLabel: Record<string, string> = {
  conceptual: "Conceptual",
  technical: "Technical",
  urban: "Urban",
};

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#fff0f3] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-[10px] text-[#800f2f]/60 hover:text-[#c9184a] tracking-widest uppercase transition-colors mb-10">
            ← Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">Archive</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-[#590d22] mb-3">All Projects</h1>
          <p className="font-sans text-sm text-[#800f2f]/70">
            {projects.length} projects across conceptual, technical, and urban work.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-14 pb-8 border-b border-[#c9184a]/15">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value)}
              className={`font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                active === filter.value
                  ? "bg-[#590d22] text-[#fff0f3] border-[#590d22]"
                  : "text-[#590d22] border-[#c9184a]/25 hover:border-[#c9184a]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="space-y-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center justify-between py-8 border-b border-[#c9184a]/10 hover:border-[#c9184a]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-8">
                    <span className="font-mono text-sm text-[#c9184a]/40 group-hover:text-[#c9184a]/70 transition-colors w-8">
                      {project.number}
                    </span>
                    <div>
                      <h2 className="font-serif text-2xl md:text-3xl text-[#590d22] group-hover:text-[#800f2f] transition-colors">
                        {project.title}
                      </h2>
                      <p className="font-serif italic text-sm text-[#800f2f]/60 mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-8">
                    <span className="font-mono text-[10px] text-[#800f2f]/50 tracking-widest uppercase">
                      {categoryLabel[project.category]}
                    </span>
                    <span className="font-mono text-[10px] text-[#800f2f]/40 tracking-wider">
                      {project.year}
                    </span>
                    <span className="font-mono text-sm text-[#c9184a]/30 group-hover:text-[#c9184a] group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
