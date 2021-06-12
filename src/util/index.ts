import { LitElement } from "lit";

export const trigger = (self: LitElement, type: string, data: any = {}) => {
  self.renderRoot.dispatchEvent(
    new CustomEvent(type, {
      detail: data,
      bubbles: true,
      composed: true,
    })
  );
};

export const getArrow = (direction: number) =>
  direction > 0 ? "+" : direction < 0 ? "\u2013" : "";
