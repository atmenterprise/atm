interface LogoProps {
  variant?: 'inline' | 'square' | 'icon';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const logoAssets = {
  inline: { file: 'atm-logo-inline.svg', width: 280, height: 80 },
  square: { file: 'atm-logo-square.svg', width: 500, height: 500 },
  icon: { file: 'atm-logo-icon.png', width: 270, height: 270 },
} as const;

const logoSizes = {
  sm: { inline: 'h-8', square: 'h-10 w-10 rounded-lg', icon: 'h-7 w-7 rounded' },
  md: { inline: 'h-11', square: 'h-16 w-16 rounded-xl', icon: 'h-10 w-10 rounded-md' },
  lg: { inline: 'h-16', square: 'h-24 w-24 rounded-2xl', icon: 'h-16 w-16 rounded-lg' },
  xl: { inline: 'h-28', square: 'h-48 w-48 rounded-[2rem]', icon: 'h-24 w-24 rounded-[1.5rem]' },
} as const;

export default function Logo({ variant = 'inline', className = '', size = 'md' }: LogoProps) {
  const asset = logoAssets[variant];

  return (
    <span className={`inline-flex shrink-0 items-center overflow-hidden select-none ${logoSizes[size][variant]} ${className}`}>
      <img
        src={`${import.meta.env.BASE_URL}${asset.file}`}
        alt="ATM — Apps That Matter"
        width={asset.width}
        height={asset.height}
        className="h-full w-auto object-contain"
        decoding="async"
      />
    </span>
  );
}
