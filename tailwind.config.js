/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary-blue': "#012250",
        "secondary-grey": "#667185",
        "secondary-red": "#8D071D",
      },

      backgroundImage: {
        'hero-image': "url('src/assets/images/hero_img.svg')",

        'card-pattern' :"url('src/assets/icons/card_pattern.svg')",

        'sec-pattern' : "url(src/assets/images/whoweare_pattern.svg)",

        'curves-bg' : "url(src/assets/images/curves.svg)",
        
        'service-hero' : "url(src/assets/images/service_hero_img.png)",

        'grey-curve-bg': "url(src/assets/images/grey_curve.svg)",

        'long-grey-curve': "url(src/assets/images/sustainability_grey_curve.svg)",

        'long-red-curve': "url(src/assets/images/sustainability_red_curve.svg)",

        "map-bg": "url(src/assets/images/map.png)",

        "contract-bg": "url(src/assets/images/contract-bg.png)",

        "contact-bg": "url(src/assets/images/contact-bg.png)",

        "career-bg": "url(src/assets/images/career-bg.png)",

        "team-bg": "url(src/assets/images/team.png)",

        "team-card": "url(src/assets/images/team-bg.png)",

        "reports-bg": "url(src/assets/images/reports-bg.png)",

        "assets-image": "url(src/assets/images/assets_bg.png)",

      },

      boxShadow: {
        '3xl': ' 0px 20px 20px 0px #edf2f7'
      },

    },
  },
  plugins: [],
}

