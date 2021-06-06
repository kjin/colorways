export function intensity(color: number[]) {
  return color.reduce((a, b) => Math.max(a, b), 0);
}

export function getBWForColor(color: number[]): number[] {
  return intensity(color) < 224 ? [255, 255, 255] : [0, 0, 0];
}

export function invert(color: number[]): number[] {
  return color.map((x) => 255 - x);
}

export function lighten(color: number[], amount: number): number[] {
  return color.map((x) => 255 - Math.ceil((255 - x) * (1 - amount)));
}

export function darken(color: number[], amount: number): number[] {
  return color.map((x) => Math.floor(x * (1 - amount)));
}

export function dec2Hex8bit(num: number) {
  const result = num.toString(16);
  if (result.length === 1) return "0" + result;
  return result;
}

export function computeMoves(
  source: number[],
  target: number[],
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
