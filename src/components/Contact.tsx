import React, { useState } from 'react';
import { Mail, Github, Facebook, Twitter, Linkedin, ExternalLink, Clock, Copy, Check, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2000);
  };

  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rishushrivastava/',
      username: 'rishushrivastava',
      icon: <Linkedin className="h-5 w-5" />,
      color: 'hover:text-[#0a66c2] hover:bg-[#0a66c2]/5 hover:border-[#0a66c2]/30',
      id: 'contact_social_linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/atmenterprise',
      username: 'atmenterprise',
      icon: <Github className="h-5 w-5" />,
      color: 'hover:text-zinc-950 hover:bg-zinc-100 hover:border-zinc-350',
      id: 'contact_social_github'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/atmenterprisepvtltd/',
      username: 'atmenterprisepvtltd',
      icon: <Facebook className="h-5 w-5" />,
      color: 'hover:text-[#1877f2] hover:bg-[#1877f2]/5 hover:border-[#1877f2]/30',
      id: 'contact_social_facebook'
    },
    {
      name: 'X (Twitter)',
      url: 'https://www.twitter.com/EnterpriseAtm',
      username: 'EnterpriseAtm',
      icon: <Twitter className="h-5 w-5" />,
      color: 'hover:text-zinc-900 hover:bg-zinc-100 hover:border-zinc-300',
      id: 'contact_social_twitter'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fcfcfc] border-t border-zinc-200/50 relative overflow-hidden">
      {/* Decorative ambient grid */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100/25 via-transparent to-transparent"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block rounded-full bg-[#FFDE59]/25 border border-[#FFDE59]/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-800 mb-3 animate-fade-in">
            Direct Communications Gateway
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Let's Craft Something Durable Together
          </h2>
          <p className="mt-4 text-base text-zinc-500 font-medium">
            Skip the forms and complex intake queues. Reach out directly to our engineering coordinators or connect across our verified social ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Direct Email Channels Panel (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-center space-x-3 text-xs text-zinc-650 bg-zinc-50 border border-zinc-200/50 rounded-xl p-4">
                <Clock className="h-5 w-5 text-zinc-800 shrink-0" />
                <span className="font-semibold text-zinc-700">Response target: Under 4 business hours from receipt.</span>
              </div>

              <div className="space-y-4">
                
                {/* General Inquiry Email Card */}
                <div className="group relative rounded-xl border border-zinc-200 bg-zinc-50/20 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-[#FFDE59] hover:bg-white transition-all duration-300">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-bold uppercase text-zinc-400 tracking-wider">General &amp; Consulting Intake</span>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <a 
                      href="mailto:atmenterprise23@gmail.com"
                      className="font-mono text-base sm:text-lg font-bold text-black hover:text-[#E5B500] transition-colors block"
                      id="contact_email_general"
                    >
                      atmenterprise23@gmail.com
                    </a>
                  </div>
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleCopy('atmenterprise23@gmail.com')}
                      className="inline-flex items-center justify-center space-x-1.5 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer"
                      id="contact_copy_general"
                    >
                      {copiedEmail === 'atmenterprise23@gmail.com' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:atmenterprise23@gmail.com"
                      className="inline-flex items-center justify-center space-x-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                      id="contact_mailto_general"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#FFDE59]" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Escalation Desk Email Card */}
                <div className="group relative rounded-xl border border-zinc-200 bg-zinc-50/20 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-[#FFDE59] hover:bg-white transition-all duration-300">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 tracking-wider">Escalation &amp; Director Desk</span>
                    <a 
                      href="mailto:rishu.shrivastava@gmail.com"
                      className="font-mono text-base sm:text-lg font-bold text-zinc-800 hover:text-black transition-colors block"
                      id="contact_email_escalation"
                    >
                      rishu.shrivastava@gmail.com
                    </a>
                  </div>
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleCopy('rishu.shrivastava@gmail.com')}
                      className="inline-flex items-center justify-center space-x-1.5 rounded-lg border border-zinc-200 hover:border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-all cursor-pointer"
                      id="contact_copy_escalation"
                    >
                      {copiedEmail === 'rishu.shrivastava@gmail.com' ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <a
                      href="mailto:rishu.shrivastava@gmail.com"
                      className="inline-flex items-center justify-center space-x-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-850 px-3 py-1.5 text-xs font-bold transition-all cursor-pointer"
                      id="contact_mailto_escalation"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Policy alert note matching authentic website note */}
              <div className="flex items-start space-x-2.5 text-[11px] text-zinc-450 leading-relaxed font-semibold border-t border-zinc-150 pt-5">
                <ShieldAlert className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Please Note: All unsolicited marketing pitches and spam emails are systematically triaged, blacklisted, and deleted immediately.</span>
              </div>

            </div>

          </div>

          {/* Social Networks Panel (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Verified Ecosystems
                </h3>
                <p className="text-xs text-zinc-500 font-medium">
                  We are actively connected across multiple specialized developer and executive networks. Connect with our community profiles directly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {socials.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl border border-zinc-150 bg-[#fcfcfc] transition-all duration-300 group ${platform.color}`}
                    id={platform.id}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-zinc-650 group-hover:scale-110 transition-transform">
                        {platform.icon}
                      </div>
                      <div>
                        <span className="font-bold text-zinc-900 block text-xs">
                          {platform.name}
                        </span>
                        <span className="font-mono text-[10px] text-zinc-400 font-medium">
                          @{platform.username}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-300 group-hover:text-zinc-700 transition-colors" />
                  </a>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
