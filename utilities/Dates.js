import Hebcal from 'hebcal';
import {
  HebrewCalendar,
  HDate,
  HebrewDateEvent,
  Location,
  Event,
} from '@hebcal/core';
export const HebrewDateFromDate = date => {
  let hebrewDate = new Hebcal.HDate(new Date(date)).toString('h');
  return hebrewDate;
};
export const HebrewDate = () => {
  let hebrewDate = new Hebcal.HDate(new Date()).toString('h');
  return hebrewDate;
};
export const GregDate = () => {
  let GregDate =
    ('0' + new Date().getDate()).slice(-2) +
    '/' +
    ('0' + (new Date().getMonth() + 1)).slice(-2) +
    '/' +
    new Date().getFullYear();
  return GregDate;
};
export const holidayEvent = () => {
  const fullYear = new Date().getFullYear();
  const options = {
    year: fullYear,
    location: Location.lookup('israel'),
  };
  const events = HebrewCalendar.calendar(options);
  const arr =
    events.filter((event, index) => {
      const hd = event.getDate();
      const date = hd.greg();
      if (new HDate(new Date()).isSameDate(event.getDate()) === true) {
        return {
          id: index,
          date: date.toLocaleDateString(),
          event: event.render('he'),
        };
      }
    }) || [];
  return arr[0]?.render('he');
};
