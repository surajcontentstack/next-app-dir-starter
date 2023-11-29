/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                // "note-div": "#f2efff",
                "text-gray": "#222222",
                "text-slate-purple": "#715cdd",
            },
        },
    },
    plugins: [],
};
