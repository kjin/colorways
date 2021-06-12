import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cw-spacer")
export class Spacer extends LitElement {
  static styles = css`
    div {
      width: 8px;
    }
  `;
  render() {
    return html`<div></div>`;
  }
}
