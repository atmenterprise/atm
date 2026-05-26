import React from 'react';
import { Layers, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200/50 bg-[#fcfcfc] py-12 text-zinc-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center justify-between gap-6">
        
        {/* Left branding */}
        <div className="flex items-center space-x-2.5">
          <Logo variant="inline" size="sm" className="opacity-90 hover:opacity-100 transition-opacity" />
          <span className="text-zinc-300">|</span>
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Precision Software Studio</span>
        </div>

        {/* Middle navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-zinc-500">
          <button onClick={() => onScrollTo('capabilities')} className="hover:text-zinc-950 hover:underline transition-all cursor-pointer">Solutions</button>
          <button onClick={() => onScrollTo('team')} className="hover:text-zinc-950 hover:underline transition-all cursor-pointer">Team &amp; Values</button>
          <button onClick={() => onScrollTo('pricing')} className="hover:text-zinc-950 hover:underline transition-all cursor-pointer">Pricing</button>
          <button onClick={() => onScrollTo('contact')} className="hover:text-zinc-950 hover:underline transition-all cursor-pointer">Contact</button>
        </div>

        {/* Right Block: Social profiles and copyright statement */}
        <div className="flex flex-col items-center xl:items-end gap-3 max-w-md">
          {/* Social Profiles */}
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/atmenterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-zinc-100 hover:bg-[#FFDE59]/20 text-zinc-650 hover:text-zinc-950 transition-colors"
              title="GitHub"
              id="footer_social_github"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.facebook.com/atmenterprisepvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-zinc-100 hover:bg-[#FFDE59]/20 text-zinc-650 hover:text-zinc-950 transition-colors"
              title="Facebook"
              id="footer_social_facebook"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.twitter.com/EnterpriseAtm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-zinc-100 hover:bg-[#FFDE59]/20 text-zinc-650 hover:text-zinc-950 transition-colors"
              title="X (Twitter)"
              id="footer_social_twitter"
            >
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishushrivastava/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 bg-zinc-100 hover:bg-[#FFDE59]/20 text-zinc-650 hover:text-zinc-950 transition-colors"
              title="LinkedIn"
              id="footer_social_linkedin"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-center xl:text-right text-[10px] text-zinc-400 leading-relaxed font-semibold">
            © 2026, ATM ENTERPRISE. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
