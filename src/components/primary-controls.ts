import anime from "animejs";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
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

  updated() {
    if (this.active) {
      anime.remove(this.renderRoot.firstElementChild);
      anime({
        targets: this.renderRoot.firstElementChild,
        opacity: 1,
        duration: 100,
        easing: "linear",
        changeBegin: () => {
          this.renderRoot.firstElementChild?.classList.remove("invisible");
        },
      });
    } else {
      anime({
        targets: this.renderRoot.firstElementChild,
        opacity: 0,
        duration: 100,
        delay: 900,
        easing: "linear",
        changeComplete: () => {
          this.renderRoot.firstElementChild?.classList.add("invisible");
        },
      });
    }
  }

  render() {
    const buttons = this.moves.map(
      (move) => html`<cw-button
        .color=${toRGB(move.delta, { steps: 2 })}
        ?active=${this.active && move.valid}
        @click-down=${() =>
          this.active && trigger(this, "color-incremented", move)}
        >${getArrow(move.direction)}</cw-button
      >`
    );
    return html`<div>
      <cw-container .width=${400} .height=${50}> ${buttons} </cw-container>
    </div>`;
  }
}
