import Hebcal from 'hebcal';
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
