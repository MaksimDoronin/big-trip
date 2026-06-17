import { createElement } from '../render.js';

function createEventTitleTemplate() {
  return '<h3 class="event__title">Taxi Amsterdam</h3>';
}

export default class EventTitleView {
  getTemplate() {
    return createEventTitleTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventTitleView объект пустой, this.element = undefined.
     * 2. Первый вызов eventTitleView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventTitleView.getElement():
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
