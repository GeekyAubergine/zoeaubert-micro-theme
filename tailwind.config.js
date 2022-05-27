module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  safelist: [
    "photogrid",
    "microblog_conversation",
    "microblog_post",
    "microblog_avatar",
    "microblog_time",
    "microblog_time",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#181818",
        },
        text: {
          DEFAULT: "#101010",
          dark: "#F0F0F0",
        },
        secondary: {
          DEFAULT: "#303030",
          dark: "#C0C0C0",
        },
        category: {
          DEFAULT: "#EBEAEA",
          dark: "#303030",
        },
        accent: {
          DEFAULT: "#A1018F",
          dark: "#F18AFF",
        },
        code: {
          DEFAULT: "#EBEBEB",
          dark: "#282828",
          text: "#8D017D",
          textDark: "#F293FF",
        },
        border: {
          DEFAULT: "#888888",
        },
        middleGray: "#888888",
      },
    },
  },
  variants: {},
  plugins: [],
};
