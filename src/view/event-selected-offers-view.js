import { createElement } from '../render.js';

function createEventSelectedOffersTemplate() {
  return '<ul class="event__selected-offers"></ul>';
}

export default class EventSelectedOffersView {
  getTemplate() {
    return createEventSelectedOffersTemplate();
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
