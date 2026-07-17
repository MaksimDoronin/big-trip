import dayjs from 'dayjs';

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

export function formatDateTimeForInput(iso) {
  return dayjs(iso).format('DD/MM/YY HH:mm');
}

export function formatDuration(fromIso, toIso) {
  const ms = new Date(toIso) - new Date(fromIso);
  const totalMin = Math.floor(ms / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h === 0) {
    return `${String(m).padStart(2, '0')}M`;
  }
  return `${String(h).padStart(2, '0')}H ${String(m).padStart(2, '0')}M`;
}

