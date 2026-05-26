import React, { useState } from 'react';
import { Database, Laptop, Merge, Repeat, Server, Shield, ToggleLeft, ArrowRight, Sparkles } from 'lucide-react';
import { CapabilityItem } from '../types';

const capabilitiesList: CapabilityItem[] = [
  {
    id: 'big-data',
    title: 'Distributed Big Data Systems',
    description: 'Design and optimization of data streaming networks and clustered computation environments for millisecond-latency insights.',
    iconName: 'database',
    details: [
      'Kafka & Pulsar real-time message ingestion architecture',
      'Spark, Flink, and MapReduce continuous aggregation engines',
      'BigQuery, snowflake, and ClickHouse cluster fine-tuning',
      'High-performance partition key planning and storage compression optimization'
    ],
    color: 'indigo'
  },
  {
    id: 'cloud-saas',
    title: 'Custom Cloud-Native SaaS',
    description: 'End-to-end engineering of responsive, secure software products tailored for complex workflows and heavy enterprise loads.',
    iconName: 'laptop',
    details: [
      'Scale-ready React with server-driven layout architectures',
      'Secure, type-safe API gateways (GraphQL, REST, gRPC)',
      'Highly decoupled microservices running on isolated environments',
      'Optimized server-side rendering and static edge page deliveries'
    ],
    color: 'purple'
  },
  {
    id: 'etl-pipelines',
    title: 'Modern ETL & Intelligent Warehousing',
    description: 'Custom ingestion jobs, automated data quality guardians, and bulletproof transactional processing systems with zero data loss.',
    iconName: 'repeat',
    details: [
      'Dynamic metadata-driven ETL frameworks',
      'Automatic schema evolution, sanitization, and compliance mapping',
      'Comprehensive data lineage audits and state tracking',
      'Optimized orchestration runs using Airflow and custom trigger daemons'
    ],
    color: 'emerald'
  },
  {
    id: 'middleware',
    title: 'Secure Enterprise Integration',
    description: 'Developing heavy-duty middleware, API adaptors, and unified synchronization flows securely bridging legacy and cloud APIs.',
    iconName: 'merge',
    details: [
      'Encrypted high-throughput database sync listeners',
      'Custom legacy XML-to-JSON real-time converters',
      'Single Sign-On (SSO), SAML, OIDC federation architectures',
      'Automated error-retry mechanisms with circuit breakers'
    ],
    color: 'blue'
  }
];

export default function Capabilities() {
  const [selectedId, setSelectedId] = useState<string>('big-data');

  const activeCapability = capabilitiesList.find(c => c.id === selectedId) || capabilitiesList[0];

  const getIcon = (name: string, isActive: boolean) => {
    const colorClass = isActive ? "text-zinc-950 animate-pulse" : "text-zinc-500 group-hover:text-zinc-900";
    switch (name) {
      case 'database': return <Database className={`h-5 w-5 ${colorClass}`} />;
      case 'laptop': return <Laptop className={`h-5 w-5 ${colorClass}`} />;
      case 'repeat': return <Repeat className={`h-5 w-5 ${colorClass}`} />;
      case 'merge': return <Merge className={`h-5 w-5 ${colorClass}`} />;
      default: return <Server className={`h-5 w-5 ${colorClass}`} />;
    }
  };

  const getIndicatorDot = (color: string) => {
    switch (color) {
      case 'indigo': return 'bg-amber-400 shadow-sm ring-4 ring-amber-100';
      case 'purple': return 'bg-amber-400 shadow-sm ring-4 ring-amber-100';
      case 'emerald': return 'bg-amber-400 shadow-sm ring-4 ring-amber-100';
      case 'blue': return 'bg-amber-400 shadow-sm ring-4 ring-amber-100';
      default: return 'bg-amber-400 shadow-sm ring-4 ring-amber-100';
    }
  };

  return (
    <section id="capabilities" className="py-20 md:py-28 border-t border-zinc-200/50 bg-[#fcfcfc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-block rounded-full bg-[#FFDE59]/25 border border-[#FFDE59]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 mb-3 animate-fade-in">
            System Capabilities
          </div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Sovereign Software Built with Architectural Integrity
          </p>
          <p className="mt-4 text-base text-zinc-500 font-medium">
            We avoid shortcuts. Whether constructing a petabyte-scale streaming framework or engineering highly modular administrative software dashboards, we design for structural reliability.
          </p>
        </div>

        {/* Dynamic Interactive Grid / Explorer */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Capability list selection */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-4">
            {capabilitiesList.map((item) => {
              const isActive = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`group relative cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
                    isActive 
                      ? 'border-[#FFDE59] bg-[#FFDE59]/5 shadow-sm' 
                      : 'border-zinc-200 bg-white/50 hover:border-zinc-300'
                  }`}
                  id={`capability_card_${item.id}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded border transition-colors ${
                      isActive ? 'border-[#FFDE59]/70 bg-[#FFDE59]/20' : 'border-zinc-200 bg-white'
                    }`}>
                      {getIcon(item.iconName, isActive)}
                    </div>
                    <div className="space-y-1">
                      <h3 className={`font-bold transition-colors text-sm sm:text-base ${isActive ? 'text-zinc-950' : 'text-zinc-700 group-hover:text-zinc-950'}`}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-900">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Rich deep-dive container */}
          <div className="lg:col-span-12 xl:col-span-7 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden shadow-sm" id="capability_details_panel">
            {/* Visual background subtle mesh grid */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className={`h-2.5 w-2.5 rounded-full ${getIndicatorDot(activeCapability.color)}`}></span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold">
                  Detailed Operational Spec
                </span>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 mb-2">
                  {activeCapability.title}
                </h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                  {activeCapability.description}
                </p>
              </div>

              {/* Specs Bullets */}
              <div className="space-y-3.5 pt-2">
                <h5 className="text-[10px] font-bold text-zinc-400 tracking-wider uppercase">
                  Technical Deliverables include:
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {activeCapability.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-2 text-xs text-zinc-650 leading-normal font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#E5B500] mt-1.5 shrink-0 shadow-sm"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick action linking to consultation */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-zinc-800 bg-zinc-50 border border-zinc-200/50 rounded-full px-3 py-1 font-semibold">
                <Sparkles className="h-3.5 w-3.5 text-zinc-900 animate-pulse" />
                <span>Available for Q2 Consulting Sprint</span>
              </div>
              <a
                href="mailto:atmenterprise23@gmail.com"
                className="inline-flex items-center text-xs font-bold text-zinc-950 group relative pb-0.5"
              >
                <span className="relative z-10 border-b-2 border-[#FFDE59] group-hover:border-zinc-950 pb-0.5 transition-colors">
                  Inquire about this capability
                </span>
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
