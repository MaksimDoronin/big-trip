import EventView from '../view/event-view.js';

export default class EventPresenter {
  container = null;
  model = null;
  point = null;

  constructor({ container, model, point }) {
    this.container = container;
    this.model = model;
    this.point = point;
  }

  init() {
    const destinations = this.model.getDestinations();
    const offersByType = this.model.getOffersByType();

    const destination = destinations.find((item) => item.id === this.point.destinationId);
    const offers = (offersByType[this.point.type] || [])
      .filter((offer) => this.point.offerIds.includes(offer.id));

    const eventView = new EventView({ point: this.point, destination, offers });

    const listItem = document.createElement('li');
    listItem.classList.add('trip-events__item');
    listItem.appendChild(eventView.getElement());

    this.container.appendChild(listItem);
  }
}
