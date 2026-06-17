import { createElement } from '../render.js';

function createEventOfferTemplate() {
  return `<li class="event__offer">
    <span class="event__offer-title">Order Uber</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">20</span>
  </li>`;
}

export default class EventOfferView {
  getTemplate() {
    return createEventOfferTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventOfferView объект пустой, this.element = undefined.
     * 2. Первый вызов eventOfferView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventOfferView.getElement():
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
