import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { trigger } from "../util";
import { ColorBuilder } from "../util/color-builder";

@customElement("cw-meta-controls")
export class MetaControls extends LitElement {
  private buttonColor = ColorBuilder.indigo.faint.dark;

  static styles = css`
    :host {
      flex-basis: 60px;
      width: 100%;
    }
  `;

  render() {
    return html`<cw-container .height=${50}>
      <cw-button
        @click-down=${() => trigger(this, "popup-menu")}
        .color=${this.buttonColor}
        .active=${true}
      >
        ${"\u2630"}
      </cw-button>
    </cw-container>`;
  }
}
