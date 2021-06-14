import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat";
import { GameOptionsController } from "../../controllers/options";
import { ColorBuilder } from "../../util/color-builder";

@customElement("cw-options")
export class Options extends LitElement {
  private color = ColorBuilder.dodgerBlue.faint.light;
  private buttonColor = ColorBuilder.dodgerBlue.faint.midtone;

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
  `;

  @property({ type: Boolean })
  active = true;
  @property({ type: Object })
  gameOptions: GameOptionsController | null = null;
  // This is a hack
  @property({ type: Number })
  revision: number = 0;

  render() {
    const { gameOptions } = this;
    if (!gameOptions) return "";
    return html` <cw-popup .color=${this.color} .active=${this.active}>
      <h1>Options</h1>
      <h2>Difficulty</h2>
      <p>${gameOptions.steps.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${repeat(
          gameOptions.steps.allowedStringValues,
          (value) =>
            html`<cw-button
              .color=${this.buttonColor}
              @click-down=${() => (gameOptions.steps.stringValue = value)}
              .active=${gameOptions.steps.stringValue !== value}
              >${value}</cw-button
            >`
        )}
      </cw-container>
      <h2>Color Scale</h2>
      <p>${gameOptions.scaling.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${repeat(
          gameOptions.scaling.allowedStringValues,
          (value) =>
            html`<cw-button
              .color=${this.buttonColor}
              @click-down=${() => (gameOptions.scaling.stringValue = value)}
              .active=${gameOptions.scaling.stringValue !== value}
              >${value}</cw-button
            >`
        )}
      </cw-container>
      <h2>Color Space</h2>
      <p>${gameOptions.colorSpace.description}</p>
      <cw-container .height=${40} .color=${this.color}>
        ${repeat(
          gameOptions.colorSpace.allowedStringValues,
          (value) =>
            html`<cw-button
              .color=${this.buttonColor}
              @click-down=${() => (gameOptions.colorSpace.stringValue = value)}
              .active=${gameOptions.colorSpace.stringValue !== value}
              >${value}</cw-button
            >`
        )}
      </cw-container>
    </cw-popup>`;
  }
}
