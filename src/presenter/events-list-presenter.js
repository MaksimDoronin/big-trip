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
    this.boardPoints = [...this.model.getPoints()];
    render(new SortView(), this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);
    render(this.eventsItemComponent, this.eventsListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new EventView({point: this.boardPoints[i]}), this.eventsItemComponent.getElement());
    }

  }
}
