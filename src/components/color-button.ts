import { html, css, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map";
import { customElement, property } from "lit/decorators.js";
import { darken, lighten, toCSSColor } from "../util";

@customElement("color-button")
export class ColorButton extends LitElement {
  static styles = css`
    div {
      display: flex;
      padding: 8px;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      justify-content: center;
      border-style: none;
      user-select: none;
    }
    :host {
      width: 100%;
      min-width: 20px;
      max-width: 40px;
    }
  `;

  @property({ type: Array })
  delta = [0, 0, 0];
  @property({ type: Number })
  intensity = 0;
  @property({ type: Boolean })
  active = false;

  render() {
    let sign = this.intensity > 0 ? "+" : this.intensity < 0 ? "\u2013" : 0;
    return html`<div
      @click=${this.onClick}
      style=${styleMap({
        "background-color": toCSSColor(
          lighten(
            this.delta.map((x) => (x ? 255 : 0)),
            this.active ? 0 : 0.75
          )
        ),
        color: toCSSColor(
          lighten(
            this.delta.map((x) => (x ? 255 : 0)),
            1
          )
        ),
      })}
    >
      ${sign}
    </div>`;
  }

  onClick() {
    if (this.active) {
      this.dispatchEvent(
        new CustomEvent("color-incremented", {
          detail: { delta: this.delta.map((x) => x * this.intensity) },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
