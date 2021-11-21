/**
 * This mixin is used to generate the root css variable from config endpoint
 */

import { Vue } from 'vue-class-component'
import { hexToRgb, hexToHsl, hslToHex} from '@/presentation/helpers/color-converter'

const themeColorsDefault = {
  'primary': '#3899ec',
  'secondary': '#374351',
  'success': '#70b77e',
  'info': '#3799EC',
  'warning': '#FFDE29',
  'danger': '#d72638',
  'light': '#FFFFFF',
  'dark': '#000000',
}

// TODO: move colors, (api, config...)
const themeColors = {
  ...themeColorsDefault,
  'primary': '#23b5b5',
  'primary-light': '#DBEDFC',
  'secondary': '#F9BB2F',
  'third': '#374351',
  'background': '#f8fafc',
}
export default class ThemeRoot extends Vue {
  styleTag: HTMLElement | null = null
  templateConfig = ''

  created(): void {
    let cssRootVars = ''

    // create and append the style tag
    this.styleTag = document.createElement('style')
    this.styleTag.setAttribute('id', 'themecolor')
    document.head.appendChild(this.styleTag)

    cssRootVars += ':root {'

    // fill css vars
    const colors = themeColors

    // generate hex colors
    for (const [key, value] of Object.entries(colors)) {
      cssRootVars += `--bs-${key}: ${value};`
    }

    // generate rgb colors
    for (const [key, value] of Object.entries(colors)) {
      cssRootVars += `--bs-${key}-rgb: ${hexToRgb(value)};`
    }

    // generate colors shades
    for (const [key, value] of Object.entries(colors)) {
      // cssRootVars += `--bs-${key}-hsl: ${hexToHsl(value)};`
      cssRootVars += `--bs-${key}--lighter: ${hslToHex(hexToHsl(value, 'lighter'))};`
      cssRootVars += `--bs-${key}--light: ${hslToHex(hexToHsl(value, 'light'))};`
      cssRootVars += `--bs-${key}--dark: ${hslToHex(hexToHsl(value, 'dark'))};`
      cssRootVars += `--bs-${key}--darker: ${hslToHex(hexToHsl(value, 'darker'))};`
    }

    cssRootVars += '}'
    this.styleTag.innerText = cssRootVars
  }

  destroyed(): void {
    // remove tag when component destroyed
    this.styleTag?.remove()
  }
}