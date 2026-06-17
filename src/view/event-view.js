import { createElement } from '../render.js';

function createEventViewTemplate() {
  return '<div class="event"></div>';
}

export default class EventView {
  getTemplate() {
    return createEventViewTemplate();
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
