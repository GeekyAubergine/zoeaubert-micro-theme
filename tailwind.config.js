module.exports = {
  darkMode: "class",
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  safelist: [
    "photogrid",
    "microblog_conversation",
    "microblog_post",
    "microblog_user",
    "microblog_avatar",
    "microblog_fullname",
    "microblog_text",
    "microblog_time",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#101012",
        },
        headings: {
          DEFAULT: "#252527",
          dark: "#E4E3E7",
        },
        text: {
          DEFAULT: "#252527",
          dark: "#F4F3F7",
        },
        secondary: {
          DEFAULT: "#505050",
          dark: "#A3A1A8",
        },
        category: {
          DEFAULT: "#F6FAF9",
          dark: "#181D27",
        },
        accent: {
          DEFAULT: "#950500",//"#05614F",
          dark: "#FFC040",///#FEB847",//"#F2DE7C",//"#FEB847",//D9BBFF
        },
        code: {
          DEFAULT: "#F6FAF9",
          dark: "#181D27",
          text: "#05614F",
          textDark: "#2DB69B",
        },
        border: {
          DEFAULT: "#505050",
          dark: "#A3A1A8",
        },
        middleGray: "#888888",
      },
    },
  },
  variants: {},
  plugins: [],
};
