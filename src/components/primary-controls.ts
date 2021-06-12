import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat";
import { getArrow, trigger } from "../util";
import { GameColor, Move, toRGB } from "../util/color";

@customElement("cw-primary-controls")
export class PrimaryControls extends LitElement {
  static styles = css`
    :host {
      flex-grow: 1;
    }
  `;

  @property({ type: Number })
  interval = 1;

  @property({ type: Array })
  current: GameColor = [0, 0, 0];

  @property({ type: Boolean })
  active = true;

  @property({ type: Array })
  moves: Array<Move & { valid: boolean }> = [];

  render() {
    return html`<cw-container .width=${400} .height=${50}>
      ${repeat(
        this.moves,
        (move) => html`<cw-button
          .color=${toRGB(move.delta, { steps: 2 })}
          ?active=${this.active && move.valid}
          @click-down=${() => trigger(this, "color-incremented", move)}
          >${getArrow(move.direction)}</cw-button
        >`
      )}
    </cw-container>`;
  }
}
