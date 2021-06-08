import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map";
import { ColorRound } from "../controllers/color-round";
import { RGBColor } from "../util";

@customElement("color-game")
export class ColorGame extends LitElement {
  static styles = css`
    #outer-div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #top {
      justify-content: flex-end;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #top::-webkit-scrollbar {
      display: none;
    }
    .controls {
      padding: 5px;
      background-color: white;
      white-space: nowrap;
      display: flex;
      justify-content: space-between;
    }
  `;

  @property({ type: Number })
  interval = 1;

  private rounds: ColorRound[] = [];
  private scrollingRequested = false;
  private scrolling = false;
  private animating = false;

  @property({ attribute: false })
  private aboutPanelActive = false;

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.startNewGame();
  }

  startNewGame() {
    if (this.rounds.length > 0) {
      this.rounds[this.rounds.length - 1].active = false;
    }
    this.rounds = [...this.rounds, new ColorRound(this, this.interval)];
    this.scrollingRequested = this.scrolling = false;
    this.forceScrollToBottom();
  }

  iterate(e: CustomEvent) {
    const { delta } = e.detail as { delta: RGBColor };
    this.rounds[this.rounds.length - 1].iterate(delta);
    this.scrollingRequested = this.scrolling = false;
    this.forceScrollToBottom();
    e.stopPropagation();
  }

  onMouseOver() {
    if (!this.scrolling) {
      this.scrollingRequested = true;
      this.requestUpdate();
    }
  }

  onMouseInteraction() {
    this.animating = false;
    this.onMouseOver();
  }

  onAnimationStarted() {
    this.animating = true;
  }

  onAnimationChanged() {
    if (this.animating) {
      this.forceScrollToBottom();
    }
  }

  onAnimationEnded() {
    this.animating = false;
    if (this.scrollingRequested) {
      this.requestUpdate();
    }
  }

  updated() {
    if (this.scrollingRequested && !this.animating) {
      this.scrolling = true;
      this.scrollingRequested = false;
      this.forceScrollToBottom();
    }
  }

  private forceScrollToBottom() {
    // All of this as well as the #top interaction handlers are to ensure
    // that scrolling up to see past games works correctly, in tandem with cell expansion animations.
    // Otherwise, various combinations of wobbling, snapping, and unresponsive scrolling show up.
    // It seems that in Firefox, scrolling is still unresponsive until the cell expansion animations are done.
    if (!this.shadowRoot) return;
    const topDiv = this.shadowRoot.querySelector("#top");
    if (!topDiv) return;
    const lastElement = topDiv.lastElementChild;
    if (!lastElement) return;
    lastElement.scrollIntoView();
  }

  render() {
    const currentRound = this.rounds[this.rounds.length - 1];
    return html`
      <div id="outer-div">
        <div
          id="top"
          @mouseover=${this.onMouseOver}
          @mousewheel=${this.onMouseInteraction}
          @touchstart=${this.onMouseInteraction}
          @animation-started=${this.onAnimationStarted}
          @animation-changed=${this.onAnimationChanged}
          @animation-ended=${this.onAnimationEnded}
          style=${styleMap({
            overflow: this.scrollingRequested ? "auto" : "",
          })}
        >
          ${repeat(
            this.rounds,
            // (_, i) => this.rounds.length - i,
            (round, i) =>
              html`<color-column
                .targetColor=${round.targetColor}
                .iterations=${round.iterations}
                .active=${round.active}
                .gameId=${i + 1}
                .win=${round.win}
                .optimalMoves=${round.optimalMoves}
              ></color-column>`
          )}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${styleMap({ height: "0px" })}></div>
        </div>
        <div class="controls">
          <color-buttons
            @color-incremented=${this.iterate}
            interval=${this.interval}
            .current=${currentRound.iterations[
              currentRound.iterations.length - 1
            ]}
            ?active=${!currentRound.win}
          ></color-buttons>
          <control-panel
            @new-game=${this.startNewGame}
            @about=${() => {
              this.aboutPanelActive = true;
            }}
          ></control-panel>
        </div>
      </div>
      <about-panel
        .active=${this.aboutPanelActive}
        @dismissed=${() => {
          this.aboutPanelActive = false;
        }}
      ></about-panel>
    `;
  }
}
