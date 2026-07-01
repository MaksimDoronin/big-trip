import { createElement } from '../render.js';

function createEventTypeTemplate() {
  return `<div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
  </div>`;
}

export default class EventTypeView {
  getTemplate() {
    return createEventTypeTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventTypeView объект пустой, this.element = undefined.
     * 2. Первый вызов eventTypeView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventTypeView.getElement():
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
