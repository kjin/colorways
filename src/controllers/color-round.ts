import { ReactiveController, ReactiveControllerHost } from "lit";
import {
  computeMoves,
  GameColor,
  GameOptions,
  makeMove,
  Move,
} from "../util/color";
import { GameOptionsController } from "./options";

export class ColorRound implements ReactiveController {
  host: ReactiveControllerHost;
  targetColor: GameColor = [];
  iterations: GameColor[] = [];
  moves: Move[] = [];
  difficulty: string = "";
  isGray: boolean = false;
  gameOptions: GameOptions;
  optimalMoves = 0;
  win: boolean = false;
  active: boolean = false;

  constructor(
    host: ReactiveControllerHost,
    gameOptions: GameOptionsController
  ) {
    (this.host = host).addController(this);
    this.gameOptions = gameOptions.getSelectedOptions();
    this.difficulty = gameOptions.steps.stringValue;
    this.isGray = gameOptions.colorSpace.stringValue === "Grays";
    this.startGame();
  }

  private createColor() {
    return new Array(this.gameOptions.colorSpace.basis.length)
      .fill(0)
      .map((_) => Math.floor(Math.random() * this.gameOptions.steps));
  }

  private startGame() {
    this.targetColor = this.createColor();
    while (this.optimalMoves === 0) {
      this.iterations = [this.createColor()];
      this.optimalMoves = computeMoves(this.targetColor, this.iterations[0]);
    }
    this.active = true;
    this.host.requestUpdate();
  }

  iterate(move: Move) {
    const currentColor = this.iterations[this.iterations.length - 1];
    const newColor = makeMove(currentColor, move, this.gameOptions);
    if (!newColor) {
      throw new Error(
        `Unexpected invalid move: ${currentColor}, ${move}, ${this.gameOptions}`
      );
    }
    this.moves.push(move);
    this.win = newColor.every((x, i) => x === this.targetColor[i]);
    this.iterations = [...this.iterations, newColor];
    this.host.requestUpdate();
  }

  hostConnected() {}
}
