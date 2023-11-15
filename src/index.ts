import { definePreset } from '@unocss/core'
import presetMp from 'unocss-preset-mp'
import type { Theme } from './types'

const colors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',

  white: {
    100: 'rgba(255,255,255,0.04)',
    200: 'rgba(255,255,255,0.08)',
    300: 'rgba(255,255,255,0.12)',
    400: 'rgba(255,255,255,0.16)',
    500: 'rgba(255,255,255,0.24)',
    600: 'rgba(255,255,255,0.40)',
    700: 'rgba(255,255,255,0.64)',
    800: 'rgba(255,255,255,0.88)',
    900: 'rgb(255,255,255)',
    DEFAULT: '#fff'
  },

  neutral: {
    100: 'rgba(0,0,0,0.04)',
    200: 'rgba(0,0,0,0.08)',
    300: 'rgba(0,0,0,0.12)',
    400: 'rgba(0,0,0,0.16)',
    500: 'rgba(0,0,0,0.24)',
    600: 'rgba(0,0,0,0.40)',
    700: 'rgba(0,0,0,0.64)',
    800: 'rgba(0,0,0,0.88)',
    900: 'rgb(0,0,0)',
    DEFAULT: 'rbg(0,0,0)'
  },

  gray: {
    100: '#f7f7f9',
    200: '#eedf2',
    300: '#e1e1e5',
    400: '#d4d0da',
    500: '#bab5c4',
    600: '#918b9f',
    700: '#625e76',
    800: '#383950',
    900: '#2b263b',
  },

  get purpleGray() {
    return this.gray
  },

  grape: {
    100: '#f1e6ff',
    200: '#ebd4ff',
    300: '#d6b3ff',
    400: '#b688ff',
    500: '#ad69f7',
    600: '#8a4fd1',
    700: '#6838ab',
    800: '#4a2585',
    900: '#32195e',
  },

  blue: {
    100: '#e4ebf9',
    200: '#cce0ff',
    300: '#a6caff',
    400: '#8fb7ff',
    500: '#6c9aff',
    600: '#5077d9',
    700: '#3957b3',
    800: '#263c8c',
    900: '#1b2866',
  },

  zimaBlue: {
    100: '#dff7f7',
    200: '#cbf7f7',
    300: '#9df2f4',
    400: '#62deef',
    500: '#28bee0',
    600: '#009bbf',
    700: '#087599',
    800: '#005273',
    900: '#00344d',
  },

  turquoise: {
    100: '#e2f7f3',
    200: '#cdf9eb',
    300: '#9dedd9',
    400: '#77e5d2',
    500: '#36ccb6',
    600: '#17ad9b',
    700: '#14877e',
    800: '#076059',
    900: '#053b3a',
  },

  green: {
    100: '#e2f7e3',
    200: '#c9f2ca',
    300: '#9de09d',
    400: '#7ad37f',
    500: '#52ba5c',
    600: '#379e45',
    700: '#247842',
    800: '#145221',
    900: '#0f3d19',
  },

  yellow: {
    100: '#fffde6',
    200: '#fff9ca',
    300: '#ffe885',
    400: '#fad728',
    500: '#edbf00',
    600: '#c79800',
    700: '#a17600',
    800: '#7a5600',
    900: '#543800',
  },

  orange: {
    100: '#fff0e6',
    200: '#ffdfca',
    300: '#ffc299',
    400: '#ffa15a',
    500: '#fc7e22',
    600: '#d65d11',
    700: '#b04105',
    800: '#8a2c00',
    900: '#631c00',
  },

  red: {
    100: '#ffebe9',
    200: '#ffd1cf',
    300: '#ffabab',
    400: '#ff8380',
    500: '#f96464',
    600: '#d94a4e',
    700: '#b3343c',
    800: '#8c222c',
    900: '#661722',
  },

  pink: {
    100: '#f7dfec',
    200: '#ffcfe5',
    300: '#ffaed5',
    400: '#f980ba',
    500: '#ed64a5',
    600: '#c74a88',
    700: '#a1336e',
    800: '#7a2154',
    900: '#54163b',  
  },

  tenderShoots: {
    100: '#f7dfec',
    200: '#ffcfe5',
    300: '#ffaed5',
    400: '#f980ba',
    500: '#ed64a5',
    600: '#c74a88',
    700: '#a1336e',
    800: '#7a2154',
    900: '#54163b',
  },

  purple: {
    100: '#f2f0ff',
    200: '#d9d2ff',
    300: '#c7b8ff',
    400: '#958dff',
    500: '#7c66ff',
    600: '#5c4cd9',
    700: '#4036b3',
    800: '#28238c',
    900: '#1a1866',
    DEFAULT: '#7c66ff',
  },

  // qiandao merchant blue
  qdm: {
    100: '#e6f4ff',
    200: '#bae0ff',
    300: '#91caff',
    400: '#69b1ff',
    500: '#4096ff',
    600: '#1677ff',
    700: '#0958d9',
    800: '#003eb3',
    900: '#1b2866',
    DEFAULT: '#1677ff'
  },

  get qd() {
    return this.purple
  }
} satisfies Theme['colors']

// assign default color, and color shortcuts
Object.values(colors as Required<Theme>['colors']).forEach((color) => {
  if (typeof color !== 'string' && color !== undefined) {
    color.DEFAULT = color.DEFAULT || color[400] as string
    Object.keys(color).forEach((key) => {
      const short = +key / 100
      if (short === Math.round(short))
        color[short] = color[key]
    })
  }
})

export const presetEcho = definePreset(() => {
  const mp = presetMp()
  return {
    ...mp,
    theme: {
      ...mp.theme,
      colors
    }
  }
})

export default presetEcho
