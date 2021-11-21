/**
 * Color helpers
 */


/**
 * @desc convert hex color to rgb color
 * @param {string} hex
 * @returns {string} rgb string (i.e. '255, 0, 0')
 */
export function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : ''
}

/**
 * @desc convert hex color to hsl color
 * @param {string} hex
 * @returns {string} hsl string (i.e. '0, 100%, 50%')
 */
export function hexToHsl(hex: string, variant?: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  let r = parseInt(result![1], 16)
  let g = parseInt(result![2], 16)
  let b = parseInt(result![3], 16)

  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max == min) {
    h = s = 0; // achromatic
  }
  else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  h = Math.round(h*360)
  s = Math.round(s*100)
  l = Math.round(l*100)


  // manage lightness variant
  switch (variant) {
    case 'lighter':
      l = l == 0 ? 20 : l 
      l += Math.round(l * 60/100)
      break;
    case 'light':
      l = l == 0 ? 20 : l 
      l += Math.round(l * 25/100)
      break;
    case 'dark':
      l -= Math.round(l * 25/100)
      break;
    case 'darker':
      l -= Math.round(l * 60/100)
      break;
  
    case null:
      break;
  }

  return `hsl(${h}, ${s}%, ${l}%)`
}

/**
 * @desc convert hsl color to hex color
 * @param {string} hsl
 * @returns {string} hex string (i.e. '#FF0000')
 */
export function hslToHex(hsl: string): string {
  const result = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hsl)

  const h = parseInt(result![1])
  const s = parseInt(result![2])
  let l = parseInt(result![3])


  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}