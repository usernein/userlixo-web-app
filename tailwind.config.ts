import rippleui from "rippleui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--tg-theme-bg-color)",
        text: "var(--tg-theme-text-color)",
        hint: "var(--tg-theme-hint-color)",
        link: "var(--tg-theme-link-color)",
        button: "var(--tg-theme-button-color)",
        buttonText: "var(--tg-theme-button-text-color)",
        secondaryBg: "var(--tg-theme-secondary-bg-color)",
      },
    },
  },
  plugins: [rippleui],
};
