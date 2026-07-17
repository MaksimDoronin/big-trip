import { createElement } from '../render.js';
import {
  formatDate,
  formatTime,
  formatDateTime,
  formatDateOnly,
  formatDuration,
} from '../utils/date.js';
import { capitalize } from '../utils/string.js';

function createEventViewTemplate({ point, destination, offers }) {
  const favoriteClass = point.isFavorite ? 'event__favorite-btn--active' : '';
  const offersHtml = offers.map((offer) => `
      <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
      </li>`).join('');

  return `<div class="event">
    <time class="event__date" datetime="${formatDateOnly(point.dateFrom)}">${formatDate(point.dateFrom)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${point.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${capitalize(point.type)} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${formatDateTime(point.dateFrom)}">${formatTime(point.dateFrom)}</time>
        &mdash;
        <time class="event__end-time" datetime="${formatDateTime(point.dateTo)}">${formatTime(point.dateTo)}</time>
      </p>
      <p class="event__duration">${formatDuration(point.dateFrom, point.dateTo)}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">${offersHtml}</ul>
    <button class="event__favorite-btn ${favoriteClass}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`;
}

export default class EventView {
  point = null;
  destination = null;
  offers = [];

  constructor({ point, destination, offers }) {
    this.point = point;
    this.destination = destination;
    this.offers = offers;
  }

  getTemplate() {
    return createEventViewTemplate({
      point: this.point,
      destination: this.destination,
      offers: this.offers,
    });
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
