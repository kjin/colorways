import { html, css, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map";
import { customElement, property } from "lit/decorators.js";
import anime from "animejs";
import { dec2Hex8bit, lighten, toCSSColor } from "../util";

@customElement("color-cell")
export class ColorCell extends LitElement {
  static styles = css`
    div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 0px;
      margin: 2px;
      border-radius: 5px;
      border-width: 1px;
      opacity: 1;
    }
    #hex {
      font-family: "Courier New";
      opacity: 0;
      margin: 8px;
      font-size: 12px;
    }
  `;

  @property({ type: Array })
  color = [0, 0, 0];
  @property({ attribute: false })
  showHex = false;

  private initialized = false;

  updated() {
    if (!this.initialized) {
      this.initialized = true;
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
            new CustomEvent("animation-ended", {
              bubbles: true,
              composed: true,
            })
          );
        },
      });
    }
    if (this.showHex) {
      anime({
        targets: this.renderRoot.querySelector("span"),
        opacity: [0, 1],
        duration: 250,
        delay: 500,
        easing: "linear",
      });
    } else {
      anime.remove(this.renderRoot.querySelector("span"));
      anime({
        targets: this.renderRoot.querySelector("span"),
        opacity: 0,
        easing: "linear",
        duration: 250,
      });
    }
  }

  onMouseOver() {
    this.showHex = true;
  }

  onMouseLeave() {
    this.showHex = false;
  }

  render() {
    return html`<div
      style=${styleMap({
        "background-color": toCSSColor(this.color),
      })}
      @mousedown=${this.onMouseOver}
      @touchstart=${this.onMouseOver}
      @mouseup=${this.onMouseLeave}
      @mouseleave=${this.onMouseLeave}
      @touchend=${this.onMouseLeave}
    >
      <span
        id="hex"
        style=${styleMap({
          color: toCSSColor(lighten(this.color, 0.5, 0.5)),
        })}
        >${toCSSColor(this.color)}</span
      >
    </div>`;
  }
}
