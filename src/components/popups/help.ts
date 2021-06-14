import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ColorBuilder } from "../../util/color-builder";

@customElement("cw-help")
export class Help extends LitElement {
  private color = ColorBuilder.cyan.faint.midtone;

  static styles = css`
    :host {
      user-select: none;
    }
    h1,
    h2,
    p {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
    }
    .white {
      color: white;
    }
  `;

  @property({ type: Boolean })
  active = true;

  render() {
    return html` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Help</h1>
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
