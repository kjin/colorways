import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat";
import { GameOptions } from "../../controllers/options";
import { ColorBuilder } from "../../util/color-builder";

@customElement("cw-options")
export class Options extends LitElement {
  private color = ColorBuilder.dodgerBlue.faint.bright;
  private buttonColor = ColorBuilder.dodgerBlue.faint.midtone;

  static styles = css`
    :host {
      background-color: black;
      user-select: none;
      color: cadetblue;
    }
    h1,
    h2 {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
  `;

  @property({ type: Boolean })
  active = true;
  @property({ type: Object })
  gameOptions: GameOptions | null = null;
  // This is a hack
  @property({ type: Number })
  revision: number = 0;

  render() {
    const { gameOptions } = this;
    if (!gameOptions) return "";
    return html` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Options</h1>
      <h2>Difficulty</h2>
      <cw-container .height=${40} .color=${this.color}>
        ${repeat(
          gameOptions.difficulty.allowedStringValues,
          (value) =>
            html`<cw-button
              .color=${this.buttonColor}
              @click-down=${() => (gameOptions.difficulty.stringValue = value)}
              .active=${gameOptions.difficulty.stringValue !== value}
              >${value}</cw-button
            >`
        )}
      </cw-container>
    </cw-popup>`;
  }
}
