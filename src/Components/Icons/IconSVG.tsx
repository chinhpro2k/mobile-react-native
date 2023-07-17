/* eslint-disable react/require-default-props */
import React from 'react'
import Svg, {
  Path,
  Mask,
  G,
  ClipPath,
  Defs,
  Circle,
  Rect,
  Ellipse,
  LinearGradient,
  Stop,
  RadialGradient,
} from 'react-native-svg'
import R from '@/Assets/R'
import { WIDTH, HEIGHT } from '@/Config'

type Props = {
  iconName: any
  color?: string
  width?: number
  height?: number
}

const IconSVG: React.FC<Props> = (props: Props) => {
  const { iconName, color, width, height } = props
  switch (iconName) {
    case 'ic_correct_answer':
      return (
        <Svg
          width={width || WIDTH(20)}
          height={height || WIDTH(20)}
          viewBox="0 0 20 20"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.58 8.004l-3.807 5a.833.833 0 01-.658.33H9.11a.835.835 0 01-.655-.32l-2.027-2.59a.833.833 0 111.312-1.026L9.1 11.136l3.154-4.14a.834.834 0 011.325 1.008zM10 1.667a8.333 8.333 0 100 16.666 8.333 8.333 0 000-16.666z"
            fill={color || R.colors.green600}
          />
          <Mask id="prefix__a" x={1} y={1} width={18} height={18}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.58 8.004l-3.807 5a.833.833 0 01-.658.33H9.11a.835.835 0 01-.655-.32l-2.027-2.59a.833.833 0 111.312-1.026L9.1 11.136l3.154-4.14a.834.834 0 011.325 1.008zM10 1.667a8.333 8.333 0 100 16.666 8.333 8.333 0 000-16.666z"
              fill={R.colors.white}
            />
          </Mask>
          <G mask="url(#prefix__a)">
            <Path fill={color || R.colors.green600} />
          </G>
        </Svg>
      )
    case 'ic_incorrect_answer':
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 21 21"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.707 11.293a.999.999 0 11-1.414 1.414L10 11.414l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414L8.586 10 7.293 8.707a.999.999 0 111.414-1.414L10 8.586l1.293-1.293a.999.999 0 111.414 1.414L11.414 10l1.293 1.293zM10 0C4.486 0 0 4.486 0 10s4.486 10 10 10 10-4.486 10-10S15.514 0 10 0z"
            fill={color || R.colors.red600}
          />
        </Svg>
      )
    case 'filter':
      return (
        <Svg width={16} height={16}>
          <Path
            fill="#fff"
            d="M14.111 3H8.555v1.111h5.556a.556.556 0 0 0 0-1.11ZM1.889 4.111h1.19a2.22 2.22 0 0 0 2.143 1.667 2.224 2.224 0 0 0 2.222-2.222 2.224 2.224 0 0 0-2.222-2.223A2.22 2.22 0 0 0 3.08 3h-1.19a.556.556 0 0 0 0 1.111ZM14.111 7.445H13v1.11h1.111a.556.556 0 0 0 0-1.11ZM1.889 8.556h5.634a2.22 2.22 0 0 0 2.144 1.666A2.224 2.224 0 0 0 11.889 8a2.224 2.224 0 0 0-2.222-2.222 2.22 2.22 0 0 0-2.144 1.667H1.89a.556.556 0 0 0 0 1.11ZM14.111 11.89H8.555V13h5.556a.556.556 0 0 0 0-1.11ZM5.222 10.222A2.22 2.22 0 0 0 3.08 11.89h-1.19a.556.556 0 0 0 0 1.111h1.19a2.22 2.22 0 0 0 2.143 1.667 2.224 2.224 0 0 0 2.222-2.222 2.224 2.224 0 0 0-2.222-2.223Z"
          />
        </Svg>
      )
    case 'Thông báo':
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 820 947"
        >
          <Path
            fill={color || R.colors.green600}
            d="M187.2 43.6c-14 4.1-23.3 9.8-28.2 17.2-2.9 4.4-4.5 10.5-7 26.2-2.2 13.6-7.7 25.1-16.8 35.2-2 2.3-9.8 9.3-17.2 15.7-66.8 57.3-96.2 106.8-105.7 177.6-2.3 17.8-2.3 60.7.1 83 5.5 51.7 15.3 101.6 37.5 191 6 24.2 11.5 47.4 12.2 51.5.8 4.1 1.4 14.2 1.3 22.5 0 25.5-3.9 38-22.4 72.5-18.3 34.1-21.5 44.9-20.7 69.5.6 16.5 3.2 29.3 8.7 43.2 5.8 14.5 16.4 26.7 32.4 37.5C120.8 926 237.2 936 361 911.9c123.7-24.2 247.2-82.5 337-159.3 58.7-50.2 97.1-102.3 108.6-147.3 2.3-9 2.8-12.9 2.8-23.3 0-11-.4-13.5-2.8-21-10.6-31.8-28.2-54-53.3-67.2-4.9-2.6-17.4-8-27.9-12.1-30.6-12-41.1-18.2-55.5-32.6-14.2-14.3-19.5-23.3-39.5-66.1-26.7-57.4-58.2-118.2-78.4-151.5-52.6-86.9-103.9-130.6-173.5-147.9-23.8-5.9-46.8-8.5-81.5-9.2-44.2-.8-49.2-2.5-74.3-24.3-11-9.6-19.7-11.2-35.5-6.5zM668 550.5c34.2 4.6 60.4 16 69.1 30.1 4.5 7.3.2 20.6-13 40.3-41.3 61.4-126.6 128.3-216.9 170.1-73.3 33.9-145.8 53.1-227.2 60.1-17.8 1.6-65.9 1.5-83.5 0-47.6-4.3-88.5-14.8-98.4-25.5-7.6-8.1-.7-31.4 16.2-54.8 48.4-67.3 157.2-133.8 296.5-181.2 68-23.1 128.4-36.1 190.7-41 11.3-.9 55.5.4 66.5 1.9z"
          />
          <Path
            fill={color || R.colors.green600}
            d="M410.5 631.9c-72.8 26.1-128.3 52.5-178.7 84.8-24.1 15.4-55.2 38.6-54.5 40.7.6 1.9 9.9 8.5 17.7 12.5 9.7 5 22.6 9.6 33.7 11.8 11 2.2 46.5 2.5 58.8.4 54-8.9 105.2-39.4 131.1-78.2 17.4-26 22.2-49.6 15.3-75.2-.6-2.5-1.5-3.7-2.7-3.7-.9.1-10.2 3.2-20.7 6.9z"
          />
        </Svg>
      )
    case 'Chủ đầu tư':
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 200 200"
        >
          <Path
            fill={color || R.colors.green600}
            d="M68.8 8.9c-14.3 5.6-23.3 16.8-25.3 31.6-.4 2.8-1.3 6.4-2.1 8.2-1.1 2.4-1.3 4.8-.7 9.5.7 5.6 1.1 6.4 4.3 8.6 2.2 1.4 4.3 4.2 5.7 7.2 4.7 10.7 13.8 21.6 21.5 25.6 4.7 2.5 13.2 2.3 18.4-.3 6.2-3.3 14.7-13.2 19.4-22.5 3.2-6.4 4.9-8.7 7.3-9.8 3-1.4 3.3-1.9 4.1-8.9.7-6.1.6-7.9-.7-10.5-.9-1.7-1.9-5.4-2.2-8.3-1.3-10.1-8.5-21.1-17.5-26.8-9-5.6-23-7.2-32.2-3.6zM36 115.5c-8 2.8-15.5 5.6-16.7 6.3-6.3 3.5-14.8 19-15.9 29-.7 6.4 2.6 12.8 8.1 15.9 6 3.4 26.8 9.9 39.6 12.5 14.5 2.9 44.5 3.1 57.3.5 4.3-.9 8-1.8 8.2-2 .2-.2-.6-2.8-1.7-5.8-6.6-17.3-2.7-36.8 10.1-49.7 2.8-2.9 5-5.2 4.8-5.2-.2 0-4.7-1.6-10-3.5l-9.6-3.4-9.3 14.4c-5 8-9.6 14.5-10 14.5-.5 0-.9-3.3-.9-7.4 0-4-.3-9.4-.6-12l-.7-4.6H72.3l-.9 12.7-.9 12.7-9.4-14.7c-5.1-8.1-9.6-14.9-10-15-.3-.2-7.1 1.9-15.1 4.8z"
          />
          <Path
            fill={color || R.colors.green600}
            d="M150.2 117.1c-10.9 2.1-21.9 11.1-27.1 21.9-2.3 4.8-2.6 6.8-2.6 16 0 9.6.2 11 2.9 16.3 3.9 7.6 11.1 14.8 18.3 18.4 5.2 2.5 6.8 2.8 16.3 2.8 9.3 0 11.2-.3 16.2-2.7 33-15.5 28.7-63-6.7-72.2-6.4-1.7-10.6-1.8-17.3-.5zm11.6 7.2c.2 1.8 1.3 3.2 3 4.1 4 2.1 6.4 5.1 6 7.8-.4 3.1-4.7 3.6-7.3.8-4-4.4-11.9-1.6-13.1 4.7-.9 4.4 3.8 9.3 8.9 9.3 4.1 0 9.3 3.3 12.5 8 2 2.9 2.3 4.4 2 8.8-.5 6.2-2.9 9.8-8.1 12.7-2.5 1.3-3.7 2.7-3.7 4.1 0 5.3-6 5.8-7.5.6-.5-1.7-1.6-3.4-2.5-3.7-.9-.3-2.9-1.8-4.4-3.4-5.3-5.5 0-9.9 6.1-5.1 1.4 1.1 3.7 2 5 2 3.6 0 7.3-4.2 7.3-8.3 0-4.5-3.2-7.3-9.3-8.2-9.7-1.3-16.1-10.6-13.6-19.7 1.1-4.4 6.8-10.8 9.5-10.8.8 0 1.4-.7 1.4-1.6 0-3.3 2.1-5.5 4.8-5.2 2.1.2 2.8.9 3 3.1z"
          />
        </Svg>
      )
    case 'Gói thầu':
      return (
        <Svg
          // xmlns="http://www.w3.org/2000/svg"
          // xmlSpace="preserve"
          width={width ?? WIDTH(20)}
          height={width ?? WIDTH(20)}
          viewBox="0 0 31.32 31.32"
        >
          <Path
            fill={color || R.colors.green600}
            d="m19.442 30.975 5.187-5.477h-5.187z"
          />
          <Path
            fill={color || R.colors.green600}
            d="M25.257 3.139h-1.783v1.497c0 1.378-1.121 2.5-2.5 2.5s-2.5-1.122-2.5-2.5V3.139h-.312v1.497c0 1.378-1.121 2.5-2.5 2.5s-2.5-1.122-2.5-2.5V3.139h-.313v1.497c0 1.378-1.121 2.5-2.5 2.5s-2.5-1.122-2.5-2.5V3.139H6.044V31.32h12.029v-7.19h7.203l-.019-20.991zm-4.283 17.559H10.349v-2h10.625v2zm0-4.292H10.349v-2h10.625v2zm0-4.228H10.349v-2h10.625v2z"
          />
          <Path
            fill={color || R.colors.green600}
            d="M10.349 6.136a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 1 0-3 0v3.136a1.5 1.5 0 0 0 1.5 1.5zM15.662 6.136a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 1 0-3 0v3.136a1.5 1.5 0 0 0 1.5 1.5zM20.974 6.136a1.5 1.5 0 0 0 1.5-1.5V1.5a1.5 1.5 0 1 0-3 0v3.136a1.5 1.5 0 0 0 1.5 1.5z"
          />
        </Svg>
      )
    case 'Cá nhân':
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 980 980"
        >
          <Path
            fill={color || R.colors.green600}
            d="M456 1.1C352.5 8.6 256.2 47.4 176 113.9c-15 12.3-50.1 47.5-62.2 62.1C25.7 282.8-13.2 416.3 4 552.5 15.9 645.9 54.1 732.6 116.4 807c9.8 11.7 37 39.3 49.6 50.4 132.8 116.6 315.8 153.1 482.5 96.2 89.5-30.5 170-87.9 228.1-162.7 54-69.5 88.5-152.1 99.3-238.4 17.8-141.2-24.7-279.7-118.5-386.5-11.2-12.8-38.6-39.8-50.9-50.1C730.2 51.7 640 13.3 540 2.5 522.6.6 473.6-.2 456 1.1zm72.8 190.8c43.6 9.3 80.8 34.8 104.8 71.6 25.4 39.2 32.8 89.1 19.9 134-8.8 30.4-26.1 57.3-51 79.2l-7 6.2 8.9 4c40.8 18.8 80.6 53.4 106.9 93.1 18.2 27.4 33.1 67 37.8 100.7 1.6 11.2-.4 17.9-7.4 25-11.1 11-25.7 10.7-36.4-.9-4.7-5.2-5.4-7-8.8-24.1-14.7-73.7-70-136.7-140.1-159.6-39.9-13-80.2-12.9-120.3.5-52.4 17.5-96.2 56.5-121.2 107.9-8.7 18-14.3 34.2-18 52.9-3.1 15.9-4.6 19.3-10.8 24.9-14.7 13.3-39.3 3.7-42.4-16.6-.7-4.5 2.2-23.4 5.7-36.7 11.4-43.5 31.9-79.8 63.6-112.4 21.3-21.9 46.6-40.4 71.4-52.1 6.9-3.3 12.6-6.3 12.6-6.6 0-.3-3.5-3.6-7.7-7.4-55.5-48.6-71.7-127.8-39.8-194 22.3-46.3 65.1-79.5 115.2-89.5 14.1-2.8 14.9-2.8 35.8-2.5 14.2.3 21.4.9 28.3 2.4z"
          />
          <Path
            fill={color || R.colors.green600}
            d="M474 232c-47.6 10.2-84.8 47.2-96.7 96-1.4 5.9-1.8 11.4-1.7 25 0 15.7.3 18.5 2.7 27.3 5.4 20.1 16 38 31.7 53.7 14.3 14.3 29.7 23.8 48.4 29.9 15.6 5.1 25 6.4 43.1 5.8 16.2-.5 22.9-1.7 36.7-6.6 37-12.9 67.7-45.8 77.5-82.9 3.4-13 4.3-34.7 1.9-47.4-4.8-25.2-16.8-47.9-35.7-66.8-17.5-17.6-40.6-30-63.9-34.4-11.4-2.2-33-2-44 .4z"
          />
        </Svg>
      )
    case 'Trống':
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 229 220"
        >
          <Path
            fill={color || R.colors.green600}
            d="M45.5 25.4C20.7 39.4.4 51.5.2 52.3c-.2.8 6.1 7.5 14.3 15.2 8 7.6 14.5 14.2 14.5 14.7s-5.7 7.6-12.7 15.9c-9.9 11.8-12.5 15.4-11.7 16.6.5.8 6.2 4.3 12.7 7.7l11.7 6.1v23.1c0 17.3.3 23.4 1.3 24.1 1.2 1 38.1 20 69.2 35.6l17.1 8.6 42.9-21.9 43-21.9.3-23.8.3-23.8 11.7-6.1c6.4-3.4 12.1-6.8 12.6-7.7.8-1.2-1.8-4.8-11.5-16.4-6.9-8.1-12.9-15.4-13.3-16.1-.5-.9 3.5-5.5 13.1-14.7 11.4-11 13.6-13.6 12.8-15-.6-.9-21.4-12.5-46.3-25.7-34.8-18.4-45.6-23.7-46.6-22.9-.8.6-4.9 7.9-9.2 16.1-4.4 8.2-8.2 14.9-8.6 14.7-.5-.1-6.3-7.8-13.1-17.1C98 8.3 92 .5 91.5.3c-.6-.2-21.3 11.1-46 25.1zm56-2.4c6.5 8.9 11.6 16.2 11.4 16.4-.2.2-18 9.2-39.4 19.9L34.4 78.8 21.5 66.7c-7.2-6.7-13-12.5-13-12.9 0-.7 79.1-46.4 80.7-46.7.3-.1 5.9 7.1 12.3 15.9zm91.9 16.2c14.8 7.9 26.9 14.7 26.9 15.3-.1.5-5.4 6-12 12.2l-11.9 11.2L160 59c-20-10.3-36.6-19.2-36.8-19.8-.1-.5 3.2-7.3 7.4-15.1l7.6-14.1 14.1 7.5c7.8 4.1 26.3 13.9 41.1 21.7zM155 62.9c20 10.5 36.6 19.3 36.7 19.8.3 1-73.3 39.6-75.6 39.7-1.7.1-76-38.5-76.1-39.4 0-.6 76.7-39 77.9-39 .3 0 17 8.5 37.1 18.9zm-81.9 44.2c21.1 11.1 38.5 20.3 38.7 20.4.1.1-3.6 6.7-8.2 14.6-5.1 8.7-9 14.3-9.8 14.1-2-.5-79.1-41.3-80.6-42.7-1.1-1 .7-3.6 9.3-13.8 5.8-7 10.9-12.7 11.4-12.7s18.1 9.1 39.2 20.1zm136.4-7.4c8.6 10.2 10.4 12.8 9.3 13.8-1.4 1.3-78.8 42.2-80.8 42.7-1.3.3-18.6-28.5-17.3-29 .4-.1 17.7-9.2 38.3-20.1 20.6-11 38-20 38.7-20 .7-.1 6 5.6 11.8 12.6z"
          />
        </Svg>
      )
    default:
      return (
        <Svg
          width={width ?? WIDTH(20)}
          height={height ?? WIDTH(20)}
          viewBox="0 0 80 80"
        >
          <Path
            fill={color ?? R.colors.blue200}
            d="M19.2 9c-6.8 4.2-7.2 6-7.2 30.3s.5 26.8 6.4 31c2.9 2 4.3 2.2 21.1 2.5 16.6.2 18.3.1 21.3-1.8 6.4-4 7.2-6.6 7.2-24.8V30h-7.1c-7.3 0-12.1-1.7-13.6-4.9-.4-.9-.9-5.2-1.2-9.6l-.6-8L34 7.2C24 7 22.1 7.2 19.2 9zm24.1 25.2c1 3-.6 3.8-7.8 3.8-7.4 0-9.2-.8-8.1-3.5.7-2 15.2-2.2 15.9-.3zm5.5 15.7c.8.5 1.2 1.7 1 2.7-.3 1.7-1.5 1.9-10.9 2.2-9.4.2-10.7.1-11.3-1.5-1.2-3.1 2.1-4.3 11.3-4.3 4.7 0 9.2.4 9.9.9z"
          />
          <Path
            fill={color ?? R.colors.blue200}
            d="M51 14.9c0 6.1.3 7.2 2.2 8.5 2.3 1.7 12.3 2.3 13.2.8C66.9 23.3 53.3 8 51.9 8c-.5 0-.9 3.1-.9 6.9z"
          />
        </Svg>
      )
  }
}

export default IconSVG
