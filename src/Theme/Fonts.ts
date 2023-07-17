import { extendTheme } from 'native-base'
import { Colors } from '@/Theme'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'light',
}

export const FontSizes = {
  size_10: '2xs',
  size_12: 'xs',
  size_14: 'sm',
  size_16: 'md',
  size_18: 'lg',
  size_20: 'xl',
  size_24: '2xl',
  size_30: '3xl',
  size_36: '4xl',
  size_48: '5xl',
  size_60: '6xl',
  size_72: '7xl',
  size_96: '8xl',
  size_128: '9xl',
}

export const themeCustom = extendTheme({
  config,
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
  fontSizes: FontSizes,
  colors: Colors,
})

export const FontWeights = {
  value_100: 'hairline',
  value_200: 'thin',
  value_300: 'light',
  value_400: 'normal',
  value_500: 'medium',
  value_600: 'semibold',
  value_700: 'bold',
  value_800: 'extrabold',
  value_900: 'black',
  value_950: 'extrablack',
}

export const LineHeights = {
  value_18: 18,
  value_24: 24,
  value_28: 28,
  value_32: 32,
}
