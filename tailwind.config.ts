import type { Config } from "tailwindcss";

export default {
	prefix: 'tw-',
  darkMode: ['class', '[data-mode="notused"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/util/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button': '0px 4px 1px var(--primary-dark)',
        'button-secondary': '0px 4px 1px var(--secondary-dark)',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        'secondary-light': 'var(--secondary-light)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'foreground-light': 'var(--foreground-light)',
      },
    },
  },
  plugins: [],
} satisfies Config;
