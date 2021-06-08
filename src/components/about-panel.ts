import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("about-panel")
export class AboutPanel extends LitElement {
  static styles = css`
    div {
      font-family: "Quicksand";
      color: cadetblue;
      user-select: none;
    }
    :host {
      background-color: black;
    }
    h1,
    h2,
    p,
    b {
      margin: 5px;
    }
    h1 {
      text-align: center;
      font-size: 40px;
      color: lightcyan;
    }
    small {
      font-size: 12px;
    }
    span {
      border-radius: 4px;
      padding: 2px;
    }
    /* Not really what <b> is used for, but whatever */
    .white {
      color: white;
    }
  `;

  @property({ type: Boolean })
  active = true;

  render() {
    return html` <pop-up color="paleturquoise" .active=${this.active}>
      <div>
        <h1>
          Colorways
          <small><a href="https://github.com/kjin/colorways">v0.0.1</a></small>
        </h1>
        <h2>Objective</h2>
        <p>
          Use the color adjustment buttons to adjust the current color (top) to
          match the target color (bottom). Try to make as few adjustments as
          possible!
        </p>
        <p>Stumped? Get a hint by holding down on a color row.</p>
        <p class="white">
          Colorways works best on phones and phone-shaped browser windows!
        </p>
      </div>
    </pop-up>`;
  }
}
