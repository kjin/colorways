import anime from "animejs";
import { css, html, LitElement } from "lit";
import { styleMap } from "lit-html/directives/style-map";
import { customElement, property } from "lit/decorators.js";

@customElement("pop-up")
export class Popup extends LitElement {
  static styles = css`
    #curtain {
      position: absolute;
      background-color: white;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      opacity: 0;
      pointer-events: none;
    }
    #outer-div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #panel {
      border-radius: 5px;
      padding: 5px;
      opacity: 0;
      max-width: 80%;
      max-height: 80%;
      font-family: "Quicksand";
    }
  `;

  @property()
  color: string = "white";
  @property({ type: Boolean })
  active: boolean = false;
  private initialized = false;

  updated() {
    anime.remove([
      this.renderRoot.querySelector("#panel"),
      this.renderRoot.querySelector("#curtain"),
    ]);
    if (this.active) {
      this.initialized = true;
      anime({
        targets: this.renderRoot.querySelector("#panel"),
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1000,
        easing: "easeOutCubic",
      });
      anime({
        targets: this.renderRoot.querySelector("#curtain"),
        opacity: [0, 0.5],
        duration: 500,
        easing: "easeOutCubic",
      });
    } else if (this.initialized) {
      anime({
        targets: this.renderRoot.querySelector("#panel"),
        opacity: [1, 0],
        translateY: [0, 40],
        duration: 250,
        easing: "linear",
      });
      anime({
        targets: this.renderRoot.querySelector("#curtain"),
        opacity: [0.5, 0],
        duration: 250,
        easing: "linear",
      });
    }
  }

  render() {
    return html`
      <div id="curtain"></div>
      <div
        id="outer-div"
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent("dismissed", { bubbles: true, composed: true })
          )}
        style=${styleMap({
          "pointer-events": this.active ? "auto" : "none",
        })}
      >
        <div
          id="panel"
          style=${styleMap({
            "background-color": this.color,
          })}
          @click=${(e: MouseEvent) => e.stopPropagation()}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}
