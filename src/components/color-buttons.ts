import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("color-buttons")
export class ColorButtons extends LitElement {
  static styles = css`
    div {
      display: flex;
      justify-content: flex-start;
    }
    :host {
      flex-grow: 1;
      width: 100%;
    }
  `;

  @property({ type: Number })
  interval = 1;

  @property({ type: Array })
  current = [0, 0, 0];

  @property({ type: Boolean })
  active = true;

  render() {
    return html`<div>
      ${[
        [1, 0, 0],
        // [1, 1, 0],
        [0, 1, 0],
        // [0, 1, 1],
        [0, 0, 1],
        // [1, 0, 1],
      ].flatMap((delta) =>
        [-this.interval, this.interval].map(
          (interval) => html`<color-button
            .delta=${delta}
            intensity=${interval}
            ?active=${this.active &&
            delta
              .map((y, i) => y * interval + this.current[i])
              .every((y) => y >= 0 && y <= 255)}
          ></color-button>`
        )
      )}
    </div>`;
  }
}
