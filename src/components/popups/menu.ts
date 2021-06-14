import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { trigger } from "../../util";
import { ColorBuilder } from "../../util/color-builder";

@customElement("cw-menu")
export class Menu extends LitElement {
  private color = ColorBuilder.springGreen.faint.midtone;
  private buttonColor = ColorBuilder.springGreen.faint.dark;

  static styles = css`
    :host {
      user-select: none;
    }
    h1 {
      margin: 5px;
      text-align: center;
      font-size: 40px;
    }
    small {
      font-size: 12px;
    }
    .white {
      color: white;
    }
  `;

  @property({ type: Boolean })
  active = true;

  render() {
    return html` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>
        Colorways
        <small><a href="https://github.com/kjin/colorways">v0.0.4</a></small>
      </h1>
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${() => trigger(this, "new-game")}
          .color=${this.buttonColor}
          .active=${true}
          >New Game</cw-button
        ></cw-container
      >
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${() => trigger(this, "popup-options")}
          .color=${this.buttonColor}
          .active=${true}
          >Options</cw-button
        ></cw-container
      >
      <cw-container .height=${50} .color=${this.color}
        ><cw-button
          @click-down=${() => trigger(this, "popup-help")}
          .color=${this.buttonColor}
          .active=${true}
          >Help</cw-button
        ></cw-container
      >
    </cw-popup>`;
  }
}
