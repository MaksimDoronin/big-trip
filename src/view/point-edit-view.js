import { createElement } from '../render.js';
import { formatDateTimeForInput } from '../utils/date.js';
import { capitalize } from '../utils/string.js';

function createPointEditTemplate({ point, destination, offersByType, types }) {
  const isCreating = point === null;
  const currentType = point?.type ?? '';
  const currentDestinationName = destination?.name ?? '';
  const currentDateFrom = point ? formatDateTimeForInput(point.dateFrom) : '';
  const currentDateTo = point ? formatDateTimeForInput(point.dateTo) : '';
  const currentBasePrice = point?.basePrice ?? '';
  const currentOfferIds = point?.offerIds ?? [];

  const typeIcon = currentType ? `img/icons/${currentType}.png` : 'img/icons/flight.png';
  const typeLabel = currentType ? capitalize(currentType) : '';

  const typesHtml = types.map((type) => `
            <div class="event__type-item">
              <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}"${type === currentType ? ' checked' : ''}>
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalize(type)}</label>
            </div>`).join('');

  const availableOffers = offersByType[currentType] || [];
  const offersHtml = availableOffers.map((offer) => `
            <div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-${offer.id}"${currentOfferIds.includes(offer.id) ? ' checked' : ''}>
              <label class="event__offer-label" for="${offer.id}">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`).join('');

  const descriptionHtml = destination?.description
    ? `<p class="event__destination-description">${destination.description}</p>`
    : '';

  const photosHtml = destination?.pictures?.length
    ? `<div class="event__photos-tape">${destination.pictures.map((photo) => `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`).join('')}</div>`
    : '<div class="event__photos-tape"></div>';

  const resetButtonText = isCreating ? 'Cancel' : 'Delete';

  return `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="${typeIcon}" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${typesHtml}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${typeLabel}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentDestinationName}" list="destination-list-1">
        <datalist id="destination-list-1"></datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${currentDateFrom}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${currentDateTo}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${currentBasePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">${resetButtonText}</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>

    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          ${offersHtml}
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        ${descriptionHtml}

        <div class="event__photos-container">
          ${photosHtml}
        </div>
      </section>
    </section>
  </form>`;
}

export default class PointEditView {
  constructor({
    point = null,
    destination = null,
    offersByType = {},
    types = [],
  } = {}) {
    this.point = point;
    this.destination = destination;
    this.offersByType = offersByType;
    this.types = types;
  }

  getTemplate() {
    return createPointEditTemplate({
      point: this.point,
      destination: this.destination,
      offersByType: this.offersByType,
      types: this.types,
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
