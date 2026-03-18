"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categoryLabel: Record<string, string> = {
  conceptual: "Conceptual",
  technical: "Technical",
  urban: "Urban Systems",
};

function ProjectCard({ project, index }: { project: (typeof featuredProjects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block relative border border-[#c9184a]/15 hover:border-[#c9184a]/40 transition-all duration-500 hover-glow bg-[#fff8f9]"
      >
        {/* Top accent line that grows on hover */}
        <div className="absolute top-0 left-0 w-0 h-px bg-[#c9184a] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

        <div className="p-6 md:p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.span
                className="font-mono text-3xl text-[#c9184a]/30 group-hover:text-[#c9184a]/70 transition-colors duration-300 leading-none"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {project.number}
              </motion.span>
              <div>
                <div className="font-mono text-[10px] text-[#800f2f]/60 tracking-widest uppercase mb-1">
                  {categoryLabel[project.category]}
                </div>
                <div className="font-mono text-[10px] text-[#800f2f]/40 tracking-wider">
                  {project.year}
                </div>
              </div>
            </div>
            <div className="font-mono text-[10px] text-[#c9184a]/50 tracking-widest uppercase">
              {project.type.split(" ").slice(0, 2).join(" ")}
            </div>
          </div>

          {/* Architectural illustration area */}
          <div className="relative h-48 mb-6 overflow-hidden bg-[#fff0f3] border border-[#c9184a]/10 group-hover:border-[#c9184a]/20 transition-colors">
            <div className="absolute inset-0 flex items-center justify-center">
              <ProjectIllustration slug={project.slug} />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#590d22]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <h3 className="font-serif text-2xl md:text-3xl text-[#590d22] mb-2 group-hover:text-[#800f2f] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-serif italic text-sm text-[#800f2f]/70 mb-4">
            {project.subtitle}
          </p>
          <p className="font-sans text-sm text-[#590d22]/60 leading-relaxed mb-6">
            {project.theme}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-[#c9184a]/70 border border-[#c9184a]/20 px-2 py-1 tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#c9184a]/10">
            <span className="font-sans text-xs text-[#800f2f]/60">
              {project.location}
            </span>
            <span className="font-mono text-xs text-[#c9184a] tracking-wider group-hover:translate-x-1 transition-transform duration-300">
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProjectIllustration({ slug }: { slug: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    oneness: (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Sacred geometry — Om inspired circular form */}
        {[20, 40, 60, 80].map((r, i) => (
          <circle key={i} cx="140" cy="80" r={r} fill="none" stroke="#590d22" strokeWidth="0.8" opacity={0.3 + i * 0.1} />
        ))}
        <circle cx="140" cy="80" r="8" fill="#c9184a" opacity="0.3" />
        <circle cx="140" cy="80" r="3" fill="#c9184a" opacity="0.7" />
        {/* Radial lines — pre-rounded to avoid SSR/client float mismatch */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const r = (n: number) => Math.round(n * 1000) / 1000;
          return (
            <line key={deg}
              x1={r(140 + 20 * Math.cos(rad))} y1={r(80 + 20 * Math.sin(rad))}
              x2={r(140 + 80 * Math.cos(rad))} y2={r(80 + 80 * Math.sin(rad))}
              stroke="#c9184a" strokeWidth="0.4" opacity="0.3"
            />
          );
        })}
        {/* Ground */}
        <line x1="0" y1="145" x2="280" y2="145" stroke="#590d22" strokeWidth="1" opacity="0.4" />
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">OMKARESHWAR · VISION PLAN · 2023</text>
      </svg>
    ),
    "formula-1": (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Speed lines — fixed x2 values to avoid hydration mismatch */}
        {([20, 40, 60, 80, 100, 120] as const).map((y, i) => (
          <line key={y} x1="0" y1={y} x2={[220, 195, 240, 205, 260, 215][i]} y2={y} stroke="#590d22" strokeWidth="0.5" opacity="0.15" />
        ))}
        {/* Grandstand profile */}
        <polyline points="20,130 20,60 60,60 60,80 100,80 100,50 160,50 160,130" fill="none" stroke="#590d22" strokeWidth="1.5" opacity="0.7" />
        {/* Cantilevered roof */}
        <polyline points="20,60 240,40 260,45" fill="none" stroke="#c9184a" strokeWidth="1.5" />
        <line x1="240" y1="40" x2="240" y2="130" stroke="#c9184a" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        {/* Track curve */}
        <path d="M 20 140 Q 140 135 260 140" fill="none" stroke="#590d22" strokeWidth="1" opacity="0.4" />
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">FORMULA 1 · RACE FACILITY · 2022</text>
      </svg>
    ),
    "reframing-le-corbusier": (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Grid — Chandigarh sector logic */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <line x1={30 + i * 50} y1="20" x2={30 + i * 50} y2="140" stroke="#590d22" strokeWidth="0.5" opacity="0.2" />
            <line x1="20" y1={20 + i * 30} x2="260" y2={20 + i * 30} stroke="#590d22" strokeWidth="0.5" opacity="0.2" />
          </g>
        ))}
        {/* Capitol complex */}
        <rect x="160" y="30" width="80" height="50" fill="none" stroke="#c9184a" strokeWidth="1" />
        <rect x="170" y="38" width="20" height="15" fill="#c9184a" opacity="0.2" />
        <rect x="200" y="38" width="30" height="15" fill="#c9184a" opacity="0.15" />
        {/* Informal overlay */}
        {[0,1,2,3,4,5,6,7].map((i) => (
          <rect key={i} x={25 + (i%4)*30} y={80 + Math.floor(i/4)*25} width={15+i*3} height={12+i*2} fill="none" stroke="#800f2f" strokeWidth="0.8" opacity="0.4" />
        ))}
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">CHANDIGARH · CRITICAL ANALYSIS · 2022</text>
      </svg>
    ),
    "360-riverside-housing": (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* River */}
        <path d="M 0 130 Q 70 120 140 130 Q 210 140 280 125" fill="#ffb3c1" opacity="0.3" />
        <path d="M 0 140 Q 70 130 140 140 Q 210 150 280 135" fill="#ffb3c1" opacity="0.2" />
        {/* Housing clusters */}
        {[0,1,2].map((i) => (
          <g key={i} transform={`translate(${30 + i*80}, 0)`}>
            <rect x="0" y="60" width="60" height="60" fill="none" stroke="#590d22" strokeWidth="1.2" opacity="0.6" />
            <rect x="10" y="40" width="40" height="20" fill="none" stroke="#590d22" strokeWidth="1" opacity="0.4" />
            {/* Courtyard */}
            <rect x="15" y="72" width="30" height="30" fill="#ffccd5" opacity="0.3" />
            {/* Windows */}
            {[0,1,2].map((j) => (
              <rect key={j} x={5 + j*18} y="68" width="8" height="6" fill="#590d22" opacity="0.25" />
            ))}
          </g>
        ))}
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">360 RIVERSIDE · HOUSING · 2022</text>
      </svg>
    ),
    "house-of-frames": (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Layered frames */}
        <rect x="20" y="20" width="240" height="130" fill="none" stroke="#c9184a" strokeWidth="0.5" opacity="0.3" />
        <rect x="40" y="35" width="200" height="100" fill="none" stroke="#c9184a" strokeWidth="0.7" opacity="0.4" />
        <rect x="65" y="50" width="150" height="75" fill="none" stroke="#590d22" strokeWidth="1" opacity="0.5" />
        {/* View through frames — garden */}
        <ellipse cx="140" cy="100" rx="40" ry="15" fill="#ffccd5" opacity="0.4" />
        <line x1="100" y1="85" x2="100" y2="130" stroke="#590d22" strokeWidth="0.8" opacity="0.5" />
        <line x1="180" y1="85" x2="180" y2="130" stroke="#590d22" strokeWidth="0.8" opacity="0.5" />
        {/* Light rays */}
        {[0,1,2,3].map((i) => (
          <line key={i} x1={115 + i*12} y1="50" x2={110 + i*14} y2="90" stroke="#ff8fa3" strokeWidth="0.5" opacity="0.4" />
        ))}
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">HOUSE OF FRAMES · RESIDENTIAL · 2021</text>
      </svg>
    ),
    "chicago-urban-systems": (
      <svg viewBox="0 0 280 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* GIS-style map */}
        {/* Chicago grid blocks — deterministic fill pattern to avoid hydration mismatch */}
        {[0,1,2,3,4,5].map((i) =>
          [0,1,2,3].map((j) => (
            <rect key={`${i}-${j}`} x={20 + i*40} y={25 + j*28} width={34} height={22}
              fill={(i + j) % 2 === 0 ? "#ffccd5" : "none"}
              stroke="#590d22" strokeWidth="0.5" opacity="0.4" />
          ))
        )}
        {/* Data overlay — choropleth */}
        <rect x="20" y="25" width="34" height="22" fill="#c9184a" opacity="0.3" />
        <rect x="100" y="53" width="34" height="22" fill="#c9184a" opacity="0.2" />
        <rect x="180" y="25" width="34" height="22" fill="#800f2f" opacity="0.3" />
        {/* Lake Michigan edge */}
        <path d="M 260 20 Q 265 80 260 140" fill="#ffb3c1" opacity="0.25" stroke="#c9184a" strokeWidth="0.8" />
        {/* Legend */}
        <rect x="20" y="130" width="8" height="5" fill="#c9184a" opacity="0.5" />
        <text x="32" y="135" fontSize="6" fill="#800f2f" opacity="0.6" fontFamily="monospace">High Density</text>
        <text x="140" y="157" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.6" fontFamily="monospace">CHICAGO DPD · GIS + PLANNING · 2025</text>
      </svg>
    ),
  };

  return illustrations[slug] ?? (
    <div className="w-full h-full flex items-center justify-center">
      <div className="font-mono text-xs text-[#c9184a]/40 tracking-widest">PROJECT</div>
    </div>
  );
}

export function SelectedWorks() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 xl:px-20 bg-[#fff0f3]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">
              Selected Works
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              className="font-serif text-5xl md:text-6xl text-[#590d22]"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Projects
            </motion.h2>

            <motion.p
              className="font-sans text-sm text-[#800f2f]/70 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conceptual design, technical execution, and urban systems
              thinking — across scales from the building to the city.
            </motion.p>
          </div>

          <motion.div
            className="h-px bg-gradient-to-r from-[#c9184a] to-transparent mt-8"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-[#590d22] border-b border-[#c9184a]/40 pb-1 hover:border-[#c9184a] hover:text-[#c9184a] transition-all duration-300"
          >
            View All Projects
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
