import type { SVGProps } from "react";

export type IconName =
  | "arrowRight"
  | "award"
  | "briefcase"
  | "calendar"
  | "check"
  | "clock"
  | "droplet"
  | "factory"
  | "heart"
  | "instagram"
  | "mail"
  | "mapPin"
  | "menu"
  | "package"
  | "phone"
  | "printer"
  | "ruler"
  | "shirt"
  | "thumb"
  | "truck"
  | "user"
  | "star"
  | "quote"
  | "whatsapp"
  | "google"
  | "x"
  | "kemeja"
  | "jaket"
  | "kaos"
  | "polo"
  | "jersey"
  | "topi"
  | "celana";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName | string;
}

function BaseIcon({ children, className = "h-5 w-5", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function Icon({ name, ...props }: IconProps) {
  switch (name) {
    case "arrowRight":
      return (
        <BaseIcon {...props}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </BaseIcon>
      );
    case "award":
      return (
        <BaseIcon {...props}>
          <path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5" />
          <circle cx="12" cy="8" r="6" />
          <path d="m9.5 8 1.7 1.7L15 6" />
        </BaseIcon>
      );
    case "briefcase":
      return (
        <BaseIcon {...props}>
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M4 7h16v13H4z" />
          <path d="M9 12h6" />
        </BaseIcon>
      );
    case "calendar":
      return (
        <BaseIcon {...props}>
          <path d="M8 2v4" />
          <path d="M16 2v4" />
          <path d="M3 9h18" />
          <path d="M5 4h14a2 2 0 0 1 2 2v15H3V6a2 2 0 0 1 2-2z" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </BaseIcon>
      );
    case "check":
      return (
        <BaseIcon {...props}>
          <path d="m6 12 4 4 8-8" />
        </BaseIcon>
      );
    case "clock":
      return (
        <BaseIcon {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </BaseIcon>
      );
    case "droplet":
      return (
        <BaseIcon {...props}>
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </BaseIcon>
      );
    case "factory":
      return (
        <BaseIcon {...props}>
          <path d="M3 21h18" />
          <path d="M5 21V9l5 3V9l5 3V6h4v15" />
          <path d="M8 16h1M12 16h1M16 16h1" />
        </BaseIcon>
      );
    case "heart":
      return (
        <BaseIcon fill="currentColor" stroke="none" {...props}>
          <path d="M12 21s-7-4.4-9.2-8.5C.9 8.8 3.2 5 7 5c2 0 3.3 1 4 2.1C11.7 6 13 5 15 5c3.8 0 6.1 3.8 4.2 7.5C17 16.6 12 21 12 21z" />
        </BaseIcon>
      );
    case "instagram":
      return (
        <BaseIcon {...props}>
          <rect height="16" rx="4" width="16" x="4" y="4" />
          <circle cx="12" cy="12" r="3.4" />
          <path d="M16.7 7.3h.01" />
        </BaseIcon>
      );
    case "mail":
      return (
        <BaseIcon {...props}>
          <path d="M4 5h16v14H4z" />
          <path d="m4 7 8 6 8-6" />
        </BaseIcon>
      );
    case "mapPin":
      return (
        <BaseIcon {...props}>
          <path d="M12 22s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </BaseIcon>
      );
    case "menu":
      return (
        <BaseIcon {...props}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </BaseIcon>
      );
    case "package":
      return (
        <BaseIcon {...props}>
          <path d="m12 3 8 4-8 4-8-4 8-4z" />
          <path d="M4 7v10l8 4 8-4V7" />
          <path d="M12 11v10" />
        </BaseIcon>
      );
    case "palette":
      return (
        <BaseIcon {...props}>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </BaseIcon>
      );
    case "phone":
      return (
        <BaseIcon {...props}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.5 1.8L7.8 9.6a16 16 0 0 0 6.6 6.6l1.3-1.3a2 2 0 0 1 1.8-.5l2.8.5a2 2 0 0 1 1.7 2z" />
        </BaseIcon>
      );
    case "printer":
      return (
        <BaseIcon {...props}>
          <path d="M7 8V3h10v5" />
          <path d="M6 17H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-1" />
          <path d="M7 14h10v7H7z" />
          <path d="M17 11h.01" />
        </BaseIcon>
      );
    case "ruler":
      return (
        <BaseIcon {...props}>
          <path d="m4 16 10-10 6 6-10 10-6-6z" />
          <path d="m8 12 2 2M11 9l2 2M14 6l2 2" />
        </BaseIcon>
      );
    case "scissors":
      return (
        <BaseIcon {...props}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" x2="8.12" y1="4" y2="15.88" />
          <line x1="14.47" x2="20" y1="14.48" y2="20" />
          <line x1="8.12" x2="12" y1="8.12" y2="12" />
        </BaseIcon>
      );
    case "shirt":
      return (
        <BaseIcon {...props}>
          <path d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
        </BaseIcon>
      );
    case "stamp":
      return (
        <BaseIcon {...props}>
          <path d="M5 22h14" />
          <path d="M19 22V11c0-1.1-.9-2-2-2h-4V4c0-1.1-.9-2-2-2s-2 .9-2 2v5H5c-1.1 0-2 .9-2 2v11" />
          <path d="M12 18v-5" />
          <path d="M12 4v1" />
          <path d="M16 18v-5" />
          <path d="M8 18v-5" />
        </BaseIcon>
      );
    case "thumb":
      return (
        <BaseIcon {...props}>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7h5" />
          <path d="M7 13 11 4a2.5 2.5 0 0 1 4 2l-1 4h5a2 2 0 0 1 2 2l-2 8a2 2 0 0 1-2 2H7V13z" />
        </BaseIcon>
      );
    case "truck":
      return (
        <BaseIcon {...props}>
          <path d="M3 7h11v10H3z" />
          <path d="M14 10h4l3 3v4h-7z" />
          <circle cx="7" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
        </BaseIcon>
      );
    case "user":
      return (
        <BaseIcon {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </BaseIcon>
      );
    case "star":
      return (
        <BaseIcon fill="currentColor" stroke="none" {...props}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </BaseIcon>
      );
    case "quote":
      return (
        <BaseIcon fill="currentColor" stroke="none" {...props}>
          <path d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-2 4-4 4M20 11h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7c0 2.5-2 4-4 4" />
        </BaseIcon>
      );
    case "google":
      return (
        <BaseIcon fill="none" stroke="none" viewBox="0 0 24 24" {...props}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </BaseIcon>
      );
    case "whatsapp":
      return (
        <BaseIcon {...props}>
          <path d="M5.5 19.5 3 21l.8-3A9 9 0 1 1 12 21a9.2 9.2 0 0 1-6.5-2.5z" />
          <path d="M9 8.8c.3 3 2.2 5 5.2 5.8l1.3-1.3" />
          <path d="M8.5 8.5 10 10" />
        </BaseIcon>
      );
    case "x":
      return (
        <BaseIcon {...props}>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </BaseIcon>
      );
    case "kemeja":
      return (
        <BaseIcon {...props}>
          {/* Collar */}
          <path d="M12 4.5 L15 7.5 L12 10.5 L9 7.5 Z" />
          {/* Shirt body */}
          <path d="M6 7.5 L2 9.5 L4 13.5 L6 12.5 L6 20.5 A 1 1 0 0 0 7 21.5 L17 21.5 A 1 1 0 0 0 18 20.5 L18 12.5 L20 13.5 L22 9.5 L18 7.5 Z" />
          {/* Buttons line */}
          <path d="M12 10.5 L12 21.5" />
          {/* Buttons */}
          <circle cx="12" cy="13" r="0.75" fill="currentColor" />
          <circle cx="12" cy="16" r="0.75" fill="currentColor" />
          <circle cx="12" cy="19" r="0.75" fill="currentColor" />
        </BaseIcon>
      );
    case "jaket":
      return (
        <BaseIcon {...props}>
          {/* Jacket body */}
          <path d="M6 5.5 L2 7.5 L4 11.5 L6 10.5 L6 20.5 A 1 1 0 0 0 7 21.5 L17 21.5 A 1 1 0 0 0 18 20.5 L18 10.5 L20 11.5 L22 7.5 L18 5.5 Z" />
          {/* Zipper line */}
          <path d="M12 5.5 L12 21.5" strokeWidth="2" />
          {/* Zipper slider */}
          <rect x="11" y="9.5" width="2" height="3" rx="0.5" fill="currentColor" />
          {/* Collar lines */}
          <path d="M6 5.5 L12 9.5 L18 5.5" />
        </BaseIcon>
      );
    case "kaos":
      return (
        <BaseIcon {...props}>
          {/* T-shirt outline */}
          <path d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
        </BaseIcon>
      );
    case "polo":
      return (
        <BaseIcon {...props}>
          {/* T-shirt outline */}
          <path d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
          {/* Collar details */}
          <path d="M9 4 L12 7 L15 4" />
          {/* Placket/buttons line */}
          <path d="M12 7 L12 11" />
          <circle cx="12" cy="9" r="0.5" fill="currentColor" />
        </BaseIcon>
      );
    case "jersey":
      return (
        <BaseIcon {...props}>
          {/* Jersey outline */}
          <path d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
          {/* Sport stripes or V-neck */}
          <path d="M9 4 L12 6.5 L15 4" />
          <path d="M5 7.5 L6.5 6" />
          <path d="M19 7.5 L17.5 6" />
        </BaseIcon>
      );
    case "topi":
      return (
        <BaseIcon {...props}>
          {/* Cap dome */}
          <path d="M12 16 A 6 6 0 0 1 6 10 A 6 6 0 0 1 18 10 A 6 6 0 0 1 12 16" />
          {/* Cap visor/brim */}
          <path d="M5 14 C 2 14, 2 16.5, 5 16.5 L 17 16.5 C 20 16.5, 20 14, 17 14" />
          {/* Top button */}
          <circle cx="12" cy="4" r="1" />
        </BaseIcon>
      );
    case "celana":
      return (
        <BaseIcon {...props}>
          {/* Pants/Trousers outline */}
          <path d="M6 3 H 18 A 1 1 0 0 1 19 4 V 20 A 1 1 0 0 1 18 21 H 13.5 A 0.5 0.5 0 0 1 13 20.5 V 12 A 1 1 0 0 0 12 11 A 1 1 0 0 0 11 12 V 20.5 A 0.5 0.5 0 0 1 10.5 21 H 6 A 1 1 0 0 1 5 20 V 4 A 1 1 0 0 1 6 3 Z" />
          {/* Belt loops/details */}
          <path d="M8 6 H 16" />
          <path d="M12 3 V 6" />
        </BaseIcon>
      );
    default:
      return (
        <BaseIcon {...props}>
          <circle cx="12" cy="12" r="9" />
        </BaseIcon>
      );
  }
}
