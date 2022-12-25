import moment from "moment-timezone";

moment.locale('en-gb');
moment.tz.setDefault('Europe/London');

moment.relativeTimeRounding(Math.floor);

moment.relativeTimeThreshold('s', 60);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 7);
moment.relativeTimeThreshold('w', 4);
moment.relativeTimeThreshold('M', 12);

export default moment;