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
  let GregDate = new Hebcal.HDate(new Date())
    .greg()
    .toLocaleString('he-IL')
    .replace(/(,[^\)]+)/g, '');
  return GregDate;
};
