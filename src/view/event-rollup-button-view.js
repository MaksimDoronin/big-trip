import { createElement } from '../render.js';

function createEventRollupButtonTemplate() {
  return `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`;
}

export default class EventRollupButtonView {
  getTemplate() {
    return createEventRollupButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
