import { ReactiveController, ReactiveControllerHost } from "lit";
import { ColorSpace, GameOptions } from "../util/color";
import { ColorBuilder } from "../util/color-builder";
import { OptionValue } from "../util/ext";

const unitLog2 = (e: number) => (x: number) =>
  Math.log2((Math.pow(e, 2) - 1) * x + 1) / e;

export class GameOptionsController implements ReactiveController {
  host: ReactiveControllerHost;
  steps = new OptionValue(
    this,
    [
      ["Easy", "6 steps", 6],
      ["Normal", "11 steps", 11],
      ["Hard", "16 steps", 16],
    ],
    "Easy"
  );
  scaling = new OptionValue<(x: number) => number>(
    this,
    [
      ["Linear", "Colors evenly spaced by RGB hex value", (x) => x],
      ["Log", "Darker colors more discernable", unitLog2(2)],
    ],
    "Linear"
  );
  colorSpace = new OptionValue<ColorSpace>(
    this,
    [
      [
        "RGB+",
        "Red/Green/Blue, additive (more = lighter)",
        {
          basis: [
            ColorBuilder.red.deepest.midtone,
            ColorBuilder.lime.deepest.midtone,
            ColorBuilder.blue.deepest.midtone,
          ],
          toRGB: (x) => x,
        },
      ],
      [
        "CMY-",
        "Cyan/Magenta/Yellow, subtractive (more = darker)",
        {
          basis: [
            ColorBuilder.cyan.deepest.midtone,
            ColorBuilder.magenta.deepest.midtone,
            ColorBuilder.yellow.deepest.midtone,
          ],
          toRGB: (color) => color.map((x) => 1 - x),
        },
      ],
      [
        "Grays",
        "For the dull ones",
        {
          basis: [ColorBuilder.gray.midtone],
          toRGB: (color) => [color[0], color[0], color[0]],
        },
      ],
    ],
    "RGB+"
  );
  changesMade = false;
  revision = 0;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {}

  getSelectedOptions(): GameOptions {
    const c = ColorBuilder;
    return {
      steps: this.steps.internalValue,
      scaling: this.scaling.internalValue,
      colorSpace: this.colorSpace.internalValue,
    };
  }
}
