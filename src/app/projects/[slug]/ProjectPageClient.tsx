"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export function ProjectPageClient({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const categoryLabel: Record<string, string> = {
    conceptual: "Conceptual Design",
    technical: "Technical Execution",
    urban: "Urban Systems",
  };

  return (
    <div className="min-h-screen bg-[#fff0f3]">

      {/* Back nav */}
      <div className="fixed top-0 left-0 right-0 z-40 pt-20 pb-4 px-6 md:px-12 xl:px-20 pointer-events-none">
        <motion.div
          className="pointer-events-auto inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[10px] text-[#800f2f]/60 hover:text-[#c9184a] tracking-widest uppercase transition-colors"
          >
            ← Back to Work
          </Link>
        </motion.div>
      </div>

      {/* Hero */}
      <div className="relative pt-28 pb-20 px-6 md:px-12 xl:px-20 border-b border-[#c9184a]/15">
        {/* Background contour */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[100, 200, 300, 400].map((r) => (
              <ellipse key={r} cx="900" cy="250" rx={r * 2} ry={r} fill="none" stroke="#c9184a" strokeWidth="1" />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
            <div>
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-8 h-px bg-[#c9184a]" />
                <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">
                  {categoryLabel[project.category]}
                </span>
              </motion.div>

              {/* Number + Title */}
              <motion.div
                className="flex items-start gap-6 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <span className="font-mono text-6xl text-[#c9184a]/20 leading-none pt-2">
                  {project.number}
                </span>
                <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-[#590d22] leading-tight">
                  {project.title}
                </h1>
              </motion.div>

              <motion.p
                className="font-serif italic text-xl text-[#800f2f]/70 mb-8 ml-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.subtitle}
              </motion.p>

              <motion.div
                className="h-px bg-gradient-to-r from-[#c9184a] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            {/* Meta block */}
            <motion.div
              className="min-w-[200px] space-y-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { label: "Year", value: project.year },
                { label: "Type", value: project.type },
                { label: "Location", value: project.location },
                { label: "Role", value: project.role },
              ].map((meta) => (
                <div key={meta.label} className="border-l-2 border-[#c9184a]/25 pl-4">
                  <div className="font-mono text-[9px] text-[#c9184a]/60 tracking-widest uppercase mb-0.5">{meta.label}</div>
                  <div className="font-sans text-sm text-[#590d22]">{meta.value}</div>
                </div>
              ))}

              {/* Tools */}
              <div className="border-l-2 border-[#c9184a]/25 pl-4">
                <div className="font-mono text-[9px] text-[#c9184a]/60 tracking-widest uppercase mb-2">Tools</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="font-mono text-[9px] text-[#590d22] border border-[#c9184a]/25 px-1.5 py-0.5 tracking-wider">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="py-16 px-6 md:px-12 xl:px-20 bg-[#ffccd5]/20 border-b border-[#c9184a]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div className="font-mono text-[10px] text-[#c9184a]/60 tracking-widest uppercase pt-1">Overview</div>
            <motion.p
              className="font-serif text-2xl md:text-3xl text-[#590d22] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {project.summary}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="py-8 px-6 md:px-12 xl:px-20 border-b border-[#c9184a]/10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] text-[#c9184a]/70 border border-[#c9184a]/20 px-3 py-1.5 tracking-widest uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Description paragraphs */}
      <div className="py-20 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8">
            <div className="font-mono text-[10px] text-[#c9184a]/60 tracking-widest uppercase pt-1">Process</div>
            <div className="space-y-6">
              {project.description.map((para, i) => (
                <motion.p
                  key={i}
                  className="font-sans text-base text-[#590d22]/80 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sections / layers */}
      <div className="py-16 px-6 md:px-12 xl:px-20 bg-[#fff8f9] border-t border-b border-[#c9184a]/10">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#c9184a]/60 tracking-widest uppercase mb-10">Project Layers</div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-[#c9184a]/10">
            {project.sections.map((section, i) => (
              <motion.div
                key={section.label}
                className="bg-[#fff8f9] p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-mono text-2xl text-[#c9184a]/20 mb-4">0{i + 1}</div>
                <h3 className="font-serif text-xl text-[#590d22] mb-3">{section.label}</h3>
                <p className="font-sans text-sm text-[#800f2f]/70 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Theme */}
      <div className="py-20 px-6 md:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-px bg-[#c9184a] mx-auto mb-8" />
          <motion.blockquote
            className="font-serif text-2xl md:text-3xl text-[#590d22] italic leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "{project.theme}"
          </motion.blockquote>
          <div className="w-12 h-px bg-[#c9184a] mx-auto mt-8" />
        </div>
      </div>

      {/* Next project */}
      <div className="border-t border-[#c9184a]/15">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block py-16 px-6 md:px-12 xl:px-20 hover:bg-[#ffccd5]/20 transition-colors duration-500"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] text-[#c9184a]/60 tracking-widest uppercase mb-3">Next Project</div>
              <h3 className="font-serif text-3xl md:text-4xl text-[#590d22] group-hover:text-[#800f2f] transition-colors">
                {nextProject.title}
              </h3>
              <p className="font-serif italic text-sm text-[#800f2f]/60 mt-1">{nextProject.subtitle}</p>
            </div>
            <motion.div
              className="font-mono text-4xl text-[#c9184a]/30 group-hover:text-[#c9184a] transition-colors"
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
}
