import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { trigger } from "../util";
import { ColorBuilder } from "../util/color-builder";

@customElement("cw-meta-controls")
export class MetaControls extends LitElement {
  private buttonColor = ColorBuilder.indigo.faint.dark;

  static styles = css`
    :host {
      justify-content: flex-end;
    }
  `;

  render() {
    return html`<cw-container .width=${400} .height=${50}>
      <cw-button
        @click-down=${() => trigger(this, "new-game")}
        .color=${this.buttonColor}
      >
        New Game
      </cw-button>
      <cw-button
        @click-down=${() => trigger(this, "popup-menu")}
        .color=${this.buttonColor}
      >
        ${"\u2630"}
      </cw-button>
    </cw-container>`;
  }
}
