import { definePreset } from '@unocss/core'
import presetMp from 'unocss-preset-mp'
import { entriesToCss } from '@unocss/core'
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
    900: '#fff',
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
    900: '#000',
    DEFAULT: '#000'
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

  zimablue: {
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

  tendershoots: {
    100: '#fbffe5',
    200: '#f4fec3',
    300: '#e4f689',
    400: '#cdee2b',
    500: '#b2d600',
    600: '#99b800',
    700: '#7f9900',
    800: '#667a00',
    900: '#4c5c00',
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

  get qdPurple() {
    return this.purple
  },

  get purplegray() {
    return this.gray
  },

  get qdPurplegray() {
    return this.purplegray
  },

  // qiandao merchant blue
  qdmBlue: {
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

  // qihuo orange
  qhOrange: {
    100: '#ffeadb',
    200: '#ffd7ba',
    300: '#ffbf8f',
    400: '#ffa35c',
    500: '#ff812c',
    DEFAULT: '#ff812c',
    600: '#db6b1f',
    700: '#b85512',
    800: '#99440b',
    900: '#753104'
  },

  // mihua purple
  mhPurple: {
    100: '#E0DEFF',
    200: '#CFCCFF',
    300: '#BFBAFF',
    400: '#AEA8FF',
    500: '#9D96FF',
    DEFAULT: '#9D96FF',
    600: '#6F68DC',
    700: '#4A42BA',
    800: '#2C2497',
    900: '#150E75'
  },

  // mihua green
  mhGreen: {
    100: '#E9FCD0',
    200: '#DAFAB1',
    300: '#C9F590',
    400: '#BCF274',
    500: '#AEF056',
    DEFAULT: '#AEF056',
    600: '#91D13D',
    700: '#74B027',
    800: '#5B9114',
    900: '#437008',
  },

  success: 'var(--du-c-success)',
  warning: 'var(--du-c-warning)',
  error: 'var(--du-c-error)',
  'business-info': 'var(--du-c-business-info)',
  'text-primary': 'var(--du-c-text-primary)',
  'text-2': 'var(--du-c-text-2)',
  'text-3': 'var(--du-c-text-3)',
  'text-disable': 'var(--du-c-text-disable)',
  'text-error': 'var(--du-c-text-error)',
  'text-warning': 'var(--du-c-text-warning)',
  primary: 'var(--du-c-primary)',
  secondary: 'var(--du-c-2)',
  third: 'var(--du-c-3)',
  'border-primary': 'var(--du-c-b-primary)',
  'border-2': 'var(--du-c-b-2)',
  'border-3': 'var(--du-c-b-3)',
  'bg-primary': 'var(--du-c-bg-primary)',
  'bg-2': 'var(--du-c-bg-2)',
  'bg-3': 'var(--du-c-bg-3)',
  'bg-4': 'var(--du-c-bg-4)',
  'bg-warning': 'var(--du-c-bg-warning)',
  'bg-error': 'var(--du-c-bg-error)',
  'mask-primary': 'var(--du-c-mask-primary)',
  'mask-2': 'var(--du-c-mask-2)',
  'mask-3': 'var(--du-c-mask-3)',
  'mask-active': 'var(--du-c-mask-active)',
  'mask-hover': 'var(--du-c-mask-hover)',
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

const colorsForVar = [
  'white',
  'neutral',
  'purplegray',
  'grape',
  'blue',
  'zimablue',
  'turquoise',
  'yellow',
  'orange',
  'red',
  'pink',
  'tendershoots',
  'purple',
]

function genCssVars(theme: Theme) {
  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return colorsForVar.flatMap(item => {
    if (Array.isArray(item)) {
      return levels.map(level => {
        return `--du-c-${item[1]}: ${((theme as any).colors?.[item[0]] )[level]};`
      })
    } else {
      return levels.map(level => {
        return `--du-c-${item}: ${((theme as any).colors?.[item] )[level]};`
      })
    }
  }).join('\n')
}

function getBuiltInTheme(theme: Theme) {
  const builtInTheme = [
    [
      'qd',
      {
        '--du-c-primary': ((theme as any).colors?.qdPurple)[500],
        '--du-c-2': ((theme as any).colors?.qdPurple)[900],
        '--du-c-3': ((theme as any).colors?.orange)[500],
      },
    ],
    [
      'qd-gray',
      {
        '--du-c-primary': ((theme as any).colors?.qdPurple)[500],
        '--du-c-2': ((theme as any).colors?.qdPurple)[900],
        '--du-c-3': ((theme as any).colors?.orange)[500],
      }
    ],
    [
      'pay',
      {
        '--du-c-primary': '#f96464',
        '--du-c-2': '#379e45',
        '--du-c-3': '#d94a4e',
        '--du-c-bg-primary': '#ffebe9',
        '--du-c-bg-secondary': '#e2f7e3',
      },
    ],
    [
      'dark',
      {
        '--du-c-text-primary': '#fff',
        '--du-c-text-2': 'rgba(255,255,255,0.88)',
        '--du-c-text-3': 'rgba(255,255,255,0.64)',
        '--du-c-text-disable': 'rgba(255,255,255,0.4)',
      },
    ],
    [
      'qh',
      {
        '--du-c-primary': '#ff812c',
        '--du-c-2': '#ff3355',
        '--du-c-text-warning': '#f56300',
        '--du-c-text-error': '#db1f0c',
      },
    ],
    [
      'vip',
      {
        '--du-c-primary': '#800c00',
        '--du-c-2': '#f6dec8',
        '--du-c-text-primary': '#800c00',
        '--du-c-text-2': 'rgba(128,12,0,0.64)',
        '--du-c-text-3': '#f1ba88',
        '--du-c-bg-2': '#dfc579',
      },
    ],
    [
      'mihua-dark',
      {
        '--du-c-primary': '#aef056',
        '--du-c-2': '#9d96ff',
        '--du-c-text-primary': ((theme as any).colors?.white)[800],
        '--du-c-text-2': ((theme as any).colors?.white)[700],
        '--du-c-text-3': ((theme as any).colors?.white)[600],
        '--du-c-text-disable': ((theme as any).colors?.white)[400],
        '--du-c-bg-primary': ((theme as any).colors?.white)[900],
        '--du-c-bg-2': ((theme as any).colors?.white)[500],
        '--du-c-bg-3': ((theme as any).colors?.white)[300],
      },
    ],
    [
      'mihua',
      {
        '--du-c-primary': '#aef056',
        '--du-c-2': '#9d96ff',
        '--du-c-bg-primary': '#e0deff',
        '--du-c-bg-2': '#f7f7f9',
        '--du-c-bg-3': '#fff',
        '--du-c-bg-4': 'rgba(16,16,16,0.4)',
      },
    ],
  ]
  return builtInTheme as [string, Record<string, string>][]
}

type PresetEchoOptions = {
  theme?: Record<string, Record<string, string | number>>
}

export const presetEcho = definePreset((options: PresetEchoOptions = {}) => {
  const mp = presetMp()
  const themeSet = new Set(['qd', 'pay', 'dark', 'qh', 'vip', 'mihua-dark', 'mihua'])
  Object.keys(options.theme ?? {}).forEach(key => {
    themeSet.add(key)
  })
  const themeNames = [...themeSet.values()]
  const themeRegex = new RegExp(`^g-theme-(${themeNames.join('|')})$`)

  return {
    ...mp,
    name: 'unocss-preset-echo',
    rules: [
      ...(mp.rules ?? []),
      ['font-num', { 'font-family': 'Roboto' }],
      ['shadow-primary', { 'box-shadow': '0 1px 20rpx 0 rgba(0, 0, 0, 0.08)' }],
      ['shadow-2', { 'box-shadow': '0 1px 20rpx 0 rgba(0, 0, 0, 0.06)' }],
      [
        themeRegex,
        ([, brand], { theme }) => {
          const builtInTheme = getBuiltInTheme(theme)
          if (!builtInTheme) {
            return
          }
          const brandTheme = builtInTheme.find((item) => item[0] === brand)
          const extraBrandTheme = (options.theme ?? {})[brand]
          if (!brandTheme && !extraBrandTheme) {
            return
          }
          const mergedTheme: Record<string, string | number> = {}
          if (brandTheme) {
            Object.assign(mergedTheme, brandTheme?.[1] || {})
          }
          if (extraBrandTheme) {
            Object.assign(mergedTheme, extraBrandTheme || {})
          }
          const css = entriesToCss(Object.entries(mergedTheme))
          return `.g-theme-${brand} {${css}}`
        },
        {
          autocomplete: `g-theme-(${themeNames.join('|')})`,
        },
      ],
    ],
    theme: {
      ...mp.theme,
      colors,
    },
    preflights: [
      ...(mp.preflights ?? []),
      {
        getCSS: ({ theme }) => `
          :root, page {
            ${genCssVars(theme)}
            --du-c-primary: ${((theme as any).colors?.purple)[500]};
            --du-c-2: ${((theme as any).colors?.purple)[900]};
            --du-c-warning: ${((theme as any).colors?.orange)[500]};
            --du-c-error: ${((theme as any).colors?.red)[500]};
            --du-c-success: ${((theme as any).colors?.green)[600]};
            --du-c-business-info: ${((theme as any).colors?.blue)[600]};
            --du-c-text-primary: ${((theme as any).colors?.neutral)[900]};
            --du-c-text-2: ${((theme as any).colors?.neutral)[700]};
            --du-c-text-3: ${((theme as any).colors?.neutral)[600]};
            --du-c-text-disable: ${((theme as any).colors?.neutral)[400]};
            --du-c-b-primary: rgba(0,0,0,0.3);
            --du-c-b-2: rgba(0,0,0,0.1);
            --du-c-b-3: rgba(0,0,0,0.05);
            --du-c-bg-primary: ${((theme as any).colors?.purple)[100]};
            --du-c-bg-2: ${((theme as any).colors?.gray)[100]};
            --du-c-bg-3: ${((theme as any).colors?.white)[900]};
            --du-c-bg-4: ${((theme as any).colors?.gray)[200]};
            --du-c-bg-warning: ${((theme as any).colors?.yellow)[100]};
            --du-c-bg-error: ${((theme as any).colors?.red)[100]};
            --du-c-mask-primary: ${((theme as any).colors?.neutral)[800]};
            --du-c-mask-2: ${((theme as any).colors?.neutral)[700]};
            --du-c-mask-3: ${((theme as any).colors?.neutral)[500]};
            --du-c-mask-active: ${((theme as any).colors?.neutral)[200]};
            --du-c-mask-hover: ${((theme as any).colors?.neutral)[100]};
          }
        `,
      },
    ],
    shortcuts: [
      {
        'text-h1': 'text-24 fw-500 lh-30',
        'text-h2': 'text-20 fw-500 lh-26',
        'text-h3': 'text-18 fw-500 lh-25',
        'text-h4': 'text-16 fw-500 lh-24',
        'text-h5': 'text-14 fw-500 lh-22',
        'text-h6': 'text-12 fw-500 lh-18',
        'text-h7': 'text-11 fw-500 lh-13',
        'text-h8': 'text-10 fw-500 lh-11',

        'text-b1': 'text-24 fw-400 lh-30',
        'text-b2': 'text-20 fw-400 lh-26',
        'text-b3': 'text-18 fw-400 lh-25',
        'text-b4': 'text-16 fw-400 lh-24',
        'text-b5': 'text-14 fw-400 lh-22',
        'text-b6': 'text-12 fw-400 lh-18',
        'text-b7': 'text-11 fw-400 lh-13',
        'text-b8': 'text-10 fw-400 lh-11',

        'text-n1': 'text-24 font-num fw-500 lh-30',
        'text-n2': 'text-20 font-num fw-500 lh-26',
        'text-n3': 'text-18 font-num fw-500 lh-25',
        'text-n4': 'text-16 font-num fw-500 lh-24',
        'text-n5': 'text-14 font-num fw-500 lh-22',
        'text-n6': 'text-12 font-num fw-500 lh-18',
        'text-n7': 'text-11 font-num fw-500 lh-13',
        'text-n8': 'text-10 font-num fw-500 lh-11',
      },
    ],
  }
})

export default presetEcho
