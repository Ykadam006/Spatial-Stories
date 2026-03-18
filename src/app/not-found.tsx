import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fff0f3] flex flex-col items-center justify-center px-6 text-center">
      {/* Background contour SVG */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[80, 160, 240, 320, 400].map((r) => (
            <ellipse key={r} cx="600" cy="400" rx={r * 2.2} ry={r} fill="none" stroke="#c9184a" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="relative max-w-lg">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-8 h-px bg-[#c9184a]" />
          <span className="font-mono text-xs text-[#c9184a] tracking-[0.3em] uppercase">404</span>
          <div className="w-8 h-px bg-[#c9184a]" />
        </div>

        <h1 className="font-serif text-6xl md:text-8xl text-[#590d22] mb-6 leading-tight">
          Not Found
        </h1>

        <p className="font-sans text-sm text-[#800f2f]/70 leading-relaxed mb-10">
          This page does not exist or has been moved.
          Let&#39;s get you back to the work.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#590d22] text-[#fff0f3] px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-[#800f2f] transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="absolute bottom-8 font-mono text-[10px] text-[#800f2f]/30 tracking-widest uppercase">
        Spatial Stories · Vandan Panirwala
      </div>
    </div>
  );
}
