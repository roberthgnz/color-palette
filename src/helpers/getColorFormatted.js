// This function computes the new formatted color value and returns it
export const getColorFormatted = (colorType, color) => {
  let rgb;
  switch (colorType) {
    case "HEX#":
      return color;
    case "HEX":
      return color.slice(1);
    case "RGB":
    case "RGBA":
      rgb = color.slice(1).match(/../g);
      rgb = rgb.map((i) => parseInt(i, 16));
      return colorType === "RGB"
        ? `(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        : `(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1.0)`;
    case "HSL":
    case "HSLA":
      rgb = color.slice(1).match(/../g);
      rgb = rgb.map((i) => parseInt(i, 16) / 255);
      let r = rgb[0],
        g = rgb[1],
        b = rgb[2];
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        h = 0,
        s = 0,
        l = 0;
      const delta = cmax - cmin;

      if (delta === 0) {
        h = 0;
      } else if (cmax == r) {
        h = ((g - b) / delta) % 6;
      } else if (cmax == g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }

      h = Math.round(h * 60);

      if (h < 0) {
        h += 360;
      }
      l = (cmax + cmin) / 2;
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      s = +(s * 100).toFixed(0);
      l = +(l * 100).toFixed(0);

      return colorType === "HSL"
        ? `(${h}, ${s}%, ${l}%)`
        : `(${h}, ${s}%, ${l}%, 1.0)`;
  }
  return color;
};
