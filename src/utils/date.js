import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';

dayjs.extend(duration);

export function formatDate(iso) {
  return dayjs(iso).format('MMM DD').toUpperCase();
}

export function formatTime(iso) {
  return dayjs(iso).format('HH:mm');
}

export function formatDateTime(iso) {
  return dayjs(iso).format('YYYY-MM-DDTHH:mm');
}

export function formatDateOnly(iso) {
  return dayjs(iso).format('YYYY-MM-DD');
}

export function formatDuration(fromIso, toIso) {
  const diff = dayjs(toIso).diff(dayjs(fromIso));
  const d = dayjs.duration(diff);
  const h = Math.floor(d.asHours());
  const m = d.minutes();
  if (h === 0) {
    return `${String(m).padStart(2, '0')}M`;
  }
  return `${String(h).padStart(2, '0')}H ${String(m).padStart(2, '0')}M`;
}
