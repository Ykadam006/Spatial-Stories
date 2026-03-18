"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technicalItems = [
  {
    label: "Working Drawings",
    description: "Complete documentation sets from floor plans to slab/shuttering layouts, developed at TADW Pune across residential and commercial projects.",
    detail: "Floor Plans · Sections · Elevations",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Floor plan */}
        <rect x="20" y="20" width="160" height="100" stroke="#590d22" strokeWidth="1.2" />
        {/* Interior walls */}
        <line x1="100" y1="20" x2="100" y2="80" stroke="#590d22" strokeWidth="1" />
        <line x1="20" y1="80" x2="100" y2="80" stroke="#590d22" strokeWidth="1" />
        <line x1="100" y1="60" x2="180" y2="60" stroke="#590d22" strokeWidth="1" />
        {/* Doors */}
        <path d="M 100 80 Q 115 65 100 60" fill="none" stroke="#c9184a" strokeWidth="0.8" />
        <path d="M 20 80 Q 35 95 20 90" fill="none" stroke="#c9184a" strokeWidth="0.8" />
        {/* Dimensions */}
        <line x1="20" y1="10" x2="180" y2="10" stroke="#c9184a" strokeWidth="0.5" />
        <line x1="20" y1="7" x2="20" y2="13" stroke="#c9184a" strokeWidth="0.5" />
        <line x1="180" y1="7" x2="180" y2="13" stroke="#c9184a" strokeWidth="0.5" />
        <text x="100" y="8" textAnchor="middle" fontSize="6" fill="#c9184a" fontFamily="monospace">16.0 m</text>
        {/* North arrow */}
        <circle cx="170" cy="110" r="8" stroke="#590d22" strokeWidth="0.5" opacity="0.5" />
        <text x="170" y="107" textAnchor="middle" fontSize="6" fill="#590d22" fontFamily="monospace">N</text>
        <line x1="170" y1="109" x2="170" y2="102" stroke="#590d22" strokeWidth="0.8" />
        {/* Hatching */}
        {[0,1,2,3,4,5].map((i) => (
          <line key={i} x1={90+i*2} y1="20" x2={90+i*2} y2="80" stroke="#590d22" strokeWidth="0.3" opacity="0.3" />
        ))}
      </svg>
    ),
  },
  {
    label: "Structural Details",
    description: "Slab and shuttering drawings, staircase sections, column layouts, and RCC detailing coordinated with structural consultants.",
    detail: "Slab Layouts · RCC Details · Columns",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Slab section */}
        <rect x="20" y="50" width="160" height="15" fill="#ffccd5" opacity="0.5" stroke="#590d22" strokeWidth="1" />
        {/* Reinforcement bars */}
        {[30, 50, 70, 90, 110, 130, 150, 170].map((x) => (
          <circle key={x} cx={x} cy="57" r="2.5" fill="#590d22" opacity="0.5" />
        ))}
        {/* Columns */}
        <rect x="20" y="65" width="20" height="55" fill="none" stroke="#590d22" strokeWidth="1.2" />
        <rect x="160" y="65" width="20" height="55" fill="none" stroke="#590d22" strokeWidth="1.2" />
        {/* Column hatching */}
        {[0,1,2,3].map((i) => (
          <line key={i} x1="20" y1={70+i*12} x2="40" y2={70+i*12} stroke="#590d22" strokeWidth="0.4" opacity="0.5" />
        ))}
        {/* Dimension */}
        <line x1="40" y1="45" x2="160" y2="45" stroke="#c9184a" strokeWidth="0.5" />
        <text x="100" y="43" textAnchor="middle" fontSize="6" fill="#c9184a" fontFamily="monospace">120 mm</text>
        <text x="30" y="45" textAnchor="middle" fontSize="5" fill="#590d22" opacity="0.7" fontFamily="monospace">COL</text>
        <text x="170" y="45" textAnchor="middle" fontSize="5" fill="#590d22" opacity="0.7" fontFamily="monospace">COL</text>
        {/* Label */}
        <text x="100" y="130" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.7" fontFamily="monospace">SLAB SECTION — SCALE 1:20</text>
      </svg>
    ),
  },
  {
    label: "Building Sections",
    description: "Full building sections showing spatial relationships, ceiling heights, structural logic, and material transitions across all floors.",
    detail: "Longitudinal · Cross Sections",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ground */}
        <line x1="0" y1="120" x2="200" y2="120" stroke="#590d22" strokeWidth="1.5" />
        {/* Slabs */}
        <rect x="20" y="85" width="160" height="6" fill="#ffccd5" stroke="#590d22" strokeWidth="0.8" />
        <rect x="20" y="50" width="160" height="6" fill="#ffccd5" stroke="#590d22" strokeWidth="0.8" />
        <rect x="20" y="18" width="160" height="6" fill="#ffccd5" stroke="#590d22" strokeWidth="0.8" />
        {/* Columns */}
        {[20, 80, 140].map((x) => (
          <g key={x}>
            <rect x={x} y="91" width="8" height="29" fill="none" stroke="#590d22" strokeWidth="0.8" />
            <rect x={x} y="56" width="8" height="29" fill="none" stroke="#590d22" strokeWidth="0.8" />
            <rect x={x} y="24" width="8" height="26" fill="none" stroke="#590d22" strokeWidth="0.8" />
          </g>
        ))}
        {/* Floor labels */}
        <text x="5" y="100" fontSize="5" fill="#c9184a" fontFamily="monospace">G</text>
        <text x="5" y="67" fontSize="5" fill="#c9184a" fontFamily="monospace">1</text>
        <text x="5" y="33" fontSize="5" fill="#c9184a" fontFamily="monospace">2</text>
        {/* Heights */}
        <line x1="185" y1="91" x2="185" y2="120" stroke="#c9184a" strokeWidth="0.4" />
        <text x="192" y="108" fontSize="5" fill="#c9184a" fontFamily="monospace" transform="rotate(90,192,108)">3.2m</text>
      </svg>
    ),
  },
  {
    label: "Detail Drawings",
    description: "Bathroom wet area details, staircase connections, facade details, and window/door schedules developed to construction-ready precision.",
    detail: "WC Details · Staircase · Facades",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Window detail */}
        <rect x="60" y="20" width="80" height="60" fill="none" stroke="#590d22" strokeWidth="1.2" />
        {/* Frame */}
        <rect x="68" y="28" width="30" height="44" fill="none" stroke="#590d22" strokeWidth="0.8" />
        <rect x="102" y="28" width="30" height="44" fill="none" stroke="#590d22" strokeWidth="0.8" />
        {/* Glass */}
        <rect x="70" y="30" width="26" height="40" fill="#ffb3c1" opacity="0.2" />
        <rect x="104" y="30" width="26" height="40" fill="#ffb3c1" opacity="0.2" />
        {/* Sill */}
        <rect x="55" y="80" width="90" height="8" fill="#ffccd5" stroke="#590d22" strokeWidth="0.8" />
        {/* Lintel */}
        <rect x="55" y="12" width="90" height="8" fill="#ffccd5" stroke="#590d22" strokeWidth="0.8" />
        {/* Dimension */}
        <line x1="60" y1="100" x2="140" y2="100" stroke="#c9184a" strokeWidth="0.5" />
        <text x="100" y="98" textAnchor="middle" fontSize="6" fill="#c9184a" fontFamily="monospace">1200</text>
        <text x="100" y="130" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.7" fontFamily="monospace">WINDOW DETAIL — 1:10</text>
      </svg>
    ),
  },
  {
    label: "Site Coordination",
    description: "On-site presence during construction: material approvals, contractor briefings, RFI responses, and quality control verification.",
    detail: "Site Visits · QC · Coordination",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Site plan */}
        <rect x="20" y="20" width="160" height="100" fill="none" stroke="#590d22" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        {/* Building footprint */}
        <rect x="50" y="40" width="100" height="65" fill="none" stroke="#590d22" strokeWidth="1.2" />
        {/* Trees */}
        {[[25,30],[170,30],[25,110],[170,110]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="8" fill="#ffccd5" stroke="#590d22" strokeWidth="0.5" opacity="0.5" />
        ))}
        {/* Entrance */}
        <rect x="95" y="105" width="10" height="12" fill="none" stroke="#c9184a" strokeWidth="1" />
        {/* Setback lines */}
        <rect x="35" y="30" width="130" height="80" fill="none" stroke="#c9184a" strokeWidth="0.4" strokeDasharray="3 3" opacity="0.5" />
        {/* North */}
        <text x="180" y="25" fontSize="6" fill="#590d22" fontFamily="monospace">N↑</text>
        <text x="100" y="133" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.7" fontFamily="monospace">SITE PLAN — SCALE 1:200</text>
      </svg>
    ),
  },
  {
    label: "Material Systems",
    description: "Specification of construction materials, finishes, and assemblies — from Vastu-aligned spatial organization to material palette selection.",
    detail: "Specifications · Finishes · Assemblies",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Material palette swatches */}
        <rect x="20" y="20" width="35" height="35" fill="#590d22" opacity="0.8" />
        <rect x="62" y="20" width="35" height="35" fill="#ffccd5" stroke="#c9184a" strokeWidth="0.5" />
        <rect x="104" y="20" width="35" height="35" fill="#fff0f3" stroke="#590d22" strokeWidth="0.5" />
        <rect x="146" y="20" width="35" height="35" fill="#c9184a" opacity="0.4" />
        {/* Labels */}
        <text x="37" y="63" textAnchor="middle" fontSize="5" fill="#590d22" fontFamily="monospace">Brick</text>
        <text x="79" y="63" textAnchor="middle" fontSize="5" fill="#590d22" fontFamily="monospace">Plaster</text>
        <text x="121" y="63" textAnchor="middle" fontSize="5" fill="#590d22" fontFamily="monospace">Marble</text>
        <text x="163" y="63" textAnchor="middle" fontSize="5" fill="#590d22" fontFamily="monospace">Tile</text>
        {/* Section detail */}
        <rect x="20" y="80" width="160" height="8" fill="#ffccd5" opacity="0.5" stroke="#590d22" strokeWidth="0.8" />
        <rect x="20" y="88" width="160" height="4" fill="#c9184a" opacity="0.3" />
        <rect x="20" y="92" width="160" height="8" fill="#590d22" opacity="0.3" />
        <text x="100" y="115" textAnchor="middle" fontSize="6" fill="#c9184a" fontFamily="monospace">WALL ASSEMBLY — 1:5</text>
        <text x="100" y="130" textAnchor="middle" fontSize="7" fill="#800f2f" opacity="0.7" fontFamily="monospace">MATERIAL SPECIFICATIONS</text>
      </svg>
    ),
  },
];

