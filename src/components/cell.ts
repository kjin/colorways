import anime from "animejs";
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map";
import { legibleLighten, RGBColor, toCSSColor } from "../util/color";

@customElement("cw-cell")
export class Cell extends LitElement {
  static styles = css`
    #container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0px;
      padding: 5px;
      margin: 2px;
      border-radius: 5px;
      opacity: 1;
    }
    #hex {
      font-family: "Courier New";
      opacity: 0;
      margin: 8px;
      font-size: 16px;
      font-weight: bold;
    }
  `;

  @property({ type: Array })
  color: RGBColor = [0, 0, 0];
  @property({ attribute: false })
  showHex = false;

  private initialized = false;

  updated() {
    if (!this.initialized) {
      this.initialized = true;
      anime({
        targets: this.renderRoot.querySelector("div"),
        height: "50px",
        duration: 500,
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
    const spacer = html`<cw-spacer></cw-spacer>`;
    return html`<div
      id="container"
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
          color: toCSSColor(legibleLighten(this.color)),
        })}
        >${toCSSColor(this.color)}</span
      >
      <cw-container
        >${spacer}+${spacer}<cw-button>?</cw-button>${spacer}</cw-container
      >
    </div>`;
  }
}
