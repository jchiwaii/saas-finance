// Theme configuration for SaaS application
export const theme = {
  // Color palette optimized for SaaS applications
  colors: {
    // Primary brand colors
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6", // Main primary
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },

    // Secondary/accent colors
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617",
    },

    // Success states
    success: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22",
    },

    // Warning states
    warning: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03",
    },

    // Error states
    error: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a",
    },

    // Neutral grays
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },
  },

  // Typography scale
  typography: {
    fontFamily: {
      sans: [
        "var(--font-geist-sans)",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      heading: [
        "var(--font-geist-sans)",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
    },

    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },

    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },

  // Spacing scale
  spacing: {
    px: "1px",
    0: "0px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },

  // Border radius
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  // Box shadows
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },

  // Animation and transitions
  animation: {
    duration: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },

    easing: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },

  // Breakpoints for responsive design
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index scale
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    modal: "1000",
    popover: "1010",
    tooltip: "1020",
    navbar: "1030",
    dropdown: "1040",
    max: "9999",
  },
} as const;

// Component-specific theme tokens
export const components = {
  // Button variants
  button: {
    base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",

    variants: {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
      secondary:
        "bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-500",
      outline:
        "border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-500",
      ghost: "hover:bg-gray-100 focus-visible:ring-gray-500",
      destructive:
        "bg-error-600 text-white hover:bg-error-700 focus-visible:ring-error-500",
    },

    sizes: {
      sm: "h-8 rounded-md px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      xl: "h-12 rounded-md px-10",
    },
  },

  // Input fields
  input: {
    base: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
    error: "border-error-500 focus:ring-error-500",
    success: "border-success-500 focus:ring-success-500",
  },

  // Cards
  card: {
    base: "rounded-lg border border-gray-200 bg-white shadow-sm",
    elevated: "rounded-lg border border-gray-200 bg-white shadow-md",
    interactive:
      "rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer",
  },

  // Accordion
  accordion: {
    container: "w-full",
    item: "border-b border-gray-200",
    trigger:
      "flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    content: "pb-4 pt-0",
    icon: "h-4 w-4 shrink-0 transition-transform duration-200",
  },

  // Badge/Pill components
  badge: {
    base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
    variants: {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-primary-100 text-primary-800",
      secondary: "bg-secondary-100 text-secondary-800",
      success: "bg-success-100 text-success-800",
      warning: "bg-warning-100 text-warning-800",
      error: "bg-error-100 text-error-800",
    },
  },

  // Navigation
  navbar: {
    base: "sticky top-0 z-navbar w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
    container: "container mx-auto flex h-16 items-center justify-between px-4",
    logo: "text-xl font-bold text-gray-900",
    menu: "hidden md:flex md:items-center md:space-x-6",
    menuItem:
      "text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors",
    mobileMenuButton: "md:hidden",
  },

  // Footer
  footer: {
    base: "border-t border-gray-200 bg-gray-50",
    container: "container mx-auto px-4 py-8",
    section: "grid grid-cols-1 gap-8 md:grid-cols-4",
    heading: "text-sm font-semibold text-gray-900 uppercase tracking-wider",
    link: "text-sm text-gray-600 hover:text-gray-900 transition-colors",
  },

  // Modal/Dialog
  modal: {
    overlay: "fixed inset-0 z-modal bg-black/50 backdrop-blur-sm",
    content:
      "fixed left-1/2 top-1/2 z-modal w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-200 bg-white p-6 shadow-lg",
    header: "flex items-center justify-between pb-4",
    title: "text-lg font-semibold text-gray-900",
    closeButton:
      "rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500",
  },

  // Dropdown/Select
  dropdown: {
    trigger:
      "flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
    content:
      "z-dropdown w-full min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md",
    item: "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  },
} as const;

// Dark mode color overrides
export const darkMode = {
  colors: {
    background: "#0a0a0a",
    foreground: "#ededed",
    muted: "#1a1a1a",
    mutedForeground: "#a3a3a3",
    border: "#2a2a2a",
    input: "#1a1a1a",
    primary: "#3b82f6",
    primaryForeground: "#ffffff",
    secondary: "#1a1a1a",
    secondaryForeground: "#ededed",
  },
} as const;

export type Theme = typeof theme;
export type Components = typeof components;
export type DarkMode = typeof darkMode;
