import convert from "color-convert";
import { RGBColor } from "./color";

class LuminosityBuilder {
  constructor(
    private readonly hue: number,
    private readonly saturation: number
  ) {}
  get light() {
    return convert.hsl.rgb([this.hue, this.saturation, 75]);
  }
  get midtone() {
    return convert.hsl.rgb([this.hue, this.saturation, 50]);
  }
  get dark() {
    return convert.hsl.rgb([this.hue, this.saturation, 25]);
  }
}

class SaturationBuilder {
  constructor(private readonly hue: number) {}
  get faintest() {
    return new LuminosityBuilder(this.hue, 25);
  }
  get faint() {
    return new LuminosityBuilder(this.hue, 50);
  }
  get deep() {
    return new LuminosityBuilder(this.hue, 75);
  }
  get deepest() {
    return new LuminosityBuilder(this.hue, 100);
  }
}

export class ColorBuilder {
  static get red() {
    return new SaturationBuilder(0);
  }
  static get orange() {
    return new SaturationBuilder(30);
  }
  static get yellow() {
    return new SaturationBuilder(60);
  }
  static get chartreuse() {
    return new SaturationBuilder(90);
  }
  static get lime() {
    return new SaturationBuilder(120);
  }
  static get springGreen() {
    return new SaturationBuilder(150);
  }
  static get cyan() {
    return new SaturationBuilder(180);
  }
  static get dodgerBlue() {
    return new SaturationBuilder(210);
  }
  static get blue() {
    return new SaturationBuilder(240);
  }
  static get indigo() {
    return new SaturationBuilder(270);
  }
  static get magenta() {
    return new SaturationBuilder(300);
  }
  static get pink() {
    return new SaturationBuilder(330);
  }
  static get gray() {
    return new LuminosityBuilder(0, 0);
  }
  static get black() {
    return [0, 0, 0] as RGBColor;
  }
  static get white() {
    return [255, 255, 100] as RGBColor;
  }
}
