import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map";
import { trigger } from "../../util";
import {
  legibleLighten,
  lighten,
  RGBColor,
  toCSSColor,
} from "../../util/color";

@customElement("cw-button")
export class Button extends LitElement {
  static styles = css`
    #button {
      display: flex;
      height: 100%;
      padding-left: 8px;
      padding-right: 8px;
      margin: 1px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      justify-content: center;
      align-items: center;
      border-style: none;
      user-select: none;
      min-width: 20px;
      white-space: nowrap;
    }
    :host {
      width: 100%;
    }
  `;

  @property({ type: Array })
  color: RGBColor = [0, 0, 0];
  @property({ type: Boolean })
  active = false;
  @property({ type: Number })
  maxWidth = Infinity;

  render() {
    const backgroundColor = lighten(this.color, this.active ? 0 : 0.75);
    const textColor = legibleLighten(backgroundColor);
    return html`<div
      id="button"
      @click=${() => this.active && trigger(this, "click-down", this.id)}
      style=${styleMap({
        "background-color": toCSSColor(backgroundColor),
        color: toCSSColor(textColor),
      })}
    >
      <slot></slot>
    </div>`;
  }
}
