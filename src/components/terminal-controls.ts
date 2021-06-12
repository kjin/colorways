import anime from "animejs";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { trigger } from "../util";
import { ColorBuilder } from "../util/color-builder";

@customElement("cw-terminal-controls")
export class TerminalControls extends LitElement {
  private buttonColor = ColorBuilder.indigo.faint.dark;

  static styles = css`
    div {
      opacity: 0;
    }
    .invisible {
      display: none;
    }
  `;

  @property({ type: Boolean })
  active = false;

  updated() {
    if (this.active) {
      anime({
        targets: this.renderRoot.firstElementChild,
        opacity: 1,
        duration: 100,
        delay: 1000,
        easing: "linear",
        changeBegin: () => {
          this.renderRoot.firstElementChild?.classList.remove("invisible");
        },
      });
    } else {
      anime({
        targets: this.renderRoot.firstElementChild,
        opacity: 0,
        duration: 250,
        easing: "linear",
        changeComplete: () => {
          this.renderRoot.firstElementChild?.classList.add("invisible");
        },
      });
    }
  }

  render() {
    return html`<div class="invisible">
      <cw-container .width=${400} .height=${50}>
        <cw-button
          @click-down=${() => trigger(this, "new-game")}
          .color=${this.buttonColor}
          .active=${this.active}
        >
          New Game
        </cw-button>
      </cw-container>
    </div>`;
  }
}
