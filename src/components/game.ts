import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map";
import { ColorRound } from "../controllers/color-round";
import { GameOptions } from "../controllers/options";
import { makeMove, Move, toRGB } from "../util/color";

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
    #controls-layer-1 {
      display: flex;
      justify-content: space-between;
      padding: 5px;
    }
    #controls-layer-2 {
      padding: 0px;
      position: absolute;
    }
  `;

  private rounds: ColorRound[] = [];
  private gameOptions: GameOptions = new GameOptions(this);
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
  private menuActive = false;
  @property({ attribute: false })
  private optionsActive = false;
  @property({ attribute: false })
  private helpActive = false;

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
    this.rounds = [...this.rounds, new ColorRound(this, this.gameOptions)];
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
                difficulty=${round.difficulty}
                .gameId=${i + 1}
                .win=${round.win}
                .optimalMoves=${round.optimalMoves}
              ></cw-round>`
          )}
          <!-- A zero-height div that is always the last element in #top. -->
          <div style=${styleMap({ height: "0px" })}></div>
        </div>
        <div id="controls-layer-1">
          <cw-primary-controls
            @color-incremented=${this.iterate}
            .moves=${this.moves.map((move) => ({
              ...move,
              valid: !!makeMove(
                currentRound.iterations[currentRound.iterations.length - 1],
                move,
                currentRound.colorSpace
              ),
            }))}
            ?active=${!currentRound.win}
          ></cw-primary-controls>
          <cw-meta-controls
            @popup-menu=${() => {
              this.menuActive = true;
            }}
          ></cw-meta-controls>
          <div id="controls-layer-2">
            <cw-terminal-controls
              @new-game=${this.startNewGame}
              ?active=${currentRound.win}
            ></cw-terminal-controls>
          </div>
        </div>
      </div>
      <cw-menu
        .active=${this.menuActive}
        @dismissed=${() => {
          this.menuActive = false;
          if (this.gameOptions.changesMade) {
            this.gameOptions.changesMade = false;
            this.startNewGame();
          }
        }}
        @new-game=${() => {
          this.menuActive = false;
          this.gameOptions.changesMade = false;
          this.startNewGame();
        }}
        @popup-options=${() => {
          this.menuActive = false;
          this.optionsActive = true;
        }}
        @popup-help=${() => {
          this.menuActive = false;
          this.helpActive = true;
        }}
      ></cw-menu>
      <cw-options
        .active=${this.optionsActive}
        .gameOptions=${this.gameOptions}
        .revision=${this.gameOptions.revision}
        @dismissed=${() => {
          this.optionsActive = false;
          this.menuActive = true;
        }}
      ></cw-options>
      <cw-help
        .active=${this.helpActive}
        @dismissed=${() => {
          this.helpActive = false;
          this.menuActive = true;
        }}
      ></cw-help>
    `;
  }
}
