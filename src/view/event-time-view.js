import { createElement } from '../render.js';

function createEventTimeTemplate() {
  return `<p class="event__time">
    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
    &mdash;
    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
  </p>`;
}

export default class EventTimeView {
  getTemplate() {
    return createEventTimeTemplate();
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
