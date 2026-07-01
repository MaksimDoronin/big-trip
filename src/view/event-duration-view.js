import { createElement } from '../render.js';

function createEventDurationTemplate() {
  return '<p class="event__duration">30M</p>';
}

export default class EventDurationView {
  getTemplate() {
    return createEventDurationTemplate();
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
