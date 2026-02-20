/**
 * BenAI-inspired line-art icons inside circles.
 * Usage: <Icon name="coffee" size={40} />
 */

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const PATHS: Record<string, string> = {
  // — F&B Models —
  coffee:
    'M6 10h10a2 2 0 0 1 2 2v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1a2 2 0 0 1 2-2z M18 11h1a2 2 0 0 1 0 4h-1 M9 10V7 M12 10V6 M15 10V7',
  eatery:
    'M5 8h14 M8 8V5 M12 8V4 M16 8V5 M5 8l1 10h12l1-10',
  bubbletea:
    'M8 4h8l-1 14H9L8 4z M8 4h8 M10 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M13 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M11 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z M12 4v-2',
  restaurant:
    'M3 11h18 M5 11V8a7 7 0 0 1 14 0v3 M8 11v7 M16 11v7 M6 18h12',
  cloudkitchen:
    'M4 18V8l8-4 8 4v10 M4 8h16 M9 18v-5h6v5 M9 11h2v2H9z M13 11h2v2h-2z',
  bakery:
    'M8 16h8 M12 6a4 4 0 0 1 4 4v1H8v-1a4 4 0 0 1 4-4z M6 11c0 0-1 2 0 3s2 2 4 2h4c2 0 3-1 4-2s0-3 0-3',
  bar:
    'M8 5h8l-3 7v5 M9 17h6 M7 5l1-2h8l1 2 M12 12a2 2 0 1 0 0-1',
  kiosk:
    'M6 10h12v8H6z M6 10l2-6h8l2 6 M10 10v8 M14 10v8 M6 14h12',

  // — Feature Cards —
  wizard:
    'M4 5h16v14H4z M8 3v4 M16 3v4 M4 9h16 M8 13h3 M8 16h5',
  bolt:
    'M13 3L5 13h6l-1 8 8-10h-6l1-8z',
  book:
    'M4 4h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z M20 4h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z',
  person:
    'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2',

  // — Social —
  linkedin:
    'M4 4.5A1.5 1.5 0 0 1 5.5 3h13A1.5 1.5 0 0 1 20 4.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z M8 11v5 M8 8v.01 M12 16v-4a2 2 0 0 1 4 0v4 M12 11v-1',
  facebook:
    'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  email:
    'M4 6h16v12H4z M4 6l8 6 8-6',

  // — Navigation & Actions —
  home:
    'M3 12l9-8 9 8 M5 10v8a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8',
  heart:
    'M12 21C12 21 4 13.5 4 8.5 4 5.4 6.4 3 9.5 3c1.7 0 3.4 1 4 2.5h-3C11.1 4 12.8 3 14.5 3 17.6 3 20 5.4 20 8.5 20 13.5 12 21 12 21z',
  lightbulb:
    'M12 3a6 6 0 0 0-4 10.5V16h8v-2.5A6 6 0 0 0 12 3z M10 20h4 M10 18h4',
  save:
    'M5 3h14l-2 18H7L5 3z M9 3v4h6V3 M12 10v5',
  check:
    'M5 12l5 5L19 7',

  // — Business Registration —
  building:
    'M4 21V8l8-5 8 5v13 M9 21v-6h6v6 M4 8h16 M9 11h2v2H9z M13 11h2v2h-2z',
  stamp:
    'M12 3a5 5 0 0 0-5 5v1H5v10h14V9h-2V8a5 5 0 0 0-5-5z M9 9h6 M9 13h6 M9 16h3',
  scale:
    'M12 3v18 M5 7l7-4 7 4 M5 7v2a3 3 0 0 0 6 0V7 M13 7v2a3 3 0 0 0 6 0V7',

  // — Knowledge Topics —
  money:
    'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  chart:
    'M4 20h16 M4 20V4 M8 16V10 M12 16V6 M16 16V12 M20 16V8',
  trending:
    'M4 18l4-4 4 4 8-8 M16 10h4v4',
  warning:
    'M12 3L2 20h20L12 3z M12 9v4 M12 16v.01',
  checklist:
    'M4 6h2v2H4z M9 7h11 M4 12h2v2H4z M9 13h11 M4 18h2v2H4z M9 19h11',

  // — Checklist Categories —
  legal:
    'M14 2H6v20h12V6l-4-4z M14 2v4h4 M8 12h8 M8 16h6',
  construction:
    'M4 20h16 M6 20V10l6-6 6 6v10 M10 20v-4h4v4',
  wrench:
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.6-2.6a5 5 0 0 1-6.4 6.4L7.7 19.3a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8l6.2-6.2A5 5 0 0 1 17.3 3.7z',
  menu:
    'M4 4h16v16H4z M4 10h16 M10 10v10',
  team:
    'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2 M16 3a4 4 0 0 1 0 8 M21 21v-2a4 4 0 0 1-3-4',
  laptop:
    'M4 6h16v10H4z M2 18h20 M10 16h4',
  megaphone:
    'M18 8A6 6 0 0 1 6 8l-2 2v2l2 2a6 6 0 0 1 12 0l2-2v-2z M6 12v4a2 2 0 0 0 2 2h1',
  gear:
    'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z',

  // — Stat-Grid icons —
  meat:
    'M15 3a6 6 0 0 0-6 6c0 4 3 6 3 10h4c0-4 3-6 3-10a6 6 0 0 0-4-6z M9 9c-3 0-5 2-5 5s3 5 5 5',
  users:
    'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2 M16 3a4 4 0 0 1 0 8 M21 21v-2a4 4 0 0 1-3-4',
  clock:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 3',

  // — Warning-List icons —
  cashout:
    'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6 M7 2l-3 3 3 3',
  trendingup:
    'M4 18l4-4 4 4 8-8 M16 10h4v4',
  rent:
    'M3 12l9-8 9 8 M5 10v8a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-8',
  wallet:
    'M4 6h16v12H4z M4 6l2-2h12l2 2 M16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  clipboard:
    'M9 2h6v3H9z M7 5H5v16h14V5h-2 M9 12h6 M9 16h4',
  target:
    'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  phone:
    'M5 4h4l2 5-2.5 1.5A11 11 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  handshake:
    'M7 11l3-3 3 3 4-4 M4 14l3-3 M20 14l-3-3 M2 17l5-5 M22 17l-5-5 M9 20l3-3 3 3',

  // — Extra Feature Icons —
  stories:
    'M19 3H5v18l7-4 7 4V3z M9 8h6 M9 12h4',
  chat:
    'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 9h8 M8 13h5',
  search:
    'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.35-4.35',

  // — Vertical / Industry Icons —
  retail:
    'M4 7h16l-1 12H5L4 7z M4 7l2-4h12l2 4 M10 11h4',
  ecommerce:
    'M6 2L3 7v13h18V7l-3-5z M3 7h18 M16 10a4 4 0 0 1-8 0',
  education:
    'M12 3L2 8l10 5 10-5-10-5z M6 10.6V16l6 3 6-3v-5.4',
  spa:
    'M12 21c-4 0-8-3-8-8 0-3 2-5 4-6 0 4 4 5 4 5s4-1 4-5c2 1 4 3 4 6 0 5-4 8-8 8z M12 21v-4',
  services:
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.6-2.6a5 5 0 0 1-6.4 6.4L7.7 19.3a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8l6.2-6.2A5 5 0 0 1 17.3 3.7z',
  validator:
    'M9 12l2 2 4-4 M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M12 3v2 M12 19v2 M3 12h2 M19 12h2',
  rocket:
    'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2-.1-2.8-.8-.8-2-.9-2.9-.2z M12 15l-3-3 M22 2L13.8 10.2 M16.5 11.5L22 2l-9.5 5.5v3h3z',

  // — Export & Actions —
  download:
    'M12 3v12 M8 11l4 4 4-4 M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  print:
    'M6 9V2h12v7 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14h12v8H6z',
};

/** BenAI-style solid dark rounded-square social icon */
export function SocialIcon({ name, size = 32, className = '' }: IconProps) {
  const d = PATHS[name];
  if (!d) return <span className={className}>{name}</span>;

  const svgSize = Math.round(size * 0.55);

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-text ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d={d} />
      </svg>
    </span>
  );
}

export default function Icon({ name, size = 24, className = '' }: IconProps) {
  const d = PATHS[name];
  if (!d) return <span className={className}>{name}</span>;

  const circleSize = size;
  const svgSize = Math.round(size * 0.55);
  const offset = (circleSize - svgSize) / 2;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-text bg-white shadow-[1px_1px_0_var(--color-text)] ${className}`}
      style={{ width: circleSize, height: circleSize }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text"
      >
        <path d={d} />
      </svg>
    </span>
  );
}