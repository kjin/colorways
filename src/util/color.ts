import convert from "color-convert";

export type HSVColor = [number, number, number];

export type RGBColor = [number, number, number];

export interface Move {
  index: number;
  rgbColor: RGBColor;
  direction: number;
}

export type GameColor = number[];

export type ColorSpace = {
  basis: RGBColor[];
  toRGB: (color: GameColor) => GameColor;
};

export interface GameOptions {
  steps: number;
  scaling: (x: number) => number;
  colorSpace: ColorSpace;
}

export function toRGB(color: GameColor, options: GameOptions): RGBColor {
  return options.colorSpace
    .toRGB(color.map((x) => x / (options.steps - 1)))
    .map((x) => Math.floor(options.scaling(x) * 255)) as RGBColor;
}

export function makeMove(
  color: GameColor,
  move: Move,
  gameOptions: GameOptions
): GameColor | null {
  const { index, direction } = move;
  if (
    !(
      color[index] + direction >= 0 &&
      color[index] + direction < gameOptions.steps
    )
  ) {
    return null;
  }
  let newColor = [...color];
  newColor[index] += direction;
  return newColor;
}

export function intensity(color: RGBColor) {
  return (
    [0.2126, 0.7152, 0.0722].reduce((a, b, i) => a + b * color[i], 0) / 256
  );
}

export function hsvToRGB(color: HSVColor): RGBColor {
  return convert.hsv.rgb(color);
}

export function invert(color: RGBColor): RGBColor {
  return color.map((x) => 255 - x) as RGBColor;
}

export function darken(color: RGBColor, mul: number): RGBColor {
  return color.map((x) => Math.floor(x * (1 - mul))) as RGBColor;
}

export function lighten(color: RGBColor, mul: number): RGBColor {
  return invert(darken(invert(color), mul)) as RGBColor;
}

export function legibleDarken(color: RGBColor): RGBColor {
  if (intensity(color) < 0.2) {
    return legibleLighten(color);
  }
  return darken(color, 0.75);
}

export function legibleLighten(color: RGBColor): RGBColor {
  if (intensity(color) > 0.8) {
    return legibleDarken(color);
  }
  return lighten(color, 0.75);
}

export function dec2Hex8bit(num: number) {
  const result = num.toString(16);
  if (result.length === 1) return "0" + result;
  return result;
}

export function toCSSColor(color: RGBColor) {
  return `#${color.map(dec2Hex8bit).join("")}`;
}

export function computeMoves(source: GameColor, target: GameColor): number {
  return target
    .map((x, i) => x - source[i])
    .map(Math.abs)
    .reduce((a, b) => a + b, 0);
}
