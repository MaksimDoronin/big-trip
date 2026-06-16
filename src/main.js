import TripFilters from './view/trip-filters.js';
import TripSort from './view/trip-sort.js';
import TripEventsContent from './view/trip-events-content.js';
import { render } from './render.js';

const pageHeaderElement = document.querySelector('.page-header');
const tripControlsFilters = pageHeaderElement.querySelector(
  '.trip-controls__filters',
);
const pageMainElement = document.querySelector('.page-main');
const sectionElementTripEvents = pageMainElement.querySelector('.trip-events');

render(new TripFilters(), tripControlsFilters);
render(new TripSort(), sectionElementTripEvents);
render(new TripEventsContent(), sectionElementTripEvents);
