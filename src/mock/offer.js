import { TYPES } from './types.js';

export const offersByType = {
  flight: [
    { id: 'offer-flight-1', title: 'Add luggage', price: 50 },
    { id: 'offer-flight-2', title: 'Switch to comfort', price: 80 },
    { id: 'offer-flight-3', title: 'Add meal', price: 15 },
    { id: 'offer-flight-4', title: 'Choose seats', price: 5 },
    { id: 'offer-flight-5', title: 'Travel by train', price: 40 },
  ],
  'check-in': [],
};

// Страховка: для каждого типа из TYPES гарантируем ключ в offersByType.
// Если ключ отсутствует — добавляем пустой массив, чтобы offersByType[point.type] не вернул undefined.
TYPES.forEach((type) => {
  if (!(type in offersByType)) {
    offersByType[type] = [];
  }
});
