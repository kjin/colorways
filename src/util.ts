export type RGBColor = number[];

export function intensity(color: RGBColor) {
  return (
    [0.2126, 0.7152, 0.0722].reduce((a, b, i) => a + b * color[i], 0) / 256
  );
}

export function invert(color: RGBColor): RGBColor {
  return color.map((x) => 255 - x);
}

export function lighten(
  color: RGBColor,
  amount: number,
  darkenAt = 2
): RGBColor {
  if (intensity(color) >= darkenAt) {
    return darken(color, amount);
  }
  return color.map((x) => 255 - Math.ceil((255 - x) * (1 - amount)));
}

export function darken(
  color: RGBColor,
  amount: number,
  lightenAt = -1
): RGBColor {
  if (intensity(color) <= lightenAt) {
    return lighten(color, amount);
  }
  return color.map((x) => Math.floor(x * (1 - amount)));
}

export function dec2Hex8bit(num: number) {
  const result = num.toString(16);
  if (result.length === 1) return "0" + result;
  return result;
}

export function toCSSColor(color: RGBColor) {
  return `#${color.map(dec2Hex8bit).join("")}`;
}

export function computeMoves(
  source: RGBColor,
  target: RGBColor,
  interval: number
): number {
  if ([...source, ...target].some((x) => x % interval !== 0)) {
    throw new Error(
      `Cannot compute moves for ${source} -> ${target} with interval=${interval}`
    );
  }
  return target
    .map((x, i) => (x - source[i]) / interval)
    .map(Math.abs)
    .reduce((a, b) => a + b, 0);
}
