import { html, css, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import {
  darken,
  dec2Hex8bit,
  invert,
  lighten,
  RGBColor,
  toCSSColor,
} from "../util";

@customElement("color-column")
export class ColorColumn extends LitElement {
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
  targetColor = [0, 0, 0];
  @property({ type: Array })
  iterations: RGBColor[] = [[0, 0, 0]];
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
          ? toCSSColor(lighten(invert(this.targetColor), 0.75))
          : "white",
      })}
    >
      ${repeat(
        this.iterations,
        // (_, i) => this.iterations.length - i,
        (x) => html`<color-cell .color=${x}></color-cell>`
      )}
      <hr />
      <color-cell id="target-color" .color=${this.targetColor}></color-cell>
      <table
        style=${styleMap({
          color: this.active
            ? toCSSColor(darken(invert(this.targetColor), 0.5))
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
    </div>`;
  }
}
