import EventsListView from '../view/events-list-view.js';
import SortView from '../view/sort-view.js';
import PointEditView from '../view/point-edit-view.js';
import { render } from '../render.js';
import EventPresenter from './event-presenter.js';

export default class EventsListPresenter {
  eventsListComponent = new EventsListView();

  constructor({ eventsListContainer, model }) {
    this.eventsListContainer = eventsListContainer;
    this.model = model;
  }

  init() {
    render(new SortView(), this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);

    const editForm = new PointEditView({
      offersByType: this.model.getOffersByType(),
      types: this.model.getTypes(),
    });
    const formListItem = document.createElement('li');
    formListItem.classList.add('trip-events__item');
    formListItem.appendChild(editForm.getElement());
    this.eventsListComponent.getElement().appendChild(formListItem);

    for (const point of this.model.getPoints()) {
      new EventPresenter({
        container: this.eventsListComponent.getElement(),
        model: this.model,
        point,
      }).init();
    }
  }
}
