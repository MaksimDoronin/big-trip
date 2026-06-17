// компонент-обёртка (<ul class="trip-events__list">) для будущих точек маршрута.
import EventsListView from '../view/events-list-view.js';
// компонент панели сортировки
// (<form class="trip-events__trip-sort  trip-sort" action="#" method="get">).
import SortView from '../view/sort-view.js';
import { render } from '../render';

export default class EventsListPresenter {
  // Создаёт экземпляр View-компонента EventsListView один раз при инициализации класса.
  // Сам DOM-элемент <ul class="trip-events__list"> будет создан лениво при первом getElement()
  // в init().
  eventsListComponent = new EventsListView();
  // Принимает { eventListContainer } (<section class="trip-events">) — DOM-элемент
  // , в который будет встроен список.
  constructor({ eventsListContainer }) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    // встраивает <ul class="trip-events__list"> списка в
    // указанный контейнер на странице <section class="trip-events">.
    render(this.eventsListComponent, this.eventsListContainer);
    // создаёт панель сортировки (<form class="trip-events__trip-sort  trip-sort" action="#" method="get">)
    // и помещает её внутрь контейнера списка <ul class="trip-events__list">
    render(new SortView(), this.eventsListComponent.getElement());
  }
}
