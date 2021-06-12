import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map";
import { ColorRound } from "../controllers/color-round";
import { ColorSpaceOptions, makeMove, Move, toRGB } from "../util/color";

@customElement("cw-game")
export class Game extends LitElement {
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
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #top::-webkit-scrollbar {
      display: none;
    }
    .controls {
      display: flex;
      justify-content: space-between;
    }
  `;

  private rounds: ColorRound[] = [];
  private colorSpace: ColorSpaceOptions = { steps: 6 };
  private moves: Array<Move> = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ].flatMap((delta) =>
    [-1, 1].map((direction) => ({
      delta,
      direction,
    }))
  );

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
    this.rounds = [...this.rounds, new ColorRound(this, this.colorSpace)];
    this.scrollingRequested = this.scrolling = false;
    this.forceScrollToBottom();
  }

  iterate(e: CustomEvent) {
    this.rounds[this.rounds.length - 1].iterate(e.detail as Move);
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
              html`<cw-round
                .targetColor=${toRGB(round.targetColor, round.colorSpace)}
                .iterations=${round.iterations.map((iteration) =>
                  toRGB(iteration, round.colorSpace)
                )}
                .moves=${round.moves}
                .active=${round.active}
                .gameId=${i + 1}
                .win=${round.win}
                .optimalMoves=${round.optimalMoves}
              ></cw-round>`
          )}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${styleMap({ height: "0px" })}></div>
        </div>
        <div class="controls">
          <cw-incrementors
            @color-incremented=${this.iterate}
            .moves=${this.moves.map((move) => ({
              ...move,
              valid: !!makeMove(
                currentRound.iterations[currentRound.iterations.length - 1],
                move,
                this.colorSpace
              ),
            }))}
            ?active=${!currentRound.win}
          ></cw-incrementors>
          <cw-options
            @new-game=${this.startNewGame}
            @about=${() => {
              this.aboutPanelActive = true;
            }}
          ></cw-options>
        </div>
      </div>
      <cw-about
        .active=${this.aboutPanelActive}
        @dismissed=${() => {
          this.aboutPanelActive = false;
        }}
      ></cw-about>
    `;
  }
}
