import { createElement } from '../render.js';

function createEventPriceTemplate() {
  return `<p class="event__price">
    &euro;&nbsp;<span class="event__price-value">20</span>
  </p>`;
}

export default class EventPriceView {
  getTemplate() {
    return createEventPriceTemplate();
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
