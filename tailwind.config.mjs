/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var(--font-vazir)"],
      },
      colors: {
        brand: {
          pink: {
            DEFAULT: "#f5569b", // صورتی اصلی
            light: "#ff8ec5",
            dark: "#d63384",
          },
          green: {
            DEFAULT: "#10b981", // سبز اصلی
            light: "#34d399",
            dark: "#047857",
          },
          gold: {
            DEFAULT: "#f59e0b",
            light: "#fbbf24",
            dark: "#d97706",
          },
        },
        "brand-green": {
          DEFAULT: "#0A4D50", // سبز اصلی برند
          dark: "#031E20", // برای متن‌ها و فوتر
        },
        "accent-pink": {
          DEFAULT: "#E9A8A9", // صورتی اصلی برای دکمه‌ها و هایلایت‌ها
          light: "#F5C7C8", // صورتی روشن‌تر
        },
        background: {
          light: "#80F0A5", // پس‌زمینه اصلی سایت
          section: "#B2DCA1", // پس‌زمینه بخش‌های مجزا
        },
        "accent-yellow": "#F3D582", // زرد ملایم
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      textStroke: {
        gold: "1px gold",
      },
      // تنظیمات تایپوگرافی برای زبان فارسی
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.brand-green.dark'),
            },
            h2: {
              color: theme('colors.brand-green.dark'),
            },
            h3: {
              color: theme('colors.brand-green.DEFAULT'),
            },
            strong: {
              color: theme('colors.brand-pink.DEFAULT'),
            },
            a: {
              color: theme('colors.brand-pink.DEFAULT'),
              '&:hover': {
                color: theme('colors.brand-pink.dark'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke-gold": {
          "-webkit-text-stroke": "1px gold",
          "text-stroke": "1px gold",
        },
      });
    },
  ],
};

export default config;