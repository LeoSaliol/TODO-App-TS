/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                // Primary
                brightBlue: 'hsl(220, 98%, 61%)',
                backLightBlue: 'hsl(192, 100%, 67%)',
                backViolet: 'hsl(280, 87%, 65%)',
                // Light Theme
                veryLightGray: 'hsl(0, 0%, 98%)',
                veryLightGrayish: 'hsl(236, 33%, 92%)',
                lightGrayishBlue: 'hsl(233, 11%, 84%)',
                darkGrayishBlue: 'hsl(236, 9%, 61%)',
                veryLightGrayishBlue: 'hsl(235, 19%, 35%)',
                // Dark Theme
                veryDarkBlue: 'hsl(235, 21%, 11%)',
                veryDarkDesaturated: 'hsl(235, 24%, 19%)',
                lightGrayish: 'hsl(234, 39%, 85%)',
                darkBlueHover: 'hsl(236, 33%, 92%)',
                darkGrayishBlueDark: 'hsl(234, 11%, 52%)',
                VeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
                veryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
            },
        },
    },
    plugins: [],
};
