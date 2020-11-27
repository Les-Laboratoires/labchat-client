const colors = require("tailwindcss/colors");
module.exports = {
    purge: [],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            gray: colors.trueGray,
            red: colors.red,
            blue: colors.lightBlue,
            yellow: colors.amber,
            emerald: colors.emerald,
        },
    },
    variants: {},
    plugins: [],
};
