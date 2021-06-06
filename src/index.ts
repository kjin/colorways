import { html, css, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map";
import { customElement, property } from "lit/decorators.js";
import anime from "animejs";
import { repeat } from "lit/directives/repeat.js";
import {
  computeMoves,
  darken,
  dec2Hex8bit,
  getBWForColor,
  invert,
  lighten,
} from "./util";
import { ReactiveController, ReactiveControllerHost } from "lit";

let mul = 1;

@customElement("color-button")
export class ColorButton extends LitElement {
  static styles = css`
    button {
      width: 40px;
      height: 40px;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
    }
  `;

  @property({ type: Array })
  delta = [0, 0, 0];
  @property({ type: Number })
  intensity = 0;
  @property({ type: Boolean })
  active = false;

  render() {
    let sign = this.intensity > 0 ? "+" : this.intensity < 0 ? "-" : 0;
    return html`<button
      @click=${this.onClick}
      ?disabled=${!this.active}
      style=${styleMap({
        "background-color": `#${lighten(
          this.delta.map((x) => (x ? 255 : 0)),
          this.active ? 0 : 0.75
        )
          .map(dec2Hex8bit)
          .join("")}`,
        color: `#${getBWForColor(this.delta.map((x) => (x ? 255 : 0)))
          .map(dec2Hex8bit)
          .join("")}`,
      })}
    >
      ${sign}
    </button>`;
  }

  onClick() {
    this.dispatchEvent(
      new CustomEvent("color-incremented", {
        detail: { delta: this.delta.map((x) => x * this.intensity) },
        bubbles: true,
        composed: true,
      })
    );
  }
}

@customElement("color-buttons")
export class ColorButtons extends LitElement {
  @property({ type: Number })
  interval = 1;

  @property({ type: Array })
  current = [0, 0, 0];

  @property({ type: Boolean })
  active = true;

  render() {
    return [
      [1, 0, 0],
      // [1, 1, 0],
      [0, 1, 0],
      // [0, 1, 1],
      [0, 0, 1],
      // [1, 0, 1],
    ].flatMap((delta) =>
      [-this.interval, this.interval].map(
        (interval) => html`<color-button
          .delta=${delta}
          intensity=${interval}
          ?active=${this.active &&
          delta
            .map((y, i) => y * interval + this.current[i])
            .every((y) => y >= 0 && y <= 255)}
        ></color-button>`
      )
    );
  }
}

@customElement("color-cell")
export class ColorCell extends LitElement {
  static styles = css`
    div {
      height: 0px;
      margin: 2px;
      border-radius: 5px;
      border-width: 1px;
      opacity: 1;
    }
  `;

  @property({ type: Array })
  color = [0, 0, 0];

  updated() {
    anime({
      targets: this.renderRoot.querySelector("div"),
      height: "40px",
      duration: 750,
    });
  }

  render() {
    return html`<div
      style=${styleMap({
        "background-color": `#${this.color.map(dec2Hex8bit).join("")}`,
      })}
    ></div>`;
  }
}

@customElement("color-column")
export class ColorColumn extends LitElement {
  static styles = css`
    div {
      /* width: 120px; */
      background-color: black;
      padding: 5px;
      margin: 3px;
      border-radius: 5px;
      overflow: hidden;
      font-family: "Quicksand";
      font-size: 20px;
    }
    table {
      width: 100%;
    }
    #game-status {
      text-align: right;
    }
    hr {
      margin: 3px;
    }
  `;

  @property({ type: Array })
  targetColor = [0, 0, 0];
  @property({ type: Array })
  iterations: number[][] = [[0, 0, 0]];
  @property({ type: Boolean })
  active = true;
  @property({ type: Boolean })
  win = false;
  @property({ type: Number })
  gameId = 0;
  @property({ type: Number })
  optimalMoves = 0;

  render() {
    return html`<div
      style=${styleMap({
        "background-color": this.active
          ? `#${lighten(invert(this.targetColor), 0.75)
              .map(dec2Hex8bit)
              .join("")}`
          : "white",
      })}
    >
      <table
        style=${styleMap({
          color: this.active
            ? `#${darken(invert(this.targetColor), 0.5)
                .map(dec2Hex8bit)
                .join("")}`
            : "gray",
        })}
      >
        <td id="game-title">
          Game ${this.gameId}${this.win ? ` \ud83d\udc51` : " "}
        </td>
        <td id="game-status">
          ${this.win
            ? `${this.iterations.length - 1} moves (${
                this.optimalMoves
              } optimal)`
            : ""}
        </td>
      </table>
      <color-cell id="target-color" .color=${this.targetColor}></color-cell>
      <hr />
      ${repeat(
        this.iterations,
        (_, i) => this.iterations.length - i,
        (x) => html`<color-cell .color=${x}></color-cell>`
      )}
    </div>`;
  }
}

export class ColorRound implements ReactiveController {
  host: ReactiveControllerHost;
  targetColor = [0, 0, 0];
  iterations: number[][] = [[0, 0, 0]];
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

  iterate(delta: number[]) {
    const newColor = [...this.iterations[0]];
    for (let i = 0; i < delta.length; i++) {
      if (newColor[i] + delta[i] >= 0 && newColor[i] + delta[i] <= 255) {
        newColor[i] += delta[i];
      }
    }
    this.win = newColor.every((x, i) => x === this.targetColor[i]);
    this.iterations = [newColor, ...this.iterations];
    this.host.requestUpdate();
  }

  hostConnected() {}
}

@customElement("control-panel")
export class ControlPanel extends LitElement {
  static styles = css`
    button {
      height: 40px;
      margin: 1px;
      padding: 8px;
      border-radius: 5px;
      background-color: thistle;
      color: indigo;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      float: right;
    }
  `;

  render() {
    return html`<button @click=${this.onNewGameClicked}>New Game</button>`;
  }

  onNewGameClicked() {
    this.dispatchEvent(new CustomEvent("new-game"));
  }
}

@customElement("color-game")
export class ColorGame extends LitElement {
  static styles = css`
    div {
      white-space: nowrap;
    }
    table {
      width: 100%;
    }
  `;

  @property({ type: Number })
  interval = 1;

  private rounds: ColorRound[] = [];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.startNewGame();
  }

  startNewGame() {
    if (this.rounds.length > 0) {
      this.rounds[0].active = false;
    }
    this.rounds = [new ColorRound(this, this.interval), ...this.rounds];
  }

  iterate(e: CustomEvent) {
    const { delta } = e.detail as { delta: number[] };
    this.rounds[0].iterate(delta);
    e.stopPropagation();
  }

  render() {
    return html`
      <table>
        <td>
          <color-buttons
            @color-incremented=${this.iterate}
            interval=${this.interval}
            .current=${this.rounds[0].iterations[0]}
            ?active=${!this.rounds[0].win}
          ></color-buttons>
        </td>
        <td>
          <control-panel @new-game=${this.startNewGame}></control-panel>
        </td>
      </table>
      <hr />
      <div>
        ${repeat(
          this.rounds,
          (_, i) => this.rounds.length - i,
          (round, i) =>
            html`<color-column
              .targetColor=${round.targetColor}
              .iterations=${round.iterations}
              .active=${round.active}
              .gameId=${this.rounds.length - i}
              .win=${round.win}
              .optimalMoves=${round.optimalMoves}
            ></color-column>`
        )}
      </div>
    `;
  }
}
