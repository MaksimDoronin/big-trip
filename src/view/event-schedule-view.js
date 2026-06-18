import { createElement } from '../render.js';

function createEventScheduleTemplate() {
  return `<div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
      &mdash;
      <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
    </p>
    <p class="event__duration">30M</p>
  </div>`;
}

export default class EventScheduleView {
  getTemplate() {
    return createEventScheduleTemplate();
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
