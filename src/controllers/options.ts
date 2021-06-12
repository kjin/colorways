import { ReactiveController, ReactiveControllerHost } from "lit";
import { ColorSpaceOptions } from "../util/color";
import { OptionValue } from "../util/ext";

export class GameOptions implements ReactiveController {
  host: ReactiveControllerHost;
  difficulty = new OptionValue(
    this,
    [
      ["Easy", 6],
      ["Normal", 11],
      ["Hard", 16],
    ],
    "Easy"
  );
  linearOrLog = new OptionValue<(x: number) => number>(
    this,
    [
      ["Linear", (x) => x],
      ["Log", (x) => 1 - Math.log2(2 - x)],
    ],
    "Linear"
  );
  changesMade = false;
  revision = 0;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
  }

  hostConnected() {}

  getColorSpace(): ColorSpaceOptions {
    return {
      steps: this.difficulty.internalValue,
      scaling: this.linearOrLog.internalValue,
    };
  }
}
