"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const urbanCapabilities = [
  {
    title: "GIS Analysis",
    tools: ["ArcGIS Pro"],
    description: "Spatial data analysis, mapping planning zones, infrastructure networks, community development patterns, and on-site survey documentation.",
  },
  {
    title: "Data Visualization",
    tools: ["Tableau"],
    description: "Comparative dashboards placing Chicago alongside peer U.S. and global cities — translating complex urban data into compelling visual narratives.",
  },
  {
    title: "Urban Research",
    tools: ["Adobe Suite", "InDesign"],
    description: "Historical and contemporary urban analysis, policy review, reporting, and the production of design standards documents for city initiatives.",
  },
  {
    title: "Planning Process",
    tools: ["Fieldwork", "Documentation"],
    description: "On-site surveys, community documentation, Commissioner's Office coordination, process improvement, and cross-departmental reporting.",
  },
];

export function UrbanSystems() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-24 md:py-32 bg-[#ffccd5]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">Urban Systems</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.h2
              className="font-serif text-5xl md:text-6xl text-[#590d22]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Planning +<br />Data at City Scale
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-end space-y-4"
            >
              <p className="font-sans text-base text-[#590d22]/80 leading-relaxed">
                Urban thinking is not a side note in this portfolio — it is a core strand.
                As a Planning Intern at the City of Chicago's Department of Planning and Development,
                the work spanned GIS, Tableau dashboards, comparative city analysis, and policy research.
              </p>
              <p className="font-sans text-sm text-[#800f2f]/70 leading-relaxed">
                This is what separates an architecture portfolio from a design identity:
                the ability to think at every scale — from the detail joint to the city block.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="h-px bg-gradient-to-r from-[#c9184a] to-transparent mt-10"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.35 }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Main content: GIS map illustration + capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

          {/* Chicago GIS visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="border border-[#c9184a]/20 bg-[#fff0f3] p-6 h-[420px] relative overflow-hidden">
              {/* Chicago map SVG */}
              <svg viewBox="0 0 340 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Chicago community area grid */}
                {[0,1,2,3,4,5].map((col) =>
                  [0,1,2,3,4].map((row) => {
                    const fills = ["#ffccd5","#ffb3c1","#ff8fa3","#fff0f3","#c9184a20","#ffccd5"];
                    const fill = fills[(col + row) % fills.length];
                    return (
                      <rect key={`${col}-${row}`}
                        x={20 + col * 50} y={15 + row * 56}
                        width={45} height={50}
                        fill={fill} stroke="#c9184a" strokeWidth="0.5" opacity="0.7"
                      />
                    );
                  })
                )}

                {/* High-density overlay zones */}
                <rect x="20" y="71" width="45" height="50" fill="#c9184a" opacity="0.4" />
                <rect x="120" y="15" width="45" height="50" fill="#a4133c" opacity="0.35" />
                <rect x="170" y="127" width="45" height="50" fill="#800f2f" opacity="0.3" />

                {/* Lake Michigan */}
                <rect x="320" y="0" width="40" height="340" fill="#ffb3c1" opacity="0.2" />
                <path d="M 320 0 Q 315 80 318 160 Q 315 240 320 320" stroke="#c9184a" strokeWidth="1" opacity="0.4" />

                {/* Major roads */}
                <line x1="0" y1="100" x2="310" y2="100" stroke="#590d22" strokeWidth="1.5" opacity="0.3" />
                <line x1="0" y1="180" x2="310" y2="180" stroke="#590d22" strokeWidth="1" opacity="0.2" />
                <line x1="100" y1="0" x2="100" y2="295" stroke="#590d22" strokeWidth="1.5" opacity="0.3" />
                <line x1="200" y1="0" x2="200" y2="295" stroke="#590d22" strokeWidth="1" opacity="0.2" />

                {/* Data points */}
                {[[45,42],[145,70],[95,125],[195,155],[45,182],[245,42],[145,182]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#c9184a" opacity={0.5 + i*0.07} />
                ))}

                {/* Legend */}
                <rect x="20" y="280" width="10" height="7" fill="#800f2f" opacity="0.6" />
                <text x="36" y="287" fontSize="7" fill="#590d22" fontFamily="monospace">High Density</text>
                <rect x="20" y="292" width="10" height="7" fill="#ffccd5" opacity="0.8" stroke="#c9184a" strokeWidth="0.5" />
                <text x="36" y="299" fontSize="7" fill="#590d22" fontFamily="monospace">Medium Density</text>

                {/* Title */}
                <text x="170" y="310" textAnchor="middle" fontSize="8" fill="#800f2f" opacity="0.7" fontFamily="monospace">
                  CHICAGO DPD · PLANNING ANALYSIS · 2025
                </text>
              </svg>

              {/* Corner marks */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 border-[#c9184a]/40 ${
                  i === 0 ? "border-t border-l" : i === 1 ? "border-t border-r" :
                  i === 2 ? "border-b border-l" : "border-b border-r"
                }`} />
              ))}
            </div>

            {/* Caption */}
            <div className="mt-4 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#800f2f]/60 tracking-wider uppercase">
                City of Chicago · DPD · 2025
              </span>
              <span className="font-mono text-[10px] text-[#c9184a]/60 tracking-wider">
                GIS + Tableau Analysis
              </span>
            </div>
          </motion.div>

          {/* Capabilities list */}
          <div className="space-y-6">
            {urbanCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="border-l-2 border-[#c9184a]/30 pl-6 hover:border-[#c9184a] transition-colors duration-300 group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-xl text-[#590d22] group-hover:text-[#800f2f] transition-colors">
                    {cap.title}
                  </h3>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {cap.tools.map((tool) => (
                      <span key={tool} className="font-mono text-[9px] text-[#c9184a] border border-[#c9184a]/30 px-1.5 py-0.5 tracking-wider">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-sans text-sm text-[#800f2f]/70 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}

            {/* Tableau dashboard mock */}
            <motion.div
              className="mt-8 border border-[#c9184a]/20 bg-[#fff0f3] p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-[10px] text-[#c9184a]/60 tracking-widest uppercase mb-4">
                Comparative Dashboard · Chicago vs. Peer Cities
              </div>
              <svg viewBox="0 0 280 100" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bar chart */}
                {[
                  { label: "Chicago", val: 75, color: "#c9184a" },
                  { label: "NYC", val: 95, color: "#800f2f" },
                  { label: "LA", val: 60, color: "#ff8fa3" },
                  { label: "Boston", val: 45, color: "#ffb3c1" },
                  { label: "Seattle", val: 55, color: "#ff8fa3" },
                  { label: "Toronto", val: 50, color: "#ffccd5" },
                  { label: "London", val: 88, color: "#590d22" },
                ].map((bar, i) => (
                  <g key={bar.label}>
                    <rect
                      x={10 + i * 38} y={90 - bar.val * 0.78}
                      width={28} height={bar.val * 0.78}
                      fill={bar.color} opacity="0.7"
                    />
                    <text x={24 + i * 38} y="98" textAnchor="middle" fontSize="5.5" fill="#590d22" fontFamily="monospace">
                      {bar.label}
                    </text>
                  </g>
                ))}
                {/* Axis */}
                <line x1="8" y1="90" x2="272" y2="90" stroke="#590d22" strokeWidth="0.5" opacity="0.4" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Research + academic row */}
        <motion.div
          className="pt-12 border-t border-[#c9184a]/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-xs text-[#c9184a]/60 tracking-widest uppercase mb-8">Research & Academic Contributions</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                org: "MCHAP — Mies Crown Hall Americas Prize",
                role: "Graduate Research Assistant",
                desc: "Managed submissions, outreach, and coordination for the international architecture prize. Produced graphic deliverables, wrote perspectives, and designed the annual departmental prospectus.",
              },
              {
                org: "IIT Chicago — Open House Chicago",
                role: "Research & Events",
                desc: "Coordinated S. R. Crown Hall's participation in Open House Chicago, including public engagement, tours, and architectural documentation of Mies van der Rohe's landmark building.",
              },
              {
                org: "Thesis: Sacred Geometry and Architecture",
                role: "Graduate Thesis, 2025",
                desc: "M.S. Architecture thesis investigating the relationship between sacred geometric systems and built form — connecting ancient spatial intelligence to contemporary architectural design.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.org}
                className="border border-[#c9184a]/15 p-6 bg-[#fff0f3] hover:border-[#c9184a]/35 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-mono text-[9px] text-[#c9184a]/60 tracking-wider uppercase mb-2">{item.role}</div>
                <h4 className="font-serif text-base text-[#590d22] mb-3 leading-snug">{item.org}</h4>
                <p className="font-sans text-xs text-[#800f2f]/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
