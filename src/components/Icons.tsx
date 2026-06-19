import type { SVGProps } from "react";

export type IconName =
  | "arrowRight"
  | "award"
  | "briefcase"
  | "calendar"
  | "check"
  | "clock"
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
  | "whatsapp"
  | "x";

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
    case "shirt":
      return (
        <BaseIcon {...props}>
          <path d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
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
    default:
      return (
        <BaseIcon {...props}>
          <circle cx="12" cy="12" r="9" />
        </BaseIcon>
      );
  }
}
