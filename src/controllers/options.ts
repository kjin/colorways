import { ReactiveController, ReactiveControllerHost } from "lit";
import { ColorSpaceOptions } from "../util/color";
import { OptionValue } from "../util/ext";

export class GameOptions implements ReactiveController {
  host: ReactiveControllerHost;
  difficulty = new OptionValue(
    this,
    [
      ["Easy", 3],
      ["Normal", 6],
      ["Hard", 16],
    ],
    "Normal"
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
