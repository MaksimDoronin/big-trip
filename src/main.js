import FiltersView from './view/filters-view.js';
import { render } from './render.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
// Пробный комментарий.
const tripControlsFilters = document.querySelector('.trip-controls__filters');
const sectionElementTripEvents = document.querySelector('.trip-events');

const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: sectionElementTripEvents,
});
render(new FiltersView(), tripControlsFilters);

eventsListPresenter.init();
