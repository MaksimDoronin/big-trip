import { createElement } from '../render.js';

function createEventDateTemplate() {
  return '<time class="event__date" datetime="2019-03-18">MAR 18</time>';
}

export default class EventDateView {
  getTemplate() {
    return createEventDateTemplate();
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
