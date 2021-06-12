import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { trigger } from "../util";

@customElement("cw-options")
export class Options extends LitElement {
  static styles = css`
    :host {
      justify-content: flex-end;
    }
  `;

  render() {
    return html`<cw-container .width=${400} .height=${50}>
      <cw-button id="new-game" @click-down=${() => trigger(this, "new-game")}>
        New Game
      </cw-button>
      <cw-button id="about" @click-down=${() => trigger(this, "about")}>
        ?
      </cw-button>
    </cw-container>`;
  }
}
