import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const Svg = ({ children, ...props }: IconProps & { children: React.ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2l2.95 6.06 6.69.97-4.84 4.72 1.14 6.66L12 17.77l-5.94 3.13 1.14-6.66L2.36 9.03l6.69-.97L12 2z" />
  </svg>
);

export const StarHalfIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <defs>
      <linearGradient id="halfStar">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
      </linearGradient>
    </defs>
    <path
      fill="url(#halfStar)"
      d="M12 2l2.95 6.06 6.69.97-4.84 4.72 1.14 6.66L12 17.77l-5.94 3.13 1.14-6.66L2.36 9.03l6.69-.97L12 2z"
    />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const ChevronLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 18 6-6-6-6" />
  </Svg>
);

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const ArrowUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.02 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.6.94.96-3.5-.23-.36a9.5 9.5 0 1 1 8.07 4.45zM12.02 2A11.48 11.48 0 0 0 2.1 19.23L1 23l3.86-1.01A11.48 11.48 0 1 0 12.02 2z" />
  </svg>
);

/* Service icons */
export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Svg>
);

export const HomeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />
    <path d="M9 21v-6h6v6" />
  </Svg>
);

export const BuildingIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M8 11h2M8 15h2M14 7h2M14 11h2M14 15h2M10 21v-3h4v3" />
  </Svg>
);

export const BoxIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8z" />
    <path d="M3 8l9 5 9-5M12 13v8" />
  </Svg>
);

export const VanIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M1 16V6h13v10M14 9h4l3 3v4h-7" />
    <circle cx="6" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </Svg>
);

export const PackageIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 8 12 3 3 8v8l9 5 9-5V8z" />
    <path d="M3 8l9 5M21 8l-9 5M7.5 5.5l9 5M12 21V13" />
  </Svg>
);

export const TapeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="11" r="7" />
    <circle cx="12" cy="11" r="2.5" />
    <path d="M12 18v3h8a3 3 0 0 0 0-6h-2" />
  </Svg>
);

export const CrateIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="13" width="18" height="8" rx="1" />
    <path d="M3 17h18M9 13v8M15 13v8" />
    <path d="M6 13V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
  </Svg>
);

export const TrashIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
  </Svg>
);

export const TagIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.6 13.4 12 22l-9-9V3h10l8.6 8.6a1.4 1.4 0 0 1 0 1.8Z" />
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
  </Svg>
);

export const SprayIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 11V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7" />
    <path d="M9 11h5a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3Z" />
    <path d="M14 4h2M14 7h3M17 3v1M20 5v1M19 8v1" />
  </Svg>
);
