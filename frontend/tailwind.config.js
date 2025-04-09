/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#171717',

                primary: {
                    DEFAULT: '#006241'
                }
            }
        },
    },
    plugins: [],
}

