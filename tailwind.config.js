/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heropatternMobile: "url('./Components/assets/home/background-home-mobile.jpg')",
        heropatternTablet: "url('./Components/assets/home/background-home-tablet.jpg')",
        heropatternDesktop: "url('./Components/assets/home/background-home-desktop.jpg')",
        destBgMobile: "url('./Components/assets/destination/background-destination-mobile.jpg')",
        destBgTablet: "url('./Components/assets/destination/background-destination-tablet.jpg')",
        destBgDesktop: "url('./Components/assets/destination/background-destination-desktop.jpg')",
        crewBgMobile: "url('./Components/assets/crew/background-crew-mobile.jpg')",
        crewBgTablet: "url('./Components/assets/crew/background-crew-tablet.jpg')",
        crewBgDesktop: "url('./Components/assets/crew/background-crew-desktop.jpg')",
        techBgMobile: "url('./Components/assets/technology/background-technology-mobile.jpg')",
        techBgTablet: "url('./Components/assets/technology/background-technology-tablet.jpg')",
        techBgDesktop: "url('./Components/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
