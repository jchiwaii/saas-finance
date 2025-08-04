export const theme = {
  // Essential color palette
  colors: {
    primary: {
      400: "#a855f7", // purple-400
      500: "#8b5cf6", // purple-500
      600: "#7c3aed", // purple-600
    },

    // Pink accent colors
    accent: {
      400: "#f472b6", // pink-400
      500: "#ec4899", // pink-500
    },

    // Neutral grays for text and backgrounds
    gray: {
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      800: "#1f2937",
      900: "#111827",
      950: "#030712",
    },

    // Slate colors used in components
    slate: {
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      900: "#0f172a",
      950: "#020617",
    },
  },

  // Typography scale (minimal)
  typography: {
    fontFamily: {
      sans: [
        "var(--font-geist-sans)",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
    },

    fontSize: {
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
    },

    fontWeight: {
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },

  // Basic spacing
  spacing: {
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    16: "4rem",
  },

  // Border radius
  borderRadius: {
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
  },
} as const;

export const components = {
  // Button variants (for InfoCard and CTA button)
  button: {
    base: "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors",

    variants: {
      glass:
        "bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm",
    },

    sizes: {
      lg: "px-8 py-3",
    },
  },

  // Card component (InfoCard)
  card: {
    base: "bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg",
  },

  // Navbar
  navbar: {
    base: "absolute top-0 left-0 right-0 z-50",
    container: "max-w-7xl mx-auto flex items-center justify-between px-6 py-6",
    logo: "flex items-center space-x-3",
    menu: "hidden md:flex items-center space-x-8",
    menuItem:
      "text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200 relative",
  },
} as const;

export type Theme = typeof theme;
export type Components = typeof components;
