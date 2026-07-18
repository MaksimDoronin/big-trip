import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render';
import EventsItemView from '../view/events-item-view.js';
import EventView from '../view/event-view.js';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();
  eventsItemComponent = new EventsItemView();
  constructor({ eventsListContainer, model }) {
    this.eventsListContainer = eventsListContainer;
    this.model = model;
  }

  init() {
    this.listPoints = [...this.model.getPoints()];
    const destinations = this.model.getDestinations();
    const offersByType = this.model.getOffersByType();

    render(new SortView(), this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);
    render(this.eventsItemComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < this.listPoints.length; i++) {
      const point = this.listPoints[i];
      const destination = destinations.find((item) => item.id === point.destinationId);
      const offers = (offersByType[point.type] || [])
        .filter((offer) => point.offerIds.includes(offer.id));

      render(
        new EventView({ point, destination, offers }),
        this.eventsItemComponent.getElement(),
      );
    }
  }
}
