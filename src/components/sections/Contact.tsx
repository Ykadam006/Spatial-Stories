"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const awards = [
  { title: "COA National Award", event: "Undergraduate Thesis — Oneness", year: "2023" },
  { title: "COA Zonal Award", event: "Undergraduate Thesis — Oneness", year: "2023" },
  { title: "IIA State-level Award", event: "Undergraduate Thesis — Oneness", year: "2023" },
];

const leadership = [
  { title: "Vice President", org: "Project Management Excellence Club (PMEC), IIT" },
  { title: "Student Member", org: "AIA Chicago" },
  { title: "Student Member", org: "Institute of Indian Interior Designers (IIID)" },
  { title: "Graphic Designer", org: "Student Council, APIED" },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#fff0f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">

        {/* Resume / Awards / Leadership */}
        <div id="resume" className="mb-24">
          <motion.div
            className="flex items-center gap-4 mb-12"
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-px bg-[#c9184a]" />
            <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">Credentials</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="font-mono text-[10px] text-[#c9184a]/70 tracking-widest uppercase mb-6 pb-3 border-b border-[#c9184a]/20">
                Awards & Recognition
              </div>
              <div className="space-y-5">
                {awards.map((award, i) => (
                  <div key={i}>
                    <div className="font-serif text-base text-[#590d22]">{award.title}</div>
                    <div className="font-sans text-xs text-[#800f2f]/70 mt-0.5">{award.event}</div>
                    <div className="font-mono text-[10px] text-[#c9184a]/50 tracking-wider mt-0.5">{award.year}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="font-mono text-[10px] text-[#c9184a]/70 tracking-widest uppercase mb-6 pb-3 border-b border-[#c9184a]/20">
                Education
              </div>
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[10px] text-[#c9184a]/50 tracking-wider uppercase mb-1">2024 – 2025</div>
                  <div className="font-serif text-base text-[#590d22]">M.S. Architecture</div>
                  <div className="font-sans text-xs text-[#800f2f]/80 mt-0.5">Illinois Institute of Technology</div>
                  <div className="font-sans text-xs text-[#800f2f]/60 mt-0.5">Chicago, USA · GPA 4.00 / 4.00</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#c9184a]/50 tracking-wider uppercase mb-1">2018 – 2023</div>
                  <div className="font-serif text-base text-[#590d22]">B.Arch</div>
                  <div className="font-sans text-xs text-[#800f2f]/80 mt-0.5">D.C. Patel School of Architecture</div>
                  <div className="font-sans text-xs text-[#800f2f]/60 mt-0.5">Sardar Patel University, India · GPA 3.95 · First Class with Distinction</div>
                </div>
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-mono text-[10px] text-[#c9184a]/70 tracking-widest uppercase mb-6 pb-3 border-b border-[#c9184a]/20">
                Leadership & Membership
              </div>
              <div className="space-y-4">
                {leadership.map((item, i) => (
                  <div key={i}>
                    <div className="font-serif text-sm text-[#590d22]">{item.title}</div>
                    <div className="font-sans text-xs text-[#800f2f]/70 mt-0.5">{item.org}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Download resume */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:vpanirwala@hawk.illinoistech.edu?subject=Resume%20Request"
              className="inline-flex items-center gap-3 border border-[#590d22] text-[#590d22] px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[#590d22] hover:text-[#fff0f3] transition-all duration-300"
              title="Request resume via email"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 2v9m0 0l-3-3m3 3l3-3M2 13h12" />
              </svg>
              Request Resume
            </a>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <div className="relative">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Background contour lines */}
            <svg className="w-full h-full opacity-5" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {[50, 100, 150, 200, 250].map((r) => (
                <ellipse key={r} cx="400" cy="150" rx={r * 2.5} ry={r} fill="none" stroke="#c9184a" strokeWidth="1" />
              ))}
            </svg>
          </motion.div>

          <div className="relative text-center py-20 border-t border-b border-[#c9184a]/15">
            <motion.div
              className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.div>

            <motion.h2
              className="font-serif text-5xl md:text-6xl text-[#590d22] mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Let's build something<br />meaningful together.
            </motion.h2>

            <motion.p
              className="font-sans text-base text-[#800f2f]/70 max-w-md mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Open to architecture, urban design, research, and planning opportunities
              — in Chicago and globally.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="mailto:vpanirwala@hawk.illinoistech.edu"
                className="inline-flex items-center gap-3 bg-[#590d22] text-[#fff0f3] px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[#800f2f] transition-colors duration-300"
              >
                Send Email
                <span>→</span>
              </a>
              <a
                href="https://linkedin.com/in/vandan-panirwala"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#c9184a]/40 text-[#590d22] px-8 py-4 font-sans text-xs tracking-widest uppercase hover:border-[#c9184a] hover:bg-[#c9184a]/5 transition-all duration-300"
              >
                LinkedIn
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 2h8v8M10 2l-8 8" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="mt-10 font-mono text-xs text-[#800f2f]/40 tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              vpanirwala@hawk.illinoistech.edu · +1 (872) 899-0392
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border border-[#c9184a]/50 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#c9184a] rounded-full" />
            </div>
            <span className="font-serif text-sm text-[#590d22]/70 tracking-wider">Vandan Panirwala</span>
          </div>
          <span className="font-mono text-[10px] text-[#800f2f]/40 tracking-widest uppercase">
            Spatial Stories · 2025
          </span>
          <div className="font-mono text-[10px] text-[#800f2f]/40 tracking-widest uppercase">
            Architect · Designer · Urban Thinker
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
