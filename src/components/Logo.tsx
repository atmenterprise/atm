import React from 'react';

interface LogoProps {
  variant?: 'inline' | 'square' | 'icon';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ variant = 'inline', className = '', size = 'md' }: LogoProps) {
  // Dimensions and styling based on size
  const sizeMap = {
    sm: {
      square: 'h-10 w-10 text-[20px] rounded-lg',
      inline: 'h-8',
      icon: 'h-7 w-7 rounded'
    },
    md: {
      square: 'h-16 w-16 text-[32px] rounded-xl',
      inline: 'h-11',
      icon: 'h-10 w-10 rounded-md'
    },
    lg: {
      square: 'h-24 w-24 text-[48px] rounded-2xl',
      inline: 'h-16',
      icon: 'h-16 w-16 rounded-lg'
    },
    xl: {
      square: 'h-48 w-48 text-[96px] rounded-[2rem]',
      inline: 'h-28',
      icon: 'h-24 w-24 rounded-[1.5rem]'
    }
  };

  const selectedSize = sizeMap[size];

  // Hex codes for precise branding integration
  // Background brand yellow from the uploaded image: #FFDE59
  // Contrast dark text: #18181b
  const brandYellowHex = '#FFDE59';
  const brandDarkHex = '#1A1A1A';

  if (variant === 'square') {
    return (
      <div 
        style={{ backgroundColor: brandYellowHex }}
        className={`flex items-center justify-center aspect-square select-none shadow-sm ${selectedSize.square} ${className}`}
        id="atm_logo_square"
      >
        <svg 
          viewBox="0 0 500 500" 
          className="w-[85%] h-[85%]" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main bold "atm" lowercase text */}
          <text 
            x="32" 
            y="290" 
            fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
            fontWeight="900" 
            fontSize="148" 
            fill={brandDarkHex}
            letterSpacing="-8"
          >
            atm
          </text>
          
          {/* APPS THAT MATTER stacked on the right */}
          <text 
            x="315" 
            y="196" 
            fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
            fontWeight="700" 
            fontSize="26" 
            fill={brandDarkHex}
            letterSpacing="12"
          >
            APPS
          </text>
          <text 
            x="315" 
            y="244" 
            fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
            fontWeight="700" 
            fontSize="26" 
            fill={brandDarkHex}
            letterSpacing="12"
          >
            THAT
          </text>
          <text 
            x="315" 
            y="290" 
            fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
            fontWeight="700" 
            fontSize="21" 
            fill={brandDarkHex}
            letterSpacing="5.8"
          >
            MATTER
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div 
        style={{ backgroundColor: brandYellowHex }}
        className={`flex items-center justify-center p-1 font-black ${selectedSize.icon} ${className}`}
        id="atm_logo_icon"
      >
        <span style={{ color: brandDarkHex }} className="font-extrabold text-xs tracking-tighter sm:text-sm">atm</span>
      </div>
    );
  }

  // DEFAULT: INLINE (suited for headers, nav list integrations, transparent with text)
  return (
    <div className={`inline-flex items-center select-none ${selectedSize.inline} ${className}`} id="atm_logo_inline">
      <svg 
        viewBox="0 0 280 80" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* atm letters */}
        <text 
          x="10" 
          y="56" 
          fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
          fontWeight="900" 
          fontSize="68" 
          fill={brandDarkHex}
          letterSpacing="-3.5"
        >
          atm
        </text>
        
        {/* Apps That Matter stacked labels */}
        <text 
          x="152" 
          y="28" 
          fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
          fontWeight="700" 
          fontSize="13" 
          fill={brandDarkHex}
          letterSpacing="4.8"
        >
          APPS
        </text>
        <text 
          x="152" 
          y="46" 
          fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
          fontWeight="700" 
          fontSize="13" 
          fill={brandDarkHex}
          letterSpacing="4.8"
        >
          THAT
        </text>
        <text 
          x="152" 
          y="62" 
          fontFamily='"Plus Jakarta Sans", "Inter", sans-serif' 
          fontWeight="700" 
          fontSize="10" 
          fill={brandDarkHex}
          letterSpacing="2.1"
        >
          MATTER
        </text>
      </svg>
    </div>
  );
}
