import React from 'react';
import { Layers, Github, Linkedin, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onScrollTo, activeSection }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-[#fcfcfc]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <div 
          onClick={() => onScrollTo('hero')} 
          className="flex cursor-pointer items-center transition-transform duration-200 active:scale-95"
          id="nav_logo"
        >
          <Logo variant="inline" size="sm" />
        </div>

        {/* Navigation Actions */}
        <nav className="hidden md:flex items-center space-x-1.5">
          <button
            onClick={() => onScrollTo('capabilities')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              activeSection === 'capabilities' 
                ? 'text-zinc-950 bg-[#FFDE59]/35 border border-[#FFDE59]/70 shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
            id="nav_link_services"
          >
            Solutions
          </button>
          <button
            onClick={() => onScrollTo('team')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              activeSection === 'team' 
                ? 'text-zinc-950 bg-[#FFDE59]/35 border border-[#FFDE59]/70 shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
            id="nav_link_team"
          >
            Leadership
          </button>
          <button
            onClick={() => onScrollTo('pricing')}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              activeSection === 'pricing' 
                ? 'text-zinc-950 bg-[#FFDE59]/35 border border-[#FFDE59]/70 shadow-sm' 
                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
            id="nav_link_pricing"
          >
            Pricing
          </button>
        </nav>

        {/* Call to Active Interaction */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1 mr-1">
            <a
              href="https://github.com/atmenterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-zinc-500 hover:bg-[#FFDE59]/10 hover:text-zinc-900 transition-colors"
              title="GitHub"
              id="header_github"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/atmenterprisepvtltd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-zinc-500 hover:bg-[#FFDE59]/10 hover:text-zinc-900 transition-colors"
              title="Facebook"
              id="header_facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.twitter.com/EnterpriseAtm"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-zinc-500 hover:bg-[#FFDE59]/10 hover:text-zinc-900 transition-colors"
              title="X (Twitter)"
              id="header_twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishushrivastava/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-zinc-500 hover:bg-[#FFDE59]/10 hover:text-zinc-900 transition-colors"
              title="LinkedIn"
              id="header_linkedin"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <a
            href="mailto:atmenterprise23@gmail.com"
            className="group relative inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold text-white tracking-wide transition-all duration-300 hover:bg-zinc-800 hover:ring-2 hover:ring-[#FFDE59] active:scale-[0.98] cursor-pointer shadow-sm animate-fade-in"
            id="nav_cta_contact"
          >
            Get in Touch
            <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#FFDE59] group-hover:animate-ping"></span>
          </a>
        </div>

      </div>
    </header>
  );
}
