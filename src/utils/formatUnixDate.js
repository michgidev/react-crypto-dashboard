import { format, toZonedTime } from 'date-fns-tz';

const TIMEZONE = 'America/Mexico_City';

const formatUnixDate = (unixTime) => {
  if (!unixTime) return '';

  const date = new Date(unixTime);
  const zonedDate = toZonedTime(date, TIMEZONE);

  return format(zonedDate, "MMM dd, yyyy, HH:mm:ss zzz", { timeZone: TIMEZONE });
};

export { formatUnixDate };