"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Research",
    body: "Every project begins with asking why. Thesis-level inquiry — from sacred geometry in Omkareshwar to critical urbanism in Chandigarh — forms the foundation of design thinking.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="8" stroke="#c9184a" strokeWidth="1" />
        <circle cx="20" cy="20" r="16" stroke="#c9184a" strokeWidth="0.5" opacity="0.4" />
        <line x1="26" y1="26" x2="36" y2="36" stroke="#c9184a" strokeWidth="1.5" />
        <line x1="20" y1="4" x2="20" y2="16" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
        <line x1="4" y1="20" x2="16" y2="20" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Space",
    body: "Architecture as phenomenological experience. From the framed view to the sectional cut — the spatial quality of a design is the story it tells and the feeling it holds.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="24" height="24" stroke="#c9184a" strokeWidth="1" />
        <rect x="14" y="14" width="12" height="12" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="8" x2="2" y2="2" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
        <line x1="32" y1="8" x2="38" y2="2" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="32" x2="2" y2="38" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
        <line x1="32" y1="32" x2="38" y2="38" stroke="#c9184a" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Systems",
    body: "Cities are complex systems. Urban planning, GIS analysis, data visualization, and policy — the tools of systems thinking bring architectural ambition to the scale of the city.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="20" r="4" stroke="#c9184a" strokeWidth="1" />
        <circle cx="30" cy="10" r="4" stroke="#c9184a" strokeWidth="1" />
        <circle cx="30" cy="30" r="4" stroke="#c9184a" strokeWidth="1" />
        <line x1="14" y1="18" x2="26" y2="12" stroke="#c9184a" strokeWidth="0.8" opacity="0.6" />
        <line x1="14" y1="22" x2="26" y2="28" stroke="#c9184a" strokeWidth="0.8" opacity="0.6" />
        <line x1="30" y1="14" x2="30" y2="26" stroke="#c9184a" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
  },
];

const timeline = [
  { year: "2018–23", role: "B.Arch", org: "D.C. Patel School of Architecture, Sardar Patel University", note: "First Class with Distinction · GPA 3.95" },
  { year: "2021", role: "Architectural Intern", org: "Hundreaddesigns, Surat", note: "Mixed-use projects, site supervision, documentation" },
  { year: "2023", role: "Junior Architect", org: "Third Angle Dsync Works, Pune", note: "Masterplanning to working drawings, site coordination" },
  { year: "2024–25", role: "M.S. Architecture", org: "Illinois Institute of Technology, Chicago", note: "GPA 4.00 · Graduate Research & Teaching Assistant" },
  { year: "2025", role: "Planning Intern", org: "City of Chicago, DPD", note: "GIS, Tableau, urban analysis, Commissioner's Office" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-[#ffccd5]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <div ref={ref} className="mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">About</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl text-[#590d22] mb-6 leading-tight">
                Architecture through research, detail, and human experience.
              </h2>
              <div className="h-px bg-gradient-to-r from-[#c9184a] to-transparent mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="font-sans text-base text-[#590d22]/80 leading-relaxed">
                I am Vandan Panirwala — a Licensed Architect (India) with international training at
                IIT Chicago. My work moves fluidly between conceptual design, technical construction,
                and urban systems thinking.
              </p>
              <p className="font-sans text-base text-[#590d22]/70 leading-relaxed">
                I believe the best architecture is research-driven: that every spatial decision
                should emerge from a deeper understanding of place, culture, ecology, and the
                people who will inhabit it.
              </p>
              <p className="font-sans text-base text-[#590d22]/70 leading-relaxed">
                My practice spans award-winning thesis work, professional residential and commercial
                projects, and urban-scale planning and data work with the City of Chicago — all
                connected by a commitment to precision, clarity, and spatial storytelling.
              </p>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Revit (Cert.)", "AutoCAD (Cert.)", "Rhino + Grasshopper", "Lumion", "ArcGIS Pro", "Tableau", "Photoshop (Cert.)"].map((tool) => (
                  <span key={tool} className="font-mono text-[10px] text-[#590d22]/70 border border-[#c9184a]/25 px-2.5 py-1 tracking-wider">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              className="border border-[#c9184a]/20 bg-[#fff0f3] p-8 hover:border-[#c9184a]/40 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className="flex items-start justify-between mb-6">
                {pillar.icon}
                <span className="font-mono text-3xl text-[#c9184a]/20">{pillar.number}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#590d22] mb-3">{pillar.title}</h3>
              <p className="font-sans text-sm text-[#800f2f]/70 leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">Experience & Education</span>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-28 top-0 bottom-0 w-px bg-[#c9184a]/20" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[112px_1fr] gap-4 md:gap-8 pl-6 md:pl-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Year */}
                  <div className="font-mono text-xs text-[#c9184a]/70 tracking-wider pt-1 md:text-right md:pr-6">
                    {item.year}
                  </div>

                  {/* Content — with dot on the line */}
                  <div className="relative">
                    <div className="absolute -left-[2.35rem] md:-left-[1.35rem] top-1.5 w-2 h-2 rounded-full bg-[#c9184a] border-2 border-[#ffccd5]/50" />
                    <div className="font-serif text-lg text-[#590d22]">{item.role}</div>
                    <div className="font-sans text-sm text-[#800f2f] mt-0.5">{item.org}</div>
                    <div className="font-sans text-xs text-[#800f2f]/60 mt-1">{item.note}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
