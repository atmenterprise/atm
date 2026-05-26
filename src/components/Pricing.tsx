import React, { useState } from 'react';
import { Calendar, ShieldAlert, Cpu, ArrowRight, CheckCircle2, MessageSquare, DollarSign, Sparkles, Scale, FileText } from 'lucide-react';

export default function Pricing() {
  const [selectedService, setSelectedService] = useState<string>('Data Pipelines');
  const [projectScale, setProjectScale] = useState<string>('Standard Sprint');

  // Custom mail Link helper
  const constructMailto = () => {
    const subject = encodeURIComponent(`ATM Enterprise Query: ${selectedService} (${projectScale})`);
    const body = encodeURIComponent(
      `Hi Rishu & ATM Enterprise Team,\n\nI am writing to initiate our Free Introductory Consultation.\n\nProject Scope Specs:\n- Primary Focus: ${selectedService}\n- Scale Estimate: ${projectScale}\n\nI would like to schedule a session to review our systems and establish a Statement of Work.\n\nBest regards,\n[My Name]\n[My Company]`
    );
    return `mailto:atmenterprise23@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-t border-zinc-200/50 relative overflow-hidden">
      {/* Soft overlay gradient */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[400px] w-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-50/20 via-transparent to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-[#FFDE59]/25 border border-[#FFDE59]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 mb-3 animate-fade-in animate-once">
            Engagement &amp; Pricing Model
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Contractual Commitment, Complete Transparency
          </h2>
          <p className="mt-4 text-base text-zinc-500 font-medium">
            All services are established under formal Mutual NDA and rigid Statements of Work. We do not bury costs, hide markups, or maintain locked-in licenses.
          </p>
        </div>

        {/* 3-Core Pillars of ATM Pricing Model directly aligned with website data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Free Consultation */}
          <div className="rounded-2xl border-2 border-[#FFDE59]/70 bg-[#FFDE59]/5 p-6 sm:p-8 flex flex-col justify-between relative shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
            <div className="absolute top-4 right-4 bg-[#FFDE59] text-zinc-950 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Introductory
            </div>
            <div>
              <div className="h-10 w-10 rounded-full bg-[#FFDE59]/20 border border-[#FFDE59]/50 flex items-center justify-center text-zinc-950 mb-6">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                First Consultancy
              </h3>
              <p className="text-xs text-zinc-500 font-medium mb-4">
                Explore engineering feasibility with absolutely zero cost or strings.
              </p>
              <div className="flex items-baseline text-zinc-900 my-4">
                <span className="text-3xl font-extrabold tracking-tight">FREE OF COST</span>
              </div>
              <ul className="space-y-3 pt-3 border-t border-zinc-200">
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#E5B500] mr-2 shrink-0" />
                  <span>Interactive Systems Audit</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#E5B500] mr-2 shrink-0" />
                  <span>Draft Proposal &amp; Feasibility Report</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#E5B500] mr-2 shrink-0" />
                  <span>No obligation to retain services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Custom Complexity Tiers */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
            <div>
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Complexity-Based Rates
              </h3>
              <p className="text-xs text-zinc-500 font-medium mb-4">
                Discuss a perfectly proportioned pricing structure matching target difficulty.
              </p>
              <div className="flex items-baseline text-zinc-900 my-4">
                <span className="text-3xl font-extrabold tracking-tight">MUTUAL VALUATION</span>
              </div>
              <ul className="space-y-3 pt-3 border-t border-zinc-200">
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Capped development sprints</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Aligns scope with timeline budgets</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Zero hidden consulting padding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Contractual Commitment */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
            <div>
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Statement of Work (SOW)
              </h3>
              <p className="text-xs text-zinc-500 font-medium mb-4">
                Rigid contractual parameters guarantee exact quality metrics.
              </p>
              <div className="flex items-baseline text-zinc-900 my-4">
                <span className="text-3xl font-extrabold tracking-tight">CONTRACT BOUND</span>
              </div>
              <ul className="space-y-3 pt-3 border-t border-zinc-200">
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Bespoke legal parameters</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Guaranteed delivery schedules</span>
                </li>
                <li className="flex items-start text-xs text-zinc-650 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-zinc-900 mr-2 shrink-0" />
                  <span>Direct ownership assignment</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Interactive Scope Configurator */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="estimator_grid">
            
            {/* Left selector */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#E5B500] font-extrabold uppercase">
                  Engagement Designer
                </span>
                <h4 className="text-xl font-bold tracking-tight text-zinc-900 mt-1">
                  Draft Your SOW Parameters
                </h4>
                <p className="text-xs text-zinc-555 font-medium mt-1">
                  Combine fields to assemble a preliminary consulting context for the introductory meeting.
                </p>
              </div>

              {/* Service types */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Select Core Requirement Field:
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Data Pipelines', 'Custom SaaS', 'SRE / Infrastructure', 'API Integrations'].map((svc) => (
                    <button
                      key={svc}
                      onClick={() => setSelectedService(svc)}
                      className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                        selectedService === svc
                          ? 'bg-zinc-900 border-zinc-900 text-[#FFDE59]'
                          : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-350'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project scale selector */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Select Engineering Timeline Estimate:
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Frictionless MVP', 'Standard Sprint', 'Long-term Pipeline Integration'].map((scale) => (
                    <button
                      key={scale}
                      onClick={() => setProjectScale(scale)}
                      className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                        projectScale === scale
                          ? 'bg-zinc-900 border-zinc-900 text-[#FFDE59]'
                          : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-350'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary and button */}
            <div className="lg:col-span-5 bg-white border border-zinc-200/80 rounded-xl p-6 shadow-xs flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Current Scope Selection</span>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-555 font-medium">Engagement Area:</span>
                    <span className="font-bold text-zinc-900">{selectedService}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-555 font-medium">Timeline Estimate:</span>
                    <span className="font-bold text-zinc-900">{projectScale}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-2 border-t border-zinc-100">
                    <span className="text-zinc-555 font-medium">Initial Feasibility Cost:</span>
                    <span className="font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                      $0 (Free Consultancy)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <a
                  href={constructMailto()}
                  className="group relative inline-flex w-full items-center justify-center rounded-xl bg-zinc-950 hover:bg-zinc-850 px-5 py-3 text-xs font-bold text-white tracking-widest uppercase transition-all duration-300 hover:ring-2 hover:ring-[#FFDE59] cursor-pointer shadow-sm text-center"
                  id="estimator_mailto_trigger"
                >
                  <MessageSquare className="mr-2 h-4 w-4 text-[#FFDE59] group-hover:scale-110 transition-transform" />
                  Initiate SOW Discussion
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
