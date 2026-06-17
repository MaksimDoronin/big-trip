import FiltersView from './view/filters-view.js';
import { render } from './render.js';
import EventsListPresenter from './presenter/events-list-presenter.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const sectionElementTripEvents = document.querySelector('.trip-events');
// Это паттерн «options object» — передача зависимостей/настроек одним объектом.
// Плюсы:
// - Расширяемость: легко добавить новые опции, не ломая сигнатуру ({boardContainer, headerContainer, onTaskAdd, ...}).
// - Читаемость в месте вызова: new EventListPresenter({eventsListContainer: sectionElementTripEvents}) сразу понятно, что за что отвечает.
// - Не важен порядок аргументов (в отличие от позиционной передачи).
const eventsListPresenter = new EventsListPresenter({
  eventsListContainer: sectionElementTripEvents,
});
render(new FiltersView(), tripControlsFilters);

eventsListPresenter.init();
