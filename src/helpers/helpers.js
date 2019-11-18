import moment from "moment";

export const roundTemperature = num => Math.floor(num);

export const formatIconName = str => str.replace(/-/g, "_").toUpperCase();

export const formatUnix = (unixTime, format) =>
  moment.unix(unixTime).format(format);
