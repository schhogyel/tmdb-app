import { parse, format } from "date-fns";

export const formatDate = date => format(parse(date), "MMMM YYYY");
