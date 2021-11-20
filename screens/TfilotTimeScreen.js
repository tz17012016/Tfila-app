import React, {useRef} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
const TfilotTimeScreen = ({reaplaseScreanName, changeOptions}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions);
  const navigation = useNavigation();
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      const checkOptions = () => {
        switch (true) {
          case Object.keys(refCounter.current.Zmanim)?.length >= 1 &&
            refCounter.current.Zmanim.OmerDescription !== '':
            return navigation.replace(reaplaseScreanName.OmerScreen);
          case Object.keys(refCounter.current.Zmanim)?.length >= 1 &&
            refCounter.current.Zmanim?.SelectedDayHeader.indexOf('שישי') !== -1:
            return navigation.replace(reaplaseScreanName.ShabatScreen);
          case Object.keys(refCounter.current.Zmanim)?.length >= 1 &&
            refCounter.current.Zmanim?.Holiday.indexOf('צום') !== -1:
            return navigation.replace(reaplaseScreanName.FastScreen);
          case (Object.keys(refCounter.current.Zmanim)?.length >= 1 &&
            refCounter.current.Zmanim?.Holiday.indexOf('סוכות') !== -1) ||
            refCounter.current.Zmanim?.Holiday.indexOf('פסח') !== -1 ||
            refCounter.current.Zmanim?.Holiday.indexOf('חנוכה') !== -1 ||
            refCounter.current.Zmanim?.Holiday.indexOf('פורים') !== -1 ||
            refCounter.current.Zmanim?.Holiday.indexOf('דחוה') !== -1 ||
            refCounter.current.Zmanim?.Holiday.indexOf('שבועות') !== -1:
            return navigation.replace(reaplaseScreanName.HagimScreen);
          case refCounter.current.OlimLatora?.length >= 1:
            return navigation.replace(reaplaseScreanName.OlimLatora);
          case refCounter.current.Shiorim?.length >= 1:
            return navigation.replace(reaplaseScreanName.Shiorim);
          case refCounter.current.Hnzchot?.length >= 1:
            return navigation.replace(reaplaseScreanName.Hnzchot);
          case refCounter.current.GeneralMessages?.length >= 1:
            return navigation.replace(reaplaseScreanName.GeneralMessages);
          case Object.keys(refCounter.current.Zmanim)?.length >= 1:
            return navigation.replace(reaplaseScreanName.Zmanim);
          default:
            return navigation.replace(reaplaseScreanName.TfilotTime);
        }
      };
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, [navigation, reaplaseScreanName, screenName]),
  );
  return (
    <>
      <TfilotTimeList changeOptions={changeOptions} />
    </>
  );
};

export default TfilotTimeScreen;
