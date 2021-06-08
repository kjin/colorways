import { html, css, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map";
import { customElement, property } from "lit/decorators.js";
import anime from "animejs";
import { dec2Hex8bit, toCSSColor } from "../util";

@customElement("color-cell")
export class ColorCell extends LitElement {
  static styles = css`
    div {
      height: 0px;
      margin: 2px;
      border-radius: 5px;
      border-width: 1px;
      opacity: 1;
    }
  `;

  @property({ type: Array })
  color = [0, 0, 0];

  updated() {
    anime({
      targets: this.renderRoot.querySelector("div"),
      height: "40px",
      duration: 750,
      changeBegin: () => {
        this.dispatchEvent(
          new CustomEvent("animation-started", {
            bubbles: true,
            composed: true,
          })
        );
      },
      change: () => {
        this.dispatchEvent(
          new CustomEvent("animation-changed", {
            bubbles: true,
            composed: true,
          })
        );
      },
      changeComplete: () => {
        this.dispatchEvent(
          new CustomEvent("animation-ended", { bubbles: true, composed: true })
        );
      },
    });
  }

  render() {
    return html`<div
      style=${styleMap({
        "background-color": toCSSColor(this.color),
      })}
    ></div>`;
  }
}
