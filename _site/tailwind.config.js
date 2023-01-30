/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_projects/*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
      'mono': ['Lato', 'cursive'],
    },
    container: {
      padding: '5rem',
    },
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}