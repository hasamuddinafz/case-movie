/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#B43FEB',
        success: '#25DC37',
        error: '#EB3F5E',
        warning: '#FFCD1A',
        darksmooth: '#1A161F',
        linedark: '#29282F',
        linelight: '#E9EBED',
        bgwhite: '#0D0C0F',
        grayscale: {
          10: '#F9F9F9',
          20: '#ECF1F6',
          30: '#E3E9ED',
          40: '#D1D8DD',
          50: '#BFC6CC',
          60: '#9CA4AB',
          70: '#78828A',
          80: '#66707A',
          90: '#434E58',
          100: '#171725',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: "2.25rem", fontWeight: "700" },
            h2: { fontSize: "2rem", fontWeight: "600" },
            h3: { fontSize: "1.75rem", fontWeight: "500" },
            h4: { fontSize: "1.5rem", fontWeight: "500" },
            h5: { fontSize: "1.25rem", fontWeight: "400" },
            h6: { fontSize: "1rem", fontWeight: "400" },
          },
        },
      },
    },
  },
  plugins: [],
}

