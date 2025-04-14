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
                    DEFAULT: '#006241',
                    dark: '#1E3932',
                    light: '#00754A',
                },

                light: '#F2F0EB'
            },
            screens: {
                'xs': '480px',
            },
        },
    },
    plugins: [],
}

