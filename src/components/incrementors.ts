import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { trigger } from "../util";
import { RGBColor } from "../util/color";

@customElement("cw-incrementors")
export class Incrementors extends LitElement {
  static styles = css`
    :host {
      flex-grow: 1;
    }
  `;

  @property({ type: Number })
  interval = 1;

  @property({ type: Array })
  current = [0, 0, 0];

  @property({ type: Boolean })
  active = true;

  render() {
    return html`<cw-container .width=${400} .height=${50}>
      ${[
        [1, 0, 0],
        // [1, 1, 0],
        [0, 1, 0],
        // [0, 1, 1],
        [0, 0, 1],
        // [1, 0, 1],
      ].flatMap((delta) =>
        [-this.interval, this.interval].map(
          (interval) => html`<cw-button
            .color=${delta.map((x) => (x ? 255 : 0)) as RGBColor}
            ?active=${this.active &&
            delta
              .map((y, i) => y * interval + this.current[i])
              .every((y) => y >= 0 && y <= 255)}
            @click-down=${() =>
              trigger(this, "color-incremented", {
                delta: delta.map((x) => x * interval),
              })}
            >${interval > 0 ? "+" : interval < 0 ? "\u2013" : 0}</cw-button
          >`
        )
      )}
    </cw-container>`;
  }
}
