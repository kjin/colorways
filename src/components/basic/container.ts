import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map";
import { legibleLighten, RGBColor, toCSSColor } from "../../util/color";

@customElement("cw-container")
export class Container extends LitElement {
  static styles = css`
    div {
      display: flex;
      align-items: stretch;
      margin: 1px;
      /* padding-left: 8px;
      padding-right: 8px; */
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      user-select: none;
      white-space: nowrap;
    }
  `;

  @property({ type: Array })
  color: RGBColor = [255, 255, 255];
  @property({ type: Number })
  width: number = Infinity;
  @property({ type: Number })
  height: number = Infinity;

  render() {
    const textColor = legibleLighten(this.color);
    return html`<div
      style=${styleMap({
        "background-color": toCSSColor(this.color),
        color: toCSSColor(textColor),
        ...(isFinite(this.width) ? { "max-width": `${this.width}px` } : {}),
        ...(isFinite(this.height) ? { height: `${this.height}px` } : {}),
      })}
    >
      <slot></slot>
    </div>`;
  }
}
