import { createElement } from '../render.js';

function createEventSelectedOffersTemplate() {
  return '<ul class="event__selected-offers"></ul>';
}

export default class EventSelectedOffersView {
  getTemplate() {
    return createEventSelectedOffersTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventSelectedOffersView объект пустой, this.element = undefined.
     * 2. Первый вызов eventSelectedOffersView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventSelectedOffersView.getElement():
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
