import { computeMoves, RGBColor } from "../util";
import { ReactiveController, ReactiveControllerHost } from "lit";

export class ColorRound implements ReactiveController {
  host: ReactiveControllerHost;
  targetColor = [0, 0, 0];
  iterations: RGBColor[] = [[0, 0, 0]];
  optimalMoves = 0;
  win: boolean = false;
  active: boolean = false;

  constructor(host: ReactiveControllerHost, private readonly interval: number) {
    (this.host = host).addController(this);
    this.startGame();
  }

  private startGame() {
    const mul = Math.floor(256 / this.interval);
    this.targetColor = [0, 0, 0].map(
      (_) => Math.floor(Math.random() * mul) * this.interval
    );
    while (this.optimalMoves === 0) {
      this.iterations = [
        [0, 0, 0].map((_) => Math.floor(Math.random() * mul) * this.interval),
      ];
      this.optimalMoves = computeMoves(
        this.targetColor,
        this.iterations[0],
        this.interval
      );
    }
    this.active = true;
    this.host.requestUpdate();
  }

  iterate(delta: RGBColor) {
    const newColor = [...this.iterations[this.iterations.length - 1]];
    for (let i = 0; i < delta.length; i++) {
      if (newColor[i] + delta[i] >= 0 && newColor[i] + delta[i] <= 255) {
        newColor[i] += delta[i];
      }
    }
    this.win = newColor.every((x, i) => x === this.targetColor[i]);
    this.iterations = [...this.iterations, newColor];
    this.host.requestUpdate();
  }

  hostConnected() {}
}
