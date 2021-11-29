import axios from 'axios';
const range = (min = 0, max = 2) => {
  let list = [];
  for (let i = min; i <= max; i++) {
    list.push(Number(i));
  }
  return list;
};
export const getHalchYomit = async () => {
  let {
    data: {calendar_items = []},
  } = await axios.get(
    'https://www.sefaria.org.il/api/calendars?timezone=Asia/Tel_Aviv',
  );

  let url =
    calendar_items
      .filter(c => c?.title.en === 'Halakhah Yomit')
      .map(c => c?.url.match(/^(?:[^.]*\.){2}(\d+)+-(\d+)/g, '\n')[0]) ||
    'Shulchan_Arukh,_Orach_Chayim';
  if (calendar_items.length >= 1 || url) {
    let {
      data: {he = []},
    } = await axios.get(
      `https://www.sefaria.org.il/api/texts/${url}?vhe=Torat_Emet_363&lang=he&with=all&lang2=he`,
    );
    let calendar_itemsIndex =
      url[0]?.replace(/^(?:[^.]*\.){2}/g, '').split('-') || [];
    let arrayOfIndexs = range(
      calendar_itemsIndex[0] || 0,
      calendar_itemsIndex[1] || 2,
    );
    return [
      he[arrayOfIndexs[0] || 0].replace(new RegExp('<[^>]*>', 'gm'), ''),
      he[arrayOfIndexs[1] || 1].replace(new RegExp('<[^>]*>', 'gm'), ''),
      he[arrayOfIndexs[2] || 2].replace(new RegExp('<[^>]*>', 'gm'), ''),
    ];
  }
};
