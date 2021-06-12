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
    "Normal"
  );
  linearOrLog = new OptionValue<(x: number) => number>(
    this,
    [["Linear", (x) => x]],
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
    };
  }
}
