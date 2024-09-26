import { definePreset, palette } from '@primevue/themes'

import Lara from '@primevue/themes/lara'

const primaryColor = palette('#479fec')
const successColor = palette('#93c01b')
const warnColor = palette('#ffc439')
const orangeColor = palette('#eb8e14')

export default definePreset(Lara, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '4px',
      lg: '8px',
      xl: '12px',
    },
  },
  semantic: {
    primary: {
      50: primaryColor['50'],
      100: primaryColor['100'],
      200: primaryColor['200'],
      300: primaryColor['300'],
      400: primaryColor['400'],
      500: primaryColor['500'],
      600: primaryColor['600'],
      700: primaryColor['700'],
      800: primaryColor['800'],
      900: primaryColor['900'],
      950: primaryColor['950'],
    },
    formField: {
      paddingY: '0.45rem',
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          primary: {
            background: primaryColor['500'],
            hoverBackground: primaryColor['600'],
            activeBackground: primaryColor['700'],
            borderColor: primaryColor['500'],
            hoverBorderColor: primaryColor['600'],
            activeBorderColor: primaryColor['700'],
            color: '#ffffff',
            hoverColor: '#ffffff',
            activeColor: '#ffffff',
            focusRing: {
              color: 'transparent',
              shadow: `0 0 0 0.2rem ${primaryColor[200]}`,
            },
          },
          success: {
            background: successColor['500'],
            hoverBackground: successColor['400'],
            activeBackground: successColor['600'],
            borderColor: successColor['500'],
            hoverBorderColor: successColor['400'],
            activeBorderColor: successColor['600'],
            color: '#ffffff',
            hoverColor: '#ffffff',
            activeColor: '#ffffff',
            focusRing: {
              color: 'transparent',
              shadow: `0 0 0 0.2rem ${successColor[200]}`,
            },
          },
          warn: {
            background: warnColor['500'],
            hoverBackground: warnColor['600'],
            activeBackground: warnColor['700'],
            borderColor: warnColor['500'],
            hoverBorderColor: warnColor['600'],
            activeBorderColor: warnColor['700'],
            color: '#000000',
            hoverColor: '#000000',
            activeColor: '#000000',
            focusRing: {
              color: 'transparent',
              shadow: `0 0 0 0.2rem ${warnColor[200]}`,
            },
          },
          help: {
            background: orangeColor['500'],
            hoverBackground: orangeColor['600'],
            activeBackground: orangeColor['700'],
            borderColor: orangeColor['500'],
            hoverBorderColor: orangeColor['600'],
            activeBorderColor: orangeColor['700'],
            color: '#ffffff',
            hoverColor: '#ffffff',
            activeColor: '#ffffff',
            focusRing: {
              color: 'transparent',
              shadow: `0 0 0 0.2rem ${orangeColor[200]}`,
            },
          },
        },
      },
    },
    menubar: {
      colorScheme: {
        light: {
          background: 'transparent',
        },
      },
    },
    drawer: {
      colorScheme: {
        light: {
          background: '#2e3234',
          borderColor: '#2e3234',
          color: '#ffffff',
        },
      },
    },
  },
})
