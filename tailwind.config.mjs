/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    /* Vil du overskrive eller extende tailwinds indstillinger?  */

	theme: {
  current: 'currentColor',
         'beige': {
             50: '#hexkode',     
                 100: '#hexkode',
                 200: '#hexkode',
                 300: '#hexkode',
                 400: '#hexkode',
                 500: '#hexkode',
                 600: '#hexkode',
       
           },

           'green': {
            50: '#hexkode',     
                100: '#hexkode',
                200: '#hexkode',
                300: '#hexkode',
                400: '#hexkode',
                500: '#hexkode',
                600: '#hexkode',
      
          },
          'red': {
            50: '#hexkode',     
                100: '#hexkode',
                200: '#hexkode',
                300: '#hexkode',
                400: '#hexkode',
                500: '#hexkode',
                600: '#hexkode',
      
          },
       
		extend: {

            opacity:{
                50: '.50',   
   
            },

         /* Tilføj din egen spacing nedenfor */
        spacing: {
            'xxs': '10px',
            'xs':'20px',
            's':'40px',
            'm':'80px',
            'l':'120px',
      },

      /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
      fontFamily: {
        dmsans: ['DM sans', 'sans-serif'],
        gloock: ['Gloock', 'serif'],
        
      },

      fontWeight:{
         regular:'400',
         semibold:'600',
         bold:'700',

      },

      borderWidth:{
         DEFAULT:'2px',

      },

      dropShadow:{
         regular:'5px 4px 4px rgba(0,0, 0.25)'
         
      },

         /* Tilføj dit typografiske hierarki herunder */
     fontSize: {
       'h1-mobil': ['89.8px', { lineHeight: 'auto' }],
         'h2-mobil': ['67.3px', { lineHeight: 'auto' }],
         'h3-mobil': ['50.5px', { lineHeight: 'auto' }],
         'h4-mobil': ['37.9px', { lineHeight: 'auto' }],
         'h5-mobil': ['28.4px', { lineHeight: 'auto' }],
         'h6-mobil': ['21.3px', { lineHeight: 'auto' }],
         'p-mobil': ['16px', { lineHeight: 'auto' }],
         'h1-display-desktop': ['150px', { lineHeight: '120px' }],
         'h1-desktop': ['112.2px', { lineHeight: '112.2px' }],
         'h2-desktop': ['84.2px', { lineHeight: 'auto' }],
         'h3-desktop': ['63.2px', { lineHeight: 'auto' }],
         'h4-desktop': ['47.4px', { lineHeight: 'auto' }],
         'h5-desktop': ['35.5px', { lineHeight: 'auto' }],
         'h6-desktop': ['26.7px', { lineHeight: 'auto' }],
         'p-desktop': ['20px', { lineHeight: 'auto', fontWeight:'700', fontFamily:'dmsans' }],
        
      },

      gridTemplateColumns: {
        'grid-mobil': 'repeat(4, 1fr)',
        'grid-tablet':'repeat (8, 1fr)',
        'grid-desktop': 'repeat(12, 1fr)',

      },

   margin:{
    'margin-mobil': '20px',
    'margin-tablet': '40px',
    'margin-desktop': '60px',
},

gap:{
    'gap-mobil': '20px',
    'gap-tablet': '30px',
    'gap-desktop': '40px',
},
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}