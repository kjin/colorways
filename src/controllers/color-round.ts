import { ReactiveController, ReactiveControllerHost } from "lit";
import {
  ColorSpaceOptions,
  computeMoves,
  GameColor,
  Move,
} from "../util/color";
import { GameOptions } from "./options";

export class ColorRound implements ReactiveController {
  host: ReactiveControllerHost;
  targetColor = [0, 0, 0];
  iterations: GameColor[] = [[0, 0, 0]];
  moves: Move[] = [];
  difficulty: string = "";
  colorSpace: ColorSpaceOptions;
  optimalMoves = 0;
  win: boolean = false;
  active: boolean = false;

  constructor(host: ReactiveControllerHost, gameOptions: GameOptions) {
    (this.host = host).addController(this);
    this.colorSpace = gameOptions.getColorSpace();
    this.difficulty = gameOptions.difficulty.stringValue;
    this.startGame();
  }

  private startGame() {
    this.targetColor = [0, 0, 0].map((_) =>
      Math.floor(Math.random() * this.colorSpace.steps)
    );
    while (this.optimalMoves === 0) {
      this.iterations = [
        [0, 0, 0].map((_) => Math.floor(Math.random() * this.colorSpace.steps)),
      ];
      this.optimalMoves = computeMoves(this.targetColor, this.iterations[0]);
    }
    this.active = true;
    this.host.requestUpdate();
  }

  iterate(move: Move) {
    const { delta, direction } = move;
    const newColor = [...this.iterations[this.iterations.length - 1]];
    for (let i = 0; i < delta.length; i++) {
      if (
        newColor[i] + delta[i] * direction >= 0 &&
        newColor[i] + delta[i] * direction < this.colorSpace.steps
      ) {
        newColor[i] += delta[i] * direction;
      }
    }
    this.moves.push(move);
    this.win = newColor.every((x, i) => x === this.targetColor[i]);
    this.iterations = [...this.iterations, newColor];
    this.host.requestUpdate();
  }

  hostConnected() {}
}