export function TechnicalDepth() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technical" className="py-24 md:py-32 bg-[#590d22]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#ff8fa3]" />
            <span className="font-mono text-xs text-[#ff8fa3] tracking-[0.3em] uppercase">Technical Depth</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              className="font-serif text-5xl md:text-6xl text-[#fff0f3]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              From Concept<br />to Construction
            </motion.h2>

            <motion.p
              className="font-sans text-sm text-[#ffb3c1]/80 max-w-sm leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Technical execution is where design intentions meet reality.
              Working drawings, structural coordination, site supervision —
              the full arc of professional practice.
            </motion.p>
          </div>

          <motion.div
            className="h-px bg-gradient-to-r from-[#ff8fa3] to-transparent mt-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Technical grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#ff8fa3]/10">
          {technicalItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="bg-[#590d22] p-8 border border-[#ff8fa3]/10 hover:border-[#ff8fa3]/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* SVG illustration */}
              <div className="h-36 mb-6 opacity-70 group-hover:opacity-90 transition-opacity duration-300 bg-[#800f2f]/20 p-3">
                {item.svg}
              </div>

              <h3 className="font-serif text-xl text-[#fff0f3] mb-2">{item.label}</h3>
              <p className="font-sans text-sm text-[#ffb3c1]/70 leading-relaxed mb-4">{item.description}</p>
              <div className="font-mono text-[10px] text-[#ff8fa3]/50 tracking-wider uppercase">
                {item.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects list */}
        <motion.div
          className="mt-16 pt-12 border-t border-[#ff8fa3]/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-mono text-xs text-[#ff8fa3]/50 tracking-widest uppercase mb-8">
            Technical Projects
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Farm House, Pune", type: "Residential · Working Drawings · Site", firm: "TADW, 2023–24" },
              { name: "Residence, Valsad", type: "Residential · Layouts · Details", firm: "TADW, 2023–24" },
              { name: "Residence, Dadra Nagar", type: "Residential · Master Plan · Construction", firm: "TADW, 2023–24" },
              { name: "Commercial Office, Surat", type: "Commercial · Interior + Shell", firm: "Hundreaddesigns, 2021" },
              { name: "Commercial Factory, Surat", type: "Industrial · Layout · Coordination", firm: "Hundreaddesigns, 2021" },
            ].map((proj, i) => (
              <motion.div
                key={proj.name}
                className="flex items-start justify-between py-4 border-b border-[#ff8fa3]/10 group"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <div>
                  <div className="font-serif text-base text-[#fff0f3] group-hover:text-[#ffb3c1] transition-colors">
                    {proj.name}
                  </div>
                  <div className="font-mono text-[10px] text-[#ffb3c1]/50 tracking-wider mt-1">{proj.type}</div>
                </div>
                <div className="font-mono text-[10px] text-[#ff8fa3]/40 tracking-wider text-right shrink-0 ml-4">
                  {proj.firm}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
