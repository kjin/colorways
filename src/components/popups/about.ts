import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cw-about")
export class About extends LitElement {
  static styles = css`
    :host {
      background-color: black;
      color: cadetblue;
      user-select: none;
    }
    h1,
    h2,
    p,
    b {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
    small {
      font-size: 12px;
    }
    span {
      border-radius: 4px;
      padding: 2px;
    }
    .white {
      color: white;
    }
  `;

  @property({ type: Boolean })
  active = true;

  render() {
    return html` <cw-popup color="paleturquoise" .active=${this.active}>
      <h1>
        Colorways
        <small><a href="https://github.com/kjin/colorways">v0.0.1</a></small>
      </h1>
      <h2>Objective</h2>
      <p>
        Use the color adjustment buttons to adjust the current color (top) to
        match the target color (bottom). Try to make as few adjustments as
        possible!
      </p>
      <p>Stumped? Get a hint by holding down on a color row.</p>
      <p class="white">
        Colorways works best on phones and phone-shaped browser windows!
      </p>
    </cw-popup>`;
  }
}
