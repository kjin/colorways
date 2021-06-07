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
      background-color: thistle;
      color: indigo;
      font-family: "Quicksand";
      font-size: 18px;
      border-style: none;
      user-select: none;
    }
    :host {
      flex-grow: 0;
    }
  `;

  render() {
    return html`<div class="outer-div">
      <div class="inner-div" @click=${this.onNewGameClicked}>New Game</div>
    </div>`;
  }

  onNewGameClicked() {
    this.dispatchEvent(new CustomEvent("new-game"));
  }
}
