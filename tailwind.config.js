module.exports = {
	content: ["./index.html", "./mobile/index.html", "./dist/script.js"],
	theme: {
		extend: {
			colors: {
				blue: "#5A94D5",
				white: "#FAFDFF",
				text1: "#221D17",
				text2: "#413830",
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
