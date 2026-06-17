import { createElement } from '../render.js';

function createEventsItemViewTemplate() {
  return '<li class="trip-events__item"></li>';
}

export default class EventsItemView {
  getTemplate() {
    return createEventsItemViewTemplate();
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
