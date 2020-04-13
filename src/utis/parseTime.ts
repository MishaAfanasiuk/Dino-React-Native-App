import { DateTime } from 'luxon';

export const parseTime = (time: string, format: string = 'dd.MM hh:mm'): string => {
  return DateTime.fromISO(time).toFormat(format)
};
