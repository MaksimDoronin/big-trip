import FiltersView from './view/filters-view.js';
import { render } from './render.js';
import EventsListPresenter from './presenter/events-list-presenter.js';
import TripModel from './model/trip-model.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const sectionElementTripEvents = document.querySelector('.trip-events');

const model = new TripModel();

const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: sectionElementTripEvents,
  model,
});

render(new FiltersView(), tripControlsFilters);

eventsListPresenter.init();
