import { createElement } from '../render.js';

function createEventRollupButtonTemplate() {
  return `<button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`;
}

export default class EventRollupButtonView {
  getTemplate() {
    return createEventRollupButtonTemplate();
  }

  getElement() {
    /*
     * Паттерн lazy initialization (отложенная инициализация).
     * 1. Конструктора нет → при new EventRollupButtonView объект пустой, this.element = undefined.
     * 2. Первый вызов eventRollupButtonView.getElement():
     *    — if (!this.element) → !undefined → true
     *    — this.element = createElement(this.getTemplate()) — создаём DOM-узел один раз
     *      и кэшируем в this.element.
     *    — Возвращаем this.element.
     *
     * 3. Второй вызов eventRollupButtonView.getElement():
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
