const { default: daisyui } = require('daisyui');

module.exports = {
    content: [
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './*.md',
    ],
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: ["light", "dark", "cupcake", "wireframe"],
    },
}
