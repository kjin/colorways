import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map";
import { getArrow } from "../util";
import {
  darken,
  invert,
  lighten,
  Move,
  RGBColor,
  toCSSColor,
  toRGB,
} from "../util/color";

@customElement("cw-round")
export class Round extends LitElement {
  static styles = css`
    div {
      background-color: black;
      padding: 5px;
      margin: 3px;
      border-radius: 5px;
      overflow: hidden;
      font-family: "Quicksand";
      font-size: 20px;
      user-select: none;
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
  targetColor: RGBColor = [0, 0, 0];
  @property({ type: Array })
  iterations: RGBColor[] = [];
  @property({ type: Array })
  moves: Move[] = [];
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
          ? toCSSColor(lighten(invert(this.targetColor), 0.5))
          : "white",
      })}
    >
      ${repeat(
        this.iterations,
        // (_, i) => this.iterations.length - i,
        (x, i) => {
          let incrementedColor = [0, 0, 0] as RGBColor;
          let symbol = "?";
          if (this.moves.length > i) {
            incrementedColor = toRGB(this.moves[i].delta, { steps: 2 });
            symbol = getArrow(this.moves[i].direction);
          }
          return html`<cw-cell
            .color=${x}
            .showIncremented=${!this.win || i < this.iterations.length - 1}
            .incrementedColor=${incrementedColor}
            >${symbol}</cw-cell
          >`;
        }
      )}
      <hr />
      <cw-cell id="target-color" .color=${this.targetColor}></cw-cell>
      <table
        style=${styleMap({
          color: this.active
            ? toCSSColor(darken(invert(this.targetColor), 0.5))
            : "gray",
        })}
      >
        <td id="game-title">
          Game
          ${this.gameId}${this.win
            ? this.optimalMoves === this.iterations.length - 1
              ? ` \ud83d\udc51`
              : " \u2713"
            : " "}
        </td>
        <td id="game-status">
          ${this.win
            ? `${this.iterations.length - 1} moves (${
                this.optimalMoves
              } optimal)`
            : ""}
        </td>
      </table>
    </div>`;
  }
}
