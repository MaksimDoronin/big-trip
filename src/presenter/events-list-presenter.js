import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import { render } from '../render';
import EventsItemView from '../view/events-item-view.js';
import EventView from '../view/event-view.js';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();
  eventsItemComponent = new EventsItemView();
  constructor({ eventsListContainer }) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(new SortView(), this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);
    render(this.eventsItemComponent, this.eventsListComponent.getElement());
    render(new EventView(), this.eventsItemComponent.getElement());
  }
}
