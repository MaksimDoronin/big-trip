import { createElement } from '../render.js';

function createEventPriceTemplate() {
  return `<p class="event__price">
    &euro;&nbsp;<span class="event__price-value">20</span>
  </p>`;
}

export default class EventPriceView {
  getTemplate() {
    return createEventPriceTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventPriceView объект пустой, this.element = undefined.
     * 2. Первый вызов eventPriceView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventPriceView.getElement():
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
