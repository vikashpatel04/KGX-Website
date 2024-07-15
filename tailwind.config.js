// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./css/index.css",
    "./team.html",
    "./css/team.css",
    "./main.js",
    "./styles.css",
    "./js/index.js",
    "./public/assets/**/*.{html,js,css}", // If you have any HTML, JS, or CSS in assets
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", 'monospace']
      },
    }
  },
  plugins: [],
}
