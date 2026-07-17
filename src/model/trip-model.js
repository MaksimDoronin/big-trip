import { TYPES } from '../mock/types.js';
import { destinations } from '../mock/destination.js';
import { offersByType } from '../mock/offer.js';
import { points } from '../mock/point.js';

export default class TripModel {
  getPoints() {
    return points;
  }

  getDestinations() {
    return destinations;
  }

  getOffersByType() {
    return offersByType;
  }

  getTypes() {
    return TYPES;
  }
}
