import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                mont: ['Montserrat','sans-serif'],
                anek: ['Anek Malayalam', 'sans-serif'],
                syne: [    'Syne', 'sans-serif'],
                roboto : ['Roboto','sans-serif'],
            },
            fontWeight:{
                '900':900,
            },
            colors: {
                dark: "#121315",
                light: "#EEF3F3",
            },
        },
    },

    plugins: [forms,'flowbite/plugin'],
};
