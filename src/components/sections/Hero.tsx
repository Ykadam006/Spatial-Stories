"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEADLINE_WORDS = ["Designing", "spaces,", "systems,", "and stories."];

function ContourLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Organic contour lines — topographic feel */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
        <motion.ellipse
          key={i}
          cx="75%"
          cy="50%"
          rx={80 + i * 60}
          ry={40 + i * 28}
          fill="none"
          stroke="#c9184a"
          strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5 + i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Vertical accent line */}
      <motion.line
        x1="62%"
        y1="0"
        x2="62%"
        y2="100%"
        stroke="#c9184a"
        strokeWidth="0.5"
        strokeDasharray="4 8"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 1.2 }}
      />

      {/* Horizontal rule */}
      <motion.line
        x1="0"
        y1="50%"
        x2="60%"
        y2="50%"
        stroke="#c9184a"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />

      {/* Corner cross marks */}
      {[[10, 10], [10, 90], [90, 10], [90, 90]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x}%, ${y}%)`}>
          <motion.line
            x1="-8" y1="0" x2="8" y2="0"
            stroke="#c9184a" strokeWidth="0.6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
          />
          <motion.line
            x1="0" y1="-8" x2="0" y2="8"
            stroke="#c9184a" strokeWidth="0.6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
          />
        </g>
      ))}
    </svg>
  );
}

function Preloader({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#590d22] flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.p
        className="font-serif text-[#ffb3c1] text-sm tracking-[0.4em] uppercase mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Spatial Stories
      </motion.p>

      {/* Loading bar */}
      <div className="w-48 h-px bg-[#ffb3c1]/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[#ff8fa3]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
      </div>

      <motion.p
        className="font-mono text-[#ffb3c1]/40 text-xs tracking-widest mt-6 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Vandan Panirwala
      </motion.p>
    </motion.div>
  );
}

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onDone={handleDone} />}
      </AnimatePresence>

      <section className="relative min-h-screen bg-[#fff0f3] flex items-center overflow-hidden">
        <ContourLines />

        {/* Blueprint dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #c9184a 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full px-6 md:px-12 xl:px-20 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

            {/* Left: Text content */}
            <div>
              {/* Eyebrow */}
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={loaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-8 h-px bg-[#c9184a]" />
                <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">
                  Architect — Designer — Urban Thinker
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl text-[#590d22] leading-[1.1] mb-8">
                {HEADLINE_WORDS.map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block mr-4"
                    initial={{ opacity: 0, y: 32 }}
                    animate={loaded ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              {/* Divider line */}
              <motion.div
                className="h-px bg-[#c9184a] mb-8 origin-left"
                initial={{ scaleX: 0 }}
                animate={loaded ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Statement */}
              <motion.p
                className="font-sans text-base text-[#800f2f]/80 leading-relaxed max-w-md mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                M.S. Architecture, IIT Chicago · Licensed Architect (India) ·
                Research-driven designer working across concept, construction,
                and city scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.15 }}
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-[#590d22] text-[#fff0f3] px-7 py-3.5 font-sans text-xs tracking-widest uppercase hover:bg-[#800f2f] transition-colors duration-300"
                >
                  View Work
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 border border-[#c9184a] text-[#590d22] px-7 py-3.5 font-sans text-xs tracking-widest uppercase hover:bg-[#c9184a]/10 transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="flex gap-8 mt-14 pt-8 border-t border-[#c9184a]/20"
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                {[
                  { value: "4.00", label: "GPA — IIT Chicago" },
                  { value: "7+", label: "Years of Practice" },
                  { value: "3×", label: "National Awards" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-[#590d22]">{stat.value}</div>
                    <div className="font-mono text-xs text-[#800f2f]/60 tracking-wider uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Architectural composition */}
            <motion.div
              className="relative h-[520px] lg:h-[680px]"
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Main image frame */}
              <motion.div
                className="absolute right-0 top-0 w-[85%] h-[75%] bg-[#590d22]/10 border border-[#c9184a]/20 overflow-hidden"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={loaded ? { clipPath: "inset(0 0% 0 0)" } : {}}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Architectural placeholder pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                    {/* Elevation drawing style */}
                    <rect x="40" y="180" width="320" height="80" fill="none" stroke="#590d22" strokeWidth="1.5"/>
                    <rect x="80" y="120" width="100" height="60" fill="none" stroke="#590d22" strokeWidth="1.5"/>
                    <rect x="220" y="100" width="80" height="80" fill="none" stroke="#590d22" strokeWidth="1.5"/>
                    <rect x="100" y="60" width="60" height="60" fill="none" stroke="#590d22" strokeWidth="1"/>
                    {/* Windows */}
                    <rect x="90" y="135" width="20" height="25" fill="#590d22" opacity="0.4"/>
                    <rect x="130" y="135" width="20" height="25" fill="#590d22" opacity="0.4"/>
                    <rect x="230" y="115" width="15" height="20" fill="#590d22" opacity="0.4"/>
                    <rect x="260" y="115" width="15" height="20" fill="#590d22" opacity="0.4"/>
                    {/* Ground line */}
                    <line x1="0" y1="260" x2="400" y2="260" stroke="#c9184a" strokeWidth="1"/>
                    {/* Contour ticks */}
                    {[0, 50, 100, 150, 200, 250, 300, 350, 400].map((x) => (
                      <line key={x} x1={x} y1="255" x2={x} y2="265" stroke="#c9184a" strokeWidth="0.5" opacity="0.5"/>
                    ))}
                    {/* Dimension lines */}
                    <line x1="40" y1="50" x2="360" y2="50" stroke="#c9184a" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                    <line x1="40" y1="45" x2="40" y2="55" stroke="#c9184a" strokeWidth="0.5" opacity="0.5"/>
                    <line x1="360" y1="45" x2="360" y2="55" stroke="#c9184a" strokeWidth="0.5" opacity="0.5"/>
                    <text x="200" y="43" textAnchor="middle" fontSize="8" fill="#c9184a" opacity="0.7" fontFamily="monospace">32.0 m</text>
                  </svg>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f3]/20 to-transparent" />
              </motion.div>

              {/* Secondary frame — offset card */}
              <motion.div
                className="absolute left-0 bottom-0 w-[55%] h-[45%] bg-[#ffccd5] border border-[#c9184a]/30 flex items-end p-5"
                initial={{ opacity: 0, y: 30 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div>
                  <div className="font-mono text-xs text-[#c9184a] tracking-widest uppercase mb-1">
                    Featured
                  </div>
                  <div className="font-serif text-lg text-[#590d22] leading-tight">
                    Oneness —<br />Omkareshwar Vision Plan
                  </div>
                  <div className="font-sans text-xs text-[#800f2f]/70 mt-1">
                    COA National Award · 2023
                  </div>
                </div>
              </motion.div>

              {/* Vertical accent line */}
              <motion.div
                className="absolute left-[54%] top-0 w-px bg-gradient-to-b from-transparent via-[#c9184a] to-transparent"
                initial={{ scaleY: 0 }}
                animate={loaded ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.0 }}
                style={{ height: "100%", transformOrigin: "top" }}
              />

              {/* Project number badge */}
              <motion.div
                className="absolute top-4 left-[56%] font-mono text-xs text-[#c9184a]/60 tracking-widest"
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 1.6 }}
              >
                01 / 07
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-0 right-0 flex flex-col items-center gap-2 pb-4 pr-2"
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 1.8 }}
              >
                <span className="font-mono text-[10px] text-[#800f2f]/50 tracking-widest uppercase rotate-90 mb-4">Scroll</span>
                <motion.div
                  className="w-px h-12 bg-gradient-to-b from-[#c9184a] to-transparent"
                  animate={{ scaleY: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  style={{ transformOrigin: "top" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9184a]/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        />
      </section>
    </>
  );
}
