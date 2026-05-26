import React from 'react';
import { Linkedin, Github, Users, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 border-t border-zinc-200/60 bg-[#fcfcfc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block rounded-full bg-[#FFDE59]/25 border border-[#FFDE59]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 mb-3 animate-fade-in">
            Leadership &amp; Values
          </div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Decoupled Team, Engineered for High Output
          </p>
          <p className="mt-4 text-sm text-zinc-500 font-medium">
            We operate as a high-density, flat software group of seasoned architects. No account managers or layers of communication overhead.
          </p>
        </div>

        {/* Founding Pillars / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 hover:border-[#FFDE59] hover:ring-2 hover:ring-[#FFDE59]/40 transition-all duration-300 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-black">
              <Code2 className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900">Engineering-First Delivery</h3>
            <p className="text-xs text-zinc-500 leading-normal">
              You communicate direct with the senior solution architects drafting your pipeline schemas. Zero sales jargon. Pristine execution focus.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 hover:border-[#FFDE59] hover:ring-2 hover:ring-[#FFDE59]/40 transition-all duration-300 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-black">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900">Zero Vendor Lock-In</h3>
            <p className="text-xs text-zinc-500 leading-normal">
              We deploy your software directly inside your sovereign AWS/GCP cloud environments. You maintain absolute copyright over all systems.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 hover:border-[#FFDE59] hover:ring-2 hover:ring-[#FFDE59]/40 transition-all duration-300 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-black">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-zinc-900">No Premium Markups</h3>
            <p className="text-xs text-zinc-500 leading-normal">
              Through clean server structures, we maximize query indexing speeds, cutting down database hardware compute sizing by up to 60%.
            </p>
          </div>

        </div>

        {/* Founder Bio Block */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 relative overflow-hidden shadow-sm" id="founder_block">
          
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 sm:gap-8 justify-between">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center space-x-2">
                <Users className="h-4.5 w-4.5 text-black" />
                <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                  The Founder
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                  Rishu Shrivastava
                </h4>
                <p className="text-xs font-mono font-semibold text-zinc-550 mt-1">
                  Founder &amp; Principal Big Data Solutions Architect
                </p>
              </div>

              <p className="text-sm text-zinc-500 leading-relaxed">
                Rishu Shrivastava is a seasoned Big Data solution architect specializing in high-velocity streaming environments, cloud-native SaaS development, and distributed query performance tuning. He established ATM Enterprise to help startups and scaling companies construct durable cloud-native software and scalable data backbones.
              </p>
            </div>

            {/* Verification Links */}
            <div className="flex flex-row xl:flex-col gap-3 shrink-0 w-full xl:w-auto">
              <a
                href="https://www.linkedin.com/in/rishushrivastava/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 xl:flex-initial inline-flex items-center justify-center space-x-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:text-black hover:border-black transition-all px-4 py-2.5 text-xs font-semibold text-zinc-650"
                id="founder_linkedin"
              >
                <Linkedin className="h-4 w-4 text-black" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/atmenterprise"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 xl:flex-initial inline-flex items-center justify-center space-x-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 hover:text-black hover:border-black transition-all px-4 py-2.5 text-xs font-semibold text-zinc-650"
                id="founder_github"
              >
                <Github className="h-4 w-4 text-black" />
                <span>GitHub Org</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
