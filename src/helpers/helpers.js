import moment from "moment";

export const roundTemperature = (num) => Math.round(num);

export const formatUnix = (unixTime, format) =>
  moment.unix(unixTime).format(format);
