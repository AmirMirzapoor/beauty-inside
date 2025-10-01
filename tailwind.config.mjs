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
        vazir: ['var(--font-vazir)'],
      },
      colors: {
        // تعریف سیستم رنگی جدید
        'brand-green': {
          DEFAULT: '#0A4D50', // سبز اصلی برند
          dark: '#031E20',    // برای متن‌ها و فوتر
        },
        'accent-pink': {
          DEFAULT: '#E9A8A9', // صورتی اصلی برای دکمه‌ها و هایلایت‌ها
          light: '#F5C7C8', // صورتی روشن‌تر
        },
        'background': {
          light: '#F0F7F4',   // پس‌زمینه اصلی سایت (بسیار روشن با ته‌رنگ سبز)
          section: '#E6EFEC', // پس‌زمینه بخش‌های مجزا
        },
        'accent-yellow': '#F3D582', // زرد ملایم برای جزئیات خاص (در صورت نیاز)
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;