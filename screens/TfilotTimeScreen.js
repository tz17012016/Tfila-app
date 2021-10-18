import React, {useRef} from 'react';
import TfilotTimeList from '../components/TfilotTimeList';
import {useFocusEffect} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Heder from '../components/Heder';
import {useRoute} from '@react-navigation/native';
import Footer from '../components/Footer';
const TfilotTimeScreen = ({reaplaseScreanName, changeOptions1}) => {
  const route = useRoute();
  const refCounter = useRef(changeOptions1);
  const navigation = useNavigation();
  const checkOptions = (refCounter, reaplaseScreanName, navigation) => {
    switch (true) {
      case Object.keys(refCounter.current.Zmanim)?.length >= 1 &&
        refCounter.current.Zmanim.OmerDescription != '':
        return navigation.replace(reaplaseScreanName.OmerScreen);
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
  let screenName = refCounter.current.ScreenTimers?.filter(
    s => route?.name === s?.screenName,
  );
  useFocusEffect(
    React.useCallback(() => {
      let secTimer = setTimeout(() => {
        checkOptions(refCounter, reaplaseScreanName, navigation);
      }, (screenName[0]?.time === undefined || null || 0 ? 10 : screenName[0].time) * 1000);
      return () => clearTimeout(secTimer);
    }, []),
  );
  return (
    <>
      <Heder changeOptions1={changeOptions1} />
      <TfilotTimeList changeOptions1={changeOptions1} />
      <Footer changeOptions1={changeOptions1} />
    </>
  );
};

export default TfilotTimeScreen;
