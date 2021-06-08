import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("control-panel")
export class ControlPanel extends LitElement {
  static styles = css`
    .outer-div {
      display: flex;
      justify-content: flex-end;
    }
    .inner-div {
      margin: 1px;
      padding: 8px;
      border-radius: 5px;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      user-select: none;
      width: 100%;
    }
    #new-game {
      background-color: thistle;
      color: indigo;
    }
    #about {
      background-color: thistle;
      color: indigo;
      text-align: center;
      min-width: 20px;
    }
    :host {
      flex-grow: 0;
    }
  `;

  render() {
    return html`<div class="outer-div">
      <div
        class="inner-div"
        id="new-game"
        @click=${() => this.dispatchEvent(new CustomEvent("new-game"))}
      >
        New Game
      </div>
      <div
        class="inner-div"
        id="about"
        @click=${() => this.dispatchEvent(new CustomEvent("about"))}
      >
        ?
      </div>
    </div>`;
  }
}
