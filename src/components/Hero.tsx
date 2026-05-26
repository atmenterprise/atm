import React from 'react';
import { Calendar, ShieldCheck, Database, Zap } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Mesh Background with soft golden glow */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/35 via-transparent to-transparent animate-fade-in"></div>
      
      {/* Decorative clean ambient grids */}
      <div className="absolute top-12 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 bg-[linear-gradient(to_right,#e4e4e760_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e760_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Brand Logo Square from attached reference */}
          <div className="flex justify-center mb-6">
            <Logo variant="square" size="md" className="shadow-md border-4 border-white ring-1 ring-zinc-200/50 hover:rotate-3 transition-transform duration-300" />
          </div>

          {/* Subtle introduction pill */}
          <div className="inline-flex items-center space-x-2 rounded-full border border-zinc-200/80 bg-white/50 px-3.5 py-1 text-xs text-zinc-650 backdrop-blur-md mb-8 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#FFDE59] animate-pulse"></span>
            <span className="font-semibold tracking-wide text-zinc-700">Enterprise Software Engineering &amp; Consulting</span>
          </div>

          {/* Core Start-up Punchline */}
          <h1 className="mx-auto max-w-4xl text-pretty text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl">
            Architecting Resilient{' '}
            <span className="font-serif italic font-light text-zinc-900 border-b-4 border-[#FFDE59] pb-0.5 px-1.5">
              Data Platforms
            </span>{' '}
            &amp; Custom Cloud Systems
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-zinc-500 sm:text-lg">
            ATM Enterprise is an agile engineering studio. We construct bulletproof cloud integrations, continuous-stream big data architectures, and high-performance custom applications engineered to scale.
          </p>

          {/* Genuine Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:atmenterprise23@gmail.com"
              className="group inline-flex items-center justify-center rounded-full bg-zinc-950 hover:bg-zinc-800 border-2 border-transparent hover:border-[#FFDE59] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 active:scale-[0.98] w-full sm:w-auto cursor-pointer shadow-md shadow-zinc-950/10"
              id="hero_btn_consult"
            >
              <Calendar className="mr-2 h-4 w-4 text-[#FFDE59] transition-transform group-hover:scale-110" />
              Book Free Consultancy
            </a>
          </div>

          {/* Value trust bullets (Authentic software philosophy) */}
          <div className="mt-16 border-t border-zinc-200/60 pt-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              OUR ENGINEERING COMMITMENT
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-zinc-500">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="h-4 w-4 text-[#E5B500]" />
                <span>Contractual SLAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="h-4 w-4 text-[#E5B500]" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#E5B500] animate-pulse" />
                <span>Zero Legacy Lock-in</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
