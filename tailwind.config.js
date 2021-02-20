const colors = require("tailwindcss/colors");
module.exports = {
    purge: [],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            gray: colors.coolGray,
            red: colors.red,
            blue: colors.cyan,
            yellow: colors.amber,
            emerald: colors.emerald,
        },
    },
    variants: {},
    plugins: [],
};
