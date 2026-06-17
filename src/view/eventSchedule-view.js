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
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventScheduleView объект пустой, this.element = undefined.
     * 2. Первый вызов eventScheduleView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventScheduleView.getElement():
     *    — if (!this.element) → !DOMNode → false
     *    — Ветка пропускается, сразу возврат this.element (существующий узел).
     */
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
