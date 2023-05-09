/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "5rem",
			},
		},
		extend: {
			colors: {
				primary: {
					100: "#fef1d2",
					200: "#fde3a5",
					300: "#fbd577",
					400: "#fac74a",
					500: "#f9b91d",
					600: "#c79417",
					700: "#956f11",
					800: "#644a0c",
					900: "#322506",
				},
				secondary: {},
			},
			fontFamily: {
				sans: "'Montserrat', sans-serif",
			},
		},
	},
	plugins: [],
};
