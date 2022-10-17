module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      colors: {
        gold: '#C69632',
        silver: '#aaa9ad',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        'sans-serif': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
