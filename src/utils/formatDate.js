import { parse, format } from "date-fns";

export const formatDate = date => format(parse(date), "MMMM YYYY");

export const formatYear = date => format(parse(date), "YYYY");

export const convertMinToHourMin = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = Math.floor(duration % 60);
  return `${hours}h ${minutes} min`;
};
