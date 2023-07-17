import colors from './Colors'

// import { getFont } from "../config/Function";
const themes = {
  shadowMenu: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  shadowBasic: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.6,
    shadowColor: colors.colorRgba23524025005,
    elevation: 1,
  },
  shadowGray: {
    shadowColor: colors.black0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  hitSlop: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  shadowOffset: {
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowColor: '#000000',
    elevation: 4,
  },
  lightSlink: {
    colors: {
      primary: colors.primaryColor,
      background: colors.white,
      surface: colors.white,
      accent: colors.red,
      error: colors.red,
      text: colors.black0,
      onBackground: colors.black1,
      onSurface: colors.black1,
      disabled: colors.grey,
      placeholder: colors.grey,
      backdrop: colors.backdrop,
      notification: colors.red,
    },
    // fonts: {
    //   regular: {
    //     fontFamily: fonts.RobotoRegular,
    //     fontWeight: "normal"
    //   },
    //   medium: {
    //     fontFamily: fonts.RobotoMedium,
    //     fontWeight: "normal"
    //   },
    //   light: {
    //     fontFamily: fonts.RobotoLightItalic,
    //     fontWeight: "normal"
    //   },
    //   thin: {
    //     fontFamily: fonts.Roboto,
    //     fontWeight: "normal"
    //   }
    // },
    fontSize: {
      bodyXXl: 22,
      bodyXl: 20,
      bodyL: 18,
      bodyM: 16,
      bodyS: 14,
      bodyXs: 12,
      bodyXXs: 10,
    },
  },
  darkSLink: {
    colors: {
      primary: 'rgb(255, 180, 171)',
      background: 'rgb(25, 28, 29)',
      surface: 'rgb(25, 28, 29)',

      accent: 'rgb(255, 180, 171)',
      error: 'rgb(255, 180, 171)',
      text: 'rgb(255, 255, 255)',
      onBackground: 'rgb(25, 28, 29)',
      onSurface: 'rgb(25, 28, 29)',

      disabled: 'rgb(160, 140, 137)',
      placeholder: 'rgb(160, 140, 137)',
      backdrop: 'rgba(41, 50, 52, 0.4)',
      notification: 'rgb(32, 26, 25)',
    },
  },
}

export default themes
