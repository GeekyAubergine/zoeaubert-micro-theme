module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          dark: "#1B1B1B",
        },
        text: {
          DEFAULT: '#101010',
          dark: '#F0F0F0',
        },
        secondary: {
          DEFAULT: '#303030',
          dark: '#C0C0C0',
        },
        category: {
          DEFAULT: "#E2E1E1",
          dark: "#343434",
        },
        accent: {
          DEFAULT: "#B14949",
          dark: "#C85E5E",
        },
        border: {
          DEFAULT: "#888888",
        },
        middleGray: '#888888'
      },
    },
  },
  variants: {},
  plugins: [],
};
