/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    extend: {

      keyframes: {
        'slide-in-mobile': {
          '0%': { transform: 'translateY(-50%) translateX(200%)' },
          '100%': { transform: 'translateY(-50%) translateX(-70px)' },
        },
        'slide-in-desktop': {
          '0%': { transform: 'translateY(-50%) translateX(200%)' },
          '100%': { transform: 'translateY(-50%) translateX(-270px)' },
        },
      },
      animation: {
        'slide-in-mobile': 'slide-in-mobile 1.5s ease-out forwards',
        'slide-in-desktop': 'slide-in-desktop 1.5s ease-out forwards',
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        beige: {
          50: "#fdfdfc",
          500: "#efeae3",
          300: "#f7f3ef",
        },

        green: {
          500: "#0d3d2b",
          900: "#030d09",
        },

        red: {
          500: "#ce3732",
          700: "#7b211e",
          900: "#2A0B0A",
        },
      },

      opacity: {
        40: ".40",
        60: ".60",
        80: ".80",
      },

      spacing: {
        spacebard136: "136px",
        spacebar32: "32px",
        spacebarm64: "64px",
        spacebarm16: "16px",
      },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        dmsans: ["DM sans", "sans-serif"],
        gloock: ["Gloock", "serif"],
      },

      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      borderWidth: {
        DEFAULT: "1px",
      },

      fontSize: {
        "h1-mobil": [
          "40px",
          {
            fontWeight: "400",
            fontFamily: "gloock",
            textTransform: "uppercase",
          },
        ],
        "h2-mobil": [
          "30px",
          {
            fontWeight: "400",
            fontFamily: "gloock",
            textTransform: "uppercase",
          },
        ],
        "h3-mobil": [
          "20px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],
        "h4-mobil": [
          "20px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "lowercase",
          },
        ],
        "h5-mobil": [
          "15px",
          {
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],
        "h6-mobil": [
          "16px",
          {
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "lowercase",
          },
        ],
        "h7-mobil": [
          "12px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "p-regular-mobil": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],
        "p-small-mobil": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "caption-mobil": [
          "12px",
          {
            lineHeight: "140%",
            fontWeight: "300",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "label-mobil": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "input-mobil": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "500",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "link-mobil": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "button-primary-mobil": [
          "12px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],

        "link-menu-mobil": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],

        "link-menu-thin-mobil": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "300",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        // desktop fonte

        "h1-display": [
          "160px",
          {
            fontWeight: "400",
            fontFamily: "gloock",
            textTransform: "uppercase",
          },
        ],

        "h1-desktop": [
          "130px",
          {
            fontWeight: "400",
            fontFamily: "gloock",
            textTransform: "uppercase",
          },
        ],
        "h2-desktop": [
          "56px",
          {
            fontWeight: "400",
            fontFamily: "gloock",
            textTransform: "uppercase",
          },
        ],
        "h3-desktop": [
          "32px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
        
          },
        ],
        "h4-desktop": [
          "30px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "lowercase",
          },
        ],
        "h5-desktop": [
          "24px",
          {
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],
        "h6-desktop": [
          "22px",
          {
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "lowercase",
          },
        ],
        "h7-desktop": [
          "24px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "p-regular-desktop": [
          "20px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],
        "p-small-desktop": [
          "16px",
          {
            fontWeight: "400",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "caption-desktop": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "300",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "label-desktop": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "input-desktop": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "500",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "link-desktop": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],

        "button-primary-desktop": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],

        "link-menu-desktop": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "700",
            fontFamily: "dmsans",
            textTransform: "uppercase",
          },
        ],

        "link-menu-thin-mobil": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "300",
            fontFamily: "dmsans",
            textTransform: "",
          },
        ],
      },

      gridTemplateColumns: {
        "grid-mobil": "repeat(12, 1fr)",
        "grid-tablet": "repeat (12, 1fr)",
        "grid-desktop": "repeat(12, 1fr)",
      },

      margin: {
        "margin-mobil": "16px",
        "margin-tablet": "32px",
        "margin-desktop": "64px",
      },

      gap: {
        "gap-mobil": "4px",
        "gap-tablet": "6px",
        "gap-desktop": "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
