import { createElement } from '../render.js';

function createEventOfferTemplate() {
  return `<li class="event__offer">
    <span class="event__offer-title">Order Uber</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">20</span>
  </li>`;
}

export default class EventOfferView {
  getTemplate() {
    return createEventOfferTemplate();
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
